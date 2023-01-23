import './App.css'
import HeroPage from "./pages/HeroPage";
import Sponsors from "./pages/Sponsors";
import ProductPage from "./pages/ProductPage";
import HowWeDoIt from "./pages/HowWeDoIt";
import WhatWeDo from "./pages/WhatWeDo";
import OurTeam from "./pages/OurTeam";
import ContactPage from "./pages/ContactPage";
import Footer from "./pages/Footer";
function App() {
    return (
        <div>
        <HeroPage/>
        <Sponsors/>
        <ProductPage/>
        <WhatWeDo/>
        <HowWeDoIt/>
        <OurTeam/>
        <ContactPage/>
        <Footer/>
        </div>
    );
}

export default App;