/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jevinson",
  title: "Hi all, I'm Jev",
  subTitle: emoji(
    "A passionate Web Developer 🚀 having an experience of building Web applications with JavaScript / PHP and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jevinsonlim",
  linkedin: "https://www.linkedin.com/in/jevinson-lim/",
  gmail: "limjevinson@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "WEB APP DEVELOPER WHO ENJOYS LEARNING VARIOUS TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Create back-end features for complex systems"),
    emoji(
      "⚡ Integrate third party API services"
    ),
    emoji(
      "⚡ Optimize database operations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML 5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React JS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "CodeIgniter",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bulacan State Univertisy",
      logo: require("./assets/images/bulacanStateUniversity.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "2014 - 2017",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Digital Room (Philippines) Inc.",
      companylogo: require("./assets/images/digitalRoomIncLogo.jfif"),
      date: "May 2023 – October 2023",
      // desc: "I\'ve successfully developed full-stack features for several e-commerce websites. My focus includes designing reusable components that strictly adhere to coding standards, ensuring their integration across multiple projects. Furthermore, I specialize in creating SEO-friendly, accessible, and customizable page templates tailored for our in-house content management system.",
      descBullets: [
        "Developed full stack features for several e-commerce websites.",
        "Designed reusable, well-tested and coding-standards-based components that are utilized by multiple projects.",
        "Created SEO-friendly, accessible and customizable page templates for the in-house content management system."
      ]
    },
    {
      role: "Software Developer",
      company: "NMGResources Inc.",
      companylogo: require("./assets/images/nmgResourcesIncLogo.jfif"),
      date: "May 2021 – May 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developed frontend and backend features while working on 6 projects for 7 clients.",
        "Introduced modern technologies and best practice standards to legacy projects, improving code readability and maintainability.",
        "Led the development of a system redesign, migration and optimization.",
        "Collaborated with different teams to deliver products via agile methodologies.",
        "Designed and implemented UI and user stories.",
        "Performed database design and maintenance."
      ]
    },
    {
      role: "Junior Software Developer",
      company: "Sandman Software Systems Inc.",
      companylogo: require("./assets/images/sandmanSoftwareSystemsInc.png"),
      date: "Jan 2020 – May 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developed full stack features of existing or new web applications.",
        "Designed and managed databases.",
        "Developed and integrated various APIs.",
        "Refactored codes for legacy projects to increase maintainability."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME NOTABLE PROJECTS I CONTRIBUTED TO",
  projects: [
    // {
    //   image: require("./assets/images/uprintingLogo.png"),
    //   projectName: "UPrinting",
    //   // projectDesc: "UPrinting started in 2005 when e-commerce was finding its foothold online. Since then, we have grown and expanded to become the go-to printing company for small, medium and large business alike.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://www.uprinting.com/"
    //     }
    //   ],
    //   role: 'Full Stack Developer'
    // },
    // {
    //   image: require("./assets/images/nextdayFlyers.jfif"),
    //   projectName: "NextDayFlyers",
    //   // projectDesc: "NextDayFlyers is an industry-leading online print company that provides businesses—big and small—high-quality custom products at competitive prices.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://www.nextdayflyers.com/"
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/botbenta.png"),
      projectName: "Bot BEnTA",
      projectDesc: "Bot Enabled Tindahan Assistant integrates bot chats to your online store for better customer engagement.",
      involvement: "Support and development",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.botbenta.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/urcUniversalRobina.png"),
      projectName: "URC Bot BEntA",
      projectDesc: "Online B2B e-commerce site for your local tindahan nationwide.",
      involvement: "From start to production",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://urc.botbenta.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/zingMallLogo.png"),
      projectName: "Zing Mall",
      projectDesc: "A multi-tenant e-commerce platform.",
      involvement: "From start to production",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.botbenta.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pandimanLogo.png"),
      projectName: "Pandiman Case Management System",
      projectDesc: "A case management system that handles claims and records related to Case Handlers workload.",
      involvement: "From start to production",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    }, {
      image: require("./assets/images/qcebizLogo.png"),
      projectName: "QC BPLD Unified Business Permit Application System",
      projectDesc: "An online processing system for business permit application.",
      involvement: "From start to UAT",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://quezoncity.gov.ph/program/qc-biz-easy/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Front End Development Libraries Certification",
      subtitle: "",
      image: require("./assets/images/freeCodeCamp.png"),
      imageAlt: "freeCodeCamp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/Jevinson/javascript-algorithms-and-data-structures"
        }
      ]
    },
    {
      title: "JavaScript Algorithms and Data Structures Certification",
      subtitle: "",
      image: require("./assets/images/freeCodeCamp.png"),
      imageAlt: "freeCodeCamp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/Jevinson/front-end-development-libraries"
        }
      ]
    },
    {
      title: "Back End Development and APIs Certification",
      subtitle: "",
      image: require("./assets/images/freeCodeCamp.png"),
      imageAlt: "freeCodeCamp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/Jevinson/back-end-development-and-apis"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+639501581708",
  email_address: "limjevinson@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
