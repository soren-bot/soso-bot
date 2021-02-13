const Discord = require('discord.js')

const client = new Discord.Client();





client.on("ready", function () {

    console.log("Mon BOT est connecté");

})







client.on("message", function(message){

    if (message.content === "Salut"){

        message.channel.send("Salut l'ami!")

    } 

})



client.login("ODEwMTM4MDQwNDg3Mzc4OTQ0.YCfR2A.ch3toAHWv8vZ_YnwpZt2wEZujRQ")