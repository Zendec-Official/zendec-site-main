import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-ba0ff6f4a728df38bb33251affe8c4dc/"
          frameBorder="0"
          title="Spline 3D Model"
          className="absolute top-0 w-[150%] h-full bg-black"
        ></iframe>
      </div>

      <div className="relative z-10 text-left pl-24 mt-36 space-y-6">
        <h1
          className="text-white text-8xl font-bold leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          SHOWCASE YOUR BRAND
        </h1>

        <h1
          className="text-white text-8xl font-bold leading-tight flex items-baseline gap-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          WITH A SITE THAT{' '}
          <span
            className="text-[11rem]"
            style={{ fontFamily: "'Qwitcher Grypen', cursive" }}
          >
            speaks.
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Hero
