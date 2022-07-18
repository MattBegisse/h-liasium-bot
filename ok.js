const Discord = require ("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS              
    ]
});

Client.on("ready",() => {
    console.log("bot opérationnel");
});

Client.login("OTc2NDQ0MzI2Nzg5OTE0NjM0.G-OYEc.4i7MlHGb1InEwMVeE1FylVEwudQjRa-9uglnD4");

Client.on("guildMemberAdd", member => {
    console.log("un membre est arrivée");
    Client.channels.cache.get("975469502739394602").send("<@" + member.id + "> _est arrivée_" + " https://media.giphy.com/media/DYH297XiCS2Ck/giphy.gif");  
    member.roles.add("979896319546130453");
});

Client.on("guildMemberRemove", member => {
    console.log("un membre est partie");
    Client.channels.cache.get("975469502739394602").send("<@" + member.id + "> _est partie_" + " https://media.giphy.com/media/0eZKTpcN2Cz8529LJT/giphy.gif");
});