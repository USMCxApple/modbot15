const Discord = require('discord.js-commando');
const bot = new Discord.Client
const TOKEN = 'NTUwNDU4MzYzNjEyMjMzNzU2.D3hYGQ.jUJmHbNMuVYPwPi77fBRfBM0YXc'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  
    bot.user.setActivity("Under Development!", {type: "WATCHING"});
  
    //bot.user.setGame("on SourceCade!");
  });


bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.send('Hello, How are you?')
    }
});

bot.on('message', function(message){
    if(message.content == 'info')
    {
        message.channel.send('Heck off you fricker')
    }
});

bot.on('message', function(message){
    if(message.content == 'die')
    {
        message.channel.send('No. Now, go bother somebody else.')
    }
});

bot.on('message', function(message){
    if(message.content == 'good morning')
    {
        message.channel.send('Good Morning, How are you? I hope you have a wonderful day! :smiley:')
    }
});

bot.on('message', function(message){
    if(message.content == '☭')
    {
        message.channel.send('R.I.P SOVIET UNION :sob:')
    }
});

bot.on('message', function(message){
    if(message.content == 'goodnight')
    {
        message.channel.send('Goodnight! See you in the morning! :smiley:')
    }
});



module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("ModBot.js v1.0.3")
    .setDescription("If you would like to use noface bot on your own server be sure to contact me via Private message. Thank you.")
    .setColor("#7289DA")
    .setThumbnail(bicon)
    .setFooter("Jordan S. 1#7794");
  
      message.channel.send(botembed);
  }
  
  module.exports.help = {
    name:"info"
  }


bot.on('ready', function(){
    console.log('ready')
});

bot.login(TOKEN)