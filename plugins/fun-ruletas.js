const handler = async (m, {conn, text, isPrems}) => {
if (!db.data.chats[m.chat].game) throw `> ⓘ Para los comandos de juegos, puedes usar el comando: \`#on juegos\` para activarlos.` 
const date = global.db.data.users[m.sender].juegos + 21600000; //21600000 = 6 hs 
if (new Date - global.db.data.users[m.sender].juegos < 21600000) throw `> ⓘ Por favor, espere: ${msToTime(date - new Date())} para volver a jugar. `
let user = global.db.data.users[m.sender]
const prem = Math.floor(Math.random() * 3600000)
const exp = Math.floor(Math.random() * 10000)
const diamond = Math.floor(Math.random() * 300)
const money = Math.floor(Math.random() * 10000)
let rulet = ['text', 'text2', 'text3', 'text4', 'text5', 'text6']; 
let ruleta = rulet[Math.floor(Math.random() * 6)]
global.db.data.users[m.sender].juegos = new Date * 1;
if (ruleta === 'text') return m.reply(`> ⓘ 𝙇𝙖 𝙨𝙪𝙚𝙧𝙩𝙚 𝙚𝙨𝙩𝙖 𝙚𝙣 𝙩𝙞\n> 𝙋𝙤𝙧 𝙩𝙪 𝙨𝙪𝙚𝙧𝙩𝙚, 𝙜𝙖𝙣𝙖𝙨: \`${exp}\` 𝙙𝙚 𝙚𝙭𝙥.`).catch(global.db.data.users[m.sender].exp += exp) 
if (ruleta === 'text2') return m.reply(`> ⓘ 𝙋𝙚𝙧𝙙𝙞𝙨𝙩𝙚, 𝙥𝙤𝙧 𝙩𝙪 𝙢𝙖𝙡𝙖 𝙨𝙪𝙚𝙧𝙩𝙚, 𝙩𝙚 𝙦𝙪𝙞𝙩𝙖𝙣: \`${exp}\` 𝙙𝙚 𝙚𝙭𝙥.`).catch(global.db.data.users[m.sender].exp -= exp) 
if (ruleta === 'text3') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote').catch(m.reply(`> ⓘ 𝙈𝙖𝙡𝙖 𝙨𝙪𝙚𝙧𝙩𝙚, 𝙨𝙚 𝙩𝙚 𝙦𝙪𝙞𝙩𝙖𝙧𝙖 𝙚𝙡 𝙖𝙙𝙢𝙞𝙣 :3`)) 
if (ruleta === 'text4') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote').catch(m.reply(`> ⓘ 𝙏𝙞𝙚𝙣𝙚𝙨 𝙢𝙪𝙘𝙝𝙖 𝙨𝙪𝙚𝙧𝙩𝙚, 𝙩𝙚 𝙜𝙖𝙣𝙖𝙨 𝙨𝙚𝙧 𝙖𝙙𝙢𝙞𝙣 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤!!`)) 
if (ruleta === 'text5') return m.reply(`> ⓘ 𝙏𝙞𝙚𝙣𝙚𝙨 𝙨𝙪𝙚𝙧𝙩𝙚, 𝙙𝙚𝙗𝙞𝙙𝙤 𝙖 𝙚𝙨𝙩𝙤, 𝙩𝙚 𝙜𝙖𝙣𝙖𝙨 𝙪𝙣𝙤𝙨: \`${diamond}\` 𝙙𝙚 𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨.`).catch(global.db.data.users[m.sender].diamond += diamond) 
if (ruleta === 'text6') return m.reply(`> ⓘ 𝙋𝙤𝙧 𝙩𝙪 𝙨𝙪𝙚𝙧𝙩𝙚, 𝙤𝙗𝙩𝙞𝙚𝙣𝙚𝙨 𝙨𝙚𝙧 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙥𝙤𝙧 𝙪𝙣𝙖 𝙝𝙤𝙧𝙖.`).catch(global.db.data.users[m.sender].premium += prem) 
}
handler.help = ['game'];
handler.tags = ['xp'];
handler.command = /^(ruletas|ruleta|suerte)$/i
handler.fail = null;
handler.group = true
handler.register = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}