# IOTA Badges - Frontend (React + TypeScript)

This small frontend demonstrates a TSX React app that can issue indexation messages to an IOTA node's REST API.

Quick start (in WSL recommended):

```bash
cd /home/truong_204/iota-badges/web
npm install
npm run dev
```

The form sends a POST to `NODE_URL/api/v1/messages` and displays the raw response. For local testing you can run the mock node from the `iota-ts` example:

```bash
cd /home/truong_204/iota-badges/iota-ts
node mockNode.js
# then in another shell:
cd /home/truong_204/iota-badges/web
npm run dev
```

Notes:
- The example uses `btoa` to base64-encode index and payload; browsers support this natively.
- For production, validate and sanitize inputs and avoid sending secrets from the browser.
