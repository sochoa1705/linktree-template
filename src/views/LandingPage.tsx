import React from "react";
import SocialButton from "../components/SocialButton.tsx";
import WhatsappButton from "../components/WhatsappButton.tsx";
import headerImage from "../assets/header.png";
import logoImage from  "../assets/logo.jpeg";

const LandingPage: React.FC = () => {
    const socialLinks = [
        {
            url: "https://www.instagram.com/lnbs.ec/",
            label: "Instagram",
            icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png"
        },
        {
            url: "https://www.facebook.com/lnbs.ec",
            label: "Facebook",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png"
        },
        {
            url: "https://www.tiktok.com/@lnbs.ec",
            label: "TikTok",
            icon: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center w-full">
            {/* Background / Hero Section with sectionImage */}
            <div 
                className="w-full h-48 md:h-64 bg-cover bg-center shadow-inner"
                style={{ backgroundImage: `url(${headerImage})` }}
            >
                <div className="w-full h-full bg-black/30 backdrop-blur-[2px]"></div>
            </div>

            <div className="max-w-md w-full flex flex-col items-center px-4 -mt-16 mb-10">
                {/* Header Section */}
                <div className="mb-8 text-center w-full">
                    <div className="relative inline-block">
                        <img
                            src={logoImage}
                            alt="LNBS Header"
                            className="w-32 h-32 rounded-full border-4 border-white shadow-xl mb-4 object-cover mx-auto"
                        />
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">La Nueva Bohemia Show</h1>
                    <p className="text-gray-600 mt-2 font-medium">¡Bienvenidos!</p>
                </div>

                {/* Social Links Section */}
                <div className="w-full space-y-2 mb-10">
                    {socialLinks.map((link, index) => (
                        <SocialButton
                            key={index}
                            url={link.url}
                            label={link.label}
                            icon={link.icon}
                        />
                    ))}
                    <div className="pt-2">
                        <WhatsappButton />
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-auto pb-6">
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                        © 2026 La Nueva Bohemia Show
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
