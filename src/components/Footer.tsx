import React from "react";

const Footer: React.FC = () => {


    return (
        <footer className="container w-full mx-auto flex flex-col lg:flex-row items-center justify-between p-4 bg-white border-t border-gray-700 text-sm">
            {/* Company Info */}
            <div className="text-gray-600 flex flex-col lg:flex-row items-center gap-2 lg:gap-6">
                <span>All rights reserved © 2024 | Drukland.de</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2 lg:mt-0 text-gray-600">
                <a
                    href="/terms-of-use"
                    className="hover:underline hover:text-gray-800"
                >
                    Terms of Use
                </a>
                <a
                    href="/sitemap"
                    className="hover:underline hover:text-gray-800"
                >
                    Sitemap
                </a>
                <a
                    href="/company-information"
                    className="hover:underline hover:text-gray-800"
                >
                    Company Information
                </a>
                <a
                    href="/cookie-settings"
                    className="hover:underline hover:text-gray-800"
                >
                    Cookie Settings
                </a>
            </div>
        </footer>
    );
};

export default Footer;
