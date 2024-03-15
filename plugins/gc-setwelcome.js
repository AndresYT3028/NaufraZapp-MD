const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('> ✅ La bienvenida ha sido configurada con exito, esto se vera en las bienvenidas que el bot mande.');
  } else throw `> ⓘ Puedes ingresar el mensaje que quieras para que sea visible en las bienvenidas, puedes usar estos comandos tambien:\n*• @user (mención)*\n*• @group (nombre de grupo)*\n*• @desc (description de grupo)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;
