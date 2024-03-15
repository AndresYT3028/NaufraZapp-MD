let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 1000)
let info = `> ⛏️ MINASTE LA CANTIDAD DE: ${hasil} de XP`
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `> *Espere en: ${msToTime(time - new Date())} para volver a minar.*`  

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '⛏️ 𝐌𝐈𝐍𝐄𝐑𝐈𝐀 / 𝐌𝐈𝐍𝐄𝐑 ⛏️', 'status@broadcast')   
//m.reply(`Minaste la cantidad de ${hasil} de experiencia`)
global.db.data.users[m.sender].lastmiming = new Date * 1

}
handler.help = ['minar']
handler.tags = ['rg']
handler.command = ['minar', 'miming', 'mine'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}