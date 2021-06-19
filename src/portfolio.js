
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ankit",
  title: "Hi, I'm Ankit Bharvad",
  subTitle: emoji("I Am Full Stack Software Developer having an experience of building  Web application with  M E R N  &  M E A N Stack and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1SD-r0MPgQxJgPhxn0B-0Hi4os_yGW6wK/view",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/Ankit2005",
  linkedin: "https://www.linkedin.com/in/ankit-bharvad/",
  whatsApp : "https://wa.me/+919537642005/?text=Hi, Ankit",
  gmail: "ankitmb15@gmail.com",
  facebook: "https://www.facebook.com/mgstushar",
  instagram: "https://www.instagram.com/saklain_tushar/",
  twitter: "https://twitter.com/MdSkalain/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "MongoDb ",
      fontAwesomeClassname: "fas fa-leaf mongodb",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node node"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular angular"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt css"
    },
    {
      skillName: "bootstrap4",
      fontAwesomeClassname: "fab fa-bootstrap bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js js"
    },   
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php php"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your education background

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "K.S.V University",
      desc: "Gujarat, Mehsana, Kadi",
      logo: require("./assets/images/ksvLogo.jpg"),
      subHeader: "Bachelor of Computer Applications (B.C.A)",
      duration: "September 2018 - April 2021",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Wap Institute",
      logo: require("./assets/images/wap_logo.png"),
      subHeader: "Advance Diploma In Software Engineering",
      duration: "2018 - 2021",
      desc: "Muzaffarpur, Bihar",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    }  
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Expoders Solutions",
      companylogo: require("./assets/images/expoders.jpeg"),
      date: "Jun 2019 – February 2021",
      desc: "",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
     {
       role: "Full-Stack Developer",
       company: "TOPS Infosolutions Pvt. Ltd.",
       companylogo: require("./assets/images/tops.png"),
       date: "March 2021 – Present",
       desc: ""
     }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "fc138992f81bca435e2b002d04136c881ae66491",
  githubUserName: "SaklainTushar", // Change to your github username to view your profile in Contact Section.
  showGithubProfile : "true",  // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "My Recent Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/INSHARE.png"),
      link: "https://react-in-share-front-end.herokuapp.com/"
    },
    {
      image: require("./assets/images/candidLogo.png"),
      link: "https://candidoverseas.com/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Wap Institute",
      subtitle: "Diploma In Software Engineering",
      image: require("./assets/images/wap_logo.png"),
      footerLink: [
        { name: "Certification", url: "" }
        // ,
        // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    // {
    //   title: "ACT COVID19: NATIONAL CALL Finalist",
    //   subtitle: "Developed an Android Application named HEALTH CODE BANGLADESH.Finalist from 1880 Projects from Bangladesh.",
    //   image: require("./assets/images/a2i.webp"),
    //   footerLink: [{ name: "Project is here", url: "https://callfornation.com/showcase/details/eyJpdiI6ImRrSm5hTjhIbnZkdUZOS1NrRis0L3c9PSIsInZhbHVlIjoib3JSRXdORjgxc3V1NGZnWTNhdEwyZz09IiwibWFjIjoiZjU3NDhkMGM1OWE4ODUwMmVlZjdmMWJmOWUzYTFjYWE1OTUzMmNlMDZkYzZmN2UyMWQxYWRiYTFhZTZmNTkyNiJ9" }]
    // },

    // {
    //   title: "Digital Security",
    //   subtitle: "Completed Certifcation from Deigital Security Agency.",
    //   image: require("./assets/images/degital.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "https://drive.google.com/file/d/1bqD_m50Y_GEwrNTkSQIX-b8oBHw_MmcF/view?usp=sharing" }
    //     // { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "#",
      title: "Title Here",
      description: "Description Here"
    },
    {
      url: "#",
      title: "Title Here",
      description: "Description here"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talk to Hire",
  subtitle: emoji("If you think to develop web or android application, Then you can talk to me for develop or consultancy."),

  talks: [
    {
      title: "The goal isn’t to build a website. The goal is to build your business.",
      subtitle: "connect to me with Linkedin or email",
      slides_url: "ankitmb15@gmail@gmail.com",
      event_url: "https://www.linkedin.com/in/ankit-bharvad/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "If You Want to Ask Me Something Say hi? My Inbox Is Open For All.",
  number: "+919537642005",
  emailAddress: "ankitmb15@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName : "MdSkalain", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
