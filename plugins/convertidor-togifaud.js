/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `> ⓘ Responda a un video para convertirlo en un gif con audio incluido.`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `> ⓘ El archico examinado: ${mime}, solo se admite videos.`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '> ✅ Aqui tienes tu gif con audio incluído.'}, {quoted: m});
};
handler.command = ['togifaud'];
export default handler;
