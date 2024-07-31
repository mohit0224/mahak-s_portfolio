import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<>
			<div className="">
				<div className="flex items-center gap-2">
					<div>
						<h1 className="text-3xl sm:text-4xl md:text-5xl">
							<strong>Hi, I'm Mahak 👋</strong>
						</h1>
						<p className="mt-2 text-sm sm:text-lg leading-snug text-pretty">
							Freelancer / Media Student <br />I am a sub editor, working in the
							media industry since past 3 years. Excellent fact checking and
							copy editing skills.
						</p>
					</div>
					<div>
						<div className="h-36 w-36 bg-white rounded-full overflow-hidden">
							<Image
								src={"/mahak.webp"}
								alt="mahak portfilio"
								width={200}
								height={200}
								priority
								className="w-full h-full scale-[2] object-cover object-[center_-10px]"
							/>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h2 className="font-semibold text-xl">About</h2>
					<p className="mt-2 text-sm text-pretty text-justify text-muted-foreground ">
						I'm Mahak, a postgraduated in journalism and mass communication with
						3 years of valuable experience in the news channel industry. My
						journey has involved anchoring, voice-over work, and content writing
						in both Hindi and Punjabi languages. I'm passionate about
						storytelling and connecting with audiences through diverse media
						platforms. <br /> My experience in the news channel field has honed
						my skills in delivering impactful news content and engaging with
						viewers effectively. Whether it's presenting breaking news updates,
						crafting compelling stories, or delivering captivating voice-overs,
						I strive to bring authenticity and a unique perspective to every
						project. I am driven by a passion for communication and a commitment
						to excellence in every aspect of my work.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
