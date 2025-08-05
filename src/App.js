
import './App.css';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import { CustomCursor } from './components/common/customCursor';
import { useHeroAnimations, useFeaturesAnimations } from './components/common/animationHook';
import Header from "./components/Header";
import Selliro from './components/Seliro';
import { FooterProvider } from "./components/FooterProvider";  
import Footer from './components/Footer';
import PrjoectData from "./ProjectWork.json";
import ProjectWork from './components/ProjectWork';
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceArea from "./components/ServiceArea";
import serviceData from "./serviceData.json";
import Faq from "./components/faq";
import ContactForm from "./components/ContactForm";
import contactFormData from "./contactFormData.json";
import ScrollingTicker from './components/ScrollingTicker';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
    const smootherRef = useRef(null);
    useEffect(() => {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2, // scroll speed
        effects: true, // enables parallax-style effects
      });
    }, []);

    useHeroAnimations();
    useFeaturesAnimations();
    const menuItems = [
      { label: "About", href: "#about" },
      { label: "Our Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ];
    
    const headerButton = {
      type: "rounded",
      dataText: "Get started",
      url: "/learn-more",
      text: "Get started",
      className: "wc-btn wc-btn-primary btn-text-flip",
    };

    const whychooseus = {
      subtitle: "Key Features",
      button : {
        type: "rounded",
        dataText: "About More",
        url: "/learn-more",
        text: "About More",
        className: "wc-btn wc-btn-primary btn-text-flip",
      },
      counter: 40,
      counterLabel: "+",
      description: "We help brands stand out through visual design",
      shapes: [
        { className: "shape_1", src: require("./assets/img/img-s-21.webp") },
        { className: "shape-2", src: require("./assets/img/img-s-22.webp") },
      ],
    };
  return (
    <div className="App">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <CustomCursor />
          <Header logo="Selliro" menuItems={menuItems} button={headerButton} />
          <Selliro />
          <ServiceArea {...serviceData} />
          <ScrollingTicker />     
          <WhyChooseUs {...whychooseus} /> 
          <ProjectWork
            sectionSubtitle="Work Showcase"
            sectionTitle="Some featured works"
            projects={PrjoectData}
          />
          <Faq />
          <ContactForm 
            content={contactFormData.content}
            formFields={contactFormData.formFields}
            buttonText={contactFormData.buttonText}
          />
          <FooterProvider>        
            <Footer />
          </FooterProvider>
        </div>
      </div>
    </div>
  );
}

export default App;