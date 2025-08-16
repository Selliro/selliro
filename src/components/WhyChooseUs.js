import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CommonButton from './common/Button';

gsap.registerPlugin(ScrollTrigger);


const FeaturesSection = ({button}) => {
  const counterRef = useRef(null);
  
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
            trigger: img.closest('.about-us-img'),
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
    <section id="aboutus" className="whychoose-us">
      <div className="container large">
        <div className="row align-items-center">
          
          <div className="col-lg-6 col-xs-12">
            <div className="about-us-image-box">
              <div class="about-us-image-title d-none d-md-block">
                  <h2>about us</h2>
              </div>
              <div class="about-us-image">
                <div class="about-us-img">
                  <figure class="image-anime">
                    <img src="./images/about-us-image.jpg" alt="" ref={addToImageRefs}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: 'translate3d(0px, 0%, 0px)',
                    }} />
                  </figure>
                </div>

                <div class="explore-more-circle">
                    <a href="contact.html">
                      <img src="./images/explore-more-circle.png" alt="" />
                    </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xs-12">
            <div className="about-us-content">
              <div className="section-header d-flex justify-content-center">
                <div className="section-title-wrapper">
                  <div className="subtitle-wrapper overflow-hidden">
                    <span className="section-subtitle has-left-line">About</span>
                  </div>
                  <div className="title-wrapper ">
                    <h2 className="section-title title-anim">
                      <div>Why We’re Different</div>
                    </h2>
                    <p>Backed by extensive Shopify expertise, we build scalable, future-ready eCommerce solutions that align with your vision. We’re not just developers—we’re strategic collaborators committed to helping your brand stand out and grow in a competitive market.</p>
                  </div>
                </div>
              </div>              
              <div class="about-us-body">
                <ul>
                  <li>
                    <img src="/images/dot_icon.png" alt="dot icon" />
                    Empowering Growth with Smart Solutions
                  </li>
                  <li>
                    <img src="/images/dot_icon.png" alt="dot icon" />
                    Collaborative Approach for Maximum Impact
                  </li>
                </ul>
              </div>
              <div class="about-content-box">                
                <div class="about-support-box">                    
                    <div class="about-support-content">
                        <h3>24/7 support</h3>
                        <p>Reliable 24/7 support ensure your business runs smoothly anytime.</p>
                    </div>
                    
                    <CommonButton
                      type={button.type}
                      dataText={button.dataText}
                      url={button.url}
                      text={button.text}
                      className={button.className}
                    />               
                </div>
                
                <div class="certified-software-item">
                    <div class="icon-box">
                        <img src="./images/certificate.png" alt="" width={40}/>
                    </div>
                    <div class="certified-software-content">
                        <p>we're certified software expert</p>
                    </div>
                </div>                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
