import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];

 await conn.sendMessage(m.chat, { react: { text: '🌎', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `👋🏻 Hola ${taguser} 😁
> •┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅•
> ⓘ 𝙏𝙄𝙋𝙊 𝘿𝙀 𝘽𝙊𝙏:
${(conn.user.jid == global.conn.user.jid ? '' : `> SUB BOT / NAUFRAZAPP`) || '> BOT OFICIAL / NAUFRAZAPP'}
> •┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅•
> ⓘ 𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏𝙄𝙑𝙊:
> ${uptime}
> •┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅•
> ⓘ 𝙁𝙀𝘾𝙃𝘼:
> ${date}
> •┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅•
> ⓘ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎:
> ${rtotalreg}
> •┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅•
> ⓘ 𝘽𝙊𝙏:
> 𝘕𝘢𝘶𝘧𝘳𝘢𝘡𝘢𝘱𝘱-𝘔𝘋
> •┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅•
> ⓘ 𝙑𝙀𝙍𝙎𝙄𝙊𝙉:
> ${vs}
> •┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅•
> ⓘ 𝙏𝘼𝙂 𝘽𝙊𝙏 𝙊𝙁𝘾:
@${global.conn.user.jid.split`@`[0]}


> 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrio un error al mostrar el tipo de bot..', m);
  }
};
handler.command = /^(tipobot|bottype|tipodebot)$/i;
handler.register = true
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

/*
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `> *Este comando solo puede ser ejecutado por privado.*`; 
  try {
    const pp = imagen4;
    //const vn = './media/La biblia.mp3';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];

 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })

    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `ⓘ Hola ${taguser} 😁

> ⓘ 𝙏𝙄𝙋𝙊 𝘿𝙀 𝘽𝙊𝙏:
${(conn.user.jid == global.conn.user.jid ? '' : `@${global.conn.user.jid.split`@`[0]}`) || '> BOT OFICIAL / NAUFRAZAPP'}

> ⓘ 𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏𝙄𝙑𝙊:
> ${uptime}

> ⓘ 𝙁𝙀𝘾𝙃𝘼:
> ${date}

> ⓘ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎:
> ${rtotalreg}

> ⓘ 𝘽𝙊𝙏:
> 𝘕𝘢𝘶𝘧𝘳𝘢𝘡𝘢𝘱𝘱-𝘔𝘋

> ⓘ 𝙑𝙀𝙍𝙎𝙄𝙊𝙉:
> ${vs}

> ⓘ 𝙏𝘼𝙂 𝘽𝙊𝙏:
@${global.conn.user.jid.split`@`[0]}
`.trim();
    if (m.isGroup) {
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
      //await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      //await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    }
  } catch {
    conn.reply(m.chat, '> ⓘ Error, este comando no se pudo envíar...', m);
  }
};
handler.command = /^(tipobot|bottype|tipodebot)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
*/
