//data for parallax effect 
export const products = [
  {
    title: "PravasiPath",
    link: "https://pravasipath.netlify.app",
    thumbnail: "/Pravaipath.png",
  },
  {
    title: "HireView",
    link: "https://hire-view-ehshan.vercel.app",
    thumbnail: "/Hireview.png",
  },
  {
    title: "Fingenie",
    link: "https://drive.google.com/file/d/1Q-XKO9OJHx1VL-s2EZl5qY3pwTA90CE1/view?usp=sharing",
    thumbnail: "/Fingenie.png",
  },
  {
    title: "SevaSamarth",
    link: "/products/rogue",
    thumbnail: "/Sevasamarth.png",
  },
  {
    title: "GreenMind",
    link: "https://youtu.be/SrxGfVA_-V8",
    thumbnail: "/Greenmind.jpg",
  },
  {
    title: "ELearning",
    link: "/products/rogue",
    thumbnail: "/ELearning.png",
  },
  {
    title: "LinkOMatic",
    link: "https://link-o-matic.vercel.app/",
    thumbnail: "/Linkomatic.png",
  },
  {
    title: "RushLess",
    link: "https://drive.google.com/file/d/1K4qwthAsoI-VMZy1RwBq-8OZEntbrC6D/view?usp=sharing",
    thumbnail: "/RushLess.png",
  },
  {
    title: "Narrato",
    link: "https://narrato-zeta.vercel.app",
    thumbnail: "/Narrato.png",
  },
  {
    title: "Atomix",
    link: "/products/rogue",
    thumbnail: "/HotelWebsite.png",
  },
];

