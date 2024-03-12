import fs from "fs"
async function handler(m, {conn, usedPrefix}) {
   if (conn.user.jid == global.conn.user.jid) return m.reply(`> ⓘ 𝙎𝙤𝙡𝙤 𝙂𝙪𝙖𝙧𝙙𝙞𝙖𝙣𝘽𝙤𝙩-𝙈𝘿 𝙥𝙪𝙚𝙙𝙚 𝙖𝙥𝙖𝙜𝙖𝙧 𝙚𝙨𝙩𝙚 𝙗𝙤𝙩.`)
   m.reply(`> ⓘ 𝘿𝙚𝙨𝙘𝙤𝙣𝙚𝙘𝙩𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤 𝙖𝙡 𝙣𝙪𝙢𝙚𝙧𝙤.`)
   conn.fstop = true
   conn.ws.close()
}
handler.command = handler.help = ['stop', 'byebot'];
handler.tags = ['jadibot'];
handler.owner = true
handler.private = true
handler.register = true
export default handler; 
