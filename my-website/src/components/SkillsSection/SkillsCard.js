import React from 'react';
import { FaCode, FaServer, FaPencilRuler } from 'react-icons/fa';

const SkillsCard = ({ cardTitle, skillsList }) => {
	return (
		<div className="skills-card">
			{cardTitle === 'Front-End' ? (
				<FaCode className="skills-icon" />
			) : cardTitle === 'Back-End' ? (
				<FaServer className="skills-icon" />
			) : cardTitle === 'Design' ? (
				<FaPencilRuler className="skills-icon" />
			) : null}

			<h3 className="card-heading">{cardTitle}</h3>
			<ul>
				{skillsList.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</div>
	);
};

export default SkillsCard;
