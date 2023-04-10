import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import MySkill from "../../assets/myskill.png";
import Work4 from "../../assets/work4.jpg";
import Work6 from "../../assets/work6.png";
import Work8 from "../../assets/work8.png";
import Work9 from "../../assets/work9.jpg";
import Work11 from "../../assets/work11.jpg";
import Work12 from "../../assets/work12.jpg";
import Work13 from "../../assets/work3-detail.png";
import Work14 from "../../assets/work13.png";
import Mawar from "../../assets/mawar.jpg";
import InRange from "../../assets/inrange.png";
import AboutUs from "../../assets/aboutusbackboard.png";
import Feature from "../../assets/ourservicebackboard.png";
import Services from "../../assets/toursbackroad.png";
import Vision from "../../assets/vision.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Vision Face Detection",
    image_detail: Mawar,
    image_detail2: InRange,
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
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image_detail: Feature,
    image_detail2: Services,
    image_detail3: AboutUs,
    language: "React JS",
    date_job: "April 2023",
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
