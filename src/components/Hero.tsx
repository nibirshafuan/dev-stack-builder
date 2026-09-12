import banner from "../assets/banner-stack.png";

function Hero() {
    return (
        <section id="home" className="bg-white">

        <div className="mx-auto flex min-h-[660px] max-w-7xl items-center px-5 py-16">

        <div className="grid w-full items-center gap-10 lg:grid-cols-2">

        <div>

        <h1 className="text-5xl font-bold leading-tight text-[#111827]"> Build Your Ideal
        <br />
        <span className="brand-gradient-text"> Development Stack </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-7 text-[#4B5563]">
        Explore frontend, backend, database, and tooling options,
        compare them side by side, and put together the stack that
        fits your next project.</p>

        <div className="mt-8 flex gap-4">

        <a href="#technologies" className="brand-gradient rounded-md px-6 py-3 text-sm font-semibold text-whiteshadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"> Explore Technologies </a>

        <a href="#about" className="rounded-md border border-[#D1D5DB] px-6 py-3 text-sm font-semibold text-[#374151] transition-colors hover:bg-gray-50"> Learn More </a>

        </div> </div>

        <div className="flex justify-center lg:justify-end">

        <img src={banner} alt="Development Stack" className="w-full max-w-md"/>

        </div> </div>

        </div>

        </section>
    );
}

export default Hero;