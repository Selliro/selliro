import './App.css';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Helmet } from 'react-helmet';
import { CustomCursor } from './components/common/customCursor';
import { useHeroAnimations, useFeaturesAnimations } from './components/common/animationHook';
import Header from "./components/Header";
import HeroBanner from './components/HeroBanner';
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
import ScrollTop from "./components/common/scrollTop";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  // Initialize animations - these must be called at the top level
  useHeroAnimations();
  useFeaturesAnimations();

  // Initialize smooth scrolling
  useEffect(() => {
    let smoother;
    if (!ScrollSmoother.get()) {
      smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 0.8, // Reduced from 1.5 for more responsive feel
        effects: true,
        normalizeScroll: false, // Changed from true
        ignoreMobileResize: true,
        smoothTouch: 0.1, // Added for better mobile
        onUpdate: (self) => {
          // Optional: Sync your scroll top button or other elements
        }
      });
  
      ScrollTrigger.scrollerProxy("#smooth-wrapper", {
        scrollTop(value) {
          if (arguments.length) {
            smoother.scrollTop(value);
          }
          return smoother.scrollTop();
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });
  
      // Add this to prevent conflicts
      ScrollTrigger.config({
        limitCallbacks: true,
        ignoreMobileResize: true
      });
    }
  
    ScrollTrigger.refresh();
  
    return () => {
      if (smoother) {
        smoother.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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
    button: {
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
      <Helmet>
        <title>Selliro — Smart eCommerce Solutions</title>
        <meta name="description" content="Selliro is a powerful ecommerce builder for modern businesses in India." />
      </Helmet>
      
      <CustomCursor />
      <ScrollTop />
      
      {/* Smooth scroll wrapper structure */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="main">
            <Header logo="Selliro" menuItems={menuItems} button={headerButton} />
            <HeroBanner />
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
    </div>
  );
}

export default App;