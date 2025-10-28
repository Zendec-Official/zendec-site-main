import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14.jsx";
import StudioLights from "./three/StudioLights.jsx";

const ThreeD = () => {
  return (
    <div className="relative h-[70vh] md:h-screen flex items-center justify-center bg-black overflow-hidden px-6 sm:px-12 lg:px-24 pb-24 md:pb-0">
      {/* 3D MacBook Model */}
      <div className="absolute inset-0 md:left-200 pb-35 md:pb-0">
        <Canvas
          camera={{ position: [0, 2, 5], fov: 50 }}
          className="w-full h-full translate-y-45 md:translate-y-0"
        >
          <StudioLights />
          <OrbitControls enableZoom={false} />
          <MacbookModel14 scale={0.07} position={[0, -1, 0]} />
        </Canvas>
      </div>

      {/* Text content */}
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
            Move beyond static design. With 3D elements, your website becomes
            dynamic and expressive — helping customers visualize your brand and
            products in the most immersive way possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeD;
