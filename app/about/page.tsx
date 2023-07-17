import Image from 'next/image';
import portrait from '../../public/pexels-cihan-oguzmetin-4505269.jpg';

import React from 'react';

const About = () => {
	return (
		<div className="mt-20 ">
			<div className="container flex justify-center items-center py-10 mx-auto">
				<h1 className="text-3xl font-bold text-gray-700 ">About me</h1>
			</div>
			<div className="container flex flex-col md:flex-row items-center flex-grow mx-auto">
				<div className="mx-10 pb-5">
					<Image src={portrait} alt="About Image" className="w-full h-auto rounded-lg" />
				</div>
				<div className="mx-10 px-3">
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec turpis in libero mattis commodo. Proin
						at orci arcu. Praesent dictum lorem vel orci sagittis, at vulputate nisi gravida. Nulla at odio efficitur,
						tincidunt tellus nec, luctus dui. Sed in lorem in metus consequat tincidunt. Suspendisse potenti. Cras
						sodales sem id lacus consequat iaculis. Morbi tincidunt tortor vitae libero ultrices posuere.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
