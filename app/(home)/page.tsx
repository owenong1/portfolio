import React from "react"
import Landing from "../../components/landing/Landing"
import Skillbar from "../../components/skills/Skillbar"
import About from "../../components/about/About"

export default function Page() {
  return (
    <div className='min-h-screen bg-black'>
      <div className="max-w-7xl mx-auto">
        <Landing />
      </div>
      <div className="max-w-7xl mx-auto p-5">
        <About />
      </div>
      <div className="max-w-7xl mx-auto p-5">
        <Skillbar />
      </div>
    </div>
  )
}