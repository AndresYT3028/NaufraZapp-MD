import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `> ⓘ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙢𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> ${usedPrefix + command} https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*`;
  try {
    const resEX = await mediafiredl(args[0]);
    const captionES = `
ⓘ *Nombre:*
✦ ${resEX.filename}

ⓘ *Peso:*
✦ ${resEX.filesizeH}

ⓘ *Tipo:*
✦ ${resEX.ext}

> ⓘ 𝙀𝙨𝙥𝙚𝙧𝙚, 𝙚𝙨𝙩𝙤 𝙥𝙪𝙚𝙙𝙚 𝙩𝙖𝙧𝙙𝙖𝙧 𝙙𝙚𝙥𝙚𝙣𝙙𝙞𝙚𝙣𝙙𝙤 𝙚𝙡 𝙥𝙚𝙨𝙤 𝙙𝙚𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤.`.trim();
    m.reply(captionES);
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      const caption = `
ⓘ *Nombre:*
✦ ${name}

ⓘ *Peso:*
✦ ${size}

ⓘ *Tipo:*
✦ ${mime}

> ⓘ 𝙀𝙨𝙥𝙚𝙧𝙚, 𝙚𝙨𝙩𝙤 𝙥𝙪𝙚𝙙𝙚 𝙩𝙖𝙧𝙙𝙖𝙧 𝙙𝙚𝙥𝙚𝙣𝙙𝙞𝙚𝙣𝙙𝙤 𝙚𝙡 𝙥𝙚𝙨𝙤 𝙙𝙚𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤.`.trim();
      await m.reply(caption);
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply('> ⓘ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙫𝙚𝙧𝙞𝙛𝙞𝙦𝙪𝙚 𝙦𝙪𝙚 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙨𝙚𝙖 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*');
    }
  }
};
handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}