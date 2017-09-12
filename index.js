const discord = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new discord.Client();
const token = "MON TOKEN";


//Lancement du bot
client.on('ready', () => {
    var servers = client.guilds.array().map(g => g.name).join('.');
    console.log("========================\n[!]ANTARES DISPO");
    client.user.setGame("𝓐𝓝𝓣𝓐𝓡𝓔𝓢")
    });

    client.on('message', message =>{
    //votre code ici ! 
    if(message.content.startsWith('1')){
        message.channel.send('PARTIT');
    }

    if(message.content.startsWith('2*')){
        message.channel.send('SUR LES LIEUX');
    }
    if(message.content.startsWith('3*')){
      message.channel.send('MESSAGE')
    };
    
    if(message.content.startsWith('4*')){
      message.channel.send('MESSAGE URGENT')
    };

    if (message.content.startsWith('5')){
      message.channel.send('DEPART=>HOPITAL')
    };

    if(message.content.startsWith('6')){
      message.channel.send('ARRIVEE HOPITAL')
    };

    if(message.content.startsWith('7')){
      message.channel.send('DISPONIBLE')
    };

    if(message.content.startsWith('8')){
      message.channel.send('INDISPONIBLE')
    };

    if(message.content.startsWith('9')){
      message.channel.send('RENTRE')
    };

    if(message.content.startsWith('22')){
      message.channel.send('SMUR SLL')
    };

    if(message.content.startsWith('30')){
      message.channel.send('POLICE SLL')
    };

    if(message.content.startsWith('31')){
      message.channel.send('GENDARMERIE SLL')
    };

    if(message.content.startsWith('32')){
      message.channel.send('EDF SLL')
    };

    if(message.content.startsWith('33')){
      message.channel.send('GDF SLL')
    };

    if(message.content.startsWith('34')){
      message.channel.send('DDE SLL')
    };

    if(message.content.startsWith('35')){
      message.channel.send('CONSEIL GENERAL SLL')
    };

    if(message.content.startsWith('36')){
      message.channel.send('POLICE MUNL SLL')
    };

    if(message.content.startsWith('37')){
      message.channel.send('BRIG. VERTE SLL')
    };

    if(message.content.startsWith('38')){
      message.channel.send('MAIRE SLL')
    };

    if(message.content.startsWith('44')){
      message.channel.send('DISPONIBLE SLL')
    };
    if(message.content.startsWith('indicatif')){
      message.channel.send('```CODIS 68 : Département du Haut-Rhin//LANCELOT 68 : Directeur Départemental des Services d’Incendie et de Secours(DDSIS)//MERLIN 68 : Officier de garde départemental(OGADEP)// GARETH (suivi du nom du groupement) : Chef de groupement//MERLIN (+ nom de la commune) : Chef de Centre; CSP; CS ou CPI//HIPPOCRATE 68 : Médecin chef du département//ARAMIS 68 : Préfet du Haut-Rhin//PORTHOS 68 : Directeur du cabinet du Préfet```')
    };
});
client.login(token);
