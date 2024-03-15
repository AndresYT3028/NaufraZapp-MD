const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('> ⓘ Se ha desbaneado el chat con exito, ahora todos pueden usar el bot.');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.rowner = true;
export default handler;

