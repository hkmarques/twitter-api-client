require('./dotenv.config');
const commandLineArgs = require('command-line-args');
const Twit = require('twit');

const optionDefinitions = [{ name: 'endpoint', type: String }];
const { endpoint } = commandLineArgs(optionDefinitions);

const Twitter = new Twit({
  consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_API_CONSUMER_KEY_SECRET,
  access_token: process.env.TWITTER_API_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_API_ACCESS_TOKEN_SECRET,
  strictSSL: true
});

Twitter.get(endpoint, { id: '23424768' }, (err, data, response) => {
  console.log(JSON.stringify(data));
});
