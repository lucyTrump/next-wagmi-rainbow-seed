'use client';
import React from 'react';
import { config } from '@/config/wagmiConfig';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
const queryClient = new QueryClient();

export default function WagmiConfigProvider({ children }: React.PropsWithChildren) {
	const defaultChainId = config.chains?.[0]?.id || 167_009;
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider
					initialChain={defaultChainId}
					locale="en-US"
					modalSize="compact"
					theme={darkTheme({
						accentColor: 'rgb(var(--primary))',
						accentColorForeground: 'rgb(var(--default-bg))',
						borderRadius: 'large',
					})}
				>
					{children}
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
