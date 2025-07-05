import React, { useState } from "react";
import AnimeImage from "../assets/img/img-s-68.webp"
import CircleHalf from "../assets/img/circle.svg"

const ServiceArea = ({ 
    sectionTitle, 
    highlightWord, 
    description, 
    shapes = [], 
    projects = [] 
}) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="service-area">
        <div className="container">
            <div className="service-area-inner section-spacing">
            
            {/* Decorative Shapes */}
            {shapes.map((shape, idx) => (
                <div className={shape.className} key={idx}>
                <img src={shape.src} alt={`shape-${idx}`} />
                </div>
            ))}

            {/* Section Title & Description */}
            <div className="section-header">
                <div className="section-title-wrapper">
                <div className="shape-1 has_fade_anim">
                    <img src={AnimeImage} alt="shape" />
                </div>
                <div className="title-wrapper has_text_move_anim">
                    <div>
                    <h2 className="section-title">
                        {sectionTitle.split(highlightWord)[0]}
                        <span>{highlightWord}</span>
                        {sectionTitle.split(highlightWord)[1]}
                    </h2>
                    </div>
                </div>
                </div>
                <div className="text-wrapper">
                <p className="text has_fade_anim">{description}</p>
                </div>
            </div>

            {/* Project Circle List */}
            <div className={`projects-circle-list text-center position-relative ${hoveredIndex !== null ? `hovered${hoveredIndex + 1}` : ''}`}>
                <img
                    src={CircleHalf}
                    className="d-none d-lg-inline-block"
                    alt="circle-border"
                />
                <div className="images text-start">
                    {projects.map((proj, idx) => (
                        <div className="image"
                            key={idx}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={require(`../assets/img/${proj.img}`)} alt={proj.title} />
                            <div className="text">
                                <h3>
                                    <a href={proj.link}>{proj.title}</a>
                                </h3>
                                <p>{proj.description}</p>
                                <a href={proj.link} className="link-btn d-flex align-items-center position-relative">
                                    View Project
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                            <a href={proj.link} className="position-absolute z-1 start-0 end-0 top-0 bottom-0"></a>
                        </div>
                    ))}
                </div>

                {/* Optional: Text Content below */}
                <div className="contents text-start">
                    {projects.map((proj, idx) => (
                        <div className="item" key={idx}>
                        <h3>
                            <a href={proj.link}>{proj.title}</a>
                        </h3>
                        <p>{proj.description}</p>
                        <a
                            href={proj.link}
                            className="link-btn d-flex align-items-center position-relative"
                        >
                            View Project
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        </div>
                    ))}
                </div>
            </div>

            </div>
        </div>
        </section>
    );
};

export default ServiceArea;
