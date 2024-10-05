'use client';

import Image from 'next/image';
import React from 'react';

interface OptimizedImageProps {
	src: string;
	alt: string;
	fallbackSrc?: string;
	className?: string;
	width?: number;
	height?: number;
	priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
	src,
	alt,
	fallbackSrc,
	className,
	width,
	height,
	priority = false,
}) => {
	const [imgSrc, setImgSrc] = React.useState<string>(src);

	const handleError = () => {
		if (fallbackSrc) {
			setImgSrc(fallbackSrc);
		}
	};

	return (
		<Image
			src={imgSrc}
			alt={alt}
			className={`${className} object-cover w-full h-full cursor-pointer`}
			width={width || 500}
			height={height || 500}
			priority={priority}
			onError={handleError}
		/>
	);
};

export default OptimizedImage;
