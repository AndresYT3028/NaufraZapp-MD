var handler = async (m, { conn, text, usedPrefix, command}) => {

let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img

try {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = `> ⓘ Paea este uso de comando, tiene que etiquetar al usuario, ppr ejemplo:\n\n> *#${command} @tag*`
if (!text && !m.quoted) return conn.reply(m.chat, bant, m, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
if(user === conn.user.jid) return conn.reply(m.chat, `> ⓘ El @${bot} no puede ser baneado.`, m, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, `> ⓘ El usuario: @${ownerNumber} es el \`Creador\` del bot, no puede ser baneado.`, m, { mentions: [aa] })
return
}}
users = global.db.data.users
if (users[user].banned === true) conn.reply(m.chat, `> ⓘ El usuario: @${number} ya fue baneado.`, m, { mentions: [user] }) 
users[user].banned = true
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, '> ⓘ El usuario mensionado fue baneado con éxito.', m, { mentions: [user] })   

}} catch (e) {
await conn.reply(m.chat, '> ⓘ Ocurrio un error inesperado.' )
console.log(e) 
}

}
handler.tags = ['owner']
handler.commnad = ['banuser']
handler.command = /^banuser$/i

handler.rowner = true

export default handler
    
