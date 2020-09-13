const Discord = require ('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log(" Connected as " + bot.user.tag)

    bot.user.setActivity("Dungeon", {type: "Online"})

    bot.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    }) 

    let generalChannel = bot.channels.cache.get("754521030042845234")
    generalChannel.send("Bem-Vindo ao Bot DestinyOfChaos")
})

// Messages Send and Receive

bot.on('message', (receivedMessage) => {
    if(receivedMessage.author == bot.user) {
        return 
    }
    receivedMessage.channel.send("Message received, " + receivedMessage.author.toString() + " " + 
    receivedMessage.content)


    receivedMessage.react("🧙‍♂️")
    receivedMessage.react("🤖")
    receivedMessage.react("🤖")
    receivedMessage.react("😺")   
    receivedMessage.guild.emojis.cache.forEach(customEmoji => {
        console.log(`${customEmoji.name} ${customEmoji.id}`)
        receivedMessage.react(customEmoji)
    })

    //  let customEmoji = receivedMessage.guild.emojis.get(emojiId)

    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if(primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == 'multiply') {
        multiplyCommand(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("Comando desconhecido. tente tambem `!multiply`")
    }
}

function multiplyCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("Sem argumentos. tente `!multiply 2 10`")
        return 
    }
    let product = 1
    arguments.forEach((value) => {
        product = product * parseFloat(value) 
    })
    receivedMessage.channel.send("The product of " + arguments + " is " + products.toString())
}

function helpCommand(arguments, receivedMessage) {
    if(arguments.length == 0 ) {
        receivedMessage.channel.send("Nobre guerreiro do Destino tente `!list`")
    } else {
        receivedMessage.channel.send("Parece que você precisa de ajuda" + arguments)
    }
}


bot.login("") //Token Discord

