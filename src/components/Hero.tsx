import banner from "../assets/banner-stack.png";

function Hero() {
    return (
        <section id="home" className="bg-white">

        <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">

        <div className="grid items-center gap-8 lg:grid-cols-2">


    <div className="text-center lg:text-left">

    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Build Your Ideal <span className="block text-pink-500"> Development Stack </span></h1>

    <p className="mx-auto mt-5 max-w-lg text-gray-600 lg:mx-0">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>


    <div className="mt-7 flex justify-center gap-3 lg:justify-start">

    <a href="#technologies" className="rounded-md bg-orange-500 px-5 py-3 text-sm font-medium text-white hover:bg-orange-600"> Explore Technologies </a>

    <a href="#about" className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"> Learn More </a>

    </div> </div>


    <div className="flex justify-center">

    <img src={banner} alt="Development Stack" className="w-full max-w-md"/>

    </div>

    </div> </div>

    </section>
    
    );
}

export default Hero;