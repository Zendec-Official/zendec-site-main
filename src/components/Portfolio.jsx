import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Portfolio = () => {
  const cardCount = 5;

  const videoSources = [
    "/videos/portfolio-video1.mp4",
    "/videos/portfolio-video2.mp4",
    "/videos/portfolio-video5.mp4",
    "/videos/portfolio-video3.mp4",
    "/videos/portfolio-video4.mp4",
  ];

  const videoRefs = useRef([]);

  useEffect(() => {
    // ensure all videos start playing smoothly when loaded
    videoRefs.current.forEach((video) => {
      if (video) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // ignore autoplay restrictions silently
          });
        }
      }
    });
  }, []);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video && !video.paused) video.pause();
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video && video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) playPromise.catch(() => {});
    }
  };

  return (
    <div className="bg-black h-[80vh] md:h-[80vh] flex flex-col items-center justify-center px-4 font-condensed">
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
                  "--color-card": "255, 255, 255",
                }}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={videoSources[i]}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
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
    max-width: 1000px;
    height: 400px;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner {
    --w: 300px;
    --h: 180px;
    --translateZ: 280px;
    --rotateX: -10deg;
    --perspective: 2000px;
    position: relative;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(15deg);
    animation: rotateRing 25s linear infinite;
    transition: transform 0.4s ease-out;
    will-change: transform;
  }

  .inner:hover {
    animation-play-state: paused;
  }

  @keyframes rotateRing {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(15deg);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(375deg);
    }
  }

  .card {
    position: absolute;
    width: var(--w);
    height: var(--h);
    border-radius: 0px;
    transform: rotateY(calc(360deg / var(--quantity) * var(--index))) translateZ(var(--translateZ));
    transition: transform 0.5s ease, box-shadow 0.4s ease, filter 0.4s ease;
    background: rgba(var(--color-card), 0.1);
    border: 1px solid rgba(var(--color-card), 0.4);
    box-shadow: 0 0 25px rgba(var(--color-card), 0.3),
      inset 0 0 30px rgba(var(--color-card), 0.15);
    overflow: hidden;
    will-change: transform, box-shadow;
  }

  .card:hover {
    transform: rotateY(calc(360deg / var(--quantity) * var(--index)))
      translateZ(calc(var(--translateZ) + 25px));
    box-shadow: 0 0 50px rgba(var(--color-card), 0.55),
      inset 0 0 30px rgba(var(--color-card), 0.35);
    filter: brightness(1.1);
  }

  .card video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease, opacity 0.4s ease;
    will-change: transform, opacity;
  }

  .card:hover video {
    transform: scale(1.02);
    opacity: 0.9;
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
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeSlide {
    animation: fadeSlide 1s ease forwards;
  }
  .animate-fadeSlide.delay-200 {
    animation-delay: 0.2s;
  }

  /* Responsiveness */
  @media (max-width: 1024px) {
    .inner {
      --w: 220px;
      --h: 140px;
      --translateZ: 180px;
      --perspective: 1500px;
    }
    .wrapper {
      height: 300px;
    }
  }

  @media (max-width: 768px) {
    .inner {
      --w: 180px;
      --h: 120px;
      --translateZ: 140px;
      --perspective: 1200px;
    }
    .wrapper {
      height: 220px;
    }
  }

  @media (max-width: 480px) {
    .inner {
      --w: 140px;
      --h: 100px;
      --translateZ: 100px;
      --perspective: 1000px;
    }
    .wrapper {
      height: 180px;
    }
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
