import React from "react";
import "./skills.css";

function Skill() {
  return (
    <>
      <div className="container mainn" id="skillsss">
        <div className="row gap-4">
          <div className="col-sm-12 col-md-6 m-auto mb-3 main1">
            <h2 className="heading">Front-End Developer</h2>
            <div className="images">
              <img src="/images/react.png" alt="React" className="img-fluid" />
              <img src="/images/html.png" alt="HTML" className="img-fluid" />
              <img src="/images/css.png" alt="CSS" className="img-fluid" />
              <img
                src="/images/js.png"
                alt="JavaScript"
                className="img-fluid"
              />
              <img
                src="/images/bootstrap.png"
                alt="Bootstrap"
                className="img-fluid"
              />
              <img
                src="/images/tailwind.png"
                alt="Tailwind CSS"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 m-auto  mb-3 main2 ">
            <h2 className="heading">Tools</h2>
            <p>Git & Github</p>
            <p>Visual studio code</p>
            <p>Responsive Design</p>
          </div>
          <div className="col-sm-12 col-md-6 m-auto  mb-3  main3 ">
            <h2 className="heading">Soft Skills</h2>
            <p>Problem-Solving</p>
            <p>Collaboration</p>
            <p>Attention to Detail</p>
            <p>Communication skill</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
