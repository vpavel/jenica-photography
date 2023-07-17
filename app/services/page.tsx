import Image from 'next/image';
import portrait from '../../public/pexels-helena-lopes-705792.jpg';

import React from 'react';

const Services = () => {
	return (
		<div className="my-20">
			<div className="container flex justify-center items-center py-10 mx-auto">
				<h1 className="text-3xl font-bold text-gray-700 ">Services</h1>
			</div>
			<div className="container flex flex-grow items-center pb-20 mx-auto flex-col md:flex-row">
				<div className="md:w-1/2 pb-5">
					<Image src={portrait} alt="About Image" className="w-full h-auto rounded-lg" />
				</div>
				<div className="md:w-1/2 px-3 text-center">
					<p className="text-gray-700 m-5 ">40″ x 60″: 950 USD</p>
					<p className="text-gray-700 m-5">24″ x 36″: 400 USD</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
