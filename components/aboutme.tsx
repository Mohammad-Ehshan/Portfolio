"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Rocket, Heart, Code } from "lucide-react"
import TextReveal from "./ui/tech-reveal"

export default function AboutMe() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { value: 30, label: "Hackathons" },
    { value: 15, label: "Offline" },
    { value: 10, label: "Finalist" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <TextReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
        </TextReveal>

        {/* Add BentoGrid container with proper grid classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          
          {/* Bio Card - spans 2 columns */}
          <motion.div
            className="md:col-span-2 p-6 rounded-xl bg-background border border-border shadow-sm"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-semibold mb-4">Tech enthusiast with a passion for development.</h3>
            <p className="text-muted-foreground">
              I'm a full-stack developer with a passion for building innovative solutions to real-world problems. With
              expertise in modern web technologies and a background in competitive programming, I bring a unique blend
              of technical skills and creative problem-solving to every project.
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="p-6 rounded-xl bg-background border border-border shadow-sm"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Trophy className="mr-2 text-yellow-500" size={20} />
              Hackathon Stats
            </h3>
            <div className="flex flex-col gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-end gap-1">
                    <motion.span
                      className="text-3xl font-bold text-primary"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {stat.value}+
                    </motion.span>
                    <span className="text-muted-foreground">{stat.label}</span>
                  </div>
                  <div className="w-full bg-secondary/50 h-2 rounded-full mt-2">
                    <motion.div
                      className="bg-primary h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${(stat.value / 30) * 100}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 * index }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Journey */}
          <motion.div
            className="p-6 rounded-xl bg-background border border-border shadow-sm"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Rocket className="mr-2 text-primary" size={20} />
              Tech Journey
            </h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="w-0.5 h-full bg-primary/30"></div>
                </div>
                <div>
                  <h4 className="font-medium">Started Coding</h4>
                  <p className="text-sm text-muted-foreground">Built my first website with HTML & CSS</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="w-0.5 h-full bg-primary/30"></div>
                </div>
                <div>
                  <h4 className="font-medium">First Hackathon</h4>
                  <p className="text-sm text-muted-foreground">Participated and reached finals</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium">Present</h4>
                  <p className="text-sm text-muted-foreground">Building scalable applications & exploring AI</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client Collaboration */}
          <motion.div
            className="p-6 rounded-xl bg-background border border-border shadow-sm"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Heart className="mr-2 text-red-500" size={20} />I prioritize client collaboration
            </h3>
            <p className="text-muted-foreground">
              Fostering open communication and understanding client needs is at the core of my development process.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="p-6 rounded-xl bg-background border border-border shadow-sm"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Code className="mr-2 text-primary" size={20} />
              My tech stack
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "Express", "GraphQL"].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-secondary/80 rounded-lg p-2 text-center text-sm hover:bg-primary/20 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}