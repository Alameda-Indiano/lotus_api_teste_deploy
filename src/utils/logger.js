const pino = require('pino');
const env = require('./env');

const logger = pino({
  formatters: {
    level: (level) => ({ level }),
  },
  timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
  ...(env('NODE_ENV') === 'development' && {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        levelFirst: true,
        ignore: 'time,pid,hostname',
      },
    },
  }),
});

module.exports = logger;
