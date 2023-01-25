import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed. There is more to come !",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Titanic",
      category: "Website",
      img: "images/titanic-frame.png",
      publishDate: "Mar, 2022",
      tag: "JS / Frontend / Data visualisation",
      clientTitle: "About the project",
      objectivesTitle: "Objective",
      objectivesDetails:
        "The purpose of this exercise is to tell a story through data. It can be challenging to make data visually appealing and easy to understand.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      // socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Titanic frame",
          img: "../images/titanic-frame.png",
        },
        // {
        //   id: uuidv4(),
        //   title: "Uber Project Management UI",
        //   img: "../images/web-project-1.jpg",
        // },
        // {
        //   id: uuidv4(),
        //   title: "Uber Project Management UI",
        //   img: "../images/web-project-2.jpg",
        // },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Project",
          details: "HEIG-VD",
        },
        {
          id: uuidv4(),
          title: "Year",
          details: "2nd year of Bachelor",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "titanicsfate.onrender.com",
        }
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "d3.js",
        "gsap"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Using data to create a story can be very interesting because it allows you to uncover insights and patterns that may not be immediately apparent just by looking at raw data. One popular tool for creating interactive data visualizations is d3.js. D3 is a JavaScript library that allows you to bind data to the DOM (Document Object Model) and apply transformations to the elements, creating dynamic and interactive visualizations.",
        },
        {
          id: uuidv4(),
          details:
            "With d3, you can create a wide range of visualizations, from basic bar charts and line graphs to more complex visualizations like treemaps and scatterplots. To create a story with data using d3, you can start by selecting the appropriate visualization for the data and story you want to tell, and then use the data and d3's API to create the visualization and add interactivity. It is a challenging but rewarding task to make data attractive and tell a story using data visualization. I learned a lot during this course at school. Data is not just numbers and simple charts. It can be a full story.",
        }
      ],
      // socialSharings: [
      //   {
      //     id: uuidv4(),
      //     name: "Twitter",
      //     icon: "twitter",
      //     url: "https://twitter.com/realstoman",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Instagram",
      //     icon: "instagram",
      //     url: "https://instagram.com/realstoman",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Facebook",
      //     icon: "facebook",
      //     url: "https://facebook.com/",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "LinkedIn",
      //     icon: "linkedin",
      //     url: "https://linkedin.com/",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Youtube",
      //     icon: "youtube",
      //     url: "https://www.youtube.com/c/StomanStudio",
      //   },
      // ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "Packige",
      category: "Web Application",
      img: "images/packige.png",
      publishDate: "May, 2022",
      tag: "UI / Frontend / Backends",
      clientTitle: "About the project",
      objectivesTitle: "Objectives",
      objectivesDetails:
        "Packige is a PWA project to aid HEIG-VD students in managing their schedules, grades, and class tasks. Developed using Laravel and Vue.js, it is user-friendly and efficient.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "mockup packige",
          img: "../images/packige.png",
        },
        {
          id: uuidv4(),
          title: "Presentation mockup packige",
          img: "../images/packige-app-presentation-mockup.jpg",
        },
        // {
        //   id: uuidv4(),
        //   title: "TODO Change image",
        //   img: "../images/mobile-project-2.jpg",
        // },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Project",
          details: "HEIG-VD",
        },
        {
          id: uuidv4(),
          title: "Year",
          details: "2nd year of Bachelor",
        },
        {
          id: uuidv4(),
          title: "Web application",
          details: "packige.tapasprod.ch",
        }
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Laravel",
        "VueJS",
        "SQL",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "In the development of Packige, the team's priority was to create a Progressive Web Application (PWA), which is a mobile-first web application that can also be used on desktop devices. By developing a PWA, the team aimed to create an application that would be easily accessible and convenient for students to use on-the-go. The main purpose of Packige was to help students of HEIG-VD access their schedules, grades, and class tasks easily and efficiently. By using Laravel as the backend framework, the team was able to quickly set up the necessary functionality for the project, such as user authentication, database management, and API endpoints.",
        },
        {
          id: uuidv4(),
          details:
            "For the frontend, the team chose to use Vue.js, a popular JavaScript framework for building user interfaces. Vue.js provided a lot of flexibility and ease of use, which helped the team to create a responsive design that adapted to different screen sizes, which was important for PWA.",
        },
        {
          id: uuidv4(),
          details:
            "One of the challenges the team faced during the development was integrating the frontend and backend, as well as making sure that the data flow between them was seamless. With Vue.js, the team was able to create reusable components that interacted with the API endpoints provided by Laravel, which helped to keep the code organized and maintainable.",
        },
        {
          id: uuidv4(),
          details:
            "Overall, Laravel and Vue.js proved to be a powerful combination for the development of Packige, and helped the team to create an efficient and user-friendly PWA that would help students of HEIG-VD to access their schedule, their grades and their tasks easily.",
        },
      ],
      // socialSharings: [
        // {
        //   id: uuidv4(),
        //   name: "Twitter",
        //   icon: "twitter",
        //   url: "https://twitter.com/realstoman",
        // },
      //   {
      //     id: uuidv4(),
      //     name: "Instagram",
      //     icon: "instagram",
      //     url: "https://instagram.com/emilevl",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Facebook",
      //     icon: "facebook",
      //     url: "https://facebook.com/",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "LinkedIn",
      //     icon: "linkedin",
      //     url: "https://linkedin.com/",
      //   },
      //   {
      //     id: uuidv4(),
      //     name: "Youtube",
      //     icon: "youtube",
      //     url: "https://www.youtube.com/c/StomanStudio",
      //   },
      // ],
    },
  ],
  // clientsHeading: "Some of the brands I worked with",
  // clients: [
  //   {
  //     id: uuidv4(),
  //     title: "Amazon",
  //     img: "../brands/amazon_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "Sony",
  //     img: "../brands/sony_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "Adidas",
  //     img: "../brands/adidas_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "FILA",
  //     img: "../brands/fila_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "NB",
  //     img: "../brands/nb_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "SAMSUNG",
  //     img: "../brands/samsung_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "CANON",
  //     img: "../brands/canon_gray.png",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "PUMA",
  //     img: "../brands/puma_gray.png",
  //   },
  // ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "I am a Full-Stack developer from Orvin, Switzerland. After completing an apprenticeship in computer science from 2014 to 2018, I decided to pursue a degree as a Media Engineer from 2020 to 2023. This school provided me with the soft skills and hard skills that I will need for my future job. This is because after completing this degree, I will be starting my own startup with three associates, which will require a lot of work. ",
    },
    {
      id: uuidv4(),
      bio: "I have always been fascinated by the workings behind the scenes, like in a theater: how a computer is built, how websites are developed, etc. And now, I am behind the scenes, which is a very satisfying experience for me. I am eager to take on new projects that are challenging and stimulating.",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/emilevl",
    },
    // {
    //   id: uuidv4(),
    //   name: "Twitter",
    //   icon: "twitter",
    //   url: "https://twitter.com/realstoman",
    // },
    // {
    //   id: uuidv4(),
    //   name: "Medium",
    //   icon: "book",
    //   url: "https://stoman.medium.com",
    // },
    {
      id: uuidv4(),
      name: "Instagram",
      icon: "instagram",
      url: "https://instagram.com/emilevl",
    },
    {
      id: uuidv4(),
      name: "Facebook",
      icon: "facebook",
      url: "https://facebook.com/emile.vianneyliaud",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://linkedin.com/in/vianney-liaud-emile",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    // {
    //   id: uuidv4(),
    //   value: "mobile",
    //   name: "Mobile Applicaiton",
    // },
    // {
    //   id: uuidv4(),
    //   value: "ui-ux",
    //   name: "UI/UX Design",
    // },
    {
      id: uuidv4(),
      value: "website",
      name: "Website",
    },
    // {
    //   id: uuidv4(),
    //   value: "branding",
    //   name: "Branding & Animations",
    // },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
