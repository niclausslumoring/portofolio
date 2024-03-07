import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/timedoor.png";
import Work4 from "../../assets/work4.png";
import Work6 from "../../assets/work6.png";
import Work8 from "../../assets/work8.png";
import Work9 from "../../assets/work9.jpg";
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
import DataScience0 from "../../assets/365-Data-Science.png";
import BookStore from "../../assets/bookstore.png";
import Work15 from "../../assets/work14.png";
import AndoridProject from "../../assets/top features.png";
import AndoridProject2 from "../../assets/tf2.png";
import BannerLogin from "../../assets/bannerloginpage.jpg";
import UAPnlp from "../../assets/UAPnlp.png";
import BannerUAPnlp from "../../assets/bannerNLPUAP.jpg";
import PaperStock from "../../assets/paper.png";
import PaperBanner from "../../assets/paperbanner.png";
import IcosdaCertificate from "../../assets/icosda.png";
import ZapBanner from "../../assets/zap-banner.png";
import ZapEstore from "../../assets/e-store.png";
import ZapFAQLiputan from "../../assets/faq-liputan.png";
import ZapArticle from "../../assets/article.png";
import JoindoLogo from "../../assets/jeh-logo.png";
import Joindo1 from "../../assets/joindo1.png";
import Joindo2 from "../../assets/joindo2.png";
import Joindo3 from "../../assets/joindo3.png";
import CyberLogo from "../../assets/cyberlogo.png";
import cyber1 from "../../assets/cyber1.png";
import cyber2 from "../../assets/cyber2.png";
import cyber3 from "../../assets/cyber3.png";
import MbLogo from "../../assets/mblogo.png";
import Mb1 from "../../assets/mb1.png";
import Mb2 from "../../assets/mb2.png";
import Mb3 from "../../assets/mb3.png";
import SkripsiLogo from "../../assets/Skripsi.png";
import Skripsi1 from "../../assets/Skripsi1.png";
import Skripsi2 from "../../assets/Skripsi2.png";
import Skrips3 from "../../assets/Skripsi3.png";

