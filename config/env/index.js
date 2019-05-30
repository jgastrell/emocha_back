const env = process.argv[2] ? process.argv[2] : 'dev';

const envFile = require(`./${env}`);

module.exports = envFile;
