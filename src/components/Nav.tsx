import { useState } from "react";
import logo from "../assets/logo-text.png";

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
        <nav className="sticky top-0 z-50 border-t-[3px] border-gray-800 bg-white shadow-sm">

        <div className="mx-auto max-w-7xl px-5">
        <div className="relative flex h-[68px] items-center justify-between">

        {/* Mobile Hamburger */}

    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 lg:hidden" aria-label="Toggle menu">{menuOpen ? (

    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
    </svg> ) : (

    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
    </svg> )}

    </button>

    {/* Logo */}

    <a href="#home" onClick={() => setMenuOpen(false)} className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
    <img src={logo} alt="Dev Stack" className="h-8 w-auto"/>
    </a>

    {/* Desktop Navigation */}

    <div className="hidden items-center gap-7 lg:flex"> {navLinks.map((link) => (
    <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-purple-600">{link.name} </a> ))}
    
    </div>

    {/* Buttons */}

    <div className="flex items-center gap-3">

    <a href="#signin" className="text-sm font-semibold text-purple-600 hover:text-pink-500">Sign In</a>

    <a href="#signup" className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white hover:bg-purple-700">Sign Up</a>

    </div> </div>

    {/* Mobile Navigation */}

    {menuOpen && (<div className="border-t border-gray-200 py-3 lg:hidden"><div className="flex flex-col">{navLinks.map((link) => (
    <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-purple-600">{link.name}</a>))}

    <a href="#signin" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-purple-600 hover:bg-gray-50 hover:text-pink-500">Sign In</a>

    <a href="#signup" onClick={() => setMenuOpen(false)} className="mx-3 mt-2 rounded-full bg-purple-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-purple-700">Sign Up</a>

    </div> </div> )}

    </div>

    </nav>
    
    );

}

export default Nav;