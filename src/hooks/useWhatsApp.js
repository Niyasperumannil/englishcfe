import { useCallback } from 'react';

const useWhatsApp = () => {
    const handleWhatsApp = useCallback((phoneNumber) => {
     
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        window.open(whatsappURL, '_blank');
    }, []);

    return { handleWhatsApp };
};

export default useWhatsApp;
