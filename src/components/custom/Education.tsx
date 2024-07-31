import { education } from "@/helper/data";
import React from "react";
import { ResumeCard } from "./resume-card";

const Education = () => {
	return (
		<div className="mt-5">
			<h2 className="font-semibold text-xl">Education</h2>

			<div className="mt-2 space-y-1">
				{education.map((edu, id) => (
					<ResumeCard
						key={id}
						title={edu.school}
						subtitle={edu.degree}
						period={`${edu.start} - ${edu.end}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Education;
