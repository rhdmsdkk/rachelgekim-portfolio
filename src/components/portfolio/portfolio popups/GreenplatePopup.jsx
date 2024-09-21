import React from "react";
import Greenplate1 from "../../../assets/greenplate-image-1.png";
import Greenplate2 from "../../../assets/greenplate-image-2.png";
import { useEffect, useState } from "react";

const GreenplatePopup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="popup">
      <h1 className="popup__title">GreenPlate</h1>
      <div className="greenplate__content">
        {width >= 596 && (
          <>
            <div className="greenplate__image_container">
              <img
                className="greenplate__image"
                src={Greenplate1}
                alt="greenplate 1"
              />
            </div>
            <div className="greenplate__desc">
              <p className="popup__desc">
                GreenPlate is a meal/fitness tracking application that I worked
                on with a small team of fellow students for our Objects and
                Design course at Georgia Tech.
              </p>
            </div>
            <div className="greenplate__image_container">
              <img
                className="greenplate__image"
                src={Greenplate2}
                alt="greenplate 2"
              />
            </div>
          </>
        )}
        {width < 596 && (
          <>
            <div className="greenplate__desc">
              <p className="popup__desc">
                GreenPlate is a meal/fitness tracking application that I worked
                on with a small team of fellow students for our Objects and
                Design course at Georgia Tech.
              </p>
            </div>
            <div className="greenplate__images">
              <div className="greenplate__image_container">
                <img
                  className="greenplate__image"
                  src={Greenplate1}
                  alt="greenplate 1"
                />
              </div>
              <div className="greenplate__image_container">
                <img
                  className="greenplate__image"
                  src={Greenplate2}
                  alt="greenplate 2"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GreenplatePopup;
