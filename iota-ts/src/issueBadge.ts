import { Client } from '@iota/client';
import * as dotenv from 'dotenv';

dotenv.config();

const NODE_URL = process.env.NODE_URL || 'https://api.testnet.shimmer.network';
const INDEX = process.env.INDEX || 'iota-badge';
const MESSAGE = process.env.MESSAGE || JSON.stringify({ badge: 'Hello IOTA', issuedAt: new Date().toISOString() });

async function main() {
  // Some versions of @iota/client accept no constructor args; rely on defaults or environment.
  const client = new Client();

  console.log('Node (env):', NODE_URL);
  console.log('Index:', INDEX);
  console.log('Payload:', MESSAGE);

  try {
    const msg = await client.message().index(INDEX).data(Buffer.from(MESSAGE)).submit();
    if (typeof msg === 'string') console.log('Message submitted. Message ID:', msg);
    else console.log('Message submitted. Response:', msg);
  } catch (err) {
    console.error('Failed to submit message:', err);
    process.exit(1);
  }
}

main();
