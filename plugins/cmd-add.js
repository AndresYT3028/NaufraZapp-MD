const handler = async (m, {conn, text, usedPrefix, command}) => {
  global.db.data.sticker = global.db.data.sticker || {};
  if (!m.quoted) throw '> ⚠️ *Responda a una imagen o sticker para agregar un texto.';
  if (!m.quoted.fileSha256) throw '> ⚠️ *Solo se admite agregar textos a stickers y imagenes.';
  if (!text) throw `> ⚠️ *Formato errónea, use el comando de la siguiente manera:* *${usedPrefix + command} #menu responder a sticker o imagen*`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw '> ⚠️ *Solo el creador y owners pueden modificar esta opcion.*';
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`> ✅ *El contenido ha sido agregado a la base de datos exitosamente.*`);
};
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset'];
handler.rowner = true;
export default handler;
