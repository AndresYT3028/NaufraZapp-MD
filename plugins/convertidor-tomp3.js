import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `> ⓘ Por favor, responda a una nota de voz para convertirlo en audio.`;
  const media = await q.download();
  if (!media) throw '> ⓘ Ocurrió un error inesperado, por favor intente de nuevo.';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '> ⓘ Ocurrió un error inesperado, por favor intente de nuevo.';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)$/i;
export default handler;