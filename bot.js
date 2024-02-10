// Require necessary modules and load environment variables from .env file
require('dotenv').config()

// Require Discord.js module
const Discord = require('discord.js')
// Create a new Discord client
const client = new Discord.Client({
  partials: ["MESSAGE"] // Enable partials for message events
})

// Define constants
const BOT_PREFIX = '!' // Prefix for bot commands
const MOD_ME_COMMAND = 'mod-me' // Command for granting moderation role

// Event listener for when the bot is ready
client.on("ready", () => {
  console.log("Our bot is ready to go.") // Log a message when the bot is ready
})

// Event listener for when a message is deleted
client.on("messageDelete", msg => {
  msg.channel.send("Stop deleting messages") // Send a message when a message is deleted
})

// Event listener for incoming messages
client.on("message", msg => {
  // Check if the message content is "I love Los"
  if (msg.content == "I love Los") {
    msg.react("💙") // React with a blue heart emoji
  }

  // Check if the message content matches the mod-me command
  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member) // Call the modUser function to grant moderation role
  }
})

// Function to grant moderation role to a user
function modUser(member) {
  member.roles.add("ID") // Add the moderation role to the member
}

// Log in the bot using the provided BOT_TOKEN from environment variables
client.login(process.env.BOT_TOKEN)
