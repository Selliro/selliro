import { useEffect } from 'react';
import { gsap } from 'gsap';

export const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    let mouseX = 0;
    let mouseY = 0;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const ticker = gsap.ticker.add(() => {
      gsap.to(cursor, {
        duration: 0.15,
        x: mouseX,
        y: mouseY,
        ease: "power2.out"
      });
    });

    const hoverTargets = document.querySelectorAll("a, button, .cursor-pointer");

    const handleMouseEnter = () => cursor.classList.add("cursor-hover");
    const handleMouseLeave = () => cursor.classList.remove("cursor-hover");

    hoverTargets.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ticker);
      hoverTargets.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div className="custom-cursor"></div>;
};