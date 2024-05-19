import { Metadata } from 'next';

const applicationName = 'My dApp';
const title = 'title';
const keywords = 'keywords';
const description = 'description';

export const metadata: Metadata = {
	applicationName: applicationName as string,
	title: {
		template: `%s | ${applicationName}`,
		default: title,
	},
	keywords,
	description,
	icons: {
		icon: '/favicon.ico',
		apple: ['/apple-touch-icon.png'],
		shortcut: ['/shortcut.png'],
	},
	openGraph: {
		title,
		description,
		images: {
			url: '/twitter-preview.jpeg',
			alt: `${applicationName} image`,
		},
	},
	// manifest: '/site.webmanifest',
};
