import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `> ⓘ Ingrese un enlace de Github por favor.

> *POR EJEMPLO:*
 
> ${usedPrefix + command} https://github.com/Bots-WhatsApp-OFC/Github-Emoji`;
  if (!regex.test(args[0])) throw '> ⓘ El enlace ingresado no es correcto. Intente con un enlace valido.';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`> ⓘ Espere un momento, se esta descargando su archivo...`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /gitclone/i;
handler.register = true
export default handler;
                
