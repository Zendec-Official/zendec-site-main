import React from 'react'

const ThreeD = () => {
  return (
    <div className="relative h-[70vh] md:h-screen flex items-center bg-black overflow-hidden px-6 sm:px-12 lg:px-24">
      <iframe
        src="https://my.spline.design/chips-a0808815b2eecfacc8205f0eb9b0b7d5/"
        frameBorder="0"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[60vh] sm:h-full lg:left-0 lg:translate-x-0 lg:w-[150%] lg:h-full"
        title="3D Background"
      ></iframe>

      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-[5]"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-0">
        <div className="text-left md:w-1/2 space-y-6">
          <h1
            className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
          >
            Let your story unfold in 3D
          </h1>
          <p
            className="text-gray-100 text-base sm:text-lg md:text-2xl max-w-xl leading-relaxed drop-shadow-md"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
          >
            Move beyond static design. With 3D elements, your website becomes dynamic and expressive — helping customers visualize your brand and products in the most immersive way possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThreeD
