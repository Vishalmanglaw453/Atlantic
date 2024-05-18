import React from "react";
import Commonbtn from "../common/Commonbtn";
import golden from "../images/png/golden-img.webp";

const Pioneers = () => {
  return (
    <>
      <section className="  overflow-y-hidden bg-black mt_2  " id="Categories">
        <div className="container  pt-168" data-aos="zoom-in">
          <div className="row">
            <div className=" d-flex justify-content-xxl-end justify-content-center ">
              <h2  className=" position-relative ff-poppins Pioneers_heading  text-uppercase fw-bolder text-52 mb-0 text-white">
                Pioneers of
                <span className=" fw-normal  text_bg_red_lyar">
                  
                  Lubricants  
                 </span> <br className=" d-lg-block d-none" />
                 & Grease Manufacturing
              </h2>
            </div>
          </div>
        </div>
<div className="section_max_w mx-auto position-relative " data-aos="zoom-in">
        <img  src={golden} alt="golden" />
    
        <div className="d-flex pb-85 justify-content-xl-end">

          <div className="bg-lyar d-flex justify-content-center align-items-center">
            <div className="atlantic_text_max_w" data-aos="zoom-in">
              <p  className=" position-relative z-2  mb-45 color-black DM-Sans fw-normal text-24 lh-36">
                Atlantic Grease & Lubricants is one of the leading manufacturers
                in the <span className=" fw-bold">automotive industry </span>
                providing high-performance products certified by renowned
                European and American automobile industries.
              </p>

              <Commonbtn text="read our story" />
            </div>
          </div>
        </div></div>
      </section>
    </>
  );
};

export default Pioneers;
