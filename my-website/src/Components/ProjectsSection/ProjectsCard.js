import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({
	id,
	projectName,
	description,
	techList,
	siteURL,
	srcCode,
}) => {
	return (
		<div className="card">
			{/* front  */}
			<div className="card-side card-side--front">
				<div className={`card-img card-img-${id}`}>&nbsp;</div>
				<div className="card-project-overview">
					<h3 className={`card-project-heading card-project-heading-${id}`}>
						{projectName}
					</h3>
					<p className="card-project-description">{description}</p>
				</div>
			</div>

			{/* Back */}
			<div className={`card-side card-side--back card-side--back-${id}`}>
				<div className="card-details">
					<ul>
						{techList.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<div className="card-links">
					<a href={siteURL} target="_blank" rel="noopener noreferrer">
						<FaExternalLinkAlt className="card-links-icon" />
					</a>
					<a href={srcCode} target="_blank" rel="noopener noreferrer">
						<FaGithub className="card-links-icon" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
