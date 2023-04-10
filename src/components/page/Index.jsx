import React from "react";
import "..//../App.css";
import Header from "../header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Skills from "../skills/Skills";
import Services from "../services/Services";
import Qualification from "../qualification/Qualification";
import Work from "../work/Work";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";

const App = () => {
    return(
        <>
        <Header />

        <main className="main">
            <Home />
            <About />
            <Skills />
            <Qualification />            
            <Work />
            <Contact />
            
        </main>
            <Footer />
            <ScrollUp />
        </>
    )
}    

export default App;