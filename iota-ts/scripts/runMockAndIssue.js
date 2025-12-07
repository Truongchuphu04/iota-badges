const { spawn } = require('child_process');
const path = require('path');

const cwd = path.resolve(__dirname, '..');

// Start mock server
const mock = spawn('node', ['mockNode.js'], { cwd, stdio: ['ignore', 'inherit', 'inherit'] });
console.log('Started mock server, pid', mock.pid);

// Run the issue script with NODE_URL pointing to local mock
const env = Object.assign({}, process.env, { NODE_URL: 'http://127.0.0.1:3000' });
const issue = spawn('npx', ['ts-node', 'src/issueBadgeHttp.ts'], { cwd, stdio: 'inherit', env });

issue.on('close', (code) => {
  console.log('Issue process exited with code', code);
  if (!mock.killed) mock.kill();
  process.exit(code);
});

issue.on('error', (err) => {
  console.error('Failed to run issue process:', err);
  if (!mock.killed) mock.kill();
  process.exit(1);
});

process.on('SIGINT', () => {
  if (!mock.killed) mock.kill();
  process.exit(0);
});
