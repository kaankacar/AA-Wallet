I tried to build my own smart contract wallet (Abstract Accounts) using the ERC-4337 standart. The app embodies the [account abstraction](https://ethereum.org/roadmap/account-abstraction) principles and enables the user to create their own AA wallet that can send and receive tokens on Goerli Network.

I hate to design websites so don't hate me if you don't like the frontend.

Made with watching a lot of tutorials, annoying a lot of mentors, and having a lot of self-loathing.

#### Tech Stack:
- Next.js
- Foundry
- Prisma
- Rainbowkit
- Tailwind
- Userop
- Wagmi


## Getting Started

To get it started, first:
Type `npm install` in the terminal. Then download the necessary packages in the `/contracts` folder with `forge`.

You need to create a `.env` file and fill in:
- GOERLI_RPC_URL
- PRIVATE_KEY
- ETHERSCAN_API_KEY
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