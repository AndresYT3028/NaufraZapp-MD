const timeout = 60000;
const poin = 500;
const poin_lose = -100;
const poin_bot = 200;
const handler = async (m, {conn, usedPrefix, text}) => {
  conn.suit = conn.suit ? conn.suit : {};
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '> ⓘ Todavía estás jugando, termina tu partida primero.';
  const textquien = `> ⓘ Por favor, etiquete a una persona para desafiarlo, por ejemplo:\n> ${usedPrefix}suit @${global.suittag}`;
  if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `> ⓘ La persona lensionada esta jugando con otro usuario.`;
  const id = 'suit_' + new Date() * 1;
  const caption = `> ⓘ PIEDRA, PAPEL, TIJERA\n\n> El usuario/a: @${m.sender.split`@`[0]} ha desafiado a: @${m.mentionedJid[0].split`@`[0]}\n\n> Responda: \`acepto\` para continuar, o tambien puede responder: \`rechazar\` para abandonar rl equipo.`;
  const imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`;
  conn.suit[id] = {
    chat: await conn.sendMessage(m.chat, {text: caption}, {mentions: await conn.parseMention(caption)}),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `> ⓘ Tiempo de espera caducada, se cancela el juego.`, m);

      delete conn.suit[id];
    }, timeout), poin, poin_lose, poin_bot, timeout,
  };
};
handler.command = /^pvvvp|sssuit(pvpppp)?$/i;
handler.group = true;
handler.game = true;
export default handler;
