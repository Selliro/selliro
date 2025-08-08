import React from "react";

const OurFaq = () => { 
    const faqData = [
        {
          question: "How can I book a flight/hotel on your website?",
          answer:
            "You can easily book flights or hotels by entering your destination, travel dates, and number of travelers on our homepage. Follow the steps to choose from available options and complete the payment process securely",
        },
        {
          question: "Can I cancel or modify my booking?",
          answer:
            "Yes, most bookings can be modified or canceled. However, cancellation/modification policies vary by airline, hotel, or package. Please check your booking confirmation email or contact our support team.",
        },
        {
          question: "How will I receive my ticket or booking confirmation?",
          answer:
            "Once your booking is confirmed, you’ll receive an email and SMS with your ticket and itinerary. You can also access your bookings by logging into your account.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit and debit cards, net banking, UPI, and popular wallet options like Paytm, Google Pay, and PhonePe.",
        },
        {
          question: "What is your refund policy?",
          answer:
            "Refunds are processed according to the airline or hotel’s policy. If eligible, the amount is credited back to your original payment method within 5–7 working days.",
        },
    ];
    return (
        <div className="our-faqs-content">
            <div className="container">

                <div className="section-title sec-title text-center">
                    <span className="sub-title">faq</span>
                    <h2 className="section-title tp_title_slideup"> Get the Info You Need </h2>
                </div>
                <div className="row">
                    <div className="faq-accordion accordion col-lg-7" id="faqaccordion">
                        {faqData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded={index === 0 ? "true" : "false"}
                                    aria-controls={`collapse${index}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqaccordion"
                            >
                            <div className="accordion-body">
                                <p>{item.answer}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="col-lg-5">
                    <div class="faqs-image">
                            <div class="faqs-img">
                                <figure class="image-anime">
                                    <img src="https://valentistech.in/valentis_demo/images/our-faqs-image.jpg" alt=""/>
                                </figure>
                            </div>                        
                            <div class="faqs-image-content">
                                
                                <div class="faqs-img-content-title">
                                    <h3>Have Questions? We're Here to Help You!</h3>
                                </div>                        
                                                            
                                <div class="faq-cta-box">
                                    <div class="icon-box">
                                        <img src="https://valentistech.in/valentis_demo/icons/icon-phone-dark.svg" alt=""/>
                                    </div>
                                    <div class="faq-cta-content">
                                        <h3><a href="tel:123456789">+91 - 7411501872</a></h3>
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