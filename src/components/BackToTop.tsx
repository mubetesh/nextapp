// pages/index.tsx
"use client"
import { useEffect, useState } from 'react';

const BackToTop: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300); // Show button after scrolling down 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative">
            {/* Your page content here */}
            <h1 className="text-4xl font-bold">Welcome to My Homepage</h1>
            {/* Other content */}

            {/* Back to Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default BackToTop;
