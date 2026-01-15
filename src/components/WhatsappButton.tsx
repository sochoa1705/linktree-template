import React from 'react';

const WhatsappButton: React.FC = () => {
    const phone = '+593984031151';
    const message = 'Hola, quiero más información sobre su show en vivo!';
    const uri = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a href={uri} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-400 text-gray-400 border border-green-500-300 px-6 py-4 rounded-xl mb-4 hover:bg-green-700 hover:scale-105 transition-all duration-200 shadow-sm font-medium w-full">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-6 h-6 mr-3" />
            Contactar por WhatsApp
        </a>
    );
};

export default WhatsappButton;