export const projectsData = [
  {
    id: 10,
    image: DataScience0,
    title: "365 Data Science",
    category: "data science",
  },
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
    detail_job_2: "Here is my documentation of implementing the use of a module I created to enable volume control through gestures.",
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
    id: 7,
    image: Work14,
    title: "Backroads Tour App",
    category: "web developer",
    detail_job: "I enrolled in a React 18 Tutorial and Projects Course (2023) on Udemy, where I worked on various projects. One of the projects I completed was a web-based app called Backroads, which was created using React JS and designed to function like a tour website.",
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
    detail_job: "I enrolled in a Udemy course called 'Android O App Development using Java & Kotlin - build real apps'. As part of the course, I developed a basic currency converter app that can convert input values in Rupiah to USD and display the result as a toast message.",
    image_detail: SimpleCurencyConverter,
    language: "Java (Android Studio)",
    date_job: "April 2023",
  },
  // {
  //   id: 9,
  //   image: Work3,
  //   title: "Game Developer [Timedoor]",
  //   category: "web developer",
  // },
  {
    id: 13,
    image: BookStore,
    title: "Jramedia",
    category: "web developer",
    detail_job:
      "I build a website with PHP and Laravel that serves as the final destination for buying books and office supplies. This website can browse a broad selection of books and office supplies, a sizable product catalog, and a safe checkout procedure. Take advantage of convenient order tracking, easy search options, and personalized recommendations",
    date_job: "Mei 2023",
    image_detail: Work15,
    language: "Laravel",
  },
  {
    id: 14,
    image: BannerUAPnlp,
    title: "Opinion Analysis",
    category: "data science",
    detail_job:
      "I create a menu. So basicly there is 2 data set, first one is postive text dataaset and the second one is negative text dataset. So the menu include 2 option. The fist one is to input opinion that want to be analyze. And the second one is print all the list opinion inputed, and let user choose first, after that the opinion choosed will be analyze categorized as positive or negative",
    date_job: "June 2023",
    image_detail: UAPnlp,
    language: "Python",
  },
  {
    id: 15,
    image: BannerLogin,
    title: "Jsteam",
    category: "backend developer",
    detail_job: "I build a android application using android studio. This app that i build is called jsteam, so jsteam is the app to see game list and you can review on that game also. You can see jsteam location, also the login verification require OTP",
    date_job: "Mei 2023",
    image_detail: AndoridProject2,
    image_detail2: AndoridProject,
    language: "Java",
  },
  {
    id: 16,
    image: PaperBanner,
    title: "Forecasting Stock Price Paper",
    category: "data science",
    detail_job:
      "With the increasing popularity of stock trading, individuals, and financial entities such as investment companies, hedge funds, and retail investors are actively participating in the stock market to generate profits. Numerous strategies, ranging from traditional methods employing fundamental and technical analysis to modern approaches utilizing cutting-edge technology, have been developed and implemented. However, determining the optimal method remains challenging. Designing an effective strategy in the complex and dynamic stock market environment poses significant difficulties. Therefore, this study aims to provide an overview of machine learning applications in the stock market and identify the most frequently used machine learning models or methods for market prediction. Furthermore, the study aims to identify the strategy that achieves the highest accuracy in predicting stock prices. Based on a systematic literature review encompassing quantitative and qualitative analyses, it is found that Support Vector Machine (SVM) emerges as the most popular machine learning technique for predicting stock prices. However, Long Short-Term Memory (LSTM) stands out as the machine learning technique that demonstrates the highest level of accuracy, achieving an impressive accuracy rate of 99.58%. These findings highlight the effectiveness of LSTM in forecasting stock values with exceptional precision. The results of this study contribute to a comprehensive understanding of machine learning in the stock market domain and offer valuable insights for developing effective trading strategies. Traders and investors can leverage LSTM and SVM techniques to enhance their stock market predictions and make informed investment decisions.",
    date_job: "Mei 2023",
    image_detail: PaperStock,
    image_detail2: IcosdaCertificate,
    link: "https://binusianorg-my.sharepoint.com/personal/niclauss_lumoring_binus_ac_id/_layouts/15/guestaccess.aspx?share=EWNQNr2sElpAjVBkBJRN2uQBrdg9GrUpV_ZuMqz-BwUmFw&e=MAFndc",
    link_placeholder: "See Paper",
    language: "Python",
  },
  {
    id: 17,
    image: ZapBanner,
    title: "ZAP Klinik Kecantikan",
    category: "web developer",
    detail_job:
      "My task involves developing the Zap Klinik Kecantikan's website using the Tailwind CSS framework. This project encompasses various essential pages, including a captivating banner that sets the tone for the entire website. Additionally, I'm creating the Liputan page, ensuring it's informative and engaging. The FAQ page will provide users with answers to common queries, while the Article Page will be a platform for informative content. Lastly, the E-Store page will allow seamless online shopping. Throughout this project, a key focus is ensuring that all these pages are not only visually appealing but also fully responsive, delivering an excellent user experience across different devices and screen sizes.",
    date_job: "August 2023",
    image_detail: ZapEstore,
    image_detail2: ZapFAQLiputan,
    image_detail3: ZapArticle,
    language: "Tailwind",
    link_placeholder: "See Full Website",
    link: "https://zapclinic.com/",
  },
  {
    id: 18,
    image: JoindoLogo,
    title: "Joindeh",
    category: "web developer",
    detail_job:
      "My assignment entails building the Joindeh website utilizing the Tailwind CSS framework. I've ensured that all pages on the site are responsive, tailored specifically for mobile and laptop screens. I translated the design from Figma into code and deployed it using hosting services.",
    date_job: "February 2024",
    image_detail: Joindo1,
    image_detail2: Joindo2,
    image_detail3: Joindo3,
    language: "Tailwind",
    link_placeholder: "See Full Website",
    link: "https://joindeh.com/",
  },
  {
    id: 19,
    image: CyberLogo,
    title: "Cyberspace",
    category: "web developer",
    detail_job:
      "My assignment entails building the Cyberspace website utilizing the Tailwind CSS framework. I've ensured that all pages on the site are responsive, tailored specifically for mobile and laptop screens. I translated the design from Figma into code and deployed it using hosting services.",
    date_job: "February 2024",
    image_detail: cyber1,
    image_detail2: cyber2,
    image_detail3: cyber3,
    language: "Tailwind",
    link_placeholder: "See Full Website",
    link: "https://www.cyberspace.co.id/",
  },
  {
    id: 20,
    image: SkripsiLogo,
    title: "My Thesis",
    category: "data science",
    detail_job:
      "In its evolution, the agricultural industry in Indonesia requires advanced technology, particularly in the field of AI. One application is the use of AI in image classification for sorting tomato ripeness. Manual sorting of tomato ripeness proves ineffective and inefficient, prompting the development of an automatic tomato sorting application based on the EfficientNetB0 model. The initial stage involves comparing various CNN models, including VGG-16, VGG-19, ResNet-50, EfficientNetB0, and a custom CNN model. The accuracy results are as follows, in order: 93%, 94%, 42%, 98%, and 48.2%. EfficientNetB0 emerges as the most accurate model from the comparison. Consequently, this model will be deployed as an application to automate the classification of tomato ripeness levels. ",
    date_job: "February 2024",
    image_detail: Skripsi1,
    image_detail2: Skripsi2,
    image_detail3: Skrips3,
    language: "Python",
  },
  {
    id: 21,
    image: MbLogo,
    title: "Makeblock",
    category: "web developer",
    detail_job:
      "My assignment entails building the Makeblock website utilizing the Tailwind CSS framework. I've ensured that all pages on the site are responsive, tailored specifically for mobile and laptop screens. I translated the design from Figma into code and deployed it using hosting services. ",
    date_job: "February 2024",
    image_detail: Mb1,
    image_detail2: Mb2,
    image_detail3: Mb3,
    language: "Tailwind",
    link_placeholder: "See Full Website",
    link: "https://makeblock.vercel.app/index.html",
  },
];

export const projectNav = [
  {
    name: "all",
  },
  {
    name: "web developer",
  },
  {
    name: "backend developer",
  },
  {
    name: "Data Science",
  },
];
