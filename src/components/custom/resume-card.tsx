"use client";

import { Card, CardHeader } from "@/components/ui/card";
import React from "react";

interface ResumeCardProps {
	title: string;
	subtitle?: string;
	period: string;
}
export const ResumeCard = ({ title, subtitle, period }: ResumeCardProps) => {
	return (
		<div className="block cursor-pointer">
			<Card className="flex ">
				<div className="flex-grow ml-4 items-center flex-col group">
					<CardHeader className="py-5">
						<div className="flex items-center justify-between gap-x-2 text-base">
							<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm capitalize">
								{title}
							</h3>
							<div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
								{period}
							</div>
						</div>
						{subtitle && (
							<div className="font-sans text-xs capitalize">{subtitle}</div>
						)}
					</CardHeader>
				</div>
			</Card>
		</div>
	);
};
