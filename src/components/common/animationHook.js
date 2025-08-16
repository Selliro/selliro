import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useHeroAnimations = () => {
  useEffect(() => {

    const smoother = ScrollSmoother.get();
    const scroller = smoother ? smoother.wrapper() : window;    

    // 1. HERO-AREA LETTER ANIMATION
    const letters = document.querySelectorAll('.section-title.has_char_anim div > div');
    gsap.set(letters, { opacity: 0, y: 30 });

    const letterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-area",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false,
        scroller: scroller // Add this line
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
      { el: '.year-box .meta', delay: 0.2, from: 'top' },
      { el: '.year-box .thumb', delay: 0.45, from: 'top' },
      { el: '.year-box .title', delay: 0.7, from: 'left' },
      { el: '.year-box .meta-info', delay: 1, from: 'left' },
      { el: '.icon-first', delay: 0.8, from: 'bottom' },
      { el: '.icon-second', delay: 1, from: 'bottom' },
      { el: '.btn-wrapper.has_fade_anim', delay: 1.2, from: 'bottom' },
      { el: '.scroll-down', delay: 1.5, from: 'bottom' },
      { el: '.hero-social', delay: 1.2, from: 'right' }
    ];

    const fadeAnimations = fadeElements.map(item => {
      const el = document.querySelector(item.el);
      if (!el) return null;

      const fromY = item.from === 'top' ? -30 : item.from === 'bottom' ? 30 : 0;
      const fromX = item.from === 'left' ? -30 : item.from === 'right' ? 30 : 0;

      return gsap.fromTo(el, 
        { opacity: 0, y: fromY, x: fromX },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          delay: item.delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero-area",
            start: "top 85%",
            toggleActions: "play none none none",
            markers: false
          }
        }
      );
    });

    // 4. SHAPE FLOAT EFFECT
    const shapeImg = document.querySelector('.shape-1 img');
    const shapeAnimation = shapeImg ? gsap.fromTo(shapeImg, 
      { y: 0 },
      {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: '.shape-1',
          start: "top 80%",
          toggleActions: "play pause resume reset",
          markers: false
        }
      }
    ) : null;

    // 5. SCROLL ICON PULSE
    const scrollIcon = document.querySelector('.scroll-icon img');
    const scrollAnimation = scrollIcon ? gsap.fromTo(scrollIcon, 
      { y: 0 },
      {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }
    ) : null;

    return () => {
      letterTimeline.kill();
      fadeAnimations.forEach(anim => anim?.kill());
      shapeAnimation?.kill();
      scrollAnimation?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

export const useFeaturesAnimations = () => {
  useEffect(() => {
    // Store SplitText instances for cleanup
    const splitInstances: SplitText[] = [];

    // Subtitle animation (unchanged)
    const subtitleAnimation = gsap.fromTo(".section-subtitle", 
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#features",
          start: "top 80%",
          markers: false
        }
      }
    );

    // Title SplitText Animation
    const splitTitleLines = gsap.utils.toArray(".title-anim");
    splitTitleLines.forEach((splitTextLine: Element) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "words, lines",
      });
      splitInstances.push(itemSplitted);
      
      gsap.set(splitTextLine, { perspective: 400 });
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });

    // Text SplitText Animation
    const splitTextLines = gsap.utils.toArray(".text-anim p");
    splitTextLines.forEach((splitTextLine: Element) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "lines",
      });
      splitInstances.push(itemSplitted);
      
      gsap.set(splitTextLine, { perspective: 400 });
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.5,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });

    // Counter + Text
    const textWrapperAnimation = gsap.fromTo("#features .text-wrapper", 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#features .text-wrapper",
          start: "top 90%",
          markers: false
        }
      }
    );

    // Shape animations
    const shapeAnimations = gsap.fromTo("#features .shape_1 img, #features .shape-2 img", 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#features",
          start: "top 85%",
          markers: false
        }
      }
    );

    const circleAnimation = gsap.to(".circle-rotate", {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%"
    });

    return () => {
      // Clean up SplitText instances
      splitInstances.forEach(instance => {
        if (instance.revert) {
          instance.revert();
        }
      });
      
      // Clean up other animations
      subtitleAnimation.kill();
      textWrapperAnimation?.kill();
      shapeAnimations?.kill();
      circleAnimation?.kill();
      
      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};