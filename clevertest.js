var cleverbot = require("cleverbot.io");
var bot = new cleverbot('0agYRpV0eTEAabyL','a5IlKuZnWZXOPUBDsZIAiKKqA95NNcAX');
bot.setNick("sandbox.test"); // Set a nickname

bot.create(function (err, session) {
bot.ask("Just a small town girl", function (err, response) {
  console.log(response); // Will likely be: "Living in a lonely world"
});

bot.ask("What is up?", function (err, response) {
  console.log(response); // Will likely be: "Living in a lonely world"
});
});

bot.create(function (err, session) {
bot.ask("Why is your dick so small", function (err, response) {
  console.log(response); // Will likely be: "Living in a lonely world"
});

bot.ask("What is up?", function (err, response) {
  console.log(response); // Will likely be: "Living in a lonely world"
});
});