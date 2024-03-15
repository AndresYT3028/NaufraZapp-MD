let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './Menu.png'

let love = `> ⓘ Este es el amor que siente la otra persona.. ✨

❤️ El amor de: ${name} que siente por ti, es de: *${Math.floor(Math.random() * 100)}%*

> ⓘ El amor vale mas que mil pensamientos y palabras... ✨`

conn.sendMessage(m.chat,{image: {url: pp}, caption: love, mentions: [m.sender]}, {quoted: m}) 
}

handler.help = ['love  @user']
handler.tags = ['fun']
handler.command = /^(love)$/i
handler.register = true
export default handler