import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

            <ToastContainer position="top-right" autoClose={2000} />

        </>
    );
}

export default App;