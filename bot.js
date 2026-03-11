const bedrock = require("bedrock-protocol")

const client = bedrock.createClient({
  host: "kuvarsaku.aternos.me",
  port: 46212,
  username: "MexaAi"
})

client.on("join", () => {
  console.log("Bot sunucuya katıldı")
})

client.on("spawn", () => {
  console.log("Bot spawn oldu")
})

client.on("text", (packet) => {
  const msg = packet.message
  const sender = packet.source_name

  console.log(sender + ": " + msg)

  if(msg.toLowerCase().includes("bot")) {
    sendMessage("Merhaba! Ben sunucu botuyum 🤖")
  }
})

function sendMessage(message) {
  client.queue("text", {
    type: "chat",
    needs_translation: false,
    source_name: "GKBot",
    message: message,
    xuid: "",
    platform_chat_id: ""
  })
}

setInterval(() => {
  client.queue("animate", { action_id: 1 })
  console.log("AFK hareketi")
}, 20000)
