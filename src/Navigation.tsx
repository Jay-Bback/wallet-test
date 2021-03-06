import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC } from 'react';
import { HomeView } from './HomeView';

export const Navigation: FC = () => {
    const { wallet } = useWallet();

    return (
        <nav>
            <h1>Solana Starter App</h1>
            <div>
                <WalletMultiButton />
                {wallet && <WalletDisconnectButton />}
            </div>
        </nav>
    );
};
