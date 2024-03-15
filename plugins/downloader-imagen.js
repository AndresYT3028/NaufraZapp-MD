import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `> ⓘ *USO ERRONEO, POR FAVOR, INGRESE EL COMANDO DE LA SIGUIENTE MANERA: ${usedPrefix + command} oso*`;
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `> *RESULTADO: ${text}*`, m);
};
handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(gimage|image|imagen)$/i;
handler.register = true
export default handler;
