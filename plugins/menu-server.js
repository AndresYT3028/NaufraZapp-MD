import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
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

 await conn.sendMessage(m.chat, { react: { text: '🤖', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `> 𝙎𝙀𝙍𝙑𝙄𝘿𝙊𝙍𝙀𝙎 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀𝙎 𝙀𝙉 𝙂𝙐𝘼𝙍𝘿𝙄𝘼𝙉𝘽𝙊𝙏-𝙈𝘿, 𝘾𝙊𝙈𝙋𝙍𝘼𝙎 𝙋𝘼𝙍𝘼 𝘽𝙊𝙏𝙎 𝙀𝙉 24/7

> 【 𝗦𝗘𝗥𝗩𝗘𝗥 𝗕𝗔𝗝𝗢 】
> ⓘ Servidor básico. 
> ✦ \`$3 PayPal\`
> ⏏ 3 dias
◊ •════════════════• ◊
> 【 𝗦𝗘𝗥𝗩𝗘𝗥 𝗠𝗘𝗗𝗜𝗢 】
> ⓘ Servidor adaptable.
> ✦ \`$5 PayPal\`
> ⏏ 5 dias
◊ •════════════════• ◊
> 【 𝗦𝗘𝗥𝗩𝗘𝗥 𝗔𝗟𝗧𝗢 】
> ⓘ Servidor velocidad adaptable.
> ✦ \`$10 PayPal\`
> ⏏ 10 dias
◊ •════════════════• ◊
> 【 𝗦𝗘𝗥𝗩𝗘𝗥 𝗣𝗟𝗨𝗦 】
> ⓘ Servidor rapido y comodo.
> ✦ \`$20 PayPal\`
> ⏏ 40 dias
◊ •════════════════• ◊
> 【 𝗦𝗘𝗥𝗩𝗘𝗥 𝗣𝗥𝗢 】
> ⓘ Servidor rapido y mejor.
> ✦ \`$30 PayPal\`
> ⏏ 30 dias
◊ •════════════════• ◊
> 【 𝗦𝗘𝗥𝗩𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 】
> ⓘ Servidor premium.
> ✦ \`$40 PayPal\`
> ⏏ 60 dias
◊ •════════════════• ◊
> 【 𝗦𝗘𝗥𝗩𝗘𝗥 𝗠𝗘𝗚𝗔 】
> ⓘ Servidor avanzado.
> ✦ \`$50 PayPal\`
> ⏏ 100 dias
◊ •════════════════• ◊
> ⓘ 𝙎𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙢𝙖𝙨 𝙙𝙪𝙙𝙖𝙨, 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙖 𝙘𝙤𝙣 𝙂𝙪𝙖𝙧𝙙𝙞𝙖𝙣𝘽𝙤𝙩-𝙈𝘿.
`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrio un error al mostrar el menu de servidores en GuardianBot-MD', m);
  }
};
handler.command = /^(guardianservidor|guardiancompra|comprarserver|serverguardian)$/i;
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