// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-opportunities",
          title: "Opportunities",
          description: "Research opportunities in the Zhou Quantum Lab at UMass Amherst.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/opportunities/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "projects-circuit-qed-quantum-sensing",
          title: 'Circuit QED Quantum Sensing',
          description: "Using superconducting qubits and resonators to probe collective excitations and phase transitions in correlated and topological materials.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cqed-sensing/";
            },},{id: "projects-electron-quantum-optics",
          title: 'Electron Quantum Optics',
          description: "Developing coherent electronic platforms that connect mobile electrons, quantum materials, and superconducting circuits.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electron-quantum-optics/";
            },},{id: "projects-materials-enabled-quantum-device",
          title: 'Materials-Enabled Quantum Device',
          description: "Designing quantum devices whose coherence and functionality emerge from the properties of the material itself.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quantum-devices/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%6F%78%69%6E%7A%68%6F%75@%75%6D%61%73%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/haoxin-zhou-b8b57089", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=whU2OAkAAAAJ", "_blank");
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
