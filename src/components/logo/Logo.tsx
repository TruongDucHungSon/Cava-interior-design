import Image from 'next/image';
import Link from 'next/link';
import LogoSrc from '../../assets/images/logo/logo.jpg';

interface LogoProps {
	className?: string;
}

const Logo = ({ className }: LogoProps) => {
	return (
		<div className={`w-[180px] ${className}`}>
			<Link href="/">
				<Image
					src={LogoSrc} // sử dụng src trực tiếp từ import
					alt="logo"
					width={180} // chiều rộng thực tế
					height={50} // chiều cao thực tế
					priority // ưu tiên tải ảnh
				/>
			</Link>
		</div>
	);
};

export default Logo;
