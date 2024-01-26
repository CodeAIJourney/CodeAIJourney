import { Link } from "react-router-dom";
import { BaseLayout } from "@layouts/BaseLayout";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import "../styles/LandingStyle.css";
import { useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import React from "react";

export function LandingPage() {
	const isDarkMode = useAppSelector((state) => state.appSetting.isDarkMode);
	const [particlesColor, setParticlesColor] = React.useState('#999999');
	const particlesInit = async (main) => {
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log("Particles loaded");
	};

	useEffect(() => {
		console.log(isDarkMode);
		if (isDarkMode) {
			setParticlesColor("#ffffff");
		} else {
			setParticlesColor("#000000");
		}
	}, [isDarkMode])

	return (
		<BaseLayout>
			<div className="w-full h-full relative">
				<Particles
					id="tsparticles"
					init={particlesInit}
					loaded={particlesLoaded}
					options={{
						fpsLimit: 120,
						interactivity: {
							events: {
								onClick: {
									enable: true,
									mode: "push"
								},
								onHover: {
									enable: true,
									mode: "repulse"
								},
								resize: true
							},
							modes: {
								push: {
									quantity: 4
								},
								repulse: {
									distance: 200,
									duration: 0.4
								}
							}
						},
						particles: {
							color: {
								value: particlesColor
							},
							links: {
								color: particlesColor,
								distance: 150,
								enable: true,
								opacity: 0.5,
								width: 1
							},
							collisions: {
								enable: true
							},
							move: {
								direction: "none",
								enable: true,
								outModes: {
									default: "bounce"
								},
								random: false,
								speed: 1,
								straight: false
							},
							number: {
								density: {
									enable: true,
									area: 800
								},
								value: 80
							},
							opacity: {
								value: 0.5
							},
							shape: {
								type: "circle"
							},
							size: {
								value: { min: 1, max: 5 }
							}
						},
						detectRetina: true
					}}
				/>
				<div className="absolute inset-0">
					<div>
						<img src="/images/background/landing-background.webp" alt="background" className="shadow-img max-h-screen mx-auto" />
					</div>
					<div className="flex flex-col h-full absolute inset-0">
						<div className="text-center pt-5 md:pt-8 lg:pt-10 pb-10 lg:pb-20">
							<h1 className="text-black dark:text-white text-5xl sm:text-7xl lg:text-9xl font-thin landing-title">Code AI Journey</h1>
						</div>
						<div className="flex-1 w-full flex">
							<div className="container mx-auto my-auto bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-60">
								<p className="font-xl text-xl text-center text-black dark:text-white">
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
			</div>
		</BaseLayout>
	);
}
