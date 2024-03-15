const handler = async (m, {usedPrefix}) => {
  try {
    delete global.chatgpt.data.users[m.sender];
    m.reply(`> ⓘ Se ha borrado la session con exito.`);
  } catch (error1) {
    console.log(error1);
    throw `> ⓘ *No fue posible eliminar la session de ChatGPT*`;
  }
};
handler.command = ['delchatgpt'];
export default handler;
