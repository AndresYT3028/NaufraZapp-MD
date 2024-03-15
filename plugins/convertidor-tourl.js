import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '> ⓘ Por favor, responda a un video o imagen para convertirlo en un enlace directo.';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`> ✅ Aquí tienes tu enlace convertido:\n${link}`);
};
handler.help = ['tourl <reply image>'];
handler.tags = ['sticker'];
handler.command = /^(upload|tourl)$/i;
export default handler;
