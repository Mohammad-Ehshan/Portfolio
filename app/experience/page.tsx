import Timeline from "@/components/Timeline"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500">
            Experience & Journey
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A timeline of my professional journey, projects, and key milestones that have shaped my career as a
            developer.
          </p>
        </div>

        <Timeline />
      </div>
    </main>
  )
}
