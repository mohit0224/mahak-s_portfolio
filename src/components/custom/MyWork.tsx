import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Link from "next/link";
import { ContentWritingImage } from "./ContentWritingImage";
import { MarqueeDemo } from "./LetterToEditor";

const MyWork = () => {
	return (
		<div className="mt-5">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
						My Projects
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Check out my latest work
					</h2>
					<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						I&apos;ve worked on a variety of projects from Anchoring to Content
						writing. Here are a few of my favourites
					</p>
				</div>
			</div>

			<div className="mt-4 w-full  px-4">
				<Tabs defaultValue="punjabi" className="">
					<TabsList className="w-full">
						<TabsTrigger value="punjabi">
							Anchoring Videos Punjabi
						</TabsTrigger>
						<TabsTrigger value="hindi">
							Anchoring Videos Hindi
						</TabsTrigger>
					</TabsList>
					<TabsContent value="punjabi">
						<ul className="text-sm text-pretty font-sans space-y-2">
							<li className="px-2 py-1 bg-slate-100 rounded">
								<Link
									target="_blank"
									href={"https://youtu.be/SJaYifNDWkQ?si=ROPmmDl8-y7W7b6P"}
								>
									2 ਮਿੰਟਾਂ &apos;ਚ ਦੇਖੋ ਇਸ ਸਮੇਂ ਦੀਆਂ 10 ਵੱਡੀਆਂ ਖਬਰਾਂ | 2 Minute 10
									News | Trending News | || Ritam Punjabi
								</Link>
							</li>

							<li className="px-2 py-1 bg-slate-100 rounded">
								<Link
									target="_blank"
									href={"https://www.youtube.com/watch?v=_ZvBy_vmvVQ"}
								>
									ਜਲੰਧਰ ‘ਚ ਵਾਪਰੀ ਵੱਡੀ ਵਾਰਦਾਤ, ਨੌਜਵਾਨ ‘ਤੇ ਕੀਤੇ 17 ਵਾਰ || Ritam
									Punjabi
								</Link>
							</li>
							<li className="px-2 py-1 bg-slate-100 rounded">
								<Link
									target="_blank"
									href={"https://www.youtube.com/watch?v=EI2Dm_GsQa8"}
								>
									ਪੰਜਾਬ ‘ਚ Chocolate ਦਾ ਕਹਿਰ, ਡੇਢ ਸਾਲਾ ਬੱਚੀ ਦੀ ਵਿਗੜੀ ਸਿਹਤ ||
									Ritam Punjabi
								</Link>
							</li>
							<li className="px-2 py-1 bg-slate-100 rounded">
								<Link
									target="_blank"
									href={"https://www.youtube.com/watch?v=Ccpv4kU2MDE"}
								>
									ਦਿਨ ਦਿਹਾੜੇ ਕਤਲ ਤੇ ਡਾਕੇ, ਚੋਣਾਂ &apos;ਚ ਰੁੱਝੇ ਨੇ ਪੰਜਾਬ ਦੇ ਰਾਖੇ ||
									Ritam Punjabi
								</Link>
							</li>
							<li className="px-2 py-1 bg-slate-100 rounded">
								<Link
									target="_blank"
									href={"https://www.youtube.com/watch?v=zGM0T96rCtI"}
								>
									ਬਰਨਾਲਾ ਚ ਦਿਨ ਦਿਹਾੜੇ ਲੱਖਾਂ ਦੀ ਲੁੱਟ ਹੋਈ || Ritam punjabi
								</Link>
							</li>
							<li className="px-2 py-1 bg-slate-100 rounded">
								<Link
									target="_blank"
									href={"https://www.youtube.com/watch?v=CsW2-eVPVyM"}
								>
									2 ਮਿੰਟਾਂ &apos;ਚ ਦੇਖੋ ਇਸ ਸਮੇਂ ਦੀਆਂ 10 ਵੱਡੀਆਂ ਖਬਰਾਂ | 2 Minute 10
									News | Trending News | || Ritam Punjabi
								</Link>
							</li>
						</ul>
					</TabsContent>
					<TabsContent value="hindi">
						<ul className="text-sm text-pretty font-sans space-y-2">
							<li className="px-2 py-1 bg-slate-100 rounded">
								<Link
									target="_blank"
									href={"https://www.instagram.com/reel/C8tvGQ8JIuW/"}
								>
									चंडीगढ़ वासियों के लिए खुशखबरी
								</Link>
							</li>
							<li className="px-2 py-1 bg-slate-100 rounded">
								<Link
									target="_blank"
									href={"https://www.instagram.com/reel/C4iajQkJuL2/"}
								>
									Sagar di vohti lehndi Indica chala
								</Link>
							</li>
							<li className="px-2 py-1 bg-slate-100 rounded">
								<Link
									target="_blank"
									href={"https://www.instagram.com/reel/C4fqsheJFEk/"}
								>
									क्या Virat Kohli नहीं खेलेंगे T-20 World Cup?
								</Link>
							</li>
						</ul>
					</TabsContent>
				</Tabs>
			</div>

			<div className="mt-10 flex flex-col items-center justify-center space-y-10 text-center">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
					Content Writing Work (Punjabi Language)
				</h2>
				<div>
					<ContentWritingImage />
				</div>
			</div>

			<div className="mt-10 space-y-5 text-center">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
					Letter To Editor
				</h2>
				<div>
					<MarqueeDemo />
				</div>
			</div>
		</div>
	);
};

export default MyWork;
