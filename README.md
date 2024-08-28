## Build Your Own AA Wallet

This project is for anyone interested in developing their own smart contract wallet using the ERC-4337 standard. It's designed to help both developers and users in building and managing their AA wallets.

#### Features:
- Create smart contract wallets on any EVM compatible blockchain.
- Develop Multi-Signature AA wallets.
- Customize your AA wallet according to your needs.
- Send and receive tokens with your AA wallets.
- Manage wallet information in a database.
- Monitor wallet activities.

The project is rooted in [account abstraction](https://ethereum.org/roadmap/account-abstraction) principles. It allows the creation and management of AA wallets.

Modify the `foundry.toml` to deploy on different EVM compatible blockchains.

Made with watching a lot of tutorials, annoying a lot of mentors, and having a lot of self-loathing.

#### A Note on Design:
Frontend design isn't my forte, expect the charm of a 90s website, but with half the aesthetics. Bear with me if it's not to your taste.

#### Tech Stack:
- Next.js (Frontend)
- Foundry (Smart Contracts)
- Prisma (Backend)
- Rainbowkit
- Tailwind
- Userop
- Wagmi

#### Prerequisites
- Foundry
- WalletConnect account
- Supabase account
- Bscscan account
- Stackup account
- An existing Web3 wallet (etc. Metamask)

## Getting Started

To get it started, first:
Type `npm install` in the terminal. Then download the necessary packages in the `/contracts` folder with `forge`.

You need to create a `.env` file and fill in:
- BSC_RPC_URL
- PRIVATE_KEY
- BSCSCAN_API_KEY
- NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID

...So that you can deploy the contracts. After that, add these in the `.env` file:

- DATABASE_URL
- NEXT_PUBLIC_STACKUP_API_KEY
- YOUR_CONTRACT_ADDRESS


Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
