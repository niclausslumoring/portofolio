import React, {useState} from 'react';
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>
        
            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i class="uil uil-web-grid services_modal-close"></i>
                        <h3 className="services_title">
                            Web<br />Designer
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>View More<i class="uil uil-arrow-right services_button-icon"></i> </span>
                    <div className= {toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick = {() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <h3 className="services_modal-title">Frontend Developer</h3>
                            <p className="services_modal-description">
                                Experience working on several web design projects.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Website Design.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        UI and UX Design.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Website Branding.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Website Maintanance.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Consultation.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i class= "uil uil-database services_modal-close"></i>
                        <h3 className="services_title">Data<br />Analysis</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>View More<i class="uil uil-arrow-right services_button-icon"></i> </span>
                    <div className= {toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick = {() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <h3 className="services_modal-title">Data Scientist</h3>
                            <p className="services_modal-description">
                                Experienced in computer science and mathematics industry, also participated in an intensive bootcamp data science and worked on several projects.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Data Collection and Preprocessing.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Data Visualization
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Customer Segmentation.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Sentiment Analysis.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Business intelligence.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Exploratory Data Analysis (EDA).
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i class= "uil uil-apps services_modal-close"></i>
                        <h3 className="services_title">Software<br />Engineer</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(3)}>View More<i class="uil uil-arrow-right services_button-icon"></i> </span>
                    <div className= {toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick = {() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <h3 className="services_modal-title">Backend Developer</h3>
                            <p className="services_modal-description">
                            Experienced working on several projects related to backend development.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Database Management.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        API Development.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Performance Optimazition.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Dev Ops.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Server-side Scripting.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services