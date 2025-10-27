import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  const cardCount = 5; // max 5 cards
  return (
    <div className="bg-black h-[60vh] md:h-[80vh] flex flex-col items-center justify-center px-4 font-condensed">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1
          style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeSlide mt-25"
        >
          Browse from our Collection of Template Websites
        </h1>
        <p
          style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 animate-fadeSlide delay-200"
        >
          Explore ready-made website templates designed for speed, style, and performance — easily customizable to fit your brand.
        </p>
      </div>

      {/* Carousel Section */}
      <StyledWrapper>
        <div className="wrapper">
          <div className="inner" style={{ "--quantity": cardCount }}>
            {Array.from({ length: cardCount }).map((_, i) => (
              <div
                className="card"
                key={i}
                style={{
                  "--index": i,
                  "--color-card": "255, 255, 255" // white accent
                }}
              >
                {/* Example: <video src="path-to-video.mp4" autoPlay muted loop /> */}
              </div>
            ))}
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

export default Portfolio;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  margin-bottom: 50px;

  .wrapper {
    position: relative;
    width: 90%;
    max-width: 1000px; /* desktop max */
    height: 400px; /* desktop height */
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner {
    --w: 300px;      /* desktop card width */
    --h: 180px;      /* desktop card height */
    --translateZ: 280px;
    --rotateX: -10deg;
    --perspective: 2000px;
    position: relative;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(15deg);
    animation: rotateRing 25s linear infinite;
    transition: transform 0.3s ease;
  }

  .inner:hover {
    animation-play-state: paused;
  }

  @keyframes rotateRing {
    from { transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(15deg); }
    to { transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(375deg); }
  }

  .card {
    position: absolute;
    width: var(--w);
    height: var(--h);
    border-radius: 0px;
    transform: rotateY(calc(360deg / var(--quantity) * var(--index))) translateZ(var(--translateZ));
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: rgba(var(--color-card), 0.15);
    border: 1px solid rgba(var(--color-card), 0.4);
    box-shadow: 0 0 25px rgba(var(--color-card), 0.3), inset 0 0 30px rgba(var(--color-card), 0.2);
    overflow: hidden;
  }

  .card:hover {
    transform: rotateY(calc(360deg / var(--quantity) * var(--index))) translateZ(calc(var(--translateZ) + 20px));
    box-shadow: 0 0 45px rgba(var(--color-card), 0.5), inset 0 0 30px rgba(var(--color-card), 0.4);
  }

  .card video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top, rgba(255, 255, 255, 0.15), transparent 60%);
    opacity: 0.2;
    pointer-events: none;
  }

  @keyframes fadeSlide {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeSlide { animation: fadeSlide 1s ease forwards; }
  .animate-fadeSlide.delay-200 { animation-delay: 0.2s; }

  /* Mobile responsiveness */
  @media (max-width: 1024px) {
    .inner {
      --w: 220px;
      --h: 140px;
      --translateZ: 180px;
      --perspective: 1500px;
    }
    .wrapper { height: 300px; }
  }

  @media (max-width: 768px) {
    .inner {
      --w: 180px;
      --h: 120px;
      --translateZ: 140px;
      --perspective: 1200px;
    }
    .wrapper { height: 220px; }
  }

  @media (max-width: 480px) {
    .inner {
      --w: 140px;
      --h: 100px;
      --translateZ: 100px;
      --perspective: 1000px;
    }
    .wrapper { height: 180px; }
    h1 { font-size: 1.8rem; }
    p { font-size: 1rem; }
  }
`;
