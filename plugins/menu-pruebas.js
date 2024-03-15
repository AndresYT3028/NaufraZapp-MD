import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `*🦋 𝐿𝑜𝑠 𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 +18 𝐸𝑠𝑡𝑎𝑛 𝐷𝑒𝑠𝑎𝑐𝑡𝑖𝑣𝑎𝑑𝑜 𝑃𝑜𝑟 𝑈𝑛 𝐴𝑑𝑚𝑖𝑛, 𝑆𝑖 𝐸𝑟𝑒𝑠 𝐴𝑑𝑚 𝐸𝑠𝑐𝑟𝑖𝑏𝑒: !enable modohorny*`; 
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