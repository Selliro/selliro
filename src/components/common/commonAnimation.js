import { gsap, Power2 } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

const CommonAnimation = ({ children }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Handle button hover effect
    document.querySelectorAll(".btn-hover").forEach((btn) => {
      const span = btn.querySelector("span");

      btn.addEventListener("mouseenter", (e) => {
        const rect = btn.getBoundingClientRect();
        span.style.top = `${e.clientY - rect.top}px`;
        span.style.left = `${e.clientX - rect.left}px`;
      });

      btn.addEventListener("mouseout", (e) => {
        const rect = btn.getBoundingClientRect();
        span.style.top = `${e.clientY - rect.top}px`;
        span.style.left = `${e.clientX - rect.left}px`;
      });
    });

    // Parallax button effect
    const allBtns = gsap.utils.toArray(".btn_wrapper, #btn_wrapper");
    const allBtnCircles = gsap.utils.toArray(".btn-item");

    allBtns.forEach((btn, i) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        gsap.to(allBtnCircles[i], {
          x: ((relX - rect.width / 2) / rect.width) * 80,
          y: ((relY - rect.height / 2) / rect.height) * 80,
          ease: Power2.easeOut,
          duration: 0.5,
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(allBtnCircles[i], {
          x: 0,
          y: 0,
          ease: Power2.easeOut,
          duration: 0.5,
        });
      });
    });

    // Scroll animations for buttons
    allBtns.forEach((btn) => {
      if (!btn.classList.contains("hero__button")) {
        gsap.from(btn, {
          scrollTrigger: {
            trigger: btn,
            start: "top center+=150",
            markers: false,
          },
          opacity: 0,
          y: -70,
          ease: "bounce",
          duration: 1.5,
        });
      }
    });

    // Title animations
    gsap.utils.toArray(".section-title").forEach((title) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });

      const split = new SplitText(title, { type: "words, lines" });
      gsap.set(title, { perspective: 400 });
      split.split({ type: "lines" });

      tl.from(split.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });

    // Paragraph animations
    gsap.utils.toArray(".text-anim p").forEach((text) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });

      const split = new SplitText(text, { type: "lines" });
      gsap.set(text, { perspective: 400 });
      split.split({ type: "lines" });

      tl.from(split.lines, {
        duration: 1,
        delay: 0.5,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });
  }, []);

  return children;
};

export default CommonAnimation;
