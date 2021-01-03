const PROXY_CONFIG = [
  {
    context: ['/transportify-service/**', '/auth-service/**'],
    target: 'http://localhost:9092',
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
