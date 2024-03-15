const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix + command} luisitocomunica*`;
  await m.reply(global.wait);
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`);
  const anu = await res.json();
  const anuku = anu.result;
  if (anuku == '') return m.reply('> ⓘ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤 𝙣𝙤 𝙘𝙤𝙣𝙩𝙞𝙚𝙣𝙚 𝙝𝙞𝙨𝙩𝙤𝙧𝙞𝙖𝙨...');
  for (const i of anuku) {
    const res = await axios.head(i);
    const mime = res.headers['content-type'];
    if (/image/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
        return m.reply('> ⓘ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤 𝙣𝙤 𝙘𝙤𝙣𝙩𝙞𝙚𝙣𝙚 𝙝𝙞𝙨𝙩𝙤𝙧𝙞𝙖𝙨...');
      });
    }
    if (/video/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
        return m.reply('> ⓘ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤 𝙣𝙤 𝙘𝙤𝙣𝙩𝙞𝙚𝙣𝙚 𝙝𝙞𝙨𝙩𝙤𝙧𝙞𝙖𝙨...');
      });
    }
  }
};
handler.help = ['igstory <username>'];
handler.tags = ['downloader'];
handler.command = ['igstory', 'ighistoria'];
export default handler;
