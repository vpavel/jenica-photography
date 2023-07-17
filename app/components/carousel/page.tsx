'use client';

import Image, { StaticImageData } from 'next/image';
import { useCallback, useState } from 'react';

import { useSwipeable } from 'react-swipeable';

interface Props {
	photos: StaticImageData[];
}

const Carousel = ({ photos }: Props) => {
	const [currentImage, setCurrentImage] = useState(0);

	const goToNextImage = useCallback(() => {
		setCurrentImage((prevImage) => (prevImage + 1) % photos.length);
	}, [photos.length]);

	const goToPreviousImage = useCallback(() => {
		setCurrentImage((prevImage) => (prevImage - 1 + photos.length) % photos.length);
	}, [photos.length]);

	const handleSwipe = useCallback(
		(direction: 'Left' | 'Right') => {
			if (direction === 'Left') {
				goToNextImage();
			} else if (direction === 'Right') {
				goToPreviousImage();
			}
		},
		[goToNextImage, goToPreviousImage]
	);

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => handleSwipe('Left'),
		onSwipedRight: () => handleSwipe('Right'),
	});

	return (
		<div className="relative" {...swipeHandlers}>
			<Image src={photos[currentImage]} alt="Carousel Image" className="w-full p-2 rounded-xl shadow-xl" />
			<div className="absolute inset-0 flex justify-between items-center p-2">
				<button
					onClick={goToPreviousImage}
					className="text-white text-2xl p-2 bg-gray-800 rounded-full opacity-50 hover:opacity-75">
					&#8249;
				</button>
				<button
					onClick={goToNextImage}
					className="text-white text-2xl p-2 bg-gray-800 rounded-full opacity-50 hover:opacity-75">
					&#8250;
				</button>
			</div>
		</div>
	);
};

export default Carousel;
