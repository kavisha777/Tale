import React from "react";




function Section() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>
                  Discover More <em>About Us</em>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
                  eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="main-button">
                  <a href="#">Discover More</a>
                </div>
                <span>or</span>
                <div className="second-button">
                  <a href="#">Check our FAQs</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <img src="src/assets/images/about-us-image.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </div>

      <div className="video-info section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-thumb">
                <img src="src/assets/images/video-thumb.jpg" alt="Video Thumbnail" />
                <a
                  href="http://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>
                  Detailed Information On What We Do &amp; Who We Are
                </h2>
                <div className="line-dec"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
                  eiusmod tempor incididunt ut labore et dolore dolor.
                </p>
              </div>
              <div className="skills">
                <div className="skill-slide marketing">
                  <div className="fill"></div>
                  <h6>SEO Marketing</h6>
                  <span>90%</span>
                </div>
                <div className="skill-slide digital">
                  <div className="fill"></div>
                  <h6>Digital Marketing</h6>
                  <span>80%</span>
                </div>
                <div className="skill-slide media">
                  <div className="fill"></div>
                  <h6>Social Media Management</h6>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="happy-clients section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>
                  Our 4 Steps <em>To Success</em> &amp; <span>Happy Clients</span>
                </h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="active"><span>Project Introduction</span></div>
                        <div><span>Work Development</span></div>
                        <div><span>Data Analysis</span></div>
                        <div className="last-item"><span>Project Finishing</span></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        {[...Array(4)].map((_, i) => (
                          <li className={i === 0 ? "active" : ""} key={i}>
                            <div>
                              <div className="row">
                                <div className="col-lg-7">
                                  <h4>Title {i + 1}</h4>
                                  <div className="line-dec"></div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    doers eiusmod tempor incididunt ut labore et dolore dolor.
                                  </p>
                                  <div className="info">
                                    <span>Detail 1</span>
                                    <span>Detail 2</span>
                                    <span>Detail 3</span>
                                    <span className="last-span">Detail 4</span>
                                  </div>
                                  <p>
                                    More details about the topic. Lorem ipsum dolor sit amet.
                                  </p>
                                </div>
                                <div className="col-lg-5 align-self-center">
                                  <img
                                    src="src/assets/images/happyclient-01.jpg"
                                    alt="Happy Client"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>
                Are You Ready To Work &amp; Develop With Us ?<br />Don't Hesitate &amp;
                Contact Us !
              </h4>
            </div>
            <div className="col-lg-4">
              <div className="main-button">
                <a href="#">Contact Us Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Section;

