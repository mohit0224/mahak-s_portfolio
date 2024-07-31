import Image from "next/image";

const images = [
	"/cw-1.webp",
	"/cw-2.webp",
	"/cw-3.webp",
	"/cw-4.webp",
	"/cw-5.webp",
	"/cw-6.webp",
	"/cw-7.webp",
	"/cw-8.webp",
	"/cw-9.webp",
];

export function ContentWritingImage() {
	return (
		<section id="photos">
			<div className="columns-2 gap-4 sm:columns-3">
				{images.map((imageUrl, idx) => (
					<Image
						priority
						className="mb-4 size-full rounded-lg object-contain border shadow-md"
						src={imageUrl}
						alt={imageUrl}
						width={200}
						height={200}
					/>
				))}
			</div>
		</section>
	);
}
