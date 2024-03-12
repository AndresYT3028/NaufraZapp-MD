import MessageType from '@whiskeysockets/baileys';
const handler = async (m, {conn, usedPrefix, command}) => {
  const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender));
  if (room == undefined) return conn.sendButton(m.chat, '*[❗] 𝙽𝙾 𝙴𝚂𝚃𝙰𝚂 𝙴𝙽 𝙽𝙸𝙽𝙶𝚄𝙽𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰 𝙳𝙴 𝚃𝚁𝙴𝚂 𝙴𝙽 𝚁𝙰𝚈𝙰*', wm, null, [['𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝚂𝙰𝙻𝙰 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾', `${usedPrefix}ttt partida nueva`]], m);
  delete conn.game[room.id];
  await m.reply('*🌱 𝐸𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑆𝑒𝑠𝑠𝑖𝑜𝑛 𝐷𝑒𝑙 𝐽𝑢𝑒𝑔𝑜*');
};
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i;
handler.fail = null;
export default handler;
