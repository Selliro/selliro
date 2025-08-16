// ServiceArea.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ✅ Service data (can be fetched from API too)
const services = [
  {
    title: "Research & Strategy",
    description: "We analyze your brand and audience to build a results-driven Shopify strategy tailored for growth.",
    image: "images/service_1.jpg",
    icon: "images/ser_icon_1.png",
  },
  {
    title: "From Mockups to Modules",
    description: "We turn design mockups into functional, scalable Shopify components with precision.",
    image: "images/service-2.jpg",
    icon: "images/ser_icon_2.png",
  },
  {
    title: "Bug Testing & Speed Enhancement",
    description: "We identify bugs and optimize speed to ensure smooth, high-performance Shopify experiences.",
    image: "images/service-3.jpg",
    icon: "images/ser_icon_3.png",
  },
];

const ServiceArea = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((img) => {
        gsap.fromTo(
            img,
            { scale: 1.2 },
            {
              scale: 1,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: img.closest('.service-image'),
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.2,
              },
            }
          );
    });
  }, []);

  // Push refs without duplication
  const addToImageRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <section className="service-area section-spacing">
      <div className="container">
        <div className="row">
          <div className="section-header d-flex justify-content-center">
            <div className="section-title-wrapper text-center">
              <div className="subtitle-wrapper overflow-hidden">
                <span className="section-subtitle has-left-line has_fade_anim">Services</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">
                  <div>Our Popular Services</div>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-item">
                <div className="service-image">
                  <a href="#0">
                    <figure className="image-anime">
                      <img
                        ref={addToImageRefs}
                        src={service.image}
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: '130%',
                          objectFit: 'cover',
                          transform: 'translate3d(0px, 0%, 0px)',
                        }}
                      />
                    </figure>
                  </a>
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3><a href="#0">{service.title}</a></h3>
                  </div>
                  <div className="service-content-box">
                    <div className="icon-box">
                      <img src={service.icon} alt="" />
                    </div>
                    <div className="service-box-content">
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
                <div className="service-readmore-btn">
                  <a href="#0" className="readmore-btn">read more <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
