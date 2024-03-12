import fetch from 'node-fetch';
const handler = async (m, {
  conn,
  command,
}) => {
  const res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`);
  if (res.status != 200) throw await res.text();
  const json = await res.json();
  if (!json.status) throw json;
  conn.sendFile(m.chat, json.result.female, 'error.jpg', `Chica`, m);
  conn.sendFile(m.chat, json.result.male, 'error.jpg', `Chico`, m);
  // conn.sendButton(m.chat, 'Chica', wm, json.result.female, [['Siguiente', `/${command}`]], m)
  // conn.sendButton(m.chat, 'Chico', wm, json.result.male, [['Siguiente', `/${command}`]], m)
};
handler.help = ['ppcouple'];
handler.tags = ['internet'];
handler.command = /^(ppcp|ppcouple)$/i;
export default handler;
