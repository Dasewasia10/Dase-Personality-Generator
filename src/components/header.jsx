import React from "react";
import { Link } from "react-router-dom";

import mainLogo from "../assets/mainLogo.png";

const Header = () => {
	return (
		<div className="absolute w-screen bg-gradient-to-b from-temp1 to-transparent">
			<header className="w-fullpx-2 sticky top-0 z-30 py-4 shadow-xl sm:px-4">
				<div className="mx-auto flex max-w-7xl items-center justify-between">
					<Link to="/">
						<div className="flex flex-row items-center gap-2">
							<img className="flex h-10" src={mainLogo} />
							<span className="text-2xl font-extrabold">
								OC Persona
							</span>
						</div>
					</Link>
					<div className="flex items-center space-x-1">
						<ul className="hidden space-x-2 md:inline-flex">
							<li></li>
						</ul>
						<div className="inline-flex md:hidden">
							<button className="flex-none px-2 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 8h16M4 16h16"
									/>
								</svg>
								<span className="sr-only">Open Menu</span>
							</button>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
