import './App.css'
import HeroPage from "./pages/HeroPage";
import Sponsors from "./pages/Sponsors";
import ProductPage from "./pages/ProductPage";
import HowWeDoIt from "./pages/HowWeDoIt";
import WhatWeDo from "./pages/WhatWeDo";

function App() {
    return (
        <div>
        <HeroPage/>
        <Sponsors/>
        <ProductPage/>
        <WhatWeDo/>
        </div>
    );
}

export default App;