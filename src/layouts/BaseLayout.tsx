import React from "react";

import { ToggleDarkMode } from "@components/settings/ToggleDarkMode";
import { BackgroundImgPropsInterface } from "@interfaces/BackgroundImgPropsInterface";
import { HeadBar } from "@components/common/HeadBar";

export class BaseLayout extends React.Component<{
	children: React.ReactNode;
	bgImgProps?: BackgroundImgPropsInterface;
	className?: string;
}> {
	render(): React.ReactNode {
		return (
			<main className="w-full h-full p-0 m-0 bg-page relative">
				<div className="absolute top-0 left-0 right-0 h-fit z-10">
					<HeadBar />
				</div>
				<div className="absolute top-0 left-0 right-0 buttom-0 text-content z-0 h-full">
					<div className="flex flex-col h-full overflow-y-auto max-h-screen pt-10">
						<div className="flex-1">
							{this.props.children}
						</div>
						<footer className="">
							<div className="flex justify-end">
								<span className="text-content">Copyright © {new Date().getFullYear()}</span>
							</div>
						</footer>
					</div>
				</div>
			</main>
		);
	}
}
