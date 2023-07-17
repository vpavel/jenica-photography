'use client';

import Link from 'next/link';
import { useState } from 'react';
import logo from '../../../public/logo.jpg';
import Image from 'next/image';

const Navbar: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className="md:flex md:items-center bg-gradient-to-r from-blue-500 to-purple-500">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between ">
					<div className="flex items-center">
						<Image src={logo} alt="" width={50} height={50} className="pr-2" />
						<div className="flex-row md:flex-1">
							<div className="text-white font-bold text-md">Jenica</div>
							<div className="text-white font-bold text-md">Photography</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<Link
									href="/"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Home
								</Link>
								<Link
									href="/about"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									About
								</Link>
								<Link
									href="/services"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Services
								</Link>
								<Link
									href="/contact"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Contact
								</Link>
							</div>
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button
							type="button"
							onClick={toggleMobileMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isMobileMenuOpen}>
							<span className="sr-only">Open main menu</span>
							{!isMobileMenuOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							onClick={toggleMobileMenu}
							href="/"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Home
						</Link>
						<Link
							onClick={toggleMobileMenu}
							href="/about"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							About
						</Link>
						<Link
							onClick={toggleMobileMenu}
							href="/services"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Services
						</Link>
						<Link
							href="/contact"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Contact
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
