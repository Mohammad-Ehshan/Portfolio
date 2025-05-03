"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {  Award, Briefcase, FileText, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      value: 1400,
      label: "Linkedin Followers",
      link: "https://www.linkedin.com/in/mohammad-ehshan-4362a0298/",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      value: 30,
      label: "Hackathons",
      link: "#",
    },
    {
      icon: <Award className="w-5 h-5" />,
      value: 15,
      label: "Winner and Finalist",
      link: "/projects",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      value: 0,
      label: "Resume",
      link: "/Ehshan 76.pdf",
    },
  ]

  return (
    <section ref={ref} className="py-16 mt-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              link={stat.link}
              delay={index * 0.1}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({
  icon,
  value,
  label,
  link,
  delay,
  isInView,
}: {
  icon: React.ReactNode
  value: number
  label: string
  link: string
  delay: number
  isInView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    if (end === 0) return

    const timer = setInterval(() => {
      start += increment
      setCount(Math.min(Math.floor(start), end))

      if (start >= end) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        href={link}
        className="block h-full p-6 rounded-xl glass border border-white/10 hover:border-white/20 transition-all group"
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 text-white/70 group-hover:text-white/90 transition-colors">{icon}</div>
          <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500">
            {label === "Resume" ? "View" : count}
          </div>
          <div className="text-sm text-white/70">{label}</div>
        </div>
      </Link>
    </motion.div>
  )
}
