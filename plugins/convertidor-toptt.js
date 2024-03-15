import {toPTT} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
  if (!/video|audio/.test(mime)) throw `> ⓘ Responda a un audio o un vídeo para convertirlo en una nota de voz.`;
  const media = await q.download?.();
  if (!media && !/video/.test(mime)) throw '> ⓘ Ocurrio un error inesperado, por favor vuelva a intentarlo.';
  if (!media && !/audio/.test(mime)) throw '> ⓘ Ocurrio un error inesperado, por favor vuelva a intentarlo.';
  const audio = await toPTT(media, 'mp4');
  if (!audio.data && !/audio/.test(mime)) throw '> ⓘ Ocurrio un error inesperado, por favor vuelva a intentarlo.';
  if (!audio.data && !/video/.test(mime)) throw '> ⓘ Ocurrio un error inesperado, por favor vuelva a intentarlo.';
  const aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, {mimetype: 'audio/mpeg'});
  if (!aa) return conn.sendMessage(m.chat, {audio: {url: media}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};
handler.help = ['tovn (reply)'];
handler.tags = ['audio'];
handler.command = /^to(vn|(ptt)?)$/i;
export default handler;
