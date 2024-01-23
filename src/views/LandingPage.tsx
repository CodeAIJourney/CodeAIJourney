import { Link } from "react-router-dom";

import { CustomButton } from "@components/common/material-ui/CustomButton";
import { BaseLayout } from "@layouts/BaseLayout";

import "../styles/LandingStyle.css";

export function LandingPage() {
	return (
		<BaseLayout>
			<div className="w-full h-full bg-landing">
				<div className="flex flex-col h-full">
					<div className="text-center pt-10 pb-20">
						<h1 className="text-white text-6xl">Code AI Journey</h1>
					</div>
					<div className="flex-1 w-full flex">
						<div className="container mx-auto my-auto bg-black bg-opacity-40">
							<p className="font-xl text-xl text-center text-white">
								Welcome to CodeAIJourney, where the journey of exploration in the world of artificial intelligence begins. We are a pioneering initiative dedicated to unraveling the mysteries and infinite possibilities of AI. Our goal is to deliver innovative AI solutions, share knowledge through interactive learning, and connect enthusiasts and professionals through a global network.
							</p>
						</div>
					</div>
					<div className="flex-1 w-full flex">
						<div className="mx-auto my-auto py-10">
							<Link to="/explore">
								<div className="bg-button py-2 px-6 rounded-xl cursor-pointer text-xl hover:text-white">
									Explore
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</BaseLayout>
	);
}
