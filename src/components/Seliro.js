import React, { useEffect, useRef } from "react";
import "./Selliro.css";
import CommonButton from './common/Button';
import ResponsiveImage from "./common/ResponsiveImage";
import LaptopLogo from '../assets/img/laptop_mockup.png';
import Award from '../assets/img/img-s-16.webp';
import Info from '../assets/img/img-s-17.webp';
import IconFirst from '../assets/img/shopify.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Link from '../components/common/link';

gsap.registerPlugin(ScrollTrigger);

const Selliro = () => {
  
  const imageRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 0 },
        {
          y: -180, // move up 80px
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom", // when top of image hits bottom of viewport
            end: "bottom top",   // when bottom of image hits top of viewport
            scrub: true,         // smooth scroll-linked animation
          },
        }
      );
    }
    if (thumbRef.current) {
      gsap.to(thumbRef.current, {
        rotate: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
  <>    
    <div className="has-smooth" id="has_smooth"></div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="body-wrapper body-startup-agency">
          <main>
            {/* HERO SECTION */}
            <section className="hero-area">
              <div className="container large">
                <div className="hero-area-inner">
                  <div className="shape-1" ref={imageRef}>
                    {/* <img className="show-light" src={LaptopLogo} alt="shape" /> */}
                    <ResponsiveImage desktopImage={LaptopLogo} alt="Hero banner" aspectRatio={1.6}/>
                  </div>
                  <div className="section-content">
                    <div className="content-first">
                      <div className="crp-hero-funfact-wrap crp-hero-funfact-bg z-1 position-relative tp_fade_anim">
                        <div className="crp-hero-funfact-line d-none d-xl-inline"></div>
                        <div className="crp-hero-funfact-top-content">
                          <h4>Modern Moves</h4>
                          <p>Crafting exceptional design, seamless development, and smart strategy</p>
                        </div>
                        <div className="crp-hero-funfact-item">
                          <h4><span data-purecounter-duration="0" data-purecounter-end="98" class="purecounter">98</span>+</h4>
                          <div className="crp-hero-funfact-more-details d-flex justify-content-between">
                              <p>Task Completion <br/> Achieved</p>
                              <a href="#">
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2 16L16 2M16 2V16M16 2L2 2" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                              </a>
                          </div>
                        </div>
                        <div className="crp-hero-funfact-item">
                          <h4><span data-purecounter-duration="0" data-purecounter-end="95" class="purecounter">95</span>%</h4>
                          <div className="crp-hero-funfact-more-details d-flex justify-content-between">
                              <p>Genuine repeated happy customers.</p>
                              <a href="#">
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2 16L16 2M16 2V16M16 2L2 2" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                              </a>
                          </div>
                        </div>
                      </div>
                      {/* <div className="year-box overflow-hidden">
                        <span className="meta">2018, 2023</span>
                        <div className="thumb has_fade_anim" ref={thumbRef} data-fade-from="top" data-fade-offset="0" data-delay="0.45">
                           <ResponsiveImage desktopImage={Award} alt="award" aspectRatio={1.015}/>
                        </div>
                        <div className="title has_fade_anim">Award winning agency</div>
                        <div className="btn-wrapper">
                          <a href="contact.html" className="wc-btn wc-btn-icon">
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                        </div>
                      </div>
                      <div className="meta-info has_fade_anim">
                        <ResponsiveImage desktopImage={Info} alt="Info" aspectRatio={1}/>
                        <p className="text">We’re a digital agency that builds amazing user experience team for design.</p>
                      </div> */}
                    </div>
                    <div className="content-second">
                      <div className="section-header">
                      <div className="selliro__subtitle subtitle subtitle--secondary">                        
                        <span className="selliro_sub">Your eCommerce Growth Partner</span>
                      </div>
                        <div className="section-title-wrapper">
                          <div className="title-wrapper overflow-hidden">
                            <h1 className="section-title has_char_anim" data-duration="0.75">
                              <div>
                                <div>C</div>
                                <div>r</div>
                                <div>e</div>
                                <div>a</div>
                                <div>t</div>
                                <div>i</div>
                                <div>n</div>
                                <div>g</div>
                              </div>
                              <div>
                                <div>I</div>
                                <div>m</div>
                                <div>p</div>
                                <div>a</div>
                                <div>c</div>
                                <div>t</div>
                                <div>f</div>
                                <div>u</div>
                                <div>l</div>
                              </div>
                               <ResponsiveImage desktopImage={IconFirst} className="custom_laptop_width" alt="Info" aspectRatio={1}/>
                              {/* <img className="icon-first has_fade_anim" data-fade-from="left" src="assets/img/img-s-18.webp" alt="img" /> */}                              
                              {/* <img className="icon-second has_fade_anim" data-fade-from="left" src="assets/img/img-s-19.webp" alt="shape" /> */}
                              {/* <ResponsiveImage desktopImage={IconSecond} alt="Info" aspectRatio={1}/> */}
                              {/* <div>
                                <div>O</div>
                                <div>u</div>
                                <div>r</div>
                              </div>*/}
                              <div>
                                <div>S</div>
                                <div>h</div>
                                <div>o</div>
                                <div>p</div>                                
                                <div>i</div>                                
                                <div>f</div>                                
                                <div>y</div>                                
                              </div>
                              <span>
                                <div>
                                  <div>e</div>
                                  <div>x</div>                                  
                                  <div>p</div>
                                  <div>e</div>
                                  <div>r</div>
                                  <div>i</div>
                                  <div>e</div>
                                  <div>n</div>
                                  <div>c</div>
                                  <div>e</div>
                                  <div>s</div>
                                </div>
                              </span>
                              
                            </h1>
                          </div>
                        </div>
                        <div className="description">
                          <p>From strategy to storefront, we deliver Shopify solutions built to scale with your goals — helping your brand grow, streamline, and succeed.</p>
                        </div>
                        <div className="btn-wrapper has_fade_anim">
                           <CommonButton type="rounded" url="about.html" dataText="Learn more" text="Learn more" className="wc-btn wc-btn-primary btn-text-flip"/>

                           {/* <CommonButton type="scroll-indicator" text={<>Watch how <br /> we work</>} url="https://www.youtube.com/watch?v=AzwC6umvd1s"  className="wc-btn wc-btn-normal video-btn video-popup" /> */}
                        </div>
                      </div>
                      <div className="scroll-down">
                        <a href="#features">
                          <span className="scroll-icon">
                            <img src="./images/arrow-down.webp" alt="icon" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="content-third">
                      <div className="hero-social">
                        <p className="title">Follow</p>
                        <div className="hero-social-links">
                          <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                          <a href=""><i className="fa-brands fa-linkedin"></i></a>
                          <a href=""><i className="fa-brands fa-instagram"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>                               
            
          </main>
        </div>
      </div>
    </div>

    
  </>
)};

export default Selliro;