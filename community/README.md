# IOTA Community Badges

Decentralized platform for recognizing community contributions with NFT badges on IOTA blockchain.

## 🎯 Features

- 🎁 NFT Badge System - Mint badges for contributions
- 📝 Contribution Tracking - Submit 6 types of contributions (code, writing, support, events, design, translation)
- 🛡️ Admin Dashboard - Review and approve contributions
- 👤 User Profiles - Display badges and stats
- 🏆 Leaderboard - Rank top contributors
- 🎓 Achievements - Unlock milestones
- 🔔 Notifications - Real-time updates
- 📱 Responsive - Mobile, tablet, desktop

## 🏗️ Tech Stack

**Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS, IOTA dApp Kit

**Smart Contract:** Move (IOTA)

**Network:** IOTA Devnet

## 📁 Project Structure

```
├── app/                    # Pages (Home, Admin, Profile)
├── components/             # React components (11+)
├── contract/community/     # Move smart contract
├── lib/                    # Config & utilities
├── hooks/                  # Custom hooks
└── public/                 # Assets
```

## 💻 Smart Contract

**File:** `contract/community/sources/community.move`

### Contribution Types (Points)
- Code: 100pts
- Writing: 50pts
- Support: 30pts
- Event: 40pts
- Design: 60pts
- Translation: 40pts

### Badge Rarity
Bronze → Silver → Gold → Diamond → Legendary

### Core Functions
- `initialize_registry()` - Setup registry
- `submit_contribution()` - User submits contribution
- `approve_contribution()` - Admin mints badge
- `reject_contribution()` - Admin rejects

## 🚀 Quick Start

### 1. Clone & Navigate
```bash
# Navigate to project
cd iota-badges/community

# Or clone if you don't have it
git clone <repo-url>
cd community
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Dev Server
```bash
npm run dev
```

**Expected Output:**
```
✓ Ready in XXXms
  Local:         http://localhost:3000
  GET / 200
```

### 4. Open in Browser
- **Home:** http://localhost:3000
- **Admin:** http://localhost:3000/admin  
- **Profile:** http://localhost:3000/profile

### 5. Connect Your Wallet
- Click "Connect Wallet" button (top-right)
- Approve connection in IOTA wallet
- Start submitting contributions!

## 📖 Usage

### For Contributors
1. Connect wallet (top-right)
2. Fill contribution form
3. Submit and wait for admin review
4. View badges on `/profile`

### For Admins
1. Go to `/admin`
2. Review pending contributions
3. Approve & mint badge or reject
4. Check statistics

## 🔗 API Reference

```move
// Initialize
initialize_registry(ctx)

// User submit
submit_contribution(registry, type, title, description, link, ctx)

// Admin approve (mint badge)
approve_contribution(registry, contribution, rarity, ctx)

// Admin reject
reject_contribution(registry, contribution, ctx)
```

## 🎨 Components

| Component | Purpose |
|-----------|---------|
| Navbar | Fixed navigation |
| MintBoard | Badge creation UI |
| ContributionForm | Submit contributions |
| Leaderboard | Top 5 contributors |
| Achievements | Milestones & progress |
| UserProfile | View earned badges |
| AdminDashboard | Manage contributions |
| NotificationDisplay | Toast notifications |

## 📊 Pages

| URL | Purpose |
|-----|---------|
| `/` | Home with MintBoard, Form, Leaderboard, Achievements |
| `/admin` | Admin dashboard |
| `/profile` | User badges & stats |

---

## 🎬 Demo & Examples

### Test Wallets (Devnet)
Get free IOTA coins from: https://faucet.testnet.iota.org

### Sample Data
Contributors will appear in:
- Leaderboard (after approval)
- Achievements (after hitting milestones)
- Badges (after mint)

### Try These Actions
1. Submit a Code contribution
2. Go to /admin and approve it
3. View badge in /profile
4. Check Leaderboard position

---

## 📊 Pages

| URL | Purpose |
|-----|---------|
| `/` | Home with MintBoard, Form, Leaderboard, Achievements |
| `/admin` | Admin dashboard |
| `/profile` | User badges & stats |

## ⚙️ Configuration

Package ID: `0x1df4db6f2606b727f3e7b6f888812ffa8a10f46df749e68ba0038f164513baa1`

Network: IOTA Devnet

---

## 🛠️ Troubleshooting

### Problem: "Port 3000 already in use"
**Solution:**
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Or on Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Then restart
npm run dev
```

### Problem: "Module not found" errors
**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Problem: Server starts but shows errors
**Solution:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Problem: Wallet not connecting
1. Check if you have IOTA wallet extension installed
2. Make sure you're on **IOTA Devnet** (not mainnet)
3. Refresh browser (Ctrl+F5)
4. Check browser console for errors (F12)

### Problem: "Cannot find module 'contract'"
**Solution:**
```bash
# Build the project first
npm run build

# Then run
npm run dev
```

### Problem: TypeScript errors in editor
**Solution:**
```bash
# Rebuild TypeScript definitions
npx tsc --noEmit

# If still failing, restart VS Code and run:
npm install
```

### Can't see changes after editing?
1. Make sure dev server is running
2. Hard refresh browser (Ctrl+Shift+F5 or Cmd+Shift+R)
3. Check console for TypeScript errors

### Slow development server?
```bash
# Try clearing Turbopack cache
rm -rf .next/cache
npm run dev
```

---

## ⚙️ Configuration

## 🖥️ System Requirements

**Minimum:**
- Node.js 18+ (Download: https://nodejs.org)
- npm 9+
- 500MB free disk space
- Modern browser (Chrome, Firefox, Safari, Edge)

**Check your versions:**
```bash
node --version    # Should be v18+
npm --version     # Should be 9+
```

---

## 🛠️ Build & Deploy

```bash
# Development (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## 📦 Project Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms
**Netlify:**
1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

**Docker (Self-hosted):**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```

---

## 📋 Project Checklist

Before launching:
- [ ] Server runs without errors (`npm run dev`)
- [ ] All pages load (/, /admin, /profile)
- [ ] Wallet connects successfully
- [ ] Can submit contribution form
- [ ] Admin can approve/reject
- [ ] Notifications work
- [ ] Mobile responsive (check with F12)
- [ ] No console errors (F12 → Console)

## 📄 License

Apache 2.0

## 📧 Contact & Support

**Project Maintainer:**
- Email: community@iota-badges.dev
- GitHub: [@iota-community](https://github.com/iota-community)
- Discord: [IOTA Community Server](https://discord.gg/iota)

**Report Issues:**
- GitHub Issues: [Create Issue](https://github.com/iota-community/badges/issues)
- Security: security@iota-badges.dev

**Community Links:**
- Website: https://iota-badges.dev
- Twitter: [@IOTACommunity](https://twitter.com/iotacommunity)
- Forum: https://forum.iota.org

---

**Built for IOTA Community | Version 1.0.0**
