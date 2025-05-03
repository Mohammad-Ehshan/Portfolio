"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { experiences } from "@/Data/Index"

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl">
      {/* Timeline line with glow effect */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 bottom-0 w-1 origin-top bg-gradient-to-b from-violet-500 to-blue-500 glow"
      />

      <div className="space-y-24 relative">
        {experiences.map((experience, index) => (
          <TimelineItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({
  experience,
  index,
}: {
  experience: {
    id: number
    date: string
    title: string
    description: string
    items: string[]
    images: string[]
  }
  index: number
}) {
  const itemRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  })

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative"
    >
      {/* Circle marker */}
      <div className="absolute left-9 -translate-x-1/2 h-5 w-5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 glow z-10" />

      <div className="grid md:grid-cols-[1fr,1.5fr] gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="ml-16 md:ml-0 md:text-right"
        >
          <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500">
            {experience.date}
          </span>
          <h3 className="text-xl md:text-2xl font-semibold mt-2 text-white">{experience.title}</h3>
          <p className="text-white/70 mt-2">{experience.description}</p>
          <Link
            href={`/experience/${experience.id}`}
            className="inline-flex items-center gap-1 mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="ml-16"
        >
          <div className="glass rounded-xl p-5 border border-white/10">
            <ul className="space-y-2 mb-6">
              {experience.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                  <span className="text-white/80">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-3">
              {experience.images.map((image, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 * i }}
                  viewport={{ once: true }}
                  className="relative aspect-video rounded-lg overflow-hidden"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Project image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
