import React from "react";
import "./detail.css";
import "../../App.css";
import Work from "../work/works2";
import Work2 from "../../assets/work2.png";

import Work1 from "../../assets/work1.jpg";
import Work4 from "../../assets/work4.png";
import Work6 from "../../assets/work6.png";
import Work8 from "../../assets/work8.png";
import Work9 from "../../assets/work9.jpg";
import Work11 from "../../assets/work11.jpg";
import Work12 from "../../assets/work12.jpg";
import Work13 from "../../assets/work3-detail.png";
import Work14 from "../../assets/work13.png";
import Mawar from "../../assets/mawar.png";
import AboutUs from "../../assets/aboutusbackboard.png";
import Feature from "../../assets/ourservicebackboard.png";
import Services from "../../assets/toursbackroad.png";
import Vision from "../../assets/vision.png";
import MySkill from "../../assets/myskill.png";
import SimpleCurencyConverterFront from "../../assets/currencyconverterFront.png";
import SimpleCurencyConverter from "../../assets/currencyconverter.png";
import Shooting from "../../assets/shooting.png";
import GameOver from "../../assets/gameovercorona.png";
import Sanitizer from "../../assets/sanitizer.png";
import DataScience0 from "../../assets/365-Data-Science.png";
import DataScience1 from "../../assets/datascienceP1.png";
import DataScience2 from "../../assets/datascienceP2.png";
import BookStore from "../../assets/bookstore.png";
import Work15 from "../../assets/work14.png";

const projectsData = [
  {
    id: 5,
    image: Work11,
    title: "Collecting Star Game",
    category: "web design",
    detail_job:
      "While instructing at Timedoor Programming Academy, I designed a game that uses the Phaser Framework where the objective is to collect stars and earn points. The more stars the player collects, the higher their score becomes.",
    date_job: "February 2023",
    image_detail: Work11,
    language: "Javascript using Phaser Framework",
    link: "https://collectingstar-byniclauss.netlify.app/",
    link_placeholder: "Game Link",
  },
  {
    id: 6,
    image: Work12,
    title: "Snake Game",
    category: "web design",
    image_detail: Work12,
    link: "https://snake-game-html.vercel.app/",
    link_placeholder: "Game Link",
    detail_job:
      "I created a snake game using HTML, CSS, and JavaScript while teaching at Timedoor Programming Academy. The game involves the snake growing in size every time it eats food.",
    date_job: "January 2023",
    language: "HTML, CSS, Javascript",
  },
  {
    id: 9,
    image: Shooting,
    title: "Corona Buster Game",
    category: "web design",
    detail_job:
      "As a teacher at Timedoor Programming Academy, I created a game using the Phaser Framework where the player's goal is to shoot down enemy coronavirus. Each successful hit earns the player points. However, if the player's ship gets hit by the coronavirus, their health points decrease. To help the player, I also included hand sanitizer in the game, which restores their health points when collected.",
    date_job: "March 2023",
    image_detail: Sanitizer,
    image_detail2: GameOver,
    detail_job_2:
      "Once the user loses the game, they will be directed to a game over scene page.",
    language: "Javascript using Phaser Framework",
    link: "https://corona-buster-byniclauss.netlify.app/",
    link_placeholder: "Game Link",
  },
];

const App = () => {
  return (
    <section className="detail_body">
      <Work projectsData={projectsData}></Work>
    </section>
  );
};
export default App;
