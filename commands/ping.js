module.exports = {
    name: 'ping',
    description: 'Kijken als je bot werkt',
    execute(message, args) {
        message.channel.send('pong!')
    }
}