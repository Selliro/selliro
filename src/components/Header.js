import React from "react";
import CommonButton from './common/Button';

const Header = ({ logo, menuItems = [], button }) => {
  return (
    <header className="header-area">
      <div className="container large">
        <div className="header-area__inner">
          {/* Logo */}
          <div className="header__logo">
            <a href="/">
              <h2>{logo}</h2>
            </a>
          </div>

          {/* Navigation */}
          <div className="header__nav">
            <nav className="main-menu" style={{ display: "block" }}>
              <ul>
                {menuItems.map((item, i) => (
                  <li key={i}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Button */}
          <div className="header__button">
            <CommonButton
              type={button.type}
              dataText={button.dataText}
              url={button.url}
              text={button.text}
              className={button.className}
            />
          </div>

          {/* Mobile Menu Icon */}
          <div className="header__navicon d-xl-none">
            <button className="open-offcanvas">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
