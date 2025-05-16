export const socialLinks = [
  {
    href: "https://github.com/wathsalaMadanasinghe",
    label: "Github",
    iconPath: "/assets/github-logo.svg",
    description: "Check out my code repositories",
  },
  {
    href: "https://www.linkedin.com/in/wathsala-madanasinghe-916072312",
    label: "Linkedin",
    iconPath: "/assets/linkedin-logo.svg",
    description: "Connect with me professionally",
  },
  {
    href: "mailto:wathsalamadanasinghe@gmail.com",
    label: "Email",
    iconPath: "/assets/email-logo.svg",
    description: "wathsalamadanasinghe@gmail.com",
  },
  {
    href: "https://www.behance.net/chirantwathsal",
    label: "Behance",
    iconPath: "/assets/behance-logo.svg",
    description: "View my design portfolio",
  },
];

export const categories = [
  {
    id: "languages",
    title: "Languages",
    iconPath: "/assets/languages-logo.svg",
    skills: [
      {
        id: "javascript",
        title: "JavaScript",
        iconPath: "/assets/js-logo.svg",
      },
      {
        id: "html",
        title: "HTML",
        iconPath: "/assets/html-logo.svg",
      },
      {
        id: "css",
        title: "CSS",
        iconPath: "/assets/css-logo.svg",
      },
      {
        id: "mysql",
        title: "MySQL",
        iconPath: "/assets/mysql-logo.svg",
      },
    ],
  },
  {
    id: "frontend",
    title: "Front-End",
    iconPath: "/assets/front-end-logo.jpg",
    skills: [
      {
        id: "react",
        title: "React",
        iconPath: "/assets/react-logo.svg",
      },
      {
        id: "next",
        title: "Next.js",
        iconPath: "/assets/next-logo.svg",
      },
      {
        id: "tailwindcss",
        title: "TailwindCSS",
        iconPath: "/assets/ts-logo.svg",
      },
      {
        id: "shacdn",
        title: "Shadcn-ui",
        iconPath: "/assets/shadcn-logo.svg",
      },
    ],
  },
  {
    id: "backend",
    title: "Back-end",
    iconPath: "/assets/back-end-logo.svg",
    skills: [
      {
        id: "node",
        title: "Node.js",
        iconPath: "/assets/node-logo.svg",
      },
      {
        id: "express",
        title: "Epress.js",
        iconPath: "/assets/express-logo.svg",
      },
      {
        id: "firebase",
        title: "Firebase",
        iconPath: "/assets/firebase-logo.svg",
      },
      {
        id: "mysql",
        title: "MySQL",
        iconPath: "/assets/mysql-logo.svg",
      },
    ],
  },
  {
    id: "designtools",
    title: "Designing Tools",
    iconPath: "/assets/designing-logo.svg",
    skills: [
      {
        id: "figma",
        title: "Figma",
        iconPath: "/assets/figma-logo.svg",
      },
      {
        id: "ai",
        title: "Adobe Illustrator",
        iconPath: "/assets/AI-logo.svg",
      },
      {
        id: "blender",
        title: "Blender",
        iconPath: "/assets/blender-logo.svg",
      },
    ],
  },

  {
    id: "devtools",
    title: "Developing Tools",
    iconPath: "/assets/developing-logo.svg",

    skills: [
      {
        id: "vscode",
        title: "Visual Studio Code",
        iconPath: "/assets/vscode-logo.svg",
      },
      {
        id: "git",
        title: "Git and Github",
        iconPath: "/assets/git-logo.svg",
      },
      {
        id: "vercel",
        title: "Vercel (deployment)",
        iconPath: "/assets/vercel-logo.svg",
      },
    ],
  },
];

export const projects = [
  {
    id: "prepwise",
    title: "AI interview bot - Prepwise",
    description:
      "This AI-powered mock interview platform simulates real-time interview scenarios through integrated voice calls, providing a highly interactive and immersive experience. It leverages Google Gemini to deliver intelligent, context-aware responses, while Vapi enables smooth voice communication. The platform features secure user authentication and session-based data handling to protect user privacy. With a clean, responsive user interface, it ensures seamless usability across devices, and offers dynamic feedback to help users improve their communication and interview skills effectively.",
    images: "/assets/prepwise-pic.jpg",
    tags: [
      "NextJs",
      "TailwindCSS",
      "ShadCN",
      "Firestore",
      "Gemini AI-sdk",
      "Vapi Agent",
      "Firebase Auth",
    ],
    buttons: [
      {
        label: "Visit",
        type: "link",
        url: "https://ai-interview-bot-eta.vercel.app",
      },
      {
        label: "Github",
        type: "link",
        url: "https://github.com/wathsalaMadanasinghe/prepwise-ai-interview-bot.git",
      },
    ],
  },
  {
    id: "brainwave",
    title: "Open AI front-end web page- Brainwave",
    description:
      "A modern and responsive OpenAI-themed frontend developed with React and Tailwind CSS, this project delivers a polished and interactive user experience. It features smooth scrolling and parallax effects that enhance visual engagement, while thoughtfully designed UI components ensure intuitive navigation. The layout adapts seamlessly across devices, maintaining visual clarity and responsiveness from desktops to mobile screens. Leveraging reusable styled components, clean code practices, and a modular structure, the project emphasizes performance, scalability, and aesthetic appeal making it ideal for showcasing AI-driven applications or portfolios.",
    images: "/assets/brianwave-pic.jpg",
    tags: ["ReactJs", "TailwindCSS"],
    buttons: [
      {
        label: "Visit",
        type: "link",
        url: "https://brainwave-practice.vercel.app",
      },
      {
        label: "Github",
        type: "link",
        url: "https://github.com/wathsalaMadanasinghe/brainwave_practice.git",
      },
    ],
  },
  {
    id: "doodlebuddy",
    title: "Smart Drawing assistance - DoodleBuddy",
    description:
      "An interactive system that helps artists keep their drawings clean by detecting hand position using ultrasonic sensors. A motorized cover rolls up automatically to protect unused areas of the drawing board, enhancing focus and cleanliness during the creative process. This project was supervised by Dr. Ravindra De Silva (Head of the department, Department of computer science, University of Sri Jayawardenapura)",
    images: "/assets/doodlebuddy-pic.jpg",
    tags: [
      "NextJs",
      "TailwindCSS",
      "ShadCN",
      "Firestore",
      "Gemini AI-sdk",
      "Vapi Agent",
      "Firebase Auth",
    ],
    buttons: [{ label: "View", type: "video", url: "/assets/hci-video.mp4" }],
  },
  {
    id: "pydata",
    title: "PyData Python Group Project",
    description:
      "A collaborative data science project organized by the Mathematics Society of the University of Sri Jayewardenepura. Our team worked together to explore and analyze real-world datasets using Python, applying techniques such as data cleaning, statistical analysis, and data visualization with libraries like Pandas, NumPy, Matplotlib, and Seaborn. Through this project, we gained hands-on experience in solving practical problems, drawing meaningful insights from data, and presenting our findings through visual dashboards and reports. The project also strengthened our collaboration and communication skills, as we worked closely as a team to meet deadlines, share tasks efficiently, and learn from each other's strengths.",
    images: "/assets/pydata-pic.jpg",
    tags: [],
    buttons: [
      {
        label: "View Certificate",
        type: "image",
        url: "/assets/pydata-certificate.png",
      },
      {
        label: "Github",
        type: "link",
        url: "https://github.com/NimWick638/The-Wheels-in-Motion-Group-06.git",
      },
    ],
  },
];
