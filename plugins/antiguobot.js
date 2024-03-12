let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `> Usa un nuevo codigo en: *${msToTime(time - new Date())}* para volver a reglamar el bono.`

let img = 'https://i.postimg.cc/wTMjCBvr/be8e4992fd4912f06d6c574f96b816dc.jpg'
let dia = Math.floor(Math.random() * 500)
let tok = Math.floor(Math.random() * 400)
let hadesb = Math.floor(Math.random() * 4000)
let expp = Math.floor(Math.random() * 5000)

  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += hadesb
  global.db.data.users[m.sender].joincount += tok
  global.db.data.users[m.sender].exp += expp

let texto = `> ❮🎊 𝐑𝐄𝐆𝐀𝐋𝐎𝐒, 𝐆𝐔𝐀𝐑𝐃𝐈𝐀𝐍𝐁𝐎𝐓-𝐌𝐃 🎊❯\n> ⓘ Ingresaste el codigo de bono en GuardianBot-MD para NaufraZapp-MD, no te pierdas de las novedades de este bot 🥳\n\n> 𝘽𝙊𝙉𝙊 𝘿𝙀𝙇 𝘾𝙊𝘿𝙄𝙂𝙊:\n> ${dia} diamantes 💎\n> ${tok} NZcoins 💰\n> ${hadesb} Monedas 🪙\n> ${expp} Experiencia ✨`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'hades.jpg', texto, fkontak)
//await conn.sendButton(m.chat, texto, wm, img, [['menu', '/menu'] ], fkontak, m)  
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['4J3JSONF48FN', 'DK3NS93N7DB9J', '592ND9ND8B3O9J', '3QS7B397DJ38NE8', 'I3NS9397YDBE8', '84BD82BW97HE83N', '3827UEND8BS8J30K', '27FBXWI37DJ37WO'] 
handler.register = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}
