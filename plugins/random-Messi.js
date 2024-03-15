import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/Bots-WhatsApp-OFC/NaufraZapp-MD/master/src/JSON/Messi.json`)).data;
  const url = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, url, 'error.jpg', `👑 *Messi*`, m);
};
// conn.sendButton(m.chat, "*Messi*", author, url, [['Siguiente', `${usedPrefix + command}`]], m)}
handler.help = ['messi'];
handler.tags = ['internet'];
handler.command = /^(messi)$/i;
export default handler;
