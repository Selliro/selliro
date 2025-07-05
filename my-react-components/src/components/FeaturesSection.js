import React from "react";

const FeaturesSection = ({
  subtitle,
  titleLines,
  counter,
  counterLabel,
  description,
  shapes = [],
}) => {
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
            <div className="text-wrapper has-left-line">
              <h2 className="title wc-counter is-visible">
                {counter} <span>{counterLabel}</span>
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
