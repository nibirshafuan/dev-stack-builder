import { useState } from "react";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Technologies", href: "#technologies" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <nav className="sticky top-0 z-50 border-t-[3px] border-[#1F2937] bg-white shadow-sm">

        <div className="mx-auto max-w-7xl px-5">

        <div className="relative flex h-[68px] items-center justify-between">

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#1F2937] lg:hidden" aria-label="Toggle menu">
        {menuOpen ? (

        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">

        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>

        </svg>

        ) : (

        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">

        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>

        </svg>

        )}

        </button>

        <a href="#home" onClick={() => setMenuOpen(false)} className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 lg:static lg:translate-x-0">

        <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"> DS </span>

        <span className="brand-gradient-text hidden text-xl font-bold sm:inline"> Dev Stack </span>

        </a>

        <div className="hidden items-center gap-7 lg:flex"> {navLinks.map((link) => (

        <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${ link.name === "Home" ? "brand-gradient-text" : "text-[#6B7280] hover:text-[#EC4899]" }`}> {link.name} </a> ))}

        </div>

        <div className="flex items-center gap-2 sm:gap-3">

        <a href="#signin" className="brand-gradient-text text-xs font-semibold sm:text-sm"> Sign In </a>

        <a href="#signup" className="brand-gradient rounded-full px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:shadow-md sm:px-5 sm:text-sm"> Sign Up </a>

        </div>

        </div>

        {menuOpen && (
        <div className="border-t border-[#E5E7EB] py-3 lg:hidden">

        <div className="flex flex-col"> {navLinks.map((link) => (

        <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-[#6B7280] transition-colors hover:bg-[#F8FAFC] hover:text-[#EC4899]">
        {link.name}
        </a> ))}

        <a href="#signin" onClick={() => setMenuOpen(false)} className="brand-gradient-text rounded-lg px-3 py-3 text-sm font-semibold"> Sign In </a>

        <a href="#signup" onClick={() => setMenuOpen(false)} className="brand-gradient mx-3 mt-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white"> Sign Up </a>

        </div> </div>
        
        )}

        </div>

        </nav>
    );
}

export default Nav;