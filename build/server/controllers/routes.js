// Generated by CoffeeScript 1.9.3
var twitter;

twitter = require('./twitter');

module.exports = {
  'twitter/tokens': {
    get: twitter.token
  },
  'twitter/pin/:pin': {
    get: twitter.pin
  },
  'user/timeline': {
    get: twitter.timeline
  },
  'user/streaming': {
    get: twitter.streaming
  },
  'user/mentions': {
    get: twitter.mentions
  },
  'user/stream': {
    get: twitter.stream
  },
  'user/directmessages': {
    get: twitter.dm
  },
  'tweet/': {
    put: twitter.tweet
  },
  'tweet/:id': {
    get: twitter.getTweet,
    post: twitter.action,
    "delete": twitter["delete"]
  }
};
