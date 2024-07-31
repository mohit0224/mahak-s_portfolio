import Container from "@/components/Container";
import About from "@/components/custom/About";
import Contact from "@/components/custom/Contact";
import Education from "@/components/custom/Education";
import Experience from "@/components/custom/Experience";
import MyWork from "@/components/custom/MyWork";
import React from "react";

const Page = () => {
	return (
		<>
			<Container>
				<About />
				<Experience />
				<Education />
				<MyWork />
				<Contact />
			</Container>
		</>
	);
};

export default Page;
