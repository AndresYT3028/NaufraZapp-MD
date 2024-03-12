/*   Creditos - ig : https://www.instagram.com/fg98._/    */
import hispamemes from 'hispamemes';
const handler = async (m, {command, conn}) => {
  const url = await hispamemes.meme();
  conn.sendFile(m.chat, url, 'error.jpg', `😂 ${command} 😂`, m);
};
// conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['Siguiente', `/${command}`]], m)}
handler.help = ['meme'];
handler.tags = ['random'];
handler.command = /^(meme|memes)$/i;
handler.register = true
export default handler;
