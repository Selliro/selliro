import React, { useRef } from "react";
import HalfAroundCircle from "../assets/img/img-s-8.webp";
import RightTopArrow from "../assets/img/big-right-top-arrow2.svg";
import WhiteRightTopArrow from "../assets/img/white-right-top-arrow3.svg";

const ProjectWork = ({ sectionTitle, sectionSubtitle, projects }) => {

    const imageContainerRef = useRef(null);

    const handleMouseEnter = (index) => {
        if (imageContainerRef.current) {
            imageContainerRef.current.classList.add(`hovered${index + 1}`);
        }
    };

    const handleMouseLeave = (index) => {
        if (imageContainerRef.current) {
            imageContainerRef.current.classList.remove(`hovered${index + 1}`);
        }
    };
    return (
        <section className="works-area">
        <div className="container">
            <div className="works-area-inner section-spacing-bottom">
                <div className="shape-2">
                    <img src={HalfAroundCircle} alt="shape" />
                </div>

                {/* Section Title */}
                <div className="section-header">
                    <div className="section-title-wrapper">
                    <div className="subtitle-wrapper overflow-hidden">
                        <span className="section-subtitle has-left-line has_fade_anim">
                            {sectionSubtitle}
                        </span>
                    </div>
                    <div className="title-wrapper">
                        <h2 className="section-title has_text_move_anim">
                            <div>{sectionTitle}</div>
                        </h2>
                    </div>
                    </div>
                </div>

                {/* Works List and Images */}
                <div className="works-wrapper-box">
                    <div className="works-wrapper row align-items-start" id="works-container">
                    
                    {/* Left Column: Text List */}
                    <div className="col-lg-6 col-12">
                        <div className="case-studies-list">
                        {projects.map((project, idx) => (
                            <div className="item position-relative" key={idx}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                onMouseLeave={() => handleMouseLeave(idx)}
                            >
                            <h3>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
                            </h3>
                            <span className="d-block date">{project.description}</span>
                            <a
                                href={project.url}
                                className="link-btn d-inline-block rounded-circle text-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={RightTopArrow} alt="arrow" />
                                <img src={WhiteRightTopArrow} alt="arrow" />
                            </a>
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* Right Column: Images */}
                    <div className="col-lg-6 col-md-12">
                        <div className="case-studies-image">
                        <div className="images position-relative" ref={imageContainerRef}>
                            {projects.map((project, idx) => (
                            <div className="image" key={idx}>
                                <img src={require(`../assets/img/${project.img}`)}  alt={project.name} />
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Optional View All Works Button */}
                {/* <div className="btn-wrapper has_fade_anim">
                    <a href="#" className="wc-btn wc-btn-primary btn-text-flip bordered">
                    <span data-text="View all works">View all works</span>
                    </a>
                </div> */}
            </div>
        </div>
        </section>
    );
};

export default ProjectWork;
