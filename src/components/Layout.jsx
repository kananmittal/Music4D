import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow w-full">
                {children}
            </main>
            <footer className="py-8 text-center bg-gray-50 text-text-secondary text-sm border-t border-gray-100">
                <p>&copy; {new Date().getFullYear()} MUSIC4D Project. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
