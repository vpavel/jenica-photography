import { FC } from 'react';
import Carousel from './components/carousel/page';
import conferencePic1 from '../public/pexels-helena-lopes-705792.jpg';
import conferencePic2 from '../public/pexels-isaac-taylor-2305084.jpg';
import conferencePic3 from '../public/pexels-luis-quintero-2774556.jpg';
import portrait1 from '../public/pexels-cihan-oguzmetin-4505269.jpg';
import portrait2 from '../public/pexels-elizaveta-dushechkina-3750698.jpg';
import portrait3 from '../public/pexels-olena-bohovyk-3541390.jpg';

const HomePage: FC = () => {
	const photosConference = [conferencePic1, conferencePic2, conferencePic3];
	const photosPortrait = [portrait1, portrait2, portrait3];

	return (
		<>
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-2xl font-bold mb-4 text-white">Poze fotografii nunti conferinte</h1>
				<div className="flex flex-wrap flex-row gap-4">
					<Carousel photos={photosConference}></Carousel>
					<h3 className="text-slate-700 text-lg sm:text-2xl p-4 text-center w-full ">About the conference</h3>
					<div className="text-slate-700 text-sm sm:text-lg px-8 pb-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum
					</div>
				</div>
				<div className="flex flex-wrap flex-row gap-4">
					<Carousel photos={photosPortrait}></Carousel>
					<h3 className="text-slate-700 text-lg sm:text-2xl p-4 text-center w-full ">Portraits</h3>
					<div className="text-slate-700 text-sm sm:text-lg px-8 pb-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
