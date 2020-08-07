
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Gabriel I Okello",
  title: "Hi, I'm Gabriel",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Python | Django, Angular, Ionic, PHP | Laravel and some other cool libraries and frameworks."),
  resumeLink: "https://docs.google.com/document/d/1hX-hHgNJd1rMiB6anhmxU_BAGutTj_rleNfCmhRPpJA/edit?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/okellogabrielinnocent",
  linkedin: "https://www.linkedin.com/in/okello-gabriel-innocent-435b69a0/",
  gmail: "okellogabrielinnocent@gmail.com",
  gitlab: "https://gitlab.com/okellogabrielinnocent",
  facebook: "https://web.facebook.com/okellogabrielinnocent/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Software Enginer",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Mobile apps with Angular Ionic framework"),
    emoji("⚡  Integration of third party services such as CodeClimate/ Heroku / AWS / Digital Ocean")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Django",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Angular",
      progressPercentage: "80%"
    },
    {
      Stack: "React",
      progressPercentage: "90%"
    },
    {
      Stack: "Ionic",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Afriadd Company Limited",
      companylogo: require("./assets/images/afriadd.png"),
      date: "Feb 2020 – Present",
      desc: "Developing ronust system using Python Django, Angular, Ionic",
      // descBullets: [
      //   "Worked with IT manager to develop data collection system to get location of NSSF remiteers in Uganda using Django, Angular and Ionic framework",
      //   "Validated locations captured before the client gets them",
      //   "Trained and Monitored day to day operation of the field agents and helped when issues arise with the application"
      // ]
    },
    {
      role: "Software Engineer",
      company: "Andela",
      companylogo: require("./assets/images/Andela.png"),
      date: "November 2018 - October 2019",
      desc: "Worked with a distributed team to develop a highly scalabe web systems using Python, Django,React and GraphQL mutation and queries skills."
    },
    {
      role: "Software Engineer",
      company: "LifeStores",
      companylogo: require("./assets/images/lifestore.png"),
      date: "November 2018 - October 2019",
      desc: "Worked with a distributed team to develop a highly scalabe web systems using Python, Django,React and GraphQL mutation and queries skills."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "okellogabrielinnocent", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/nssf.png"),
      link: "https://www.nssfug.org/"
    },
    {
      image: require("./assets/images/lifestore.png"),
      link: "http://www.lifestorespharmacy.com/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Software Testing and CI",
      subtitle: "Lead a wondeful session on Software Testing and CI to over 20000 developers from different institutions.",
      image: require("./assets/images/GDG.png"),
      footerLink: [
      ]
    },
    {
      title: "Unit Testing and Test Driven Development in Python",
      subtitle: "Paid and complete a Lynda course on software testing among others",
      image: require("./assets/images/lynda.jpg"),
      footerLink: [
        // { name: "Certification", url: "http://www.lynda.com/Python-tutorials/Unit-Testing-Test-Driven-Development-Python/746314-2.html" },
        // { name: "Award Letter", url: "http://www.lynda.com/Python-tutorials/Unit-Testing-Test-Driven-Development-Python/746314-2.html" },
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@gabrielinnocentrockerfeller/restfull-apis-e9294767ad3d",
      title: "Free RESTfull API’s",
      description: "An article on the different kinds of open source API a developer can use for practice."
    },
    {
      url: "https://medium.com/@gabrielinnocentrockerfeller/how-to-adapt-5f558c20f35f",
      title: "How To Adapt",
      description: "This articles pens down how once adaptability is required if he or she is to be a good developer."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GIVE BACK TO COMMUNITY 😅"),

  talks: [
    {
      title: "Software Testing and CI/CD",
      subtitle: "GDG DevFest Mbale 2019",
      slides_url: "https://docs.google.com/presentation/d/1dHCZgksUNK6EdQnugIbAoR4dIr66QOldrZ8jU-5hmmc/edit?usp=sharing",
      event_url: "https://www.meetup.com/GDG-Mbale/photos/30439553/485985362/#485985425/"

    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["Coming Soon!"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+256-772248069",
  email_address: "okellogabrielinnocent@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "okellogabriel"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
