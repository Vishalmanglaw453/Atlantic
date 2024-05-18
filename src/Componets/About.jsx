import React from "react";
import w_car from "../images/svg/Wolswagan.svg";
import mardices from "../images/png/mer.webp";
import mini from "../images/svg/Mini-car.svg";
import car_cat from "../images/svg/car-cat.svg";
const About = () => {
  return (
    <>
      <section className=" bg-black mt_2 overflow-hidden  about_bg_img position-relative ">
        <div data-aos="zoom-in" className="container d-flex justify-content-center" id="serviec">
          <div className=" d-md-block d-none car_logo position-relative">
            <div className="car_logo_box logo_pos1 d-flex  justify-content-center align-items-center">
              <img src={w_car} alt="w_car" />
            </div>
            <div className="car_logo_box logo_pos2 d-flex  justify-content-center align-items-center">
              <img src={mini} alt="m_car" />
            </div>
            <div className="car_logo_box logo_pos3 d-flex  justify-content-center align-items-center">
              <img src={w_car} alt="w_car" />
            </div>
            <div className="car_logo_box logo_pos4 d-flex  justify-content-center align-items-center">
              <img src={car_cat} alt="c_car" />
            </div>
            <div className="car_logo_box p-3 logo_pos5 d-flex  justify-content-center align-items-center">
              <img className=" w-100" src={mardices} alt="c_car" />
            </div>
            <div className="car_logo_box logo_pos6 d-flex  justify-content-center align-items-center">
              <img src={mini} alt="m_car" />
            </div>
            <div className="car_logo_box logo_pos7 d-flex  justify-content-center align-items-center">
              <img src={w_car} alt="w_car" />
            </div>
          </div>
          <div className="car_logo d-block d-md-none">
            <div className="row">
              <div className="col-sm-4 col-6 d-flex justify-content-center">
                <div className=" mt-4 car_logo_box d-flex  justify-content-center align-items-center">
                  <img src={w_car} alt="w_car" />
                </div>
              </div>
              <div className="col-sm-4 col-6 d-flex justify-content-center">
                <div className=" mt-4 car_logo_box d-flex  justify-content-center align-items-center">
                  <img src={mini} alt="m_car" />
                </div>
              </div>
              <div className="col-sm-4 col-6 d-flex justify-content-center">
                <div className=" mt-4 car_logo_box d-flex  justify-content-center align-items-center">
                  <img src={w_car} alt="w_car" />
                </div>
              </div>
              <div className="col-sm-4 col-6 d-flex justify-content-center">
                <div className=" mt-4 car_logo_box d-flex  justify-content-center align-items-center">
                  <img src={car_cat} alt="c_car" />
                </div>
              </div>
              <div className="col-sm-4 col-6 d-flex justify-content-center">
                <div className=" mt-4 car_logo_box d-flex  justify-content-center align-items-center">
                  <img src={car_cat} alt="c_car" />
                </div>
              </div>
              <div className="col-sm-4 col-6 d-flex justify-content-center">
                <div className=" mt-4 car_logo_box d-flex  justify-content-center align-items-center">
                  <img src={mini} alt="m_car" />
                </div>
              </div>
              <div className="col-sm-4 col-6 d-flex justify-content-center">
                <div className=" mt-4 car_logo_box d-flex  justify-content-center align-items-center">
                  <img src={w_car} alt="w_car" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-164" id="about">
          <h2 data-aos="zoom-in" className=" text-uppercase mb-0  text-white ff-poppins fw-bolder text-52 lh-62 text-center">
            our <span className=" fw-normal text_bg_red_lyar">numbers</span> say{" "}
            <span className=" d-block">about us</span>
          </h2>
          <div data-aos="zoom-in" className=" d-flex pt-75  justify-content-md-between justify-content-center align-items-center flex-wrap ">
            <div className="  d-flex  flex-column  align-items-center mx-lg-0 mx-4 mt-lg-0 mt-4 ">
              <h2 className=" ff-poppins  mb-0 lh-96 text-white fw-bolder text-80 about_heading ">
                20k+
              </h2>
              <p className=" DM-Sans mb-0 fw-medium text-16 lh-23 text-white opacity-75 text-center">
                Happy customers
              </p>
            </div>
            <div className=" d-flex  flex-column  align-items-center mx-lg-0 mx-4 mt-lg-0 mt-4 ">
              <h2 className=" ff-poppins  mb-0 lh-96 text-white fw-bolder text-80 about_heading ">
                35%
              </h2>
              <p className=" DM-Sans mb-0 fw-medium text-16 lh-23 text-white opacity-75 text-center">
                Export Volume
              </p>
            </div>
            <div className=" d-flex  flex-column  align-items-center mx-lg-0 mx-4 mt-lg-0 mt-4 ">
              <h2 className=" ff-poppins  mb-0 lh-96 text-white fw-bolder text-80 about_heading ">
                20%
              </h2>
              <p className=" DM-Sans mb-0 fw-medium text-16 lh-23 text-white opacity-75 text-center">
                Market Share
              </p>
            </div>
            <div className=" d-flex  flex-column position-relative z-1  align-items-center mx-lg-0 mx-4 mt-lg-0 mt-4 ">
              <h2 className=" ff-poppins   mb-0 lh-96 text-white fw-bolder text-80 about_heading ">
                65+
              </h2>
              <p className="  DM-Sans mb-0 fw-medium text-16 lh-23 text-white opacity-75 text-center">
                Country
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-288">
          <h2 data-aos="zoom-in" className=" ff-poppins fw-bolder  text-52 lh-62 mb-0 text-uppercase text-white text-center">
            explore our{" "}
            <span className="  fw-normal text_bg_red_lyar">blogs</span>
          </h2>
        </div>
        <div className="ellipe d-xl-block d-none"></div>
      </section>
    </>
  );
};

export default About;
