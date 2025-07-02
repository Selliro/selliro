import React from "react";
import "./Selliro.css";
import CommonButton from './common/Button';
import ResponsiveImage from "./common/ResponsiveImage";
import LaptopLogo from '../assets/img/laptop-with-smartphone-mock-up.png';
import Award from '../assets/img/img-s-16.webp';
import Info from '../assets/img/img-s-17.webp';
import IconFirst from '../assets/img/img-s-18.webp';
import IconSecond from '../assets/img/img-s-19.webp';
import ArrowDown from '../assets/img/arrow-down.webp';


// import Link from '../components/common/link';


// For external CSS like Bootstrap and FontAwesome, you can either
// import them in your index.html or install via npm and import here.
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Selliro = () => (
  <>
    <div className="custom-cursor"></div>
    <header className="header-area">
      <div className="container large">
        <div className="header-area__inner">
          <div className="header__logo">
            <a href="#">
              <h2>Selliro</h2>
            </a>
          </div>
          <div className="header__nav">
            <nav className="main-menu" style={{ display: "block" }}>
              <ul>
                <li>
                  <a href="#">about</a>
                </li>
                <li className="">
                  <a href="#">Our Work</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__button">
            <CommonButton type="rounded" dataText="Get started" url="/learn-more" text="Get started" className="wc-btn wc-btn-primary btn-text-flip"/>
          </div>
          <div className="header__navicon d-xl-none">
            <button className="open-offcanvas">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>

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
                                <div>T</div>
                                <div>h</div>
                                <div>i</div>
                                <div>n</div>
                                <div>k</div>
                              </div>
                               <ResponsiveImage desktopImage={IconFirst} alt="Info" aspectRatio={1}/>
                              {/* <img className="icon-first has_fade_anim" data-fade-from="left" src="assets/img/img-s-18.webp" alt="img" /> */}
                              <br />
                              {/* <img className="icon-second has_fade_anim" data-fade-from="left" src="assets/img/img-s-19.webp" alt="shape" /> */}
                              <ResponsiveImage desktopImage={IconSecond} alt="Info" aspectRatio={1}/>
                              <div>
                                <div>f</div>
                                <div>a</div>
                                <div>s</div>
                                <div>t</div>
                                <div>e</div>
                                <div>r</div>
                              </div>
                              <div>
                                <div>&</div>
                              </div>
                              <div>
                                <div>m</div>
                                <div>a</div>
                                <div>k</div>
                                <div>e</div>
                              </div>
                              <span>
                                <div>
                                  <div>d</div>
                                  <div>e</div>
                                  <div>s</div>
                                  <div>i</div>
                                  <div>g</div>
                                  <div>n</div>
                                </div>
                              </span>
                              <div>
                                <div>b</div>
                                <div>e</div>
                                <div>t</div>
                                <div>t</div>
                                <div>e</div>
                                <div>r</div>
                              </div>
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
                          <a href=""><i className="fa-brands fa-dribbble"></i></a>
                          <a href=""><i className="fa-brands fa-instagram"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURES SECTION */}
            <section id="features" className="features-area">
              <div className="container large">
                <div className="features-area-inner">
                  <div className="shape_1">
                    <img src="assets/img/img-s-21.webp" alt="shape" />
                  </div>
                  <div className="shape-2">
                    <img src="assets/img/img-s-22.webp" alt="shape" />
                  </div>
                  <div className="section-content">
                    <div className="section-title-wrapper">
                      <div className="subtitle-wrapper overflow-hidden">
                        <span className="section-subtitle has-left-line has_fade_anim">Key Features</span>
                      </div>
                      <div className="title-wrapper">
                        <h2 className="section-title has_text_move_anim">
                          <div>We helped to get </div>
                          <div>companies with </div>
                          <div>$100M+ funding </div>
                          <div>globally.</div>
                        </h2>
                      </div>
                    </div>
                    <div className="text-wrapper has-left-line">
                      <h2 className="title wc-counter is-visible">81 <span>+</span></h2>
                      <p className="text">We help brands stand out through visual design</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* WORKS AREA */}
            <section className="works-area">
              <div className="container">
                <div className="works-area-inner section-spacing-bottom">
                  <div className="shape-2">
                    <img src="assets/img/img-s-8.webp" alt="shape" />
                  </div>
                  <div className="section-header">
                    <div className="section-title-wrapper">
                      <div className="subtitle-wrapper overflow-hidden">
                        <span className="section-subtitle has-left-line has_fade_anim">
                          Work Showcase
                        </span>
                      </div>
                      <div className="title-wrapper">
                        <h2 className="section-title has_text_move_anim">
                          <div>Some featured works</div>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="works-wrapper-box">
                    <div className="works-wrapper row align-items-start" id="works-container">
                      <div className="col-lg-6 col-12">
                        <div className="case-studies-list">
                          {[
                            { name: "Chill", url: "https://chill.com/", img: "chill-project-img.png" },
                            { name: "Kimia Wellness", url: "https://kimia-wellness.com/", img: "kimia-project-img.png" },
                            { name: "Swing Fans", url: "https://swingfans.com/", img: "swing-fan-project-img.png" },
                            { name: "DOCS-dermgroup", url: "https://shop.docsdermgroup.com/", img: "DOCS-project-img.png" }
                          ].map((work, idx) => (
                            <div className="item position-relative" key={work.name}>
                              <h3>
                                <a href={work.url}>{work.name}</a>
                              </h3>
                              <span className="d-block date">
                                Creating product concepts that bridge great ideas and user expectations. 
                                Creating product concepts that bridge great ideas and user expectations.
                              </span>
                              <a href={work.url} className="link-btn d-inline-block rounded-circle text-center">
                                <img src="assets/img/big-right-top-arrow2.svg" alt="big-right-top-arrow" />
                                <img src="assets/img/white-right-top-arrow3.svg" alt="big-right-top-arrow" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="case-studies-image">
                          <div className="images position-relative">
                            <div className="image"><img src="assets/img/chill-project-img.png" alt="chill-project-img" /></div>
                            <div className="image"><img src="assets/img/kimia-project-img.png" alt="kimia-project-img" /></div>
                            <div className="image"><img src="assets/img/swing-fan-project-img.png" alt="swing-fan-project-img" /></div>
                            <div className="image"><img src="assets/img/DOCS-project-img.png" alt="DOCS-project-img" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Uncomment the View all works button if needed */}
                  {/* <div className="btn-wrapper has_fade_anim">
                    <a href="#" className="wc-btn wc-btn-primary btn-text-flip bordered">
                      <span data-text="View all works">View all works</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </section>

            {/* SERVICE AREA */}
            <section className="service-area">
              <div className="container">
                <div className="service-area-inner section-spacing">
                  <div className="shape__1">
                    <img src="assets/img/img-s-10.webp" alt="shape" />
                  </div>
                  <div className="section-header">
                    <div className="section-title-wrapper">
                      <div className="shape-1 has_fade_anim">
                        <img src="assets/img/img-s-68.webp" alt="" />
                      </div>
                      <div className="title-wrapper has_text_move_anim">
                        <div>
                          <h2 className="section-title">we <span>provide</span> premium service</h2>
                        </div>
                      </div>
                    </div>
                    <div className="text-wrapper">
                      <p className="text has_fade_anim">
                        Our ability to combine expertise and systems thinking is what fuels usas a team.                  
                      </p>
                    </div>
                  </div>
                  <div className="projects-circle-list text-center position-relative">
                    <img src="assets/img/circle.svg" className="d-none d-lg-inline-block" alt="border" />
                    <div className="images text-start">
                      {[
                        { img: "project5.webp", title: "Digital pulse" },
                        { img: "project6.webp", title: "Visual impact" },
                        { img: "project7.webp", title: "Social hub" },
                        { img: "project8.webp", title: "UI/UX design" },
                        { img: "project9.webp", title: "Print design" }
                      ].map((proj, idx) => (
                        <div className="image" key={proj.title}>
                          <img src={`assets/img/${proj.img}`} alt="project" />
                          <div className="text">
                            <h3><a href="work-single.html">{proj.title}</a></h3>
                            <p>
                              A complete brand refresh, elevating identity with modern design and messaging that connects with a global audience.
                            </p>
                            <a href="work-single.html" className="link-btn d-flex align-items-center position-relative">
                              View Project
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </div>
                          <a href="work-single.html" className="position-absolute z-1 start-0 end-0 top-0 bottom-0"></a>
                        </div>
                      ))}
                    </div>
                    <div className="contents text-start">
                      {["Digital pulse", "Visual impact", "Social hub", "UI/UX design", "Print design"].map((title, idx) => (
                        <div className="item" key={title}>
                          <h3><a href="work-single.html">{title}</a></h3>
                          <p>
                            A complete brand refresh, elevating identity with modern design and messaging that connects with a global audience.
                          </p>
                          <a href="work-single.html" className="link-btn d-flex align-items-center position-relative">
                            View Project
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA AREA */}
            <section className="cta-area">
              <div className="container">
                <div className="row cta-area-inner section-spacing-bottom">
                  <div className="col-lg-4 col-xs-4">
                    <div className="section-header">
                      <div className="section-title-wrapper">
                        <div className="subtitle-wrapper overflow-hidden">
                          <span className="section-subtitle has-left-line has_fade_anim">
                            Let's Connect
                          </span>
                        </div>
                        <div className="title-wrapper">
                          <h2 className="section-title has_text_move_anim">Let's get started with our team</h2>
                        </div>
                      </div>
                      <div className="text-wrapper">
                        <p className="text has_fade_anim">
                          Use customer data to build great and solid product experiences that convert.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-xs-8">
                    <form className="controls row">
                      <div className="col-lg-6">
                        <div className="form-group mb-30 has-error has-danger">
                          <label htmlFor="form_name">Full Name <span className="star">*</span></label>
                          <input id="form_name" type="text" name="name" placeholder="Your full name" required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label htmlFor="form_email">Email Address <span className="star">*</span></label>
                          <input id="form_email" type="email" name="email" placeholder="Your email address" required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label htmlFor="form_subject">Subject <span className="star">*</span></label>
                          <input id="form_subject" type="text" name="subject" placeholder="subject" required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-30 has-error has-danger">
                          <label htmlFor="form_budget">Your Budget <span className="opt sub-color">(Optional)</span></label>
                          <input id="form_budget" type="text" name="budget" placeholder="A range of budget for project" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group has-error has-danger">
                          <label htmlFor="form_message">Message</label>
                          <textarea id="form_message" name="message" placeholder="Write your message here..." rows="4" required></textarea>
                        </div>
                        <div className="mt-60">
                            <CommonButton type="submit" dataText="Send Your Messag" text="Send Your Messag" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>

    {/* FOOTER */}
    <footer className="footer-area">
      <div className="container">
        <div className="footer_image_man">
          <img src="assets/img/man-with-phone.png" alt=""/>
        </div>
        <a href="contact.html" className="link-btn d-inline-block rounded-circle text-center">
          <img className="circle-rotate" src="assets/img/circle-text.svg" alt="circle-text" />
          <img src="assets/img/big-right-top-arrow.svg" alt="right-top-arrow" />
        </a>
        <div className="footer-area-inner section-spacing-top">
          <div className="footer-widget-wrapper">
            <div className="footer-logo">
              <h2>Selliro</h2>
            </div>
            <div className="footer-widget-wrapper">
              <h2 className="title">Follow Us</h2>
              <ul className="social-links">
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>                
              </ul>
            </div>
          </div>
          <div className="footer-widget-wrapper">
            <h2 className="title">New York</h2>
            <ul className="footer-nav-list">
              <li><a className="text-underline location" href="#">1772 Street Charleston, New York</a></li>
              <li><a href="tel:+1287-360-633">+1 287-360-633</a></li>
              <li><a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></li>
            </ul>
          </div>
          <div className="footer-widget-wrapper">
            <h2 className="title">Company</h2>
            <ul className="footer-nav-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Agency</a></li>
              <li><a href="#">Achievement</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-widget-wrapper newsletter">
            <h2 className="title">Newsletter</h2>
            <div className="newsletter-text">
              <p className="text">Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
            </div>
            <form action="#" className="subscribe-form">
              <div className="input-field">
                <span className="icon"><i className="fa-regular fa-envelope"></i></span>
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="subscribe-btn"><i className="fa-solid fa-paper-plane"></i></button>
              </div>
            </form>
          </div>        
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-inner">            
            <div className="copyright-text">
              <p className="text">© 2024-25 <a href="#" target="_blank" rel="noopener noreferrer">Selliro</a> All right reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Selliro;