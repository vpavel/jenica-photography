'use client';

import { useEffect, useState } from 'react';
import Navbar from '../navbar/page';

const FadeOnScroll: React.FC = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;

			setIsVisible(prevScrollPos > currentScrollPos);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	return (
		<div
			className={`fixed rounded-b-[3rem] w-full bg-gradient-to-r from-blue-500 to-purple-500 z-10 transition-opacity duration-700 ${
				isVisible ? 'top-0 opacity-100' : '-top-12 opacity-0'
			} text-white py-2 px-8`}>
			<Navbar />
		</div>
	);
};

export default FadeOnScroll;
