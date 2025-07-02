import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimations = () => {
  useEffect(() => {
    // 1. HERO-AREA LETTER ANIMATION
    const letters = document.querySelectorAll('.section-title.has_char_anim div > div');
    gsap.set(letters, { opacity: 0, y: 30 });

    const letterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-area",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }).to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: {
        each: 0.05,
        from: "start"
      }
    });

    // 2. HERO-AREA FADE ANIMATIONS
    const fadeElements = [
      // { el: '.year-box .meta', delay: 0.2, from: 'top' },
      // { el: '.year-box .thumb', delay: 0.45, from: 'top' },
      // { el: '.year-box .title', delay: 0.7, from: 'left' },
      // { el: '.year-box .meta-info', delay: 1, from: 'left' },
      // { el: '.icon-first', delay: 0.8, from: 'left' },
      { el: '.icon-second', delay: 1, from: 'left' },
      // { el: '.btn-wrapper.has_fade_anim', delay: 1.2, from: 'bottom' },
      { el: '.scroll-down', delay: 1.5, from: 'bottom' },
      { el: '.hero-social', delay: 1.2, from: 'right' }
    ];

    const fadeAnimations = fadeElements.map(item => {
      const el = document.querySelector(item.el);
      if (!el) return null;

      const fromY = item.from === 'top' ? -30 : item.from === 'bottom' ? 30 : 0;
      const fromX = item.from === 'left' ? -30 : item.from === 'right' ? 30 : 0;

      return gsap.from(el, {
        scrollTrigger: {
          trigger: ".hero-area",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: fromY,
        x: fromX,
        duration: 0.8,
        delay: item.delay,
        ease: "power3.out"
      });
    });

    // // 3. HERO SOCIAL ICONS
    // const socialIcons = document.querySelectorAll('.hero-social-links a');
    // const socialAnimation = gsap.from(socialIcons, {
    //   scrollTrigger: {
    //     trigger: ".hero-social",
    //     start: "top 80%",
    //     toggleActions: "play none none none"
    //   },
    //   opacity: 0,
    //   y: 20,
    //   duration: 0.6,
    //   stagger: 0.15,
    //   ease: "back.out(1.2)"
    // });

    // 4. SHAPE FLOAT EFFECT
    const shapeImg = document.querySelector('.shape-1 img');
    const shapeAnimation = shapeImg ? gsap.to(shapeImg, {
      y: 20,
      scrollTrigger: {
        trigger: '.shape-1',
        start: "top 80%",
        toggleActions: "play pause resume reset"
      },
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }) : null;

    // 5. SCROLL ICON PULSE
    const scrollIcon = document.querySelector('.scroll-icon img');
    const scrollAnimation = scrollIcon ? gsap.to(scrollIcon, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }) : null;

    return () => {
      letterTimeline.kill();
      fadeAnimations.forEach(anim => anim?.kill());
      // socialAnimation.kill();
      shapeAnimation?.kill();
      scrollAnimation?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

// export const useFeaturesAnimations = () => {
//   useEffect(() => {
//     // Subtitle
//     const subtitleAnimation = gsap.from(".section-subtitle", {
//       scrollTrigger: {
//         trigger: "#features",
//         start: "top 80%",
//       },
//       x: -50,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out"
//     });

//     // Title lines
//     const titleAnimation = gsap.from("#features .section-title div", {
//       scrollTrigger: {
//         trigger: "#features .section-title",
//         start: "top 80%",
//       },
//       y: 50,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power2.out",
//       stagger: 0.2
//     });

//     // Counter + Text
//     const textWrapperAnimation = gsap.from("#features .text-wrapper", {
//       scrollTrigger: {
//         trigger: "#features .text-wrapper",
//         start: "top 90%",
//       },
//       opacity: 0,
//       y: 40,
//       duration: 1,
//       ease: "power2.out"
//     });

//     // Shape animations
//     const shapeAnimations = gsap.from("#features .shape_1 img, #features .shape-2 img", {
//       scrollTrigger: {
//         trigger: "#features",
//         start: "top 85%",
//       },
//       y: 30,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//       stagger: 0.3
//     });

//     const circleAnimation = gsap.to(".circle-rotate", {
//       rotate: 360,
//       duration: 20,
//       repeat: -1,
//       ease: "none",
//       transformOrigin: "50% 50%"
//     });

//     return () => {
//       subtitleAnimation.kill();
//       titleAnimation.kill();
//       textWrapperAnimation.kill();
//       shapeAnimations.kill();
//       circleAnimation.kill();
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);
// };