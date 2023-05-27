import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { projectsData } from "./Data2";
import WorkItems from "./WorkItems";

const Works = () => {
  const [projects, setProjects] = useState(0);

  let handleClick = (e, index) => {
    setProjects(index);
  };

  return (
    <div>
      <div>
        <section className="detail_body">
          <div class="detail_container">
            <div class="details">
              <div class="content">
                <h2 className="section__title">
                  {projectsData[projects].title}
                </h2>
                <h5 className="section__subtitle">
                  {projectsData[projects].date_job}
                </h5>
                <div className="work_filters">
                  {projectsData.map((item, index) => {
                    return (
                      <span
                        className={`work_item`}
                        key={index}
                        onClick={(e) => handleClick(e, index)}
                      >
                        {item.title}
                      </span>
                    );
                  })}
                </div>
                <h4 className="detail_subtitle section__description">
                  {projectsData[projects].detail_job}
                </h4>
                <br />
                <div class="img-container">
                  <img
                    src={projectsData[projects].image_detail}
                    className="detail_image"
                  />
                  <h4>{projectsData[projects].detail_job_2}</h4>
                  <img
                    src={projectsData[projects].image_detail2}
                    className="detail_image"
                  />
                  <img
                    src={projectsData[projects].image_detail3}
                    className="detail_image"
                  />
                </div>
                <br></br>
                <h5 className="section__subtitle">
                  <a href={projectsData[projects].link}>
                    {projectsData[projects].link_placeholder}
                  </a>
                </h5>
                <h5 className="section__subtitle">
                  Language: {projectsData[projects].language}
                </h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Works;
