import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  if (!text) throw `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙖𝙡𝙜𝙪𝙣𝙖 𝙢𝙪𝙨𝙞𝙘𝙖 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧𝙡𝙤.`;
  try {
    const res = await fetch(`https://api-v2.soundcloud.com/search/tracks?q=${text}&client_id=iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX`);
    const json2 = await res.json();
    let permalinkUrl;
    if (json2.collection.length > 0) {
      const randomIndex = Math.floor(Math.random() * json2.collection.length);
      const randomObject = json2.collection[randomIndex];
      permalinkUrl = randomObject.permalink_url;
    } else {
      permalinkUrl = await json2.collection[0].permalink_url;
    }
    const res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${permalinkUrl}`);
    const json = await res2.json();
    const shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text();
    const soundcloudt = `> ⓘ 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙙𝙚 𝙡𝙖 𝙗𝙪𝙨𝙦𝙪𝙚𝙙𝙖:\n\n> ⓘ 𝙉𝙊𝙈𝘽𝙍𝙀: ${json.title}\n\n> ⓘ 𝙀𝙉𝙇𝘼𝘾𝙀: ${shortUrl}\n\n> 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙚𝙣𝙫𝙞𝙖𝙣𝙙𝙤 𝙡𝙖 𝙢𝙪𝙨𝙞𝙘𝙖, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...`;
    await conn.sendFile(m.chat, json.thumb, '', soundcloudt, m);
    await conn.sendMessage(m.chat, {audio: {url: json.link}, fileName: `${json.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch {
    throw '> ⓘ 𝙉𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙧 𝙡𝙖 𝙢𝙪𝙨𝙞𝙘𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙖...';
  }
};
handler.command = /^(soundcloud|cover)$/i;
export default handler;
