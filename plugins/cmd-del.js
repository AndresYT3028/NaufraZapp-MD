const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `> ⚠️ *Solo se admite los textos a stickers y imagenes, para ver el codigo use el comando: ${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '> ⚠️ *Solo el creador y los owners pueden modificar esta opción.*';
  delete sticker[hash];
  m.reply(`> ✅ *Se elimino el contenido exitosamente de la base de datos.*`);
};
handler.command = ['delcmd'];
handler.rowner = true;
export default handler;
