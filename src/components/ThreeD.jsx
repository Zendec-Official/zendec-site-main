import React from 'react'

const ThreeD = () => {
  return (
    <div className="relative h-screen flex items-center bg-black overflow-hidden px-24">
      {/* Background Spline model as full background */}
      <iframe
        src="https://my.spline.design/chips-a0808815b2eecfacc8205f0eb9b0b7d5/"
        frameBorder="0"
        className="absolute top-0 left-0 w-[150%] h-full"
        title="3D Background"
      ></iframe>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left text */}
        <div className="text-left md:w-1/2 space-y-6">
          <h1
            className="text-white text-7xl font-bold leading-tight"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
          >
            Let your story unfold in 3D
          </h1>
          <p
            className="text-gray-300 text-2xl max-w-x1 leading-relaxed"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
          >
            Move beyond static design. With 3D elements, your website becomes dynamic and expressive — helping customers visualize your brand and products in the most immersive way possible.
          </p>
        </div>
        {/* Right side can stay empty if you want the model as full background */}
      </div>
    </div>
  )
}

export default ThreeD
