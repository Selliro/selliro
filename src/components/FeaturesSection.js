import React, { useEffect, useRef, useState } from "react";

const FeaturesSection = ({
  subtitle,
  titleLines,
  counter,
  counterLabel,
  description,
  shapes = [],
}) => {
  const counterRef = useRef(null);
  const [currentCount, setCurrentCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounter();
          setHasAnimated(true);
          observer.disconnect(); // Disconnect after first trigger
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const startTime = performance.now();
    const duration = 800; // 2 seconds

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * counter);
      setCurrentCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrentCount(counter); // Ensure final value
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <section id="features" className="features-area">
      <div className="container large">
        <div className="features-area-inner">
          {/* Render shapes */}
          {shapes.map((shape, index) => (
            <div className={shape.className} key={index}>
              <img src={shape.src} alt="shape" />
            </div>
          ))}

          <div className="section-content">
            {/* Subtitle */}
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper overflow-hidden">
                <span className="section-subtitle has-left-line has_fade_anim">
                  {subtitle}
                </span>
              </div>

              {/* Title lines */}
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">
                  {titleLines.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </h2>
              </div>
            </div>

            {/* Counter & Description */}
            <div className="text-wrapper has-left-line" ref={counterRef}>
              <h2 className="title wc-counter is-visible">
                {currentCount}
                <span>{counterLabel}</span>
              </h2>
              <p className="text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
