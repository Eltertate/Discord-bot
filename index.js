const { Client, Events, GatewayIntentBits } = require("discord.js");
require("dotenv/config")

CHANNEL = '1068191137401143336'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.once(Events.ClientReady, (clientUser) => {
    console.log(`Logged in as ${clientUser.user.tag}`)
})

client.login(process.env.BOT_TOKEN_M)

const BOT_CHANNEL = CHANNEL

client.on(Events.MessageCreate, (message) => {
    if (message.author.bot) return
    if (message.channel.id !== BOT_CHANNEL) return

    console.log(message.content)
})