//items for bento grid section
export const gridItems = [
  {
    id: 1,
    title: "Seamless networking fosters innovation, teamwork, and growth",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/collaboration.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Available in your time zone",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b4.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

//coordinates for map
const DELHI = { lat: 28.6139, lng: 77.2090 };
export const sampleDots = [
  // Delhi to New York
  {
    start: DELHI,
    end: { lat: 40.7128, lng: -74.0060, label: "New York" }
  },
  // Delhi to London
  {
    start: DELHI,
    end: { lat: 51.5074, lng: -0.1278, label: "London" }
  },
  // Delhi to Tokyo
  {
    start: DELHI,
    end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" }
  },
  // Delhi to Sydney
  {
    start: DELHI,
    end: { lat: -33.8688, lng: 151.2093, label: "Sydney" }
  },
  // Delhi to Dubai
  {
    start: DELHI,
    end: { lat: 25.2048, lng: 55.2708, label: "Dubai" }
  },
  // Delhi to Singapore
  {
    start: DELHI,
    end: { lat: 1.3521, lng: 103.8198, label: "Singapore" }
  }
];


// Experience data
export interface Experience {
  id: number
  date: string
  title: string
  company: string
  location: string
  description: string
  items: string[]
  images: string[]
  duration: string
  role: string
  technologies: string[]
  achievements: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
}

export const experiencesHome: Experience[] = [
  {
    id: 1,
    date: "Zordie AI",
    title: "Full Stack Intern",
    company: "Zordie AI",
    location: "Remote",
    description: "Currently working as a full stack intern to contribute to the development of AI-based solutions.",
    items: [
      "Building scalable web applications with React and Next.js",
      "Collaborating with the backend team to integrate APIs",
      "Assisting with database management and optimization",
      "Implementing UI/UX improvements to enhance user experience",
      "Contributing to documentation and team discussions"
    ],
    images: [
      "/zordie1.png",
      "/zordie2.png",
      "/zordie3.png",
    ],
    duration: "April 2025 - Present",
    role: "Intern",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
    achievements: [
      "Actively contributing to a live project with real-time updates",
      "Learning full-stack development in a high-paced environment",
      "Receiving mentorship and guidance from senior engineers"
    ],
    testimonial: {
      quote: "The internship at Zordie AI is helping me grow as a full stack developer, allowing me to learn from experienced professionals.",
      author: "Mohammad Ehshan",
      position: "Intern at Zordie AI"
    },
  },
  {
    id: 2,
    date: "HackHazard'25",
    title: "Mentor",
    company: "HackHazard'25",
    location: "Virtual",
    description: "Mentored over 12,000 participants, guiding them through their projects, offering technical advice.",
    items: [
      "Provided mentorship to students from various backgrounds",
      "Conducted workshops on full-stack development and problem-solving",
      "Assisted participants in debugging and improving their code",
      "Helped teams with project ideation and implementation",
      "Offered career guidance and advice to budding developers"
    ],
    images: [
      "/mentor3.png",
      "/mentor2.jpg",
      "/mentor1.png",
    ],
    duration: "March 2025",
    role: "Mentor",
    technologies: ["React", "Node.js", "JavaScript", "GitHub", "Hackathon Mentorship"],
    achievements: [
      "Mentored over 12000 participants and helped them succeed in their projects",
      "Led multiple coding sessions and workshops during the event",
      "Received positive feedback from participants for clear and concise mentorship"
    ],
    testimonial: {
      quote: "Being a mentor at HackHazard'25 was an incredible experience. Helping thousands of developers grow and solve real-world problems was very rewarding.",
      author: "Mohammad Ehshan",
      position: "Mentor at HackHazard'25"
    },
  },
  {
    id: 3,
    date: "Avinya'25",
    title: "Runner-Up",
    company: "Avinya'25",
    location: "Virtual",
    description: "Secured runner-up position in Avinya'25, a hackathon with more than 2000+ participants.",
    items: [
      "Developed a full-stack solution with real-time data analytics",
      "Collaborated with a team of developers and designers",
      "Implemented a complex algorithm for data processing",
      "Used cloud technologies for scalability and storage",
      "Demonstrated the project to a panel of judges and received high praise"
    ],
    images: [
      "/avinya1.jpg",
      "/avinya2.jpg",
      "/avinya3.jpg",
    ],
    duration: "February 2025",
    role: "Participant/Runner-Up",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "JavaScript"],
    achievements: [
      "Secured runner-up position in a hackathon with 2000+ participants",
      "Built a fully functional web app within a 48-hour time frame",
      "Worked under tight deadlines and demonstrated strong teamwork"
    ],
    testimonial: {
      quote: "The hackathon was an intense and challenging experience that helped me push my limits and grow as a developer. I'm proud of the outcome.",
      author: "Mohammad Ehshan",
      position: "Runner-Up at Avinya'25"
    },
  }
]

export const experiences: Experience[] = [
  {
    id: 1,
    date: "Zordie AI",
    title: "Full Stack Intern",
    company: "Zordie AI",
    location: "Remote",
    description: "Currently working as a full stack intern to contribute to the development of AI-based solutions.",
    items: [
      "Building scalable web applications with React and Next.js",
      "Collaborating with the backend team to integrate APIs",
      "Assisting with database management and optimization",
      "Implementing UI/UX improvements to enhance user experience",
      "Contributing to documentation and team discussions"
    ],
    images: [
      "/zordie1.png",
      "/zordie2.png",
      "/zordie3.png",
    ],
    duration: "April 2025 - Present",
    role: "Intern",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
    achievements: [
      "Actively contributing to a live project with real-time updates",
      "Learning full-stack development in a high-paced environment",
      "Receiving mentorship and guidance from senior engineers"
    ],
    testimonial: {
      quote: "The internship at Zordie AI is helping me grow as a full stack developer, allowing me to learn from experienced professionals.",
      author: "Mohammad Ehshan",
      position: "Intern at Zordie AI"
    },
  },
  {
    id: 2,
    date: "HackHazard'25",
    title: "Mentor",
    company: "HackHazard'25",
    location: "Virtual",
    description: "Mentored over 12,000 participants, guiding them through their projects, offering technical advice.",
    items: [
      "Provided mentorship to students from various backgrounds",
      "Conducted workshops on full-stack development and problem-solving",
      "Assisted participants in debugging and improving their code",
      "Helped teams with project ideation and implementation",
      "Offered career guidance and advice to budding developers"
    ],
    images: [
      "/mentor3.png",
      "/mentor2.jpg",
      "/mentor1.png",
    ],
    duration: "March 2025",
    role: "Mentor",
    technologies: ["React", "Node.js", "JavaScript", "GitHub", "Hackathon Mentorship"],
    achievements: [
      "Mentored over 12000 participants and helped them succeed in their projects",
      "Led multiple coding sessions and workshops during the event",
      "Received positive feedback from participants for clear and concise mentorship"
    ],
    testimonial: {
      quote: "Being a mentor at HackHazard'25 was an incredible experience. Helping thousands of developers grow and solve real-world problems was very rewarding.",
      author: "Mohammad Ehshan",
      position: "Mentor at HackHazard'25"
    },
  },
  {
    id: 3,
    date: "Avinya'25",
    title: "Runner-Up",
    company: "Avinya'25",
    location: "Virtual",
    description: "Secured runner-up position in Avinya'25, a hackathon with more than 2000+ participants.",
    items: [
      "Developed a full-stack solution with real-time data analytics",
      "Collaborated with a team of developers and designers",
      "Implemented a complex algorithm for data processing",
      "Used cloud technologies for scalability and storage",
      "Demonstrated the project to a panel of judges and received high praise"
    ],
    images: [
      "/avinya1.jpg",
      "/avinya2.jpg",
      "/avinya3.jpg",
    ],
    duration: "February 2025",
    role: "Participant/Runner-Up",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "JavaScript"],
    achievements: [
      "Secured runner-up position in a hackathon with 2000+ participants",
      "Built a fully functional web app within a 24-hour time frame",
      "Worked under tight deadlines and demonstrated strong teamwork"
    ],
    testimonial: {
      quote: "The hackathon was an intense and challenging experience that helped me push my limits and grow as a developer. I'm proud of the outcome.",
      author: "Mohammad Ehshan",
      position: "Runner-Up at Avinya'25"
    },
  },
  {
    id: 4,
    date: "CodeForge Hackathon",
    title: "Finalist",
    company: "Microsoft (Gurgaon)",
    location: "Microsoft Gurgaon",
    description: "Finalist at CodeForge: WebForge Edition powered by DoraHacks, pitching 'Rushless' — a smart traffic solution to India's urban congestion crisis.",
    items: [
      "Qualified from over 750+ teams through multiple selection rounds",
      "Developed a prototype to optimize traffic using AI, IoT and real-time data",
      "Used YOLOv8 for crash detection and ESP32 for encrypted emergency overrides",
      "Presented a 2-minute final pitch to judges at Microsoft Gurgaon",
      "Proposed a smart parking marketplace with number plate verification"
    ],
    images: [
      "/codeforge1.jpg",
      "/codeforge2.jpg",
      "/codeforge3.jpg",
    ],
    duration: "April 17, 2025",
    role: "Finalist",
    technologies: ["YOLOv8", "ESP32", "Encrypted Bluetooth", "Next.js", "MongoDB", "Leaflet", "Roboflow"],
    achievements: [
      "Reached the final pitch round at Microsoft HQ",
      "Built a prototype for smart city traffic management",
      "Received valuable feedback on scalability & execution challenges"
    ],
    testimonial: {
      quote: "We aimed to solve real-world traffic chaos through Rushless — a fusion of AI, IoT, and civic insight. The experience was intense and eye-opening.",
      author: "Mohammad Ehshan",
      position: "Finalist, CodeForge Hackathon"
    }
  },
  {
    id: 5,
    date: "0 to 1 Hackathon",
    title: "Participant",
    company: "IIIT Delhi",
    location: "IIIT Delhi",
    description: "Participated in the Finance track of 0 to 1 Hackathon, experiencing both highs of inspiration and lows of mismanagement.",
    items: [
      "Built a finance-based prototype despite disorganized hackathon structure",
      "Adapted quickly as planned feedback rounds were canceled mid-event",
      "Listened to a keynote from GeeksforGeeks founder Sandeep Jain",
      "Learned about the value of patience and perseverance",
      "Identified key issues in hackathon event management"
    ],
    images: [
      "/0to11.jpg",
      "/0to12.jpg",
      "/0to13.jpg",
    ],
    duration: "March 2025",
    role: "Participant",
    technologies: ["JavaScript", "Node.js", "React"],
    achievements: [
      "Adapted to sudden structural changes in the hackathon",
      "Gained insights from industry leaders",
      "Learned the importance of both passion and time management"
    ],
    testimonial: {
      quote: "Sometimes you learn more from things that go wrong. This event taught me how chaos tests creativity and resilience.",
      author: "Mohammad Ehshan",
      position: "Participant at 0 to 1 Hackathon"
    }
  },
  {
    id: 6,
    date: "HackWithImpact",
    title: "Participant",
    company: "HackWithImpact",
    location: "IIIT",
    description: "Built an IoT-based emergency traffic light override system and explored innovations from all over India.",
    items: [
      "Created an IoT solution to allow authorized emergency vehicles to control traffic lights",
      "Used encrypted Bluetooth communication with ESP microcontrollers",
      "Witnessed cutting-edge innovations like mind-controlled wheelchairs and vehicle platooning",
      "Competed against top national teams in the IoT track",
      "Learned the power of interdisciplinary solutions in traffic and accessibility"
    ],
    images: [
      "/hackwithimpact1.jpg",
      "/hackwithimpact2.jpg",
      "/hackwithimpact3.jpg",
    ],
    duration: "February 2025",
    role: "Participant",
    technologies: ["ESP32", "Encrypted Bluetooth", "IoT", "Hardware Programming"],
    achievements: [
      "Built first-ever IoT project for smart emergency vehicle response",
      "Gained exposure to high-level IoT innovations across India",
      "Understood how emerging tech can improve public infrastructure"
    ],
    testimonial: {
      quote: "HackWithImpact showed me how innovation and empathy can intersect — especially in civic infrastructure.",
      author: "Mohammad Ehshan",
      position: "Participant at HackWithImpact"
    }
  },
  {
    id: 7,
    date: "Hack’24",
    title: "Participant",
    company: "IIIT Delhi",
    location: "IIIT Delhi",
    description: "Took on the challenge of learning Docker and integrating it into a working system within 24 hours during Hack'24.",
    items: [
      "Learned and implemented Docker from scratch during the hackathon",
      "Integrated Docker with Node.js and MongoDB for system containerization",
      "Built an Information Integration System under tight deadlines",
      "Balanced intense development with personal commitments during Ramzan",
      "Gained hands-on experience with real-world devops tools"
    ],
    images: [
      "/code241.jpg",
      "/code242.jpg",
      "/code243.jpg",
    ],
    duration: "2025",
    role: "Participant",
    technologies: ["Docker", "Node.js", "MongoDB"],
    achievements: [
      "Deployed a functional project using Docker in under 24 hours",
      "Demonstrated fast learning and adaptability under pressure",
      "Managed development while fasting — proving mental resilience"
    ],
    testimonial: {
      quote: "Hack’24 proved that when you're thrown into the deep end, you learn fast — especially with Docker and devops tools.",
      author: "Mohammad Ehshan",
      position: "Participant at Hack24"
    }
  },
  {
    id: 8,
    date: "Cube Innovators",
    title: "Finalist",
    company: "TRYST, IIT Delhi",
    location: "IIT Delhi",
    description: "Secured 5th position at Code Innovators hackathon by building an AI-Powered Career Mapping Tool for tech undergraduates.",
    items: [
      "Developed prototype using Next.js, Python, LangChain, and Generative AI",
      "Created career path recommendation system with interactive elements",
      "Pitched solution to CEO of WsCube Tech during finals",
      "Worked under 24-hour deadline with intense brainstorming sessions",
      "Experienced IIT Delhi's innovation culture during fest season"
    ],
    images: [
      "/cubeinnovators1.jpg",
      "/cubeinnovators2.jpg",
      "/cubeinnovators3.jpg",
    ],
    duration: "March 11-12, 2025",
    role: "Finalist",
    technologies: ["Next.js", "Python", "LangChain", "Generative AI", "LLM"],
    achievements: [
      "Secured 5th position among national competitors",
      "Built functional prototype within 24 hours",
      "Gained experience pitching to industry leaders",
      "Networked with IIT Delhi's innovation community"
    ],
    testimonial: {
      quote: "Code Innovators taught me that impossible deadlines reveal true potential. Stepping into unknown tech territories accelerates growth.",
      author: "Mohammad Ehshan",
      position: "Finalist at Code Innovators"
    }
  },
  {
    id: 9,
    date: "February 2025",
    title: "AI Storytelling Companion",
    company: "AI Horizon (SpaceCon'25)",
    location: "NSUT Delhi",
    description: "Built real-time AI emotion analysis & video generation system in 5 hours for mental health support.",
    items: [
      "Developed emotion detection through psychological inputs",
      "Created dynamic story generation with LLMs",
      "Integrated Hugging Face for AI voiceovers",
      "Implemented style customization (animation/realistic/manga)",
      "Added emergency mental health support features"
    ],
    images: [],
    duration: "February 23, 2025",
    role: "Participant",
    technologies: ["Next.js", "LLM", "Hugging Face", "Firebase", "AI Video Generation"],
    achievements: [
      "Complete working prototype in 5 hours",
      "Real-time AI pipeline from emotion detection to video output",
      "Mental health crisis intervention system",
      "Live demo available at external link"
    ],
    testimonial: {
      quote: "AI Horizon proved that tight constraints breed creativity. Building an emotional support AI in 5 hours was both challenging and rewarding.",
      author: "Mohammad Ehshan",
      position: "Participant at AI Horizon"
    }
  },
  {
    id: 10,
    date: "February 2025",
    title: "Finance Hackathon Participant",
    company: "HackFinance by ECell IIITD",
    location: "IIIT Delhi",
    description: "Developed AI-powered finance management app with focus on rural accessibility.",
    items: [
      "Built Next.js app with AI expense tracking",
      "Created financial advisory chatbot",
      "Developed call-based system for low-digital users",
      "Cleared business-focused quiz rounds",
      "Created video pitch for solution"
    ],
    images: [],
    duration: "February 15-16, 2025",
    role: "Participant",
    technologies: ["Next.js", "AI Chatbot", "Financial APIs", "Data Visualization"],
    achievements: [
      "Selected among top 30 teams",
      "Developed functional prototype with 60% weightage",
      "Learned balancing tech execution with business requirements",
      "Adapted to shifting judging priorities"
    ],
    testimonial: {
      quote: "HackFinance highlighted the complex balance between technical execution and business viability in fintech solutions.",
      author: "Mohammad Ehshan",
      position: "Participant at HackFinance"
    }
  },
  {
    id: 11,
    date: "January 2025",
    title: "Smart Traffic Solution Ideator",
    company: "Smart Delhi Ideathon",
    location: "USAR, GGSIPU",
    description: "Selected among top 125 teams (from 1000+) for traffic management solution prototype.",
    items: [
      "Presented software-based traffic control prototype",
      "Received feedback for hardware integration",
      "Attended grand finale pitches at Vigyan Bhawan",
      "Learned presentation techniques from top teams",
      "Networked with smart city innovators"
    ],
    images: [],
    duration: "January 31 - February 4, 2025",
    role: "Semi-Finalist",
    technologies: ["Prototyping", "Public Speaking", "Solution Design"],
    achievements: [
      "Cleared first selection round from 900+ teams",
      "Gave offline presentation to expert panel",
      "Learned hardware-software integration importance",
      "Gained exposure to government-level innovation"
    ],
    testimonial: {
      quote: "The Ideathon taught me that impactful solutions require both technical merit and compelling storytelling.",
      author: "Mohammad Ehshan",
      position: "Semi-Finalist at Smart Delhi Ideathon"
    }
  }
]

export function getExperienceById(id: number): Experience | undefined {
  return experiences.find((experience) => experience.id === id)
}

