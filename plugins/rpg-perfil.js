import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = 'https://i.postimg.cc/VLB8DsHB/777c990d-a590-4c3b-8425-7aba3bab37c2.jpg';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `> ⓘ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙣𝙤 𝙨𝙚 𝙚𝙣𝙘𝙪𝙚𝙣𝙩𝙧𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤 𝙚𝙣 𝙢𝙞 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨.`;
  try {
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `
> ⓘ 𝙉𝙊𝙈𝘽𝙍𝙀:
> ✦ ${username} ${registered ? '(' + name + ') ': ''}

> ⓘ 𝙉𝙐𝙈𝙀𝙍𝙊:
> ✦ ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

> ⓘ 𝙇𝙄𝙉𝙆 𝙉𝙐𝙈:
> ✦ wa.me/${who.split`@`[0]}

> ⓘ 𝙀𝘿𝘼𝘿:
> ✦ ${registered ? ' ' + age + ' años' : ''}

> ⓘ 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎:
> ✦ ${limit} 𝚄𝚂𝙾𝚂

> ⓘ ¿𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊?:
> ✦ ${registered ? 'Si': 'No'}

> ⓘ ¿𝙋𝙍𝙀𝙈𝙄𝙐𝙈?:
> ✦ ${premiumTime > 0 ? '✅' : (isPrems ? '✅' : '🚫') || ''}

> ⓘ 𝘾𝙊𝘿𝙄𝙂𝙊 𝘿𝙀 𝙎𝙀𝙍𝙄𝙀: 
> ✦ ${sn}`;
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
};
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^perfil|profile?$/i;
handler.register = true
export default handler;
