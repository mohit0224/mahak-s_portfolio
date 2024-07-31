import { work } from "@/helper/data";
import React from "react";
import { ResumeCard } from "./resume-card";

const Experience = () => {
	return (
		<>
			<div className="mt-5">
				<h2 className="font-semibold text-xl">Work Experience</h2>

				<div className="mt-2 space-y-1">
					{work.map((work, id) => (
						<ResumeCard
							key={work.company}
							title={work.company}
							subtitle={work.title}
							period={work.start}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Experience;
