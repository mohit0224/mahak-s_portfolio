import Link from "next/link";
import React from "react";
import { LinkPreview } from "../ui/link-preview";

const Contact = () => {
	return (
		<section id="contact">
			<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
				<div className="space-y-3">
					<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
						Contact
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Get in Touch
					</h2>
					<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						For a glimpse into my professional journey, visit my{" "}
						<LinkPreview
							url="https://www.linkedin.com/in/mahak-arora-6b2501210/"
							className="font-bold"
						>
							LinkedIn
						</LinkPreview>
						, and for the latest news updates, hop over to my{" "}
						<LinkPreview
							url="https://www.instagram.com/reel/C8tvGQ8JIuW/"
							className="font-bold"
						>
							Instagram
						</LinkPreview>
						. 📰
					</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
