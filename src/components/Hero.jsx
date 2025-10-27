import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center bg-black overflow-hidden">
      {/* Spline iframe container */}
      <div className="absolute top-0 left-0 w-[120%] sm:w-[150%] h-full overflow-hidden will-change-transform">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-ba0ff6f4a728df38bb33251affe8c4dc/"
          frameBorder="0"
          title="Spline 3D Model"
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full min-h-[70vh] sm:h-full bg-black pointer-events-none"
        ></iframe>
      </div>

      {/* Text content */}
      <div className="relative z-10 text-left px-6 sm:pl-12 lg:pl-24 mt-10 lg:mt-20">
        <h1
          className="text-white text-2xl sm:text-6xl lg:text-8xl font-bold leading-none mb-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          SHOWCASE YOUR BRAND
        </h1>

        <h1
          className="text-white text-2xl sm:text-6xl lg:text-8xl font-bold leading-none flex items-baseline gap-2 -mt-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          WITH A SITE THAT{' '}
          <span
            className="text-6xl sm:text-8xl lg:text-[11rem]"
            style={{ fontFamily: "'Qwitcher Grypen', cursive" }}
          >
            speaks.
          </span>
        </h1>

        {/* Mobile CTA */}
        <button
          className="sm:hidden mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-all"
          onClick={() => window.location.href = '/contact'}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
