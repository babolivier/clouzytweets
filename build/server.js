// Generated by CoffeeScript 1.9.3
var americano, port;

americano = require('americano');

port = process.env.PORT || 9250;

americano.start({
  name: 'ClouzyTweets',
  port: port
});
