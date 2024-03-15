

let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
let str = `
> CUENTAS OFICIALES DE NAUFRAZAPP-MD
> •──────────•
Propietario:
wa.me/51929838430
> •──────────•
YouTube:
${yt}
> •──────────•
TikTok:
${gp4}
> •──────────•
Github:
${md}
> •──────────•
Facebook:
${fb}
> •──────────•
Grupo:
${gp1}
> •──────────•
Paypal:
${paypal}
> •──────────•
Instagram:
${gp3}
> •──────────•`
await conn.sendFile(m.chat, media, 'gata.jpg', str, fkontak)}
handler.command = /^cuentas|cuentasoficiales$/i
handler.exp = 35
handler.register = true
export default handler