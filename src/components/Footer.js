import React, { useContext } from "react";
import ResponsiveImage from "./common/ResponsiveImage";
import CircleImage from "../assets/img/circle-text.svg";
import RightTopArrow from "../assets/img/big-right-top-arrow.svg";
import ManWithPhone from "../assets/img/man-with-phone.png";
import { FooterContext } from "./FooterContext";

const Footer = () => {
  const {
    logo,
    socialLinks,
    contactInfo,
    companyLinks,
    newsletterText,
    copyright,
  } = useContext(FooterContext);

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer_image_man">
          <img src={ManWithPhone} alt="Contact Man" />
        </div>
        <a href="#" className="link-btn d-inline-block rounded-circle text-center">
            <img className="circle-rotate" src={CircleImage} alt="Circle image" />
            <img src={RightTopArrow} alt="Contact Man" />
        </a>

        <div className="footer-area-inner section-spacing-top">
          <div className="footer-widget-wrapper">
            <div className="footer-logo">
              <h2>{logo}</h2>
            </div>
            <div className="footer-widget-wrapper">
              <h2 className="title">Follow Us</h2>
              <ul className="social-links">
                {socialLinks.map((item, i) => (
                  <li key={i}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <i className={item.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-widget-wrapper">
            <h2 className="title">Contact</h2>
            <ul className="footer-nav-list">
              <li><a href="#">{contactInfo.address}</a></li>
              <li><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></li>
              <li><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
            </ul>
          </div>

          <div className="footer-widget-wrapper">
            <h2 className="title">Company</h2>
            <ul className="footer-nav-list">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-widget-wrapper newsletter">
            <h2 className="title">Newsletter</h2>
            <p className="text">{newsletterText}</p>
            <form className="subscribe-form">
              <div className="input-field">
                <span className="icon"><i className="fa-regular fa-envelope"></i></span>
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="subscribe-btn">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-inner">
            <div className="copyright-text">
              <p className="text">{copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
