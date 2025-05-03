"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Building, MapPin, Calendar } from "lucide-react"
import { Experience } from "@/Data/Index"

export default function ExperienceDetail({ experience }: { experience: Experience }) {
  return (
    <div className="relative">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 mb-8 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Experience</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500">
            {experience.title}
          </h1>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2 text-white/80">
              <Building className="w-4 h-4 text-violet-400" />
              <span>{experience.company}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4 text-violet-400" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="w-4 h-4 text-violet-400" />
              <span>{experience.duration}</span>
            </div>
          </div>
          <p className="text-xl text-white/80 max-w-3xl">{experience.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Role & Responsibilities</h2>
            <p className="text-white/80 mb-6">
              As a <span className="font-semibold text-white">{experience.role}</span>, I was responsible for delivering
              high-quality solutions and collaborating with cross-functional teams to achieve project goals.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex-shrink-0" />
                  <span className="text-white/80">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {experience.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index + 0.3 }}
                  className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {experience.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Testimonial</h3>
                <blockquote className="text-white/80 italic mb-4">{experience.testimonial.quote}</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold">
                    {experience.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{experience.testimonial.author}</p>
                    <p className="text-sm text-white/60">{experience.testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experience.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index + 0.5 }}
                className="relative aspect-video rounded-xl overflow-hidden glass border border-white/10"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${experience.title} image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass rounded-xl p-6 border border-white/10 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Key Deliverables</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              {experience.items.slice(0, Math.ceil(experience.items.length / 2)).map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.6 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </motion.li>
              ))}
            </ul>
            <ul className="space-y-3">
              {experience.items.slice(Math.ceil(experience.items.length / 2)).map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + Math.ceil(experience.items.length / 2)) + 0.6 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
