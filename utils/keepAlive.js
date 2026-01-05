const https = require('https');
const http = require('http');

let pingTimer = null;

function ping(url) {
  const protocol = url.startsWith('https') ? https : http;

  protocol
    .get(`${url}/health`, (res) => {
      console.log(`[KeepAlive] Ping successful: ${res.statusCode}`);
    })
    .on('error', (err) => {
      console.error(`[KeepAlive] Ping failed: ${err.message}`);
    });
}

function startMonitoring(url, intervalMinutes = 12) {
  if (pingTimer) return;
  const interval = intervalMinutes * 60 * 1000;

  ping(url);
  pingTimer = setInterval(() => ping(url), interval);
}

function stopKeepAlive() {
  if (pingTimer) {
    clearInterval(pingTimer);
    pingTimer = null;
    console.log('[KeepAlive] Stopped');
  }
}

module.exports = {
  startMonitoring,
  stopKeepAlive,
  ping,
};
