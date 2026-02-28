"use client";

export default function BottomNavigation({ scrolled }: { scrolled: boolean }) {

    function time() {
        const date = new Date();
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 items-center px-4 md:px-8 py-4 md:py-6 transition-all duration-300">
            <div className={`text-xl font-bold uppercase transition-colors duration-500 text-black`}>
                {time()}
            </div>
            <div className={`hover:opacity-50 transition-opacity text-xl font-bold uppercase text-center transition-colors duration-500 text-black`}>
                <a href="https://linkedin.com/in/maheen-ilyas" target="_blank">LINKEDIN</a>
            </div>
            <div className={`hover:opacity-50 transition-opacity text-center text-xl font-bold uppercase transition-colors duration-500 ${scrolled ? 'text-black' : 'md:text-white text-black'}`}>
                <a href="https://github.com/Maheen-Ilyas" target="_blank">GITHUB</a>
            </div>
            <div className={`hover:opacity-50 transition-opacity text-right text-xl font-bold uppercase transition-colors duration-500 ${scrolled ? 'text-black' : 'md:text-white text-black'}`}>
                <a href="#">CONTACT</a>
            </div>
        </nav>
    );
}