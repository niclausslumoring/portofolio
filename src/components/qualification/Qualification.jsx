import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title"> Qualification </h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Computer Science and Mathematics
                </h3>
                <span className="qualification_subtitle">Bina Nusantara</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2019 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Udemy Academy</h3>
                <span className="qualification_subtitle">
                  Data Science, Backend, Frontend
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2023 - Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Intensive Bootcamp Data Science
                </h3>
                <span className="qualification_subtitle">My Skill</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Mandarin Language</h3>
                <span className="qualification_subtitle">Hong Hua</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2008 - 2014
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Engineer</h3>
                <span className="qualification_subtitle">
                  PT. Merkle Inovasi Teknologi
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Coding Tutor</h3>
                <span className="qualification_subtitle">
                  PT. Timedoor Indonesia
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2022 - Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Business Partner</h3>
                <span className="qualification_subtitle">
                  PT. Allianz Life Indonesia
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2020 - 2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Squad</h3>
                <span className="qualification_subtitle">Ternak Uang</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2019
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Pool Patrol</h3>
                <span className="qualification_subtitle">
                  PT. Fantasia Utama Nuansa
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2019
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Tutor</h3>
                <span className="qualification_subtitle">
                  Julio and Elsa Bimbel
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2016 - 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
