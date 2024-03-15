import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '> ⓘ Por favor, etiquete a un usuario *@tag* para darle exp';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '> ⓘ Ingrese la cantidad de experiencia para añadir.';
  if (isNaN(txt)) throw '> ⓘ Solo se admiten numeros, no simbolos.';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 1) throw '> ⓘ El límite de añadir \`XP\` es de 5.000';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`> ⓘ EXPERIENCIA AÑADIDA:
> ${xp}`);
};
handler.command = ['añadirxp', 'addexp'];
handler.rowner = true;
export default handler;
  
