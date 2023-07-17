import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-200 py-4 w-full">
			<div className="container flex justify-center items-center mx-auto">
				<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-6 w-6 text-gray-600 hover:text-blue-500 transition-colors">
						<path
							fillRule="evenodd"
							d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.387 4.08 9.8 9.302 9.982v-7.085H8.08V12h3.222V9.607c0-3.196 1.901-4.978 4.828-4.978 1.39 0 2.733.248 2.733.248v3.008h-1.543c-1.514 0-1.983.942-1.983 1.906V12h3.372l-.538 3.897h-2.834V22.05C17.92 21.83 22 17.387 22 12"
						/>
					</svg>
				</a>
				<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mr-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-6 w-6 text-gray-600 hover:text-pink-500 transition-colors">
						<path
							fillRule="evenodd"
							d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 3H7v12h10V5zm-5 4.047a3.958 3.958 0 100 7.915 3.958 3.958 0 000-7.915zm0 1.5a2.458 2.458 0 110 4.916 2.458 2.458 0 010-4.916zm3.727-.423a.472.472 0 11.944 0 .472.472 0 01-.944 0zm-1.25 3.932a.88.88 0 11.001-1.76.88.88 0 01-.001 1.76z"
						/>
					</svg>
				</a>
				<a href="mailto:example@example.com" className="mr-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-6 w-6 text-gray-600 hover:text-red-500 transition-colors">
						<path
							fillRule="evenodd"
							d="M22 4H2V2h20v2zm-2 2H4v12h16V6zm-2 2v8H6V8h12zM4 6H2v12h2V6zm4.061-1.21a.996.996 0 00-1.41 0L4 6.59l-1.65-1.65a.996.996 0 10-1.41 1.41L2.59 8l-1.65 1.65a.996.996 0 101.41 1.41L4 9.41l1.65 1.65a.996.996 0 101.41-1.41L5.41 8l1.65-1.65a.996.996 0 000-1.41z"
						/>
					</svg>
				</a>
			</div>

			<div className="container text-center mt-4 text-gray-600 text-sm mx-auto">
				&copy; {currentYear} Jenica Photography. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
