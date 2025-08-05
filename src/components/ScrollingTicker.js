import React from "react";

const ScrollingTicker = ({ items }) => { 
    return (
        <section className="scrolling-ticker">
            <div className="container-fluid ontop sub-bg rest pt-4 pb-4">
                <div className="row">
                    <div className="col-12">
                        <div className="main-ticker">
                            <div className="ticker-slider">
                                <div className="box non-strok">
                                    <div className="item">
                                        <h4 class="d-flex align-items-center">
                                            <span>UI-UX Experience</span> 
                                            <span class="fz-50 ml-50 stroke icon">*</span>
                                        </h4>
                                    </div>
                                    <div class="item">
                                        <h4 class="d-flex align-items-center">
                                            <span>Web Development</span> 
                                            <span class="fz-50 ml-50 stroke icon">*</span>
                                        </h4>
                                    </div>
                                    <div className="item">
                                        <h4 class="d-flex align-items-center">
                                            <span>Digital Marketing</span> 
                                            <span class="fz-50 ml-50 stroke icon">*</span>
                                        </h4>
                                    </div>
                                    <div className="item">
                                        <h4 class="d-flex align-items-center">
                                            <span>Product Design</span> 
                                            <span class="fz-50 ml-50 stroke icon">*</span>
                                        </h4>
                                    </div>
                                    <div className="item">
                                        <h4 class="d-flex align-items-center">
                                            <span>Mobile Solutions</span> 
                                            <span class="fz-50 ml-50 stroke icon">*</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="box non-strok">
                                    <div className="item">
                                        <h4 class="d-flex align-items-center">
                                            <span>UI-UX Experience</span> 
                                            <span class="fz-50 ml-50 stroke icon">*</span>
                                        </h4>
                                    </div>
                                    <div class="item">
                                        <h4 class="d-flex align-items-center">
                                            <span>Web Development</span> 
                                            <span class="fz-50 ml-50 stroke icon">*</span>
                                        </h4>
                                    </div>
                                    <div className="item">
                                        <h4 class="d-flex align-items-center">
                                            <span>Digital Marketing</span> 
                                            <span class="fz-50 ml-50 stroke icon">*</span>
                                        </h4>
                                    </div>
                                    <div className="item">
                                        <h4 class="d-flex align-items-center">
                                            <span>Product Design</span> 
                                            <span class="fz-50 ml-50 stroke icon">*</span>
                                        </h4>
                                    </div>
                                    <div className="item">
                                        <h4 class="d-flex align-items-center">
                                            <span>Mobile Solutions</span> 
                                            <span class="fz-50 ml-50 stroke icon">*</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollingTicker;