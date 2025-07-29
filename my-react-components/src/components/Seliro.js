import React from "react";
import "./Selliro.css";
import CommonButton from './common/Button';
import ResponsiveImage from "./common/ResponsiveImage";
import LaptopLogo from '../assets/img/laptop-with-smartphone-mock-up.png';
import Award from '../assets/img/img-s-16.webp';
import Info from '../assets/img/img-s-17.webp';
import IconFirst from '../assets/img/img-s-18.webp';
import IconSecond from '../assets/img/img-s-19.webp';



// import Link from '../components/common/link';


const Selliro = () => (
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
                  <div className="shape-1">
                    {/* <img className="show-light" src={LaptopLogo} alt="shape" /> */}
                    <ResponsiveImage desktopImage={LaptopLogo} alt="Hero banner" aspectRatio={1.6}/>
                  </div>
                  <div className="section-content">
                    <div className="content-first">
                      <div className="year-box overflow-hidden">
                        <span className="meta">2018, 2023</span>
                        <div className="thumb has_fade_anim" data-fade-from="top" data-fade-offset="0" data-delay="0.45">
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
                        {/* <img src="assets/img/img-s-17.webp" alt="image" /> */}
                        <ResponsiveImage desktopImage={Info} alt="Info" aspectRatio={1}/>
                        <p className="text">We’re a digital agency that builds amazing user experience team for design.</p>
                      </div>
                    </div>
                    <div className="content-second">
                      <div className="section-header">
                        <div className="section-title-wrapper">
                          <div className="title-wrapper overflow-hidden">
                            <h1 className="section-title has_char_anim" data-duration="0.75">
                              <div>
                                <div>S</div>
                                <div>h</div>
                                <div>o</div>
                                <div>p</div>
                                <div>i</div>
                                <div>f</div>
                                <div>y</div>
                              </div>
                              <div>
                                <div>d</div>
                                <div>e</div>
                                <div>s</div>
                                <div>i</div>
                                <div>g</div>
                                <div>n</div>
                              </div>
                               <ResponsiveImage desktopImage={IconFirst} alt="Info" aspectRatio={1}/>
                              {/* <img className="icon-first has_fade_anim" data-fade-from="left" src="assets/img/img-s-18.webp" alt="img" /> */}
                              <br />
                              {/* <img className="icon-second has_fade_anim" data-fade-from="left" src="assets/img/img-s-19.webp" alt="shape" /> */}
                              {/* <ResponsiveImage desktopImage={IconSecond} alt="Info" aspectRatio={1}/> */}
                              <div>
                                <div>s</div>
                                <div>e</div>
                                <div>a</div>
                                <div>m</div>
                                <div>l</div>
                                <div>e</div>
                                <div>e</div>
                                <div>s</div>
                              </div>                          
                              <div>
                                <div>u</div>
                                <div>s</div>
                                <div>e</div>
                                <div>r</div>                                
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
                                </div>
                              </span>
                              
                            </h1>
                          </div>
                        </div>
                        <div className="btn-wrapper has_fade_anim">
                           <CommonButton type="rounded" url="about.html" dataText="Learn more" text="Learn more" className="wc-btn wc-btn-primary btn-text-flip"/>

                           <CommonButton type="scroll-indicator" text={<>Watch how <br /> we work</>} url="https://www.youtube.com/watch?v=AzwC6umvd1s"  className="wc-btn wc-btn-normal video-btn video-popup" />
                        </div>
                      </div>
                      <div className="scroll-down">
                        <a href="#features">
                          <span className="scroll-icon">
                            <img src="assets/img/arrow-down.webp" alt="icon" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="content-third">
                      <div className="hero-social">
                        <p className="title">Follow</p>
                        <div className="hero-social-links">
                          <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                          <a href=""><i className="fa-brands fa-twitter"></i></a>                          
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
);

export default Selliro;