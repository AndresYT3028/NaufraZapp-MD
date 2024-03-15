import fs from "fs"
async function handler(m, {usedPrefix}) {
    const user = m.sender.split("@")[0]
    if (fs.existsSync("./BotsWhatsAppOFC/" + user + "/creds.json")) {
        let token = Buffer.from(fs.readFileSync("./BotsWhatsAppOFC/" + user + "/creds.json"), "utf-8").toString("base64")
        await m.reply(`> ⓘ El codigo te permite iniciar sesion temporalmente con el bot, conectandote con \`GuardianBot-MD\`\n\n> *Tu codigo es:*`)
        await m.reply(token)
    } else {
        await m.reply(`> ⓘ *No Tienes Ningun Token Activo, Utiliza: ${usedPrefix}serbot2 para crear tu codigo...*`)
    }
  }
  handler.command = handler.help = ['guardiancode', 'guardianpremcode', 'guardianpluscode', 'guardiancodetem'];
  handler.tags = ['jadibot'];
  handler.register = true
  handler.private = true
  export default handler;
