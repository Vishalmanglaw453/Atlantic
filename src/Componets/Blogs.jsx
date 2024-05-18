import React from "react";
import { card } from "../common/Helper";
import Commonbtn from "../common/Commonbtn";
const Blogs = () => {
  return (
    <>
      <section className=" mt_2 bg-black">
        <div data-aos="zoom-in" className="container pt-83 pb-262" id="blogs">
         
          <div className="row ">
            {card.map((data, index) => (
              <>
                <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4 d-flex  justify-content-center">
                  <div className="read_card position-relative">
                    <img className=" w-100" src={data.img} alt="read" />
                    <p className=" text-capitalize mb-27 mt-3 DM-Sans fw-medium text-18 lh-23 text-white">
                      {data.para}
                    </p>
                    <Commonbtn text="read more" />
                    <div className=" d-flex date_box_pos">
                      <div className="date_box DM-Sans fw-normal text-14 lh-21 text-white">
                        10-March-2024
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
