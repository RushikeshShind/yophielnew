import { Fragment } from "react";
import { Tiles11 } from "components/elements/tiles";
import ListColumn from "components/reuseable/ListColumn"; 

import { aboutList2, aboutList3 } from "data/about";

const About19 = () => {
  return (
    <Fragment>
      {/* Centered Main Image */}
      <div className="d-flex justify-content-center my-4">
        <img 
          src="/img/main1.png" 
          alt="Main Image" 
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }} 
        />
      </div>

      {/* ABOUT YOPHIEL SECTION */}
      <section className="container py-5">
        <div className="row">
          {[
            "Welcome from the global arena of Chemicals and Engineering, where excellence, innovation, and performance meet.",
            "Yophiel is led by a team of experts and professionals who are uniquely positioned to serve the diverse needs of its customers.",
            "The head office is in Pune with subsidiary operations in UAE and KSA, covering markets in Asia Pacific, Middle East, and Africa.",
            "We take pride in our in-house capabilities, encompassing engineering, manufacturing, and high-quality process equipment supply."
          ].map((text, index) => (
            <div key={index} className="col-md-6 d-flex align-items-start mb-3">
              <span className="icon me-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" rx="5" fill="url(#gradient)" />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00A1E4" />
                      <stop offset="100%" stopColor="#00D664" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are Section - Centered Image */}
      <div className="d-flex justify-content-center my-4">
        <img
          src="/img/whoweare.png"
          alt="Who We Are"
          className="img-fluid"
          style={{ maxWidth: "80%", height: "auto" }}
        />
      </div>

      {/* DELIVERING CHEMICALS GLOBALLY SECTION */}
      <section className="wrapper bg-light py-5 text-center">
        <h3 className="text-success fw-bold">DELIVERING CHEMICALS GLOBALLY</h3>
        <p>
          One of the leading suppliers of Specialty Chemicals, Oils, Ingredients, 
          and Process & Mechanical Engineering Solutions for industries such as:
        </p>
        <p className="fw-bold">
          Oil & Gas, Grease & Lubricants, Plastics & PVC, Home & Personal Care, 
          Rubber & Wastewater Treatment.
        </p>
      </section>
    </Fragment>
  );
};

export default About19;
