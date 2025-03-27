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
