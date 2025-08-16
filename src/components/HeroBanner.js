import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Selliro.css";
import CommonButton from "./common/Button";
import ResponsiveImage from "./common/ResponsiveImage";
import LaptopLogo from "../assets/img/laptop_mockup.png";
import IconFirst from "../assets/img/shopify.png";

const HeroBanner = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <>    
        {/* HERO SECTION */}
        <section className="hero-area">
          <div className="container large">
            <div className="hero-area-inner">
              <div className="shape-1" ref={imageRef}>
                <ResponsiveImage
                  desktopImage={LaptopLogo}
                  alt="Hero banner"
                  aspectRatio={1.6}
                />
              </div>
              <div className="section-content">
                <div className="content-first">
                  <div className="crp-hero-funfact-wrap crp-hero-funfact-bg z-1 position-relative tp_fade_anim">
                    <div className="crp-hero-funfact-line d-none d-xl-inline"></div>
                    <div className="crp-hero-funfact-top-content">
                      <h4>Modern Moves</h4>
                      <p>
                        Crafting exceptional design, seamless development, and
                        smart strategy
                      </p>
                    </div>
                    <div className="crp-hero-funfact-item">
                      <h4>
                        <span
                          data-purecounter-duration="0"
                          data-purecounter-end="98"
                          className="purecounter"
                        >
                          98
                        </span>
                        +
                      </h4>
                      <div className="crp-hero-funfact-more-details d-flex justify-content-between">
                        <p>
                          Task Completion <br /> Achieved
                        </p>
                        <a href="#">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 16L16 2M16 2V16M16 2L2 2"
                              stroke="#FFFFFF"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="crp-hero-funfact-item">
                      <h4>
                        <span
                          data-purecounter-duration="0"
                          data-purecounter-end="95"
                          className="purecounter"
                        >
                          95
                        </span>
                        %
                      </h4>
                      <div className="crp-hero-funfact-more-details d-flex justify-content-between">
                        <p>Genuine repeated happy customers.</p>
                        <a href="#">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 16L16 2M16 2V16M16 2L2 2"
                              stroke="#FFFFFF"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-second">
                  <div className="section-header">
                    <div className="selliro__subtitle subtitle subtitle--secondary">
                      <span className="selliro_sub">
                        Your eCommerce Growth Partner
                      </span>
                    </div>
                    <div className="section-title-wrapper">
                      <div className="title-wrapper overflow-hidden">
                        <h1
                          className="section-title has_char_anim"
                          data-duration="0.75"
                        >
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
                          <ResponsiveImage
                            desktopImage={IconFirst}
                            className="custom_laptop_width"
                            alt="Info"
                            aspectRatio={1}
                          />
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
                    <div className="description text-anim">
                      <p>
                        From strategy to storefront, we deliver Shopify
                        solutions built to scale with your goals — helping
                        your brand grow, streamline, and succeed.
                      </p>
                    </div>
                    <div className="btn-wrapper has_fade_anim">
                      <CommonButton
                        type="rounded"
                        url="about.html"
                        dataText="Learn more"
                        text="Learn more"
                        className="wc-btn wc-btn-primary btn-text-flip"
                      />
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
                      <a href="">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a href="">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        
    </>
  );
};

export default HeroBanner;
