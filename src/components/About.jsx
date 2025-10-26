import React, { useEffect } from 'react'
import '../About.css'

export default function About() {
	useEffect(() => {
		let ticking = false;
		
		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					const container = document.querySelector('.rotating-content-container');
					if (!container) return;
					
					const containerRect = container.getBoundingClientRect();
					const containerHeight = container.offsetHeight;
					const windowHeight = window.innerHeight;
					
					// Calculate smooth scroll progress
					const scrollStart = containerRect.top;
					const scrollRange = containerHeight - windowHeight;
					const scrollProgress = Math.max(0, Math.min(1, -scrollStart / scrollRange));
					
					const sections = document.querySelectorAll('.content-section');
					const contactSection = document.querySelector('.contact-section');
					const totalSections = sections.length;
					
					// Calculate smooth scroll progress for reel effect (including contact section)
					const totalItems = totalSections + 1; // +1 for contact section
					const itemProgress = scrollProgress * totalItems;
					const currentItemIndex = Math.floor(itemProgress);
					const itemTransitionProgress = itemProgress - currentItemIndex;
					
					// Handle content sections
					sections.forEach((section, index) => {
						let opacity = 0;
						let translateY = 0;
						
						if (index === currentItemIndex) {
							// Current section - fades out as it moves up
							opacity = 1 - itemTransitionProgress;
							translateY = -itemTransitionProgress * 50;
						} else if (index === currentItemIndex + 1) {
							// Next section - slides up from below
							opacity = itemTransitionProgress;
							translateY = (1 - itemTransitionProgress) * 100;
						} else if (index < currentItemIndex) {
							// Previous sections - hidden above
							opacity = 0;
							translateY = -100;
						} else {
							// Future sections - hidden below
							opacity = 0;
							translateY = 100;
						}
						
						// Apply smooth transform and opacity
						section.style.transform = `translate(-50%, calc(-50% + ${translateY}vh))`;
						section.style.opacity = opacity;
						
						// Set active class for visible sections
						if (opacity > 0.5) {
							section.classList.add('active');
						} else {
							section.classList.remove('active');
						}
					});
					
					// Handle contact section (appears in center of content area)
					if (contactSection) {
						let contactOpacity = 0;
						
						// Contact appears when we're at the very end of scroll (90%+ progress)
						if (scrollProgress >= 0.9) {
							const contactProgress = (scrollProgress - 0.9) / 0.1; // Normalize to 0-1
							contactOpacity = Math.min(1, contactProgress);
						}
						
						// Keep it centered in content area
						contactSection.style.transform = `translate(-50%, -50%)`;
						contactSection.style.opacity = contactOpacity;
						
						// Enable pointer events when fully visible
						if (contactOpacity >= 0.8) {
							contactSection.style.pointerEvents = 'auto';
						} else {
							contactSection.style.pointerEvents = 'none';
						}
					}
					
					ticking = false;
				});
				ticking = true;
			}
		};

		// Set initial state
		handleScroll();
		
		// Add smooth scroll listener
		window.addEventListener('scroll', handleScroll, { passive: true });
		
		// Cleanup
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="about-container">
			{/* Fixed About Us Title - Left Side */}
			<div className="about-title-fixed">
				<h1 className="about-title">About Us</h1>
			</div>
			
			{/* Right Side Rotating Content */}
			<div className="rotating-content-container">
				<div className="rotating-content">
					{/* Section 1: Introduction */}
					<div className="content-section section-1 active">
						<div className="section-number">01</div>
						<h3 className="section-title">The Beginning</h3>
						<div className="section-text">
							<p>At <span className="highlight">ZENDEC</span>, we build websites that don't just exist, they <span className="highlight">engage</span> and inspire.</p>
							<p>Our journey began with a vision to move beyond static design and bring digital experiences to life through innovative technology and creative storytelling.</p>
							<p>We believe every pixel has a purpose, every animation tells a story, and every interaction creates a connection between your brand and your audience.</p>
						</div>
					</div>

					{/* Section 2: Evolution */}
					<div className="content-section section-2">
						<div className="section-number">02</div>
						<h3 className="section-title">Evolution</h3>
						<div className="section-text">
							<p>Today, we craft <span className="highlight">interactive, 3D, and visually dynamic websites</span> that speak your brand's unique language.</p>
							<p>Every project we take on is a careful balance of cutting edge design, smooth motion graphics, and pixel perfect precision that delivers results.</p>
							<p>From responsive layouts to complex user interfaces, we adapt and evolve with the ever changing digital landscape to keep your brand ahead of the curve.</p>
						</div>
					</div>

					{/* Section 3: Mastery */}
					<div className="content-section section-3">
						<div className="section-number">03</div>
						<h3 className="section-title">Mastery</h3>
						<div className="section-text">
							<p>From <span className="highlight">immersive 3D models</span> to complex, high performance web systems that scale with your business needs.</p>
							<p>We transform abstract ideas into tangible digital experiences that <span className="highlight">connect and captivate</span> your target audience.</p>
							<p>Our expertise spans across modern web technologies, creating seamless user experiences that drive engagement and conversion rates for lasting business growth.</p>
						</div>
					</div>

					{/* Section 4: Vision */}
					<div className="content-section section-4">
						<div className="section-number">04</div>
						<h3 className="section-title">Our Vision</h3>
						<div className="section-text">
							<p>We're not just designers or developers, we're <span className="highlight">creators of experiences</span> that leave lasting impressions.</p>
							<p>Making your brand stand out in the crowded digital world through authentic storytelling and meaningful user interactions.</p>
							<p>Ready to transform your digital presence? Let's create something extraordinary together that resonates with your audience and drives real business results.</p>
						</div>
					</div>
				</div>

				{/* Contact Us Button - appears at the end */}
				<div className="contact-section">
					<button className="contact-button">Contact Us</button>
				</div>
			</div>
		</div>
	)
}