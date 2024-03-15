import uploadImage from '../lib/uploadImage.js';
import {sticker} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    const img = await q.download();
    const url = await uploadImage(img);
    const sremovebg = global.API(`https://api.lolhuman.xyz/api/removebg?apikey=${lolkeysapi}&img=${url}`);
    const stickerr = await sticker(false, sremovebg, global.packname, global.author);
    conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, {asSticker: true});
  } catch (e) {
    m.reply('> ⓘ 𝙀𝙧𝙧𝙤𝙧, 𝙩𝙖𝙡 𝙫𝙚𝙯 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙣𝙤 𝙚𝙭𝙞𝙨𝙩𝙖 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙗𝙤𝙩.');
  }
};
handler.command = /^sremovebg|removebg$/i;
export default handler;
