/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';

const nextConfig = {
	webpack: (config) => {
		config.externals.push('pino-pretty', 'lokijs', 'encoding');
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};

export default withSvgr(nextConfig);
