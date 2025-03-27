"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import TextReveal from "./ui/tech-reveal"

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
  ]

  // const technologies = [
  //   {
  //     name: "React",
  //     category: "frontend",
  //     icon: "/placeholder.svg?height=40&width=40",
  //     projects: ["Project A", "Project B"],
  //   },
  //   { name: "Next.js", category: "frontend", icon: "/nextjs.png?height=40&width=40", projects: ["Project C"] },
  //   {
  //     name: "TypeScript",
  //     category: "frontend",
  //     icon: "/placeholder.svg?height=40&width=40",
  //     projects: ["Project A", "Project D"],
  //   },
  //   {
  //     name: "Node.js",
  //     category: "backend",
  //     icon: "/placeholder.svg?height=40&width=40",
  //     projects: ["Project B", "Project C"],
  //   },
  //   { name: "Express", category: "backend", icon: "/placeholder.svg?height=40&width=40", projects: ["Project B"] },
  //   {
  //     name: "MongoDB",
  //     category: "backend",
  //     icon: "/placeholder.svg?height=40&width=40",
  //     projects: ["Project C", "Project D"],
  //   },
  //   { name: "Docker", category: "tools", icon: "/placeholder.svg?height=40&width=40", projects: ["Project A"] },
  //   { name: "Git", category: "tools", icon: "/placeholder.svg?height=40&width=40", projects: ["All Projects"] },
  //   { name: "TensorFlow", category: "ai", icon: "/placeholder.svg?height=40&width=40", projects: ["Project D"] },
  //   { name: "PyTorch", category: "ai", icon: "/placeholder.svg?height=40&width=40", projects: ["Project E"] },
  // ]
  const technologies = [
    {
      name: "React",
      category: "frontend",
      icon: "/react.png?height=40&width=40",
      projects: ["Project A", "Project B"],
    },
    {
      name: "Next.js",
      category: "frontend",
      icon: "/nextjs.png?height=40&width=40",
      projects: ["Project C"],
    },
    {
      name: "TypeScript",
      category: "frontend",
      icon: "/typescript.png?height=40&width=40",
      projects: ["Project A", "Project D"],
    },
    {
      name: "Node.js",
      category: "backend",
      icon: "/nodejs.png?height=40&width=40",
      projects: ["Project B", "Project C"],
    },
    {
      name: "Express",
      category: "backend",
      icon: "/express.png?height=40&width=40",
      projects: ["Project B"],
    },
    {
      name: "MongoDB",
      category: "backend",
      icon: "/mongodb.png?height=40&width=40",
      projects: ["Project C", "Project D"],
    },
    {
      name: "PostgreSQL",
      category: "backend",
      icon: "/postgresql.png?height=40&width=40",
      projects: ["Project A", "Project E"],
    },
    {
      name: "Firebase",
      category: "backend",
      icon: "/firebase.png?height=40&width=40",
      projects: ["Project F"],
    },
    {
      name: "Docker",
      category: "tools",
      icon: "/docker.png?height=40&width=40",
      projects: ["Project A"],
    },
    {
      name: "Git",
      category: "tools",
      icon: "/github.png?height=40&width=40",
      projects: ["All Projects"],
    },
  ]
  
  const filteredTech =
    activeCategory === "all" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  }

  return (
    <section ref={ref} id="tech-stack" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <TextReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Tech Stack & <span className="text-primary">Usage</span>
          </h2>
        </TextReveal>

        <TextReveal delay={0.1}>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            I constantly try to improve my tech stack and stay up-to-date with the latest technologies.
          </p>
        </TextReveal>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-black"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#050a17] backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-12 h-12 mb-3" />
                <h3 className="font-medium mb-2">{tech.name}</h3>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-muted-foreground">
                  <p className="font-medium text-primary mb-1">Used in:</p>
                  <ul>
                    {tech.projects.map((project, projectIndex) => (
                      <li key={projectIndex}>{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

