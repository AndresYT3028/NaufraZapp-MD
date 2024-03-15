import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙨𝙪 𝙛𝙤𝙩𝙤 𝙙𝙚 𝙥𝙚𝙧𝙛𝙞𝙡.';
  const res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
  conn.sendFile(m.chat, res, 'error.jpg', `> ⓘ 𝙁𝙤𝙩𝙤 𝙙𝙚 𝙥𝙚𝙧𝙛𝙞𝙡 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤/𝙖: *${text}*`, m, false);
};
handler.help = ['tiktokfoto'].map((v) => v + ' <username>');
handler.tags = ['downloader'];
handler.command = /^(tiktokfoto|pptiktok)$/i;
export default handler;
