"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Mail } from "lucide-react"
import TextReveal from "./ui/tech-reveal"
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ashmes16@gmail.com")
    // You could add a toast notification here
  }

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
    <section ref={ref} id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <TextReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            const&apos;s <span className="text-primary">Connect</span>
          </h2>
        </TextReveal>

        <TextReveal delay={0.1}>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Do you want to start a project together? I&apos;m always open to discussing new opportunities and ideas.
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form and I&apos;ll get back to you as soon as possible. Looking forward to hearing from you!
              </p>
            </motion.div>

            <motion.form variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="What&apos;s this about?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </motion.form>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-between"
          >
            <div>
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Prefer to reach out directly? Here&apos;s how you can contact me.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">ashmes16@gmail.com</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto" onClick={handleCopyEmail}>
                    <Copy size={16} />
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/Mohammad-Ehshan" className="bg-secondary/50 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <IoLogoGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/mohammad-ehshan-4362a0298/" className="bg-secondary/50 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <IoLogoLinkedin size={20} />
                  </a>
                  <a href="https://x.com/ashmes16" className="bg-secondary/50 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <IoLogoTwitter size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-4">Do you want to start a project together?</h3>
              <p className="text-muted-foreground mb-4">
                I&apos;m always open to discussing new projects and ideas. const&apos;s create something amazing together!
              </p>
              <Button variant="outline" className="flex items-center gap-2" onClick={handleCopyEmail}>
                <Copy size={16} />
                <span>Copy my email address</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

