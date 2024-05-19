'use client'
import React from 'react';
import { SWRConfig } from 'swr';
import WagmiConfigProvider from './WagmiConfigProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootProvider({ children }: React.PropsWithChildren) {
	return (
    <WagmiConfigProvider>
        <SWRConfig
          value={{
            errorRetryCount: 3,
          }}
        >
				<Header />
				{children}
				<Footer />
		</SWRConfig>
			</WagmiConfigProvider>
	);
}
