'use client';
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from './common/Button';
import Image from 'next/image';
// import Button from "./Button";

export default function WalletConnect() {
	return (
		<ConnectButton.Custom>
			{({
				account,
				chain,
				openAccountModal,
				openChainModal,
				openConnectModal,
				authenticationStatus,
				mounted,
			}) => {
				// Note: If your app doesn't use authentication, you
				// can remove all 'authenticationStatus' checks
				const ready = mounted && authenticationStatus !== 'loading';
				const connected =
					ready &&
					account &&
					chain &&
					(!authenticationStatus || authenticationStatus === 'authenticated');

				return (
					<div
						{...(!ready && {
							'aria-hidden': true,
							style: {
								opacity: 0,
								pointerEvents: 'none',
								userSelect: 'none',
							},
						})}
						className="text-sm lg:text-base whitespace-nowrap"
					>
						{(() => {
							if (!connected) {
								return (
									<Button onClick={openConnectModal}>
										Connect<span className="hidden md:inline-block">&nbsp;Wallet</span>
									</Button>
								);
							}

							if (chain.unsupported) {
								return <Button onClick={openChainModal}>Wrong network</Button>;
							}

							return (
								<Button buttonClassName="flex gap-3 text-sm">
									<div onClick={openChainModal} className="hidden md:flex text-center">
										{chain.hasIcon && (
											<div
												style={{
													background: chain.iconBackground,
													width: 12,
													height: 12,
													borderRadius: 999,
													overflow: 'hidden',
													marginRight: 4,
												}}
											>
												{chain.iconUrl && (
													<Image
														width={24}
														height={24}
														alt={chain.name ?? 'Chain icon'}
														src={chain.iconUrl}
														style={{ width: 12, height: 12 }}
													/>
												)}
											</div>
										)}
										{chain.name}
									</div>

									<div onClick={openAccountModal}>{account.displayName}</div>
								</Button>
							);
						})()}
					</div>
				);
			}}
		</ConnectButton.Custom>
	);
}
