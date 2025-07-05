
import './App.css';
import { CustomCursor } from './components/common/customCursor';
import { useHeroAnimations, useFeaturesAnimations } from './components/common/animationHook';
import Header from "./components/Header";
import Selliro from './components/Seliro';
import { FooterProvider } from "./components/FooterProvider";  
import Footer from './components/Footer';
import PrjoectData from "./ProjectWork.json";
import ProjectWork from './components/ProjectWork';
import FeaturesSection from "./components/FeaturesSection";
import ServiceArea from "./components/ServiceArea";
import serviceData from "./serviceData.json";
import ContactForm from "./components/ContactForm";
import contactFormData from "./contactFormData.json";


function App() {
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

    const featuresData = {
      subtitle: "Key Features",
      titleLines: [
        "We helped to get",
        "companies with",
        "$100M+ funding",
        "globally.",
      ],
      counter: 81,
      counterLabel: "+",
      description: "We help brands stand out through visual design",
      shapes: [
        { className: "shape_1", src: require("./assets/img/img-s-21.webp") },
        { className: "shape-2", src: require("./assets/img/img-s-22.webp") },
      ],
    };
  return (
    <div className="App">
      <CustomCursor />
      <Header logo="Selliro" menuItems={menuItems} button={headerButton} />;
      <Selliro />
      <FeaturesSection {...featuresData} />      
      <ProjectWork
        sectionSubtitle="Work Showcase"
        sectionTitle="Some featured works"
        projects={PrjoectData}
      />
      <ServiceArea {...serviceData} />
      <ContactForm 
        content={contactFormData.content}
        formFields={contactFormData.formFields}
        buttonText={contactFormData.buttonText}
      />
      <FooterProvider>        
        <Footer />
      </FooterProvider>
    </div>
  );
}

export default App;