import React, { Fragment, useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const Carousel = (props) => {
  const { displayItems } = props;

  const [current, setCurrent] = useState(0);
  const totalItems = displayItems.length - 1;

  const nextImg = () => {
    setCurrent(current === totalItems ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? totalItems : current - 1);
  };

  if (displayItems.length <= 0) {
    return null;
  }

  return (
    <Fragment>
      <div className="carousel">
        <div className="carousel-section-top">
          <VscChevronLeft
            className="carousel-chevron carousel-chevron-left "
            onClick={prevImg}
          />
          <div className="loader"></div>
          <div className="carousel-img-container">
            {displayItems.map((item, index) => {
              return (
                <div key={index} className="carousel-item">
                  {index === current && (
                    <img
                      src={item.image}
                      alt="education project summary"
                      className="carousel-img"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <VscChevronRight
            className="carousel-chevron carousel-chevron-right"
            onClick={nextImg}
          />
        </div>

        {/* info area  */}
        <div className="carousel-section-bottom">
          <div className="carousel-section-bottom-left">
            <p className="item-description">
              {displayItems[current].description}
            </p>
            <p className="item-count">
              {`Image ${current + 1} of ${totalItems + 1}`}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Carousel;
