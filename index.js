const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Discord -> Minecraft (console log placeholder)
client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;

  console.log(`[DISCORD] ${msg.author.username}: ${msg.content}`);
});

// Bot ready
client.on("ready", () => {
  console.log(`Bot online: ${client.user.tag}`);
});

// LOGIN
client.login(process.env.TOKEN);
