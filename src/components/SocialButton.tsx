import React from 'react';

interface SocialButtonProps {
    url: string;
    icon?: string;
    label?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ url, icon, label }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white text-gray-800 border border-gray-300 px-6 py-4 rounded-xl mb-4 hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-sm font-medium w-full">
            {icon && <img src={icon} alt={label} className="w-6 h-6 mr-3"/>}
            {label}
        </a>
    );
};
export default SocialButton;

