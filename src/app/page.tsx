import React from "react"
import Cover from "@/components/cover/Cover"
import About from "@/components/about/About"
import Projects from "@/components/projects/Projects"
import Skills from "@/components/skills/Skills"
import Contact from "@/components/contact/Contact"

export default function Home() {
  return (
    <div className="home">
      <Cover></Cover>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  )
}
