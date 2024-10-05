import LogoSrc from '@/assets/images/logo/logo.png';
import OptimizedImage from '@/components/CustomImage/OptimizedImage';
import Link from 'next/link';

interface LogoProps {
	className?: string;
}

const Logo = ({ className }: LogoProps) => {
	return (
		<Link
			href={'/'}
			className={`${className}`}
		>
			<OptimizedImage
				width={200}
				height={200}
				src={LogoSrc.src}
				alt="logo"
			/>
		</Link>
	);
};

export default Logo;
