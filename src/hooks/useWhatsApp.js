// src/hooks/useWhatsApp.js
import { useCallback } from 'react';

const useWhatsApp = () => {
    const handleWhatsApp = useCallback((phoneNumber) => {
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(whatsappURL, '_blank');
    }, []);

    return { handleWhatsApp };
};

export default useWhatsApp;
