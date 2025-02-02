// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "My growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-the-invisible-invaders-exploring-the-battlefield-within",
      
        title: "The Invisible Invaders: Exploring the Battlefield Within",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/The-Invisible-Invaders/";
        
      },
    },{id: "news-seminar-ii",
          title: 'Seminar II',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Seminar2/";
            },},{id: "news-phd-colloquim-expected-sparkles-smile",
          title: 'PhD Colloquim expected! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-bayesian-risk-assesment-using-cybersecurity-data",
          title: 'Bayesian Risk Assesment Using Cybersecurity Data',
          description: "In this project, we compute the probabilistic risk of exploitation for different assets using Bayesian Network.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/BayesianRisk/";
            },},{id: "projects-numerical-simulation-of-a-two-stage-rocket",
          title: 'Numerical Simulation of a Two-Stage Rocket',
          description: "This project simulates the vertical flight of a two-stage rocket by solving a system of ordinary differential equations (ODEs) numerically using scipy.integrate.solve_ivp with the RK45 method.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ODESimualtion/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%62%68%61%6E%75%70%72%61%6B%61%73%68%32%33%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dbhanuprakash233", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dbhanuprakash233", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0240-2962", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Bhanu-Prakash-50/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=uh1ZaA8AAAAJ", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/919989551935", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/dnvbprakash", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
