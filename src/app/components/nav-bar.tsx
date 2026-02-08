"use client";

import Link from "next/link";
import { useState } from "react";
import { Pacifico, Inter } from "next/font/google";

const menuItems = [
	{ name: "Inicio", href: "#inicio" },
	{ name: "Formación", href: "#formacion" },
	{ name: "Habilidades", href: "#habilidades" },
	{ name: "Proyectos", href: "#proyectos" },
	{ name: "Contacto", href: "#contacto" },
];

const pacifico = Pacifico({
	weight: "400",
	subsets: ["latin"],
});

const inter = Inter({
	weight: "600",
	subsets: ["latin"],
});

export function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-[#131313]/95 backdrop-blur ">
			<nav className="flex w-full items-center justify-between px-8 py-6 sm:px-12 lg:px-16 md:py-8">
				<p className={`${pacifico.className} text-2xl font-semibold tracking-wide`}>
					<span className="text-[#FF014F]">C</span>
					<span className="text-[oklch(70.7%_0.022_261.325)]">arlos</span>
					{" "}
					<span className="text-[#FF014F]">G</span>
					<span className="text-[oklch(70.7%_0.022_261.325)]">onzalez</span>
				</p>

				<button
					type="button"
					className="md:hidden inline-flex items-center justify-center rounded-md  p-2 text-foreground"
					aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
					aria-expanded={isOpen}
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<span className="sr-only">Alternar menú de navegación</span>
					{isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-6 w-6"
						>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-6 w-6"
						>
							<path d="M4 6h16" />
							<path d="M4 12h16" />
							<path d="M4 18h16" />
						</svg>
					)}
				</button>

				<div className="hidden md:flex md:items-center md:gap-8 md:ml-auto">
					{menuItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={`${inter.className} text-base font-semibold text-[oklch(70.7%_0.022_261.325)] transition hover:text-white`}
						>
							{item.name}
						</Link>
					))}
				</div>
			</nav>

			{isOpen && (
				<div className="md:hidden bg-background/95 border-t border-white/10 shadow-md">
					<div className="space-y-1 px-4 py-3">
						{menuItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`${inter.className} block rounded-md px-3 py-2 text-base font-semibold text-[oklch(70.7%_0.022_261.325)] transition hover:bg-foreground/10 hover:text-white`}
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</header>
	);
}

export default NavBar;
