"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface PinContainerProps {
  children: React.ReactNode
  className?: string
}

export default function PinContainer({ children, className = "" }: PinContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    setRotateX(-yPct * 10) // Invert for correct rotation direction
    setRotateY(xPct * 10)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={containerRef}
      className={`pin-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="pin-3d-content">{children}</div>
    </motion.div>
  )
}

