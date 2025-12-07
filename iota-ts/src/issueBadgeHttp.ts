import * as dotenv from 'dotenv';

dotenv.config();

const NODE_URL = (process.env.NODE_URL || 'https://api.testnet.shimmer.network').replace(/\/+$/,'');
const INDEX = process.env.INDEX || 'iota-badge';
const MESSAGE = process.env.MESSAGE || JSON.stringify({ badge: 'Hello IOTA', issuedAt: new Date().toISOString() });

async function main() {
  const url = NODE_URL + '/api/v1/messages';

  const body = {
    payload: {
      type: 2,
      index: Buffer.from(INDEX).toString('base64'),
      data: Buffer.from(MESSAGE).toString('base64'),
    },
  };

  console.log('POST', url);

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error('HTTP error', res.status, text);
    process.exit(1);
  }
  try {
    const json = JSON.parse(text);
    console.log('Message posted, response:', json);
  } catch (e) {
    console.log('Response text:', text);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
