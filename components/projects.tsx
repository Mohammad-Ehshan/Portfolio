"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink } from "lucide-react"
import TextReveal from "./ui/tech-reveal"
import PinContainer from "./ui/pin-container"
import { IoLogoGithub } from "react-icons/io5"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // const projects = [
  //   {
  //     title: "RushLess- AI Directing Tomorrow’s Traffic",
  //     description:
  //       "Leveraging AI and IoT to revolutionize urban mobility through intelligent traffic optimization and real-time incident response",
  //     image:
  //       "/RushLess.png",
  //     techStack: ["Nextjs", "Artificial Intelligence", "IOT", "MongoDB"],
  //     liveUrl: "https://drive.google.com/file/d/1K4qwthAsoI-VMZy1RwBq-8OZEntbrC6D/view?usp=sharing",
  //     githubUrl: "https://github.com/Mohammad-Ehshan/Rushless",
  //   },
  //   {
  //     title: "GreenMindAi-Scan,Sort,Sustain",
  //     description:
  //       "Transforming waste management with AI—snap a photo to report waste, track cleanup progress, and earn rewards for a cleaner planet.",
  //     image: "/Greenmind.jpg",
  //     techStack: ["NextJs", "Artifical Intelligence", "PostgresSql","Prisma"],
  //     liveUrl: "https://youtu.be/SrxGfVA_-V8",
  //     githubUrl: "https://github.com/Mohammad-Ehshan/GreenMind",
  //   },
  //   {
  //     title: "Narrato- One Emotion At a Time",
  //     description:
  //       "Narrato transforms your words into AI-crafted video stories, tailored to your mood and mental state. Just share a prompt, and watch your emotions unfold in vivid narratives.",
  //     image:
  //       "/Narrato.png",
  //     techStack: ["Next.js", "HuggingFace", "Firebase", "PostgreSQL"],
  //     liveUrl: "https://narrato-zeta.vercel.app/",
  //     githubUrl: "https://github.com/Mohammad-Ehshan/Narrato",
  //   },
  //   {
  //     title: "HireView-Human Perfected Hires",
  //     description: "Generate dynamic questions, analyze responses in real time, and streamline hiring—all while giving candidates a seamless, modern experience.",
  //     image: "/HireView.png",
  //     techStack: ["Nextjs", "Artificial Intelligence", "ShadCn"],
  //     liveUrl: "https://hire-view-ehshan.vercel.app/",
  //     githubUrl: "https://github.com/Mohammad-Ehshan/HireView",
  //   },
  //   {
  //     title: "LinkoMatic-Turn Links Into EndLess Videos",
  //     description:"LinkOMatic instantly converts URLs into AI-generated videos—compconste with visuals, voiceovers, and captions. Perfect for creators and marketers.",
  //     image: "/Linkomatic.png",
  //     techStack: ["Nextjs", "Web Scraping" , "Hugging Face"],
  //     liveUrl: "https://link-o-matic.vercel.app",
  //     githubUrl: "https://github.com/Mohammad-Ehshan/Link-O-Matic",
  //   },
  //   {
  //     title: "FinGenie-Your Money's New Brain",
  //     description:"An AI-driven fintech platform enabling smart money management, real-time expense tracking, and automated budgeting. Optimize investments, track stocks, and stay financially disciplined effortlessly.",
  //     image: "/Fingenie.png",
  //     techStack: ["Nextjs", "AccernityUi" , "SupaBase"],
  //     liveUrl: "https://drive.google.com/file/d/1Q-XKO9OJHx1VL-s2EZl5qY3pwTA90CE1/view?usp=sharing",
  //     githubUrl: "/#",
  //   },
  //   {
  //     title: "PraviPath- Smarter Migration Starts Here",
  //     description:"PravasiPath uses AI to match migrants with jobs, skills training, and government benefits—protecting rights and building community.",
  //     image: "/Pravaipath.png",
  //     techStack: ["MongoDB", "NodeJs" , "ExpressJs" ,"ReactJs"],
  //     liveUrl: "https://pravasipath.netlify.app",
  //     githubUrl: "https://github.com/Mohammad-Ehshan/PravasiPath",
  //   },
  // ]

  const projects = [
    {
      title: "RushLess- AI Directing Tomorrow’s Traffic",
      description:
        "Leveraging AI and IoT to revolutionize urban mobility through intelligent traffic optimization and real-time incident response.",
      achievement: "🏆 2× Finalist",
      image: "/RushLess.png",
      techStack: ["Next.js", "Artificial Intelligence", "IoT", "MongoDB"],
      liveUrl:
        "https://drive.google.com/file/d/1K4qwthAsoI-VMZy1RwBq-8OZEntbrC6D/view?usp=sharing",
      githubUrl: "https://github.com/Mohammad-Ehshan/Rushless",
    },
    {
      title: "GreenMindAi-Scan,Sort,Sustain",
      description:
        "Transforming waste management with AI—snap a photo to report waste, track cleanup progress, and earn rewards for a cleaner planet.",
      achievement: "🏆 3× Finalist",
      image: "/Greenmind.jpg",
      techStack: ["Next.js", "Artificial Intelligence", "PostgreSQL", "Prisma"],
      liveUrl: "https://youtu.be/SrxGfVA_-V8",
      githubUrl: "https://github.com/Mohammad-Ehshan/GreenMind",
    },
    {
      title: "Narrato- One Emotion At a Time",
      description:
        "Narrato transforms your words into AI-crafted video stories, tailored to your mood and mental state. Just share a prompt, and watch your emotions unfold in vivid narratives.",
      achievement: "",
      image: "/Narrato.png",
      techStack: ["Next.js", "Hugging Face", "Firebase", "PostgreSQL"],
      liveUrl: "https://narrato-zeta.vercel.app/",
      githubUrl: "https://github.com/Mohammad-Ehshan/Narrato",
    },
    {
      title: "HireView-Human Perfected Hires",
      description:
        "Generate dynamic questions, analyze responses in real time, and streamline hiring—all while giving candidates a seamless, modern experience.",
      achievement: "🏆 1× Finalist",
      image: "/HireView.png",
      techStack: ["Next.js", "Artificial Intelligence", "ShadCN"],
      liveUrl: "https://hire-view-ehshan.vercel.app/",
      githubUrl: "https://github.com/Mohammad-Ehshan/HireView",
    },
    {
      title: "LinkoMatic-Turn Links Into EndLess Videos",
      description:
        "LinkOMatic instantly converts URLs into AI-generated videos—compconste with visuals, voiceovers, and captions. Perfect for creators and marketers.",
      achievement: "🏆 3× Finalist",
      image: "/Linkomatic.png",
      techStack: ["Next.js", "Web Scraping", "Hugging Face"],
      liveUrl: "https://link-o-matic.vercel.app",
      githubUrl: "https://github.com/Mohammad-Ehshan/Link-O-Matic",
    },
    {
      title: `FinGenie-Your Money New Brain`,
      description:
        "An AI-driven fintech platform enabling smart money management, real-time expense tracking, and automated budgeting. Optimize investments, track stocks, and stay financially disciplined effortlessly.",
      achievement: "🏆 1× Finalist",
      image: "/Fingenie.png",
      techStack: ["Next.js", "Accernity UI", "Supabase"],
      liveUrl:
        "https://drive.google.com/file/d/1Q-XKO9OJHx1VL-s2EZl5qY3pwTA90CE1/view?usp=sharing",
      githubUrl: "/#",
    },
    {
      title: "PraviPath- Smarter Migration Starts Here",
      description:
        "PravasiPath uses AI to match migrants with jobs, skills training, and government benefits—protecting rights and building community.",
      achievement: "🏆 1× Finalist",
      image: "/Pravaipath.png",
      techStack: ["MongoDB", "Node.js", "Express.js", "React.js"],
      liveUrl: "https://pravasipath.netlify.app",
      githubUrl: "https://github.com/Mohammad-Ehshan/PravasiPath",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section ref={ref} id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <TextReveal>
          <h1 className="text-5xl font-bold pb-4">My Projects</h1>
        </TextReveal>

        <TextReveal delay={0.1}>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on recently. Each project represents a unique challenge and
            solution.
          </p>
        </TextReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col h-full">
              <PinContainer className="w-full h-full">
                <div className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      {/* <Button size="sm" variant="secondary" className="rounded-full px-3 py-1 h-auto text-xs">
                        Visit
                      </Button> */}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <h4 className="text-lg">{project.achievement}</h4>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-secondary/80 text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <a
                          href={project.githubUrl}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <IoLogoGithub size={20} />
                        </a>
                        <a
                          href={project.liveUrl}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                      {/* <Button variant="link" className="p-0 h-auto">
                        Check Live Site
                      </Button> */}
                    </div>
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

