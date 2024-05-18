import React from "react";
import blur_lyar from "../images/png/blue-img.webp";
const Approvals = () => {
  return (
    <>
      <section className="  bg-black pt-134 mt_2 pb-85 " id="Testimonials">
        <div className="container " data-aos="zoom-in">
          <h3 className=" ff-poppins ms-0 text-center text-xl-start ms-lg-4 text-white text-52 lh-62 mb-0 fw-bolder text-uppercase">
            OEM <span className=" fw-normal text_bg_blue_lyar">Approvals</span>
          </h3>
        </div>
        <div className="section_max_w mx-auto" data-aos="zoom-in">
          <div className="position-relative">
            <div className="Approvals_bg_img  position-sticky  z-2 d-flex justify-content-center align-items-center mt-52 ">
              <div className=" Approvals_pera " data-aos="zoom-in">
                <p  className="  mb-0 position-relative z-3 DM-Sans text-24 lh-36">
                  At Atlantic Grease and Lubricants, we have{" "}
                  <span className=" fw-bold">secured approvals</span> leading
                  automobile manufacturers. Thus, we demonstrate our commitment
                  to delivering the best possible outcomes to our customers.
                </p>
                <p className=" mb-0 mt-2 mt-xl-3 position-relative z-3  DM-Sans text-24 lh-36">
                  Recognising the{" "}
                  <span className=" fw-bold">significance of quality</span> to
                  our valued customers, we uphold the utmost standards of
                  excellence in all our endeavors.
                </p>
              </div>
            </div>
            <img  src={blur_lyar} alt="Approvals_lyar" />
            <div className="blue_ellipes d-xl-block d-none"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Approvals;
