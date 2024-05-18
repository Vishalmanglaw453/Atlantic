import React from "react";
import logo from "../images/svg/logo.svg";
import { Dropdown, Sarch } from "./Icons";
import { useState } from "react";
import Commonbtn from "./Commonbtn";

const Navbaar = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
  }
  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }

  return (
    <div className=" nav_bg">
      <div className=" px-40  w-100 py-14">
        <nav className=" d-flex align-items-center justify-content-between pt-24 pb-23    ">
          <div className="  d-flex gap-55 align-items-center ">
            <div>
              <img src={logo} alt="logo" className=" cursel_pointer" />
            </div>
            <div>
              <ul
                className={`${
                  nav ? "start-0" : "start_100"
                } mb-0 ps-0 d-flex align-items-center gap-28 mobile_view `}
              >
                <li>
                  <a
                    onClick={show}
                    href="#about"
                    className="    DM-Sans fw-normal text-16 lh-23 text-white nav_text opacity-75 "
                  >
                    About Us
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    onClick={show}
                    href="#Categories"
                    className=" dropbtn   d-flex align-items-center gap-1  DM-Sans fw-normal text-16 lh-23 text-white nav_text opacity-75 "
                  >
                    Categories
                    <span>
                      <Dropdown />
                    </span>
                  </a>
                  <div class="dropdown-content">
                    <a href="#">OIL 1</a>
                    <a href="#">Fuel 2</a>
                    <a href="#"> 3</a>
                  </div>
                </li>
                <li>
                  <a
                    onClick={show}
                    href="#serviec"
                    className="    DM-Sans fw-normal text-16 lh-23 text-white nav_text opacity-75 "
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    onClick={show}
                    href="#Testimonials"
                    className="    DM-Sans fw-normal text-16 lh-23 text-white nav_text opacity-75 "
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    onClick={show}
                    href="#blogs"
                    className="    DM-Sans fw-normal text-16 lh-23 text-white nav_text opacity-75 "
                  >
                    Blogs
                  </a>
                </li>

                <li className=" d-flex flex-column d-md-none gap-3">
                  <li className="nav_input_box align-items-center d-flex">
                    <li className=" d-flex">
                      <Sarch />
                    </li>
                    <input
                      className="nav_input text-white  DM-Sans fw-normal text-17 lh-22 lts-41 w-100"
                      type="text"
                      placeholder="Search"
                    />
                  </li>
                  <Commonbtn text="Get in touch" />
                </li>
              </ul>
            </div>
          </div>
          <div className=" d-md-flex d-none gap-3">
            <div className="nav_input_box align-items-center d-flex">
           
                <label htmlFor="sarch" className=" d-flex"><Sarch /></label>
              <input
                className="nav_input text-white  DM-Sans fw-normal text-17 lh-22 lts-41 w-100"
                type="serch" id="sarch"
                placeholder="Search"
              />
            </div>
            <Commonbtn text="Get in touch" />
          </div>
          <div
            onClick={show}
            className="menu d-block d-xl-none position-relative  z-3"
          >
            <span></span>
            <span className="my-2"></span>
            <span></span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbaar;
