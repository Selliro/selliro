import React, { useState } from "react";

const OurFaq = () => { 
    const [activeIndex, setActiveIndex] = useState(0);
    
    const faqData = [
        {
          question: "Do you offer Shopify store migration?",
          answer:
            "Yes, we handle migrations from WooCommerce, Magento, WordPress, or custom platforms to Shopify, ensuring data integrity (products, customers, orders).",
        },
        {
          question: "Can you build a custom Shopify theme?",
          answer:
            "Yes, we create fully custom, responsive, and conversion-focused Shopify themes that align with your brand identity.",
        },
        {
          question: "Can you optimize my existing Shopify store?",
          answer:
            "Yes. We enhance speed, SEO, UX, and conversion rates through audits and tailored improvements.",
        },
        {
          question: "What technologies do you use for web development?",
          answer:
            "We work with ReactJS, NextJS, Node.js, WordPress, Liquid (Shopify), HTML5, CSS3, and JavaScript (ES6+).",
        },
        {
          question: "How long does it take to build a Shopify store or website?",
          answer:
            "Timelines vary depending on complexity. A basic Shopify setup may take 1–2 weeks, while custom development can take 4–8 weeks.",
        },
        {
          question: "Do you offer ongoing maintenance?",
          answer:
            "Yes, we provide support and maintenance plans for Shopify stores and custom websites.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className="our-faqs-content" id="faq">
            <div className="container">
                <div className="section-header d-flex justify-content-center">
                    <div className="section-title-wrapper text-center">
                    <div className="subtitle-wrapper overflow-hidden">
                        <span className="section-subtitle has-left-line has_fade_anim">Faq</span>
                    </div>
                    <div className="title-wrapper">
                        <h2 className="section-title">
                        <div>Get the Info You Need</div>
                        </h2>
                    </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="faq-accordion accordion col-lg-7" id="faqaccordion">
                        {faqData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                                    type="button"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={activeIndex === index ? "true" : "false"}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
                                aria-labelledby={`heading${index}`}
                            >
                            <div className="accordion-body">
                                <p>{item.answer}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="col-lg-5">
                    <div className="faqs-image">
                            <div className="faqs-img">
                                <figure className="image-anime">
                                    <img src="https://valentistech.in/valentis_demo/images/our-faqs-image.jpg" alt="Frequently Asked Questions"/>
                                </figure>
                            </div>                        
                            <div className="faqs-image-content">
                                <div className="faqs-img-content-title">
                                    <h3>Have Questions? We're Here to Help You!</h3>
                                </div>                        
                                <div className="faq-cta-box">
                                    <div className="icon-box">
                                        <img src="https://valentistech.in/valentis_demo/icons/icon-phone-dark.svg" alt="Phone Icon"/>
                                    </div>
                                    <div className="faq-cta-content">
                                        <h3><a href="tel:7411501872">+91 - 7411501872</a></h3>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default OurFaq;