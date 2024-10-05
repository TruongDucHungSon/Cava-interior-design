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
		],
	},
};

export default nextConfig;
