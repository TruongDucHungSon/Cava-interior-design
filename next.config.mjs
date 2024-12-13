/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ancuong.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'swiperjs.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'kaze.com.vn',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'noithatbinhduong.vn',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
