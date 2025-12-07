# IOTA Badges - TypeScript Example

This small example demonstrates how to send an indexation message (useful for storing badge metadata) to an IOTA-compatible node (testnet).

Quick start (PowerShell):

```powershell
# Enter the example folder
cd \\\\wsl.localhost\Ubuntu\home\truong_204\iota-badges\iota-ts

# Copy example env
copy .env.example .env

# Install dependencies
npm install

# Run the example (uses ts-node)
npm run issue:badge
```

Notes:
- By default the example points to a public testnet node. For production or heavier usage, run your own node or use a trusted provider.
- You can change the `NODE_URL`, `INDEX` and `MESSAGE` fields in `.env`.

If you want, I can run `npm install` here and execute the example to verify it — confirm and I'll proceed.
