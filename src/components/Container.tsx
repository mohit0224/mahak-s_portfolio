import React from "react";

const Container = ({ children, className }: any) => (
	<div
		className={`${className} max-w-xl sm:max-w-2xl md:max-w-xl mx-auto py-16 px-3 lg:px-0`}
	>
		{children}
	</div>
);

export default Container;
