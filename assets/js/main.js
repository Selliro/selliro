document.addEventListener('DOMContentLoaded', () => {
    // Load GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
  
    // 1. LETTER-BY-LETTER ANIMATION
    const letters = document.querySelectorAll('.section-title.has_char_anim div > div');
    gsap.set(letters, { opacity: 0, y: 30 });
    
    const titleTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-area",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  
    titleTL.to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: {
        each: 0.05,
        from: "start"
      }
    });
  
    // 2. FADE ANIMATIONS
    // Year box elements
    const fadeElements = [
      { el: '.year-box .meta', delay: 0.2, from: 'top' },
      { el: '.year-box .thumb', delay: 0.45, from: 'top' },
      { el: '.year-box .title', delay: 0.7, from: 'left' },
      { el: '.year-box .meta-info', delay: 1, from: 'left' },
      { el: '.icon-first', delay: 0.8, from: 'left' },
      { el: '.icon-second', delay: 1, from: 'left' },
      { el: '.btn-wrapper.has_fade_anim', delay: 1.2, from: 'bottom' },
      { el: '.scroll-down', delay: 1.5, from: 'bottom' },
      { el: '.hero-social', delay: 1.2, from: 'right' }
    ];
  
    fadeElements.forEach(item => {
      const el = document.querySelector(item.el);
      if (!el) return;
      
      const fromY = item.from === 'top' ? -30 : item.from === 'bottom' ? 30 : 0;
      const fromX = item.from === 'left' ? -30 : item.from === 'right' ? 30 : 0;
      
      gsap.from(el, {
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
  
    // 3. SOCIAL ICONS ANIMATION
    const socialIcons = document.querySelectorAll('.hero-social-links a');
    gsap.from(socialIcons, {
      scrollTrigger: {
        trigger: ".hero-social",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.2)"
    });
  
    // 4. SHAPE IMAGE ANIMATION (floating effect)
    const shapeImg = document.querySelector('.shape-1 img');
    if (shapeImg) {
      gsap.to(shapeImg, {
        y: 30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    gsap.to('.shape-1 img', {
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
    });   
  
    // 5. SCROLL DOWN BUTTON PULSE
    const scrollIcon = document.querySelector('.scroll-icon img');
    if (scrollIcon) {
      gsap.to(scrollIcon, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  });