module.exports = {
    name: 'ban',
    description: "Banned een persoon!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("Deze persoon is verbannen van de server");
        }else{
            message.channel.send(`Ik kon niet die persoon verbannen!`);
        }
    }
}