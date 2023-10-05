import Cards from "@/components/Cards";
import Link from "next/link";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";

export default function Header({ nb }) {
	const pages = [
		{ link: "presentation", title: "PRESENTATION" },
		{ link: "menu", title: "MENU" },
		{ link: "/", title: "BOUTIQUE" },
		{ link: "contact", title: "CONTACT" },
	];

	return (
		<header>
			<nav className="flex justify-end p-5 items-center">
				{pages.map(({ link, title }) => (
					<Link className="pr-10" href={link} key={title}>
						{title}
					</Link>
				))}
				<Link href="cart">
					<div className="h-full w-full relative">
						<BsFillCartFill size={40} />
						<div className="text-red-500 absolute left-0 top-0 flex items-center justify-center h-full w-full">
							{nb}
						</div>
					</div>
				</Link>
			</nav>
		</header>
	);
}
