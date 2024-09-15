import OptimizedImage from '@/components/CustomImage/Customimage';
import Link from 'next/link';
import LogoSrc from '../assets/images/logo/logo.png';
export default function Home() {
	return (
		<main className="container">
			<header className="flex flex-cols">
				<div className="py-2 px-0 lg:px-6">
					<div className="flex items-center gap-2">
						<div className="w-[70px] h-[70px] bg-slate-500 p-1">
							<OptimizedImage
								width={200}
								height={200}
								src={LogoSrc.src}
								alt="logo"
							/>
						</div>
						<div>
							<h1>
								<Link href="/">Cava Designer</Link>
							</h1>
							<p>Interior Design</p>
						</div>
					</div>
				</div>
			</header>
		</main>
	);
}
