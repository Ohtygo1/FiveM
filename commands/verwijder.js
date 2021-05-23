module.exports = {
    name: 'verwijder',
    description: "verwijder messages!",
   async execute(message, args) {
        if (message.member.roles.cache.has('845705017645334567')){
         if (!args[0]) return message.reply("Alsjeblieft zeg de hoeveelheid!");
 
        if(isNaN(args[0])) return message.reply("Alsjeblieft zeg een echte nummer");
 
        if(args[0] > 100) return message.reply("Ik kan niet meer dan 100 verwijder");
        
        if(args[0] < 1) return message.reply("Je moet sowieso meer dan een verwijderen! ");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 

    
        } else {
            message.channel.send('Je hebt hier niet te perms voor')
        }
    }
}   