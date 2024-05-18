import React from "react";
import Navbaar from "../common/Navbaar";
import Commonbtn from "../common/Commonbtn";

const Hero = () => {
  return (
    <>
      <header className=" hero_bg_img d-flex flex-column ">
        <Navbaar />

        <div className="container   h-100  d-flex flex-column justify-content-end  flex-grow-1 ">
            <div data-aos="zoom-in" className="  pb-3 w-100 d-lg-flex align-items-end justify-content-between">
          <h2 className=" hero_heading ff-poppins fw-bolder  text-uppercase text-60 lh-72 mb-lg-0 mb-4 text-white">
            Optimising your Vehicle{" "}
            <span className=" fw-normal  fst-italic  ">Performance</span>
          </h2>
          <div className="">
            <Commonbtn text="explore" />
          </div>
          </div>



        </div>
      </header>
    </>
  );
};

export default Hero;
