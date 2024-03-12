export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`> ⓘ Hola ${username}, bienvenido/a al bot oficial de \`NaufraZapp-MD\`

> ⓘ SI TIENES DUDAS, PUEDES CONTACTAR AQUI:
> wa.me/5493873687620
> wa.me/19145948340

> ⓘ CREADOR DEL BOT:
> wa.me/51960079181

> ⓘ Puedes apoyar donando o tambien dar una estrella en el repositorio oficial del bot. ✨`) 
user.pc = new Date * 1
}
