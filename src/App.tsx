import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Nav />

            <Hero />

            <TechnologySection />

            <Footer />

            <ToastContainer
                position="top-right"
                autoClose={2000}
            />
        </>
    );
}

export default App;