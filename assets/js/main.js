document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. HERO-AREA LETTER ANIMATION
  const letters = document.querySelectorAll('.section-title.has_char_anim div > div');
  gsap.set(letters, { opacity: 0, y: 30 });

  gsap.timeline({
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

  // 3. HERO SOCIAL ICONS
  // const socialIcons = document.querySelectorAll('.hero-social-links a');
  // gsap.from(socialIcons, {
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
  if (shapeImg) {
    gsap.to(shapeImg, {
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
  }

  // 5. SCROLL ICON PULSE
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

  // 6. FEATURES SECTION ANIMATIONS
  // Subtitle
  gsap.from(".section-subtitle", {
    scrollTrigger: {
      trigger: "#features",
      start: "top 80%",
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  // Title lines (text move anim)
  gsap.from("#features .section-title div", {
    scrollTrigger: {
      trigger: "#features .section-title",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
  });

  // Counter + Text
  gsap.from("#features .text-wrapper", {
    scrollTrigger: {
      trigger: "#features .text-wrapper",
      start: "top 90%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  });

  // Shape animations (floating if needed)
  gsap.from("#features .shape_1 img, #features .shape-2 img", {
    scrollTrigger: {
      trigger: "#features",
      start: "top 85%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3
  });
  gsap.to(".circle-rotate", {
    rotate: 360,
    duration: 20,
    repeat: -1,
    ease: "none",
    transformOrigin: "50% 50%"
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector('.custom-cursor');

  let mouseX = 0;
  let mouseY = 0;

  // Smooth follower
  gsap.set(cursor, { xPercent: -50, yPercent: -50 });

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  gsap.ticker.add(() => {
    gsap.to(cursor, {
      duration: 0.15,
      x: mouseX,
      y: mouseY,
      ease: "power2.out"
    });
  });

  // Add hover effect on interactive elements
  const hoverTargets = document.querySelectorAll("a, button, .cursor-pointer");

  hoverTargets.forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
    });
  });
  
});

const works = [
  { title: "Haliya Mono", tag: "Design - 2024", img: "assets/img/img-s-1.webp" },
  { title: "Atlas Chatart", tag: "Design - 2024", img: "assets/img/img-s-2.webp" },
  { title: "O-Mobilya", tag: "Design - 2024", img: "assets/img/img-s-3.webp" },
  { title: "Brandom Asly", tag: "Design - 2024", img: "assets/img/img-s-4.webp" },
  { title: "Kutober Jake", tag: "Design - 2024", img: "assets/img/img-s-5.webp" }
];


document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.case-studies-list .item');

  // Hover for 2nd item
  items[1].addEventListener('mouseenter', function () {
    document.querySelector('.case-studies-image .images').classList.add('hovered2');
  });
  items[1].addEventListener('mouseleave', function () {
    document.querySelector('.case-studies-image .images').classList.remove('hovered2');
  });

  // Hover for 3rd item
  items[2].addEventListener('mouseenter', function () {
    document.querySelector('.case-studies-image .images').classList.add('hovered3');
  });
  items[2].addEventListener('mouseleave', function () {
    document.querySelector('.case-studies-image .images').classList.remove('hovered3');
  });

  // Hover for 4th item
  items[3].addEventListener('mouseenter', function () {
    document.querySelector('.case-studies-image .images').classList.add('hovered4');
  });
  items[3].addEventListener('mouseleave', function () {
    document.querySelector('.case-studies-image .images').classList.remove('hovered4');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const parent = document.querySelector('.projects-circle-list');
  const images = parent.querySelectorAll('.image');

  const hoverClasses = ['hovered2', 'hovered3', 'hovered4', 'hovered5'];

  // Loop from index 1 to 4 (2nd to 5th .image element)
  for (let i = 1; i <= 4; i++) {
    const image = images[i];
    const className = hoverClasses[i - 1];

    if (image) {
      image.addEventListener('mouseenter', function () {
        parent.classList.add(className);
      });

      image.addEventListener('mouseleave', function () {
        parent.classList.remove(className);
      });
    }
  }
});


// Get the container element
// const container = document.getElementById('works-container');

// // Loop through the works array and create HTML for each item
// works.forEach(work => {
//   const workItem = `
//     <div class="has_fade_anim">
//       <a href="">
//         <div class="work-box">
//           <div class="thumb">
//             <img src="${work.img}" alt="" />
//           </div>
//           <div class="content">
//             <h2 class="title">${work.title}</h2>
//           </div>
//           <div class="meta">
//             <p class="tag">${work.tag}</p>
//           </div>
//         </div>
//       </a>
//     </div>
//   `;
  
//   // Insert the HTML into the container
//   container.insertAdjacentHTML('beforeend', workItem);
// });