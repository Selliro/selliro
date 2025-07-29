import React, { useState } from "react";
import { FooterContext } from "./FooterContext";

export const FooterProvider = ({ children }) => {
  const [footerData] = useState({
    logo: "Selliro",
    socialLinks: [
      { href: "#", icon: "fa-brands fa-facebook-f" },      
      { href: "#", icon: "fa-brands fa-instagram" },
      { href: "#", icon: "fa-brands fa-linkedin" },
    ],
    contactInfo: {
      address: "1772 Street Charleston, New York",
      phone: "+91-7411501872",
      email: "info@selliro.co.in",
    },
    companyLinks: [
      { text: "Home", href: "/" },
      { text: "Our story", href: "/" },
      { text: "Projects", href: "/" },
      { text: "Services", href: "/" },
      { text: "Contact Us", href: "/contact" },
    ],
    newsletterText: "Feel free to reach out if you want to collaborate with us, or simply have a chat.",
    copyright: "© 2025 Selliro. All rights reserved.",
  });

  return (
    <FooterContext.Provider value={footerData}>
      {children}
    </FooterContext.Provider>
  );
};
