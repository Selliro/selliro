import React from "react";
import CommonButton from "./common/Button";

const CtaSection = ({ content, formFields, buttonText }) => {
  return (
    <section className="cta-area">
      <div className="container">
        <div className="row cta-area-inner section-spacing-bottom">

          {/* LEFT: Content */}
          <div className="col-lg-4 col-xs-4">
            <div className="section-header">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper overflow-hidden">
                  <span className="section-subtitle has-left-line has_fade_anim">
                    {content.subtitle}
                  </span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title has_text_move_anim">{content.title}</h2>
                </div>
              </div>
              <div className="text-wrapper">
                <p className="text has_fade_anim">{content.description}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="col-lg-8 col-xs-8">
            <form className="controls row">
              {formFields.map((field, idx) => (
                <div className={`col-lg-${field.fullWidth ? 12 : 6}`} key={idx}>
                  <div className="form-group mb-30">
                    <label htmlFor={field.id}>
                      {field.label}{" "}
                      {field.required && <span className="star">*</span>}
                      {field.optional && <span className="opt sub-color">(Optional)</span>}
                    </label>

                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.name}
                        placeholder={field.placeholder}
                        rows={field.rows || 4}
                        required={field.required}
                      ></textarea>
                    ) : (
                      <input
                        id={field.id}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </div>
                </div>
              ))}

              <div className="col-12 mt-60">
                <CommonButton type="submit" dataText={buttonText} text={buttonText} />
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
