# 🚀 Community Badges - Local Setup Guide

## ✅ What's Running

Your **Community Badges Mint Board** is now live locally!

### 📍 Access Points
- **Local**: http://localhost:3000
- **Network**: http://10.255.255.254:3000

### 🔧 Technology Stack
- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS
- **Blockchain**: IOTA dApp Kit
- **UI**: Radix UI Themes
- **State Management**: React Query

## 🎯 Getting Started

### 1. Install Dependencies (Already Done ✓)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The server will start on **http://localhost:3000**

### 3. Connect Your Wallet
- Click the **Connect Button** in the top-right corner
- Select your wallet (Sui Wallet, Envisat, etc.)
- Choose **Devnet** as your network

### 4. Mint Your First Badge
1. Click **🚀 Mint Badge** button
2. Approve the transaction in your wallet
3. Wait for confirmation (blockchain transaction)
4. Your badge appears with ID and status

### 5. Manage Your Badge
- **⭐ Add Point** - Increment badge points
- **🔄 Reset** - Reset points (owner only)
- **✕ Clear** - Remove current badge

## 📁 Project Structure

```
community/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── MintBoard.tsx      # Badge mint interface
│   ├── Wallet-connect.tsx # Wallet connection
│   └── sample.tsx         # Sample integration
├── hooks/                 # Custom hooks
│   └── useContract.ts     # Contract interaction logic
├── lib/                   # Utilities
│   └── config.ts          # Network configuration
├── contract/              # IOTA Move contract
│   └── community/
│       ├── Move.toml
│       └── sources/
│           └── community.move
└── package.json
```

## 🔌 Contract Configuration

Your contract is deployed on **Devnet** with:
- **Package ID**: `0x1df4db6f2606b727f3e7b6f888812ffa8a10f46df749e68ba0038f164513baa1`
- **Module**: `community::contract`
- **Functions**: create, increment, set_value

Configuration file: `lib/config.ts`

## 🛠️ Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Deploy contract
npm run iota-deploy

# Generate contract prompt
npm run generate-prompt
```

## 🌐 Network Support

Currently configured:
- ✅ **Devnet** (Active)
- ⚪ **Testnet** (Ready to configure)
- ⚪ **Mainnet** (Ready to configure)

To switch networks or update package IDs, edit `lib/config.ts`

## 🎨 Features

### User Interface
- 🌙 Dark theme with gradient background
- 📱 Responsive design (mobile-friendly)
- ⚡ Real-time status updates
- 🎭 Smooth animations and transitions
- 📋 Copy-to-clipboard functionality

### Functionality
- 🏅 Mint community badges
- ⭐ Earn and track points
- 👑 Owner-based permissions
- 🔗 On-chain storage (IOTA blockchain)
- ✅ Transaction confirmation tracking

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is occupied, Next.js will use the next available port (3001, 3002, etc.)

### Wallet Connection Issues
1. Ensure you have a Web3 wallet installed
2. Make sure you're on the Devnet network
3. Check browser console for errors (F12)

### Contract Interaction Fails
1. Verify the package ID in `lib/config.ts`
2. Check your wallet has sufficient gas
3. Ensure you're on the correct network

### Build Errors
```bash
# Clean cache and rebuild
rm -rf .next
npm run build
```

## 📝 Notes

- The app uses **next/image** for optimized images
- All contract calls are async and handle loading states
- Transaction hashes are displayed for verification
- Badge ownership is tracked and enforced on-chain

## 🚀 Next Steps

1. **Test the UI** - Mint a badge and earn points
2. **Check Wallet** - Verify transactions in your IOTA wallet
3. **Deploy on Testnet** - Update `lib/config.ts` with testnet package ID
4. **Customize Branding** - Edit colors in `MintBoard.tsx` and `globals.css`

## 📖 Resources

- [IOTA dApp Kit Docs](https://sdk.iota.org)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [IOTA Move Docs](https://docs.iota.org/move)

---

**Your app is ready! Open http://localhost:3000 in your browser to get started.** 🎉
