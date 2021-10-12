import React from 'react';
import SkillsCard from './SkillsCard';

const SkillSection = () => {
	return (
		<section className="skills fullwidth" id="skills">
			<div className="skills-content container-centered-content">
				<h2 className="section-heading">Skills</h2>
				<div className="container-flex">
					<SkillsCard
						cardTitle="Front-End"
						skillsList={['HTML', 'CSS3 | SASS', 'JavaScript', 'React']}
					/>
					<SkillsCard
						cardTitle="Back-End"
						skillsList={['NodeJS', 'Express', 'MongoDB', 'MySQL', 'GraphQL']}
					/>
					<SkillsCard
						cardTitle="Design"
						skillsList={['Figma', 'Balsamiq', 'Inkscape']}
					/>
				</div>
			</div>
			<svg className="skills-wave" viewBox="0 0 1960 148">
				<path d="M0,22.1V148h1960V79.7c-194.4,31.4-348,35.4-445.2,34.2C969,108.6,923.1,1,503.3,0C341.2-0.4,75.2,10.5,0,22.1z" />
			</svg>
		</section>
	);
};

export default SkillSection;
