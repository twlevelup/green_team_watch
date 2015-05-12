var Config = {};

if (process.env.NODE_ENV === 'production') {
  Config.firebaseUrl = 'https://green-watch-prod.firebaseIO.com';
} else {
  Config.firebaseUrl = 'https://green-watch-dev.firebaseIO.com';
}

module.exports = Config;
