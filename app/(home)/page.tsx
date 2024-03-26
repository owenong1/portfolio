import React from "react"
import Landing from "../../components/landing/Landing"
import Gallery from "../../components/gallery/Gallery"
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
        <Gallery />
      </div>
    </div>
  )
}