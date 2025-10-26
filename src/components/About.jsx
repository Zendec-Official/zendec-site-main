import React from 'react'
import '../About.css'

export default function About() {
	return (
		<div className="about-container">
			{/* Fixed About Us Title - Left Side */}
			<div className="about-title-fixed">
				<h1 className="about-title">About Us</h1>
			</div>
			
			{/* Right Side Content */}
			<div className="about-content">
				<div className="content-card">
					<p>
						At ZENDEC, we build websites that don't just exist they engage. Our journey began with a vision to move 
						beyond static design and bring digital experiences to life. Today, we craft interactive, 3D, and 
						visually dynamic websites that speak your brand's language.
					</p>
					<p>
						Every project we take on is a balance of design, motion, and precision blending creativity with code to create 
						something truly unique. From immersive 3D models to complex, high-performance web systems, we 
						transform ideas into experiences that connect and captivate.
					</p>
					<p>
						We're not just designers or developers we're creators of experiences that make your brand stand out in 
						the digital world.
					</p>
				</div>
			</div>
		</div>
	)
}