import React from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

const AboutSection = () => {
	return (
		<section className="about fullwidth" id="about">
			<div className="about-content container-centered-content">
				<h2 className="section-heading">About</h2>
				<p>
					I'm a software developer, currently based in beautiful British
					Columbia.
					<br />
					With a master's degree in cognitive systems, the intersection between
					psychology and computer science, I am also passionate about research
					and user experience.
					<br />
					<Link
						to="/more"
						className="btn btn-outline"
						onClick={() => {
							ReactGA.event({
								category: 'Buttons',
								action: 'Clicked Learn More',
							});
						}}
					>
						Learn More
					</Link>
					<br />
				</p>
			</div>
			<svg className="about-wave" viewBox="0 0 1960 148">
				<path d="M0,22.1V148h1960V79.7c-194.4,31.4-348,35.4-445.2,34.2C969,108.6,923.1,1,503.3,0C341.2-0.4,75.2,10.5,0,22.1z" />
			</svg>
		</section>
	);
};

export default AboutSection;
