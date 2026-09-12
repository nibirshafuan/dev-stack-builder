function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-8">

        <div className="grid gap-8 md:grid-cols-[1.7fr_1fr_1fr_1fr]">

        <div>

        <div className="flex items-center gap-2">

        <span className="brand-gradient flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold text-white"> DS </span>

        <span className="brand-gradient-text text-base font-bold"> Dev Stack </span>

        </div>

        <p className="mt-3 max-w-xs text-[11px] leading-4 text-gray-400"> Curated tools, technologies, and resources for developers building modern software. </p>

        <div className="mt-4 flex gap-4 text-[11px] text-gray-600">

        <a href="#" className="hover:text-pink-500"> GitHub </a>

        <a href="#" className="hover:text-pink-500"> Twitter </a>

        <a href="#" className="hover:text-pink-500"> LinkedIn </a>

        </div>

        </div>

        <div> <h3 className="text-[11px] font-bold uppercase text-gray-700"> Product </h3>

        <div className="mt-3 flex flex-col gap-2 text-[11px] text-gray-400">

        <a href="#home" className="hover:text-pink-500"> Home </a>

        <a href="#technologies" className="hover:text-pink-500"> Technologies </a>

        <a href="#projects" className="hover:text-pink-500"> Projects </a>

        </div>

        </div>

        <div> <h3 className="text-[11px] font-bold uppercase text-gray-700"> Company </h3>

        <div className="mt-3 flex flex-col gap-2 text-[11px] text-gray-400">

        <a href="#about" className="hover:text-pink-500"> About </a>

        <a href="#contact" className="hover:text-pink-500"> Contact </a>

        <a href="#" className="hover:text-pink-500"> Careers </a>

        </div>

        </div>

        <div> <h3 className="text-[11px] font-bold uppercase text-gray-700"> Legal </h3>

        <div className="mt-3 flex flex-col gap-2 text-[11px] text-gray-400">

        <a href="#" className="hover:text-pink-500"> Privacy Policy </a>

        <a href="#" className="hover:text-pink-500"> Terms of Service </a>

        </div>

        </div>

        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-gray-100 pt-5 text-[11px] text-gray-400 sm:flex-row">

        <p> © 2026 Dev Stack. All rights reserved. </p>

        <div className="flex gap-5">

        <a href="#" className="hover:text-pink-500"> Privacy </a>

        <a href="#" className="hover:text-pink-500"> Terms </a>

        </div>

        </div>

        </div>

        </footer>
    );
}

export default Footer;