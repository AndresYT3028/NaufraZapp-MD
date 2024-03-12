import yts from 'yt-search';
import fs from 'fs';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧 𝙫𝙖𝙧𝙞𝙖𝙣𝙩𝙚𝙨 𝙚𝙣 𝙔𝙤𝙪𝙏𝙪𝙗𝙚.`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      global.videoList.splice(0, global.videoList.length);
    }
    const results = await yts(text);
    const textoInfo = `> ⓘ 𝙋𝙪𝙚𝙙𝙚𝙨 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤 𝙤 𝙖𝙪𝙙𝙞𝙤 𝙙𝙚 𝙡𝙖 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙢𝙖𝙣𝙚𝙧𝙖.
> ${usedPrefix}audio numero
> ${usedPrefix}video numero

> ⓘ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤𝙨 𝙙𝙚 𝙪𝙨𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤.
> *${usedPrefix}audio 5*
> *${usedPrefix}video 8*`.trim();
    const teks = results.all.map((v, i) => {
      const link = v.url;
      vids_.urls.push(link);
      return `> ⓘ 𝙉𝙐𝙈𝙀𝙍𝙊: [${i + 1}]

> ⓘ 𝙉𝙊𝙈𝘽𝙍𝙀:
> • ${v.title}

> ⓘ 𝙀𝙉𝙇𝘼𝘾𝙀:
> • ${v.url}

> ⓘ 𝙏𝙄𝙀𝙈𝙋𝙊:
> • ${v.timestamp}`;
    }).join('\n\n•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('> ⓘ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙫𝙪𝙚𝙡𝙫𝙖 𝙖 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧𝙡𝙤.');
  }
};
handler.help = ['playlist *<texto>*'];
handler.tags = ['search'];
handler.command = /^playlist|playlist2$/i;
export default handler;
