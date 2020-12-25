import React, { Fragment, useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import { ImageData } from "../Components/Carousel/ImageData";

const MoreInfoPage = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const handleButtonClick = () => {
    setShowCarousel(!showCarousel);
    return (
      <div className="wtf">
        <h2>wtf</h2>
      </div>
    );
  };

  const handleCloseBtn = () => {
    setShowCarousel(false);
  };

  return (
    <Fragment>
      <div className="more-info fullwidth" id="more-info">
        <section className="container-centered-content ">
          <h2 className="section-heading">UX Volunteer Projects</h2>
          <div className="container-flex">
            <div className="volunteer-info">
              <h3>UXPA Magazine</h3>
              <p className="date">2020 - Present</p>
              <ul>
                <li>
                  <span>
                    Working with authors to edit and improve their UX articles
                  </span>
                </li>
                <li>
                  <span>Writing book reviews</span>
                </li>
              </ul>
              <h3>UX Rescue</h3>
              <p className="date">2020</p>
              <ul>
                <li>
                  <span>Conducting stakeholder interviews</span>
                </li>
                <li>
                  <span>
                    Research, scheduling meetings, liaison between non-profit
                    and UX team
                  </span>
                </li>
                <li>
                  <span>Web development</span>
                </li>
              </ul>
            </div>
            <div className="img-area">
              <img
                src="/images/volunteer-img.svg"
                alt="Laptop displaying group call and design board"
              />
            </div>
          </div>
        </section>
        <hr className="section-divider" />

        {/* Edu section */}
        <section className="container-centered-content">
          <h2 className="section-heading">Education</h2>
          <div className="container-flex flex-reverse">
            <div className="education-info">
              <h3>Masters in Cognitive Systems</h3>
              <p>Ulm University</p>
              <p className="date">2016-2019</p>
              <p>
                <span className="bold">Thesis:</span> Investigating Decisions
                and Situational Perception in Uncertain, Automated Driving
                Conditions
              </p>
              <button className="btn-outline" onClick={handleButtonClick}>
                View Course Work & Projects
              </button>
              <h3>BSocSci Honours in Psychology</h3>
              <p>University of Pretoria</p>
              <h3>Bachelors in Psychology</h3>
              <p>University of Johannesburg</p>
            </div>
            <div className="img-area">
              <img
                src="/images/edu-img.svg"
                alt="Graduation cap and scroll on a book"
              />
            </div>
          </div>
        </section>
        {showCarousel ? (
          <Carousel displayItems={ImageData} closeBtn={handleCloseBtn} />
        ) : (
          <p>NOOOOOOOOOO</p>
        )}
      </div>
    </Fragment>
  );
};

export default MoreInfoPage;
