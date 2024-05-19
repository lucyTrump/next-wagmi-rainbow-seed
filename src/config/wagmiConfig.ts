import '@rainbow-me/rainbowkit/styles.css';

import { taikoHekla, taikoJolnir, taikoKatla } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { metadata } from './metadata';

declare module 'wagmi' {
	interface Register {
		config: typeof config;
	}
}

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '12345678';
console.log('projectId', projectId);

export const config = getDefaultConfig({
	appName: metadata.applicationName as string,
	projectId,
	chains: [taikoHekla, taikoJolnir, taikoKatla],
	ssr: true, // If your dApp uses server side rendering (SSR)
});
