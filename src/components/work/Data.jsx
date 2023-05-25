import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.png";
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
import DataScience3 from "../../assets/datascienceP3.png";
import DataScience4 from "../../assets/datascienceP4.png";
import DataScience5 from "../../assets/datascienceP5.png";
import BookStore from "../../assets/bookstore.png";
import Work15 from "../../assets/work14.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Vision Face Detection",
    image_detail: Mawar,
    image_detail3: Vision,
    category: "data science",
    detail_job:
      "I'm using cascade classifier and masking using inRange and bitwisee operator. Cascade classifier is a computer vision technique to detect specific objects in images or videos using machine learning algorithms. It works by using a cascade of classifiers to speed up the detection process. The cascade evaluates an image or video at each stage, and if it passes, it moves on to the next stage. If an object is detected in all stages, it is considered a positive detection. This technique is fast and effective, but it requires a good set of positive and negative training examples to work effectively. Bitwise operations perform on binary images, where each pixel is represented by a single bit (0 or 1). There are four types of bitwise operations (AND, OR, NOT, and XOR) that are commonly used for image processing, such as masking, thresholding, and merging. In this case, the AND operation is used to create a mask by blacking out all colors except red. The inRange function is used to specify the range of red colors to include in the mask. Finally, the mask is applied using the bitwise operation.",
    date_job: "January 2023",
    language: "Python",
  },
  {
    id: 2,
    image: Work13,
    image_detail: Work4,
    image_detail2: Work2,
    title: "Hand Motion Detection",
    category: "Data Science",
    detail_job:
      "I'm using computer vision for this project. For the purpose of detecting hand gestures, I developed a hand detection module using Python. This way, if I ever work on another project that relies heavily on hand gestures, I can simply use the module I developed. I developed a gesture-based volume control, for instance, which needed hand motion recognition as part of the main project component.",
    date_job: "January 2023",
    detail_job_2:
      "Here is my documentation of implementing the use of a module I created to enable volume control through gestures.",
    language: "Python",
  },
  {
    id: 3,
    image: MySkill,
    title: "MySkill Data Science Bootcamp",
    category: "Data Science",
    detail_job:
      "I have learned about the fundamental concepts of data science, which covers topics such as data collection, data cleaning, and data analysis. In addition, I have learned about statistics for data science, including probability, hypothesis testing, and regression analysis.Furthermore, I gained proficiency in SQL, a language used for managing and manipulating data stored in databases. This skill is especially useful for dealing with extensive datasets that are typically encountered in data science.Regarding programming, I have learned the basics of Python and its applications in data science, which covered topics such as data types, control structures, and functions. I also studied specific Python libraries commonly utilized in data science, such as NumPy and Pandas. Lastly, I acquired knowledge in data visualization, which entails using visual representations to comprehend data. This skill is critical in data science because it allows for more effective communication of insights and findings to others.",
    date_job: "February 2023",
    image_detail: Work6,
    image_detail2: Work8,
    language: "SQL, Python",
    link: "https://www.linkedin.com/in/niclauss-lumoring-480b051b9/overlay/1635517411143/single-media-viewer?type=DOCUMENT&profileId=ACoAADLjOGAB4VENoEZgKzEDq4Q4w_IP8u3Q94s&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bc6LgNmXhRc6o08Dp0DYZgg%3D%3D",
    link_placeholder: "Sertifikat",
  },
  {
    id: 4,
    image: Work9,
    title: "PHP Recruitment Application",
    category: "backend developer",
    detail_job:
      "During my participation in the IT Division Bina Nusantara Bootcamp, I collaborated with a group to develop a web-based recruitment platform. The objective of the final project was to create a platform that could benefit both job seekers and recruiters by matching them based on their needs and qualifications.",
    image_detail: Work9,
    language: "PHP",
    date_job: "September 2019",
  },
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
    id: 7,
    image: Work14,
    title: "Backroads Tour App",
    category: "web design",
    detail_job:
      "I enrolled in a React 18 Tutorial and Projects Course (2023) on Udemy, where I worked on various projects. One of the projects I completed was a web-based app called Backroads, which was created using React JS and designed to function like a tour website.",
    image_detail: Feature,
    image_detail2: Services,
    image_detail3: AboutUs,
    language: "React JS",
    date_job: "April 2023",
  },
  {
    id: 8,
    image: SimpleCurencyConverterFront,
    title: "Simple Currency Converter",
    category: "Backend Developer",
    detail_job:
      "I enrolled in a Udemy course called 'Android O App Development using Java & Kotlin - build real apps'. As part of the course, I developed a basic currency converter app that can convert input values in Rupiah to USD and display the result as a toast message.",
    image_detail: SimpleCurencyConverter,
    language: "Java (Android Studio)",
    date_job: "April 2023",
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
  {
    id: 10,
    image: DataScience0,
    title: "Descriptive Statistic",
    category: "data science",
    detail_job:
      "I enrolled in an online course called 'The Data Science Course 2023: Complete Data Science Bootcamp' on Udemy. During the course, I focused on learning about statistics in detail. One of the practical exercises I completed was related to descriptive statistics. In this exercise, I was given a dataset to work with and had to analyze it based on specific requirements provided by the course instructors.",
    date_job: "April 2023",
    image_detail: DataScience1,
    image_detail2: DataScience2,
    language: "Excel",
  },
  {
    id: 11,
    image: DataScience0,
    title: "Z-value",
    category: "data science",
    detail_job:
      "I took an online course on Udemy called 'The Data Science Course 2023: Complete Data Science Bootcamp'. The course focused on teaching statistics in great detail, and I participated in a practical exercise that covered Confidence Interval, Population Variance, and Z-value. For the exercise, the course instructors provided a dataset that I had to analyze based on their specific requirements.",
    date_job: "April 2023",
    image_detail: DataScience3,
    language: "Excel",
  },
  {
    id: 12,
    image: DataScience0,
    title: "Confidence Interval",
    category: "data science",
    detail_job:
      "I took an online course on Udemy called 'The Data Science Course 2023: Complete Data Science Bootcamp'. The course focused on teaching statistics in great detail, and I participated in a practical exercise that covered Confidence Interval, Population Variance, and Z-value. For the exercise, the course instructors provided a dataset that I had to analyze based on their specific requirements.",
    date_job: "April 2023",
    image_detail: DataScience4,
    image_detail2: DataScience5,
    language: "Excel",
  },
  {
    id: 13,
    image: BookStore,
    title: "Jramedia",
    category: "web design",
    detail_job:
      "I build a website with PHP and Laravel that serves as the final destination for buying books and office supplies. This website can browse a broad selection of books and office supplies, a sizable product catalog, and a safe checkout procedure. Take advantage of convenient order tracking, easy search options, and personalized recommendations",
    date_job: "Mei 2023",
    image_detail: Work15,
    language: "Laravel",
  },
];

export const projectNav = [
  {
    name: "all",
  },
  {
    name: "web design",
  },
  {
    name: "backend developer",
  },
  {
    name: "Data Science",
  },
];
