import React from "react";
import CommonButton from "./common/Button";

const CtaSection = ({ content, formFields, buttonText }) => {

  return (
    <section className="cta-area">
      <div className="container">
        <div className="row cta-area-inner section-spacing-bottom">

          {/* LEFT: Content */}
          

            {/* <section className="get_in_touch" id="contact_me"> */}
              <div className="container">
                <div className="row align-items-start">
                  {/* Contact Info */}
                  <div className="col-lg-5">
                    <div className="contact-info-box">
                     <div className="col-lg-10 col-xs-4 mx-auto">
                        <div className="section-header">
                          <div className="section-title-wrapper">
                            <div className="subtitle-wrapper overflow-hidden">
                              {/* <span className="section-subtitle has-left-line has_fade_anim">
                                {content.subtitle}
                              </span> */}
                            </div>
                            <div className="title-wrapper">
                              <h2 className="contact-form__title section-title has_text_move_anim">{content.title}</h2>
                            </div>
                          </div>
                          <div className="text-wrapper" style={{ marginBottom: '15px' }}>
                            <p className="text has_fade_anim">{content.description}</p>
                          </div>
                        </div>
                        <div className="contact-info-list">
                        <div className="contact-info-item">
                          <div className="icon-box">
                            <img
                              src="https://valentistech.in/valentis_demo/icons/icon-phone-dark.svg"
                              alt="Phone Icon"
                            />
                          </div>
                          <div className="contact-info-content">
                            <p>Need help!</p>
                            <h3>
                              <a href={`tel: 7411501872`}>7411501872</a>
                            </h3>
                          </div>
                        </div>
                        <div className="contact-info-item">
                          <div className="icon-box">
                            <img
                              src="https://valentistech.in/valentis_demo/icons/icon-mail-dark.svg"
                              alt="Email Icon"
                            />
                          </div>
                          <div className="contact-info-content">
                            <p>E-mail</p>
                            <h3>
                              <a href={`mailto:pradeepkumar.neginhal@gmail.com`}>pradeepkumar.neginhal@gmail.com</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      </div>
                      
                    </div>
                  </div>

                  <div className="col-lg-7 col-xs-8">
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

                          {/* RIGHT: Form */}
                
              </div>
            {/* </section> */}

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
