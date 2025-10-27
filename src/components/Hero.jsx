import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center bg-black overflow-hidden ">
      <div className="absolute top-0 left-0 right-1 w-[150%] h-full overflow-hidden">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-ba0ff6f4a728df38bb33251affe8c4dc/"
          frameBorder="0"
          title=""
          className="absolute top-8 sm:top-20 w-full sm:h-full h-[90vh] bg-black"
        ></iframe>
      </div>

      {/* Mobile-first spacing + responsive overrides to preserve desktop layout */}
      <div className="relative z-10 text-left px-6 sm:pl-12 lg:pl-24 mt-10 lg:mt-55">
        <h1
          className="text-white text-2xl sm:text-6xl lg:text-8xl font-bold leading-none mb-0"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          SHOWCASE YOUR BRAND
        </h1>

        <h1
          className="text-white text-2xl sm:text-6xl lg:text-8xl font-bold leading-none flex items-baseline gap-4 -mt-4"
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

        {/* Mobile-only CTA Button */}
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
