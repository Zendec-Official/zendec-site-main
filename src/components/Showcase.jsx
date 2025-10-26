import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
    
   useGSAP(() => {
    if(!isTablet) {
        // Set initial state - mask starts zoomed IN and invisible
        gsap.set('.mask', { opacity: 0 });
        gsap.set('.mask img', { scale: 60 });
        gsap.set('.content', { opacity: 0, y: 50 });
        
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#showcase',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: true,
            }
        });
        
        timeline
            .to('.mask', {
                opacity: 1,
            }, 0)
            .to('.mask img', {
                scale: 1,
            }, 0)
            .to('.content', { 
                opacity: 1, 
                y: 0, 
                ease: 'power2.in',
            }, 0.5);
    }
}, [isTablet]);

    return (
        <section id="showcase" className="relative h-screen">
            <div className="media relative w-full h-full">
              
                <video 
                    src="/videos/game.mp4" 
                    loop 
                    muted 
                    autoPlay 
                    playsInline 
                    className="w-full h-full object-cover"
                />
                <div className="mask absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img 
                        src="/mask-logo.svg" 
                        alt="Mask logo"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
            <div className="content absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2 className="text-white text-6xl font-bold mb-140" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Parallax Experiences that Captivate
                </h2>
            </div>
            <div className="content absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2 className="text-white text-3xl mt-140 flex items-center justify-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Add depth and fluidity to your pages
                </h2>
            </div>
        </section>
    )
}

export default Showcase