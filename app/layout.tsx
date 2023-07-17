import Navbar from './components/navbar/page';
import FadeOnScroll from './components/fadeOnScroll/page';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from './components/footer/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Jenica Photography',
	description: 'Fotograf profesionist',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="bg-[#FFFDFA] min-h-screen flex flex-col justify-between">
					<FadeOnScroll />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
