const discord = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new discord.Client();
var token = process.env.Discord_token
const token = "MON TOKEN";

//Lancement du bot
client.on('ready', () => {
    var servers = client.guilds.array().map(g => g.name).join('.');
    console.log("========================\n[!]Je fonctionne");
    client.guilds.size
    });

client.on('message', message =>{
    if(message.content=='1'){
        message.channel.send('PARTI' + message.guild.roles.find('name','CTA/CODIS').toString());
    }
    
    if(message.content=='2'){
        message.channel.send('Sur Les Lieux' + message.guild.roles.find('name','CTA/CODIS').toString());
    }
    
    if(message.content=='3'){
        message.channel.send('MESSAGE'+ message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='4'){
        message.channel.send('MESSAGE URGENT'+ message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='5'){
        message.channel.send('TRANSP. HOPITAL'+ message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='6'){
        message.channel.send('ARRIVEE HOPITAL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='7'){
        message.channel.send('DISPONIBLE ET RENTRE'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='8'){
        message.channel.send('INDISPONIBLE'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='9'){
        message.channel.send('RENTRE'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='22'){
        message.channel.send('SMUR SLL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='30'){
        message.channel.send('POLICE SLL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='31'){
        message.channel.send('GENDARMERIE SLL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='32'){
        message.channel.send('EDF SLL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='33'){
        message.channel.send('GDF SLL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='34'){
        message.channel.send('DDE SLL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='35'){
        message.channel.send('CONSEIL GENERAL SLL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='36'){
        message.channel.send('POLICE MUNICIPALE SLL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='37'){
        message.channel.send('BRIG. VERTES SLL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='38'){
        message.channel.send('MAIRE SLL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

    if(message.content=='44'){
        message.channel.send('DISPONIBLE SLL'+message.guild.roles.find('name','CTA/CODIS').toString());
    }

});
client.login(token);
