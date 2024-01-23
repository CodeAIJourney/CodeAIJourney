import { Link } from "react-router-dom";

import { CustomButton } from "@components/common/material-ui/CustomButton";
import { BaseLayout } from "@layouts/BaseLayout";

export function ExplorePage() {
	return (
		<BaseLayout>
			<div className="flex flex-col">
				<div className="mx-auto">
					<img src="/images/logos/logo.png"
						alt="Logo"
						width={100}
					/>
				</div>
				<div className="container mx-auto flex flex-wrap gap-2 justify-center">
					<div className="w-full text-center pb-6">
						<h1>Tools</h1>
					</div>
					<Link to="/digitalSign">
						<CustomButton>Go to digital sign</CustomButton>
					</Link>
					<Link to="/customEntity">
						<CustomButton>Go to custom entity</CustomButton>
					</Link>
					<Link to="/connectFour">
						<CustomButton>Go to connectFour</CustomButton>
					</Link>
					<Link to="/aiPlayground">
						<CustomButton>Go to AI Playground</CustomButton>
					</Link>
				</div>
			</div>
		</BaseLayout>
	);
}
