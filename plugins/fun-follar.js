
let handler = async (m, { conn, command, text }) => {
if (!text) throw `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙤 𝙚𝙩𝙞𝙦𝙪𝙚𝙩𝙖 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤...`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, `
> ⓘ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤/𝙖 𝙛𝙤𝙡𝙡𝙖𝙙𝙤/𝙖 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤 ✅

𝙑𝙞𝙤𝙡𝙖𝙨𝙩𝙚/𝙁𝙤𝙡𝙡𝙖𝙨𝙩𝙚 𝙖: *${text}* ⁩𝙚𝙣 4

𝙀𝙡/𝙇𝙖 *${text}* 𝙣𝙤 𝙥𝙤𝙙𝙧𝙖 𝙘𝙖𝙢𝙞𝙣𝙖𝙧 𝙥𝙤𝙧 𝙪𝙣 𝙩𝙞𝙚𝙢𝙥𝙤 😔🥳`, null, { mentions: [user] })
}

handler.command = /^(Follar|violar)/i
handler.fail = null
handler.register = true
export default handler
