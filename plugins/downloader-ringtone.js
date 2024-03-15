import fetch from 'node-fetch';
const handler = async (m, {conn, groupMetadata, usedPrefix, text, args, command}) => {
  if (!text) throw `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙩𝙚𝙭𝙩𝙤 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} Hola*`;
  const anu = await ringtone(text);
  const result = anu[Math.floor(Math.random() * anu.length)];
  conn.sendMessage(m.chat, {audio: {url: result.audio}, fileName: result.title+'.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.command = ['ringtone'];
export default handler;
async function ringtone(title) {
  return new Promise((resolve, reject) => {
    axios.get('https://meloboom.com/es/search/'+title).then((get) => {
      const $ = cheerio.load(get.data);
      const hasil = [];
      $('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function(a, b) {
        hasil.push({title: $(b).find('h4').text(), source: 'https://meloboom.com/'+$(b).find('a').attr('href'), audio: $(b).find('audio').attr('src')});
      });
      resolve(hasil);
    });
  });
}
