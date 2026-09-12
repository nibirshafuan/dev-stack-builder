import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";

function App() {
    return (
        <>
            <Nav />
            <Hero />
            <TechnologySection />

            <section id="projects" className="h-screen">
            </section>

            <section id="about" className="h-screen">
            </section>

            <section id="contact" className="h-screen">
            </section>
        </>
    );
}

export default App;