//Total funciones

let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `> ✅ *FUNCIONES* ✅\n> ${totalf}\nNaufraZapp-MD`,m)
}

handler.help = ['totalf']
handler.tags = ['info']
handler.command = ['totalf']
handler.register = true
export default handler