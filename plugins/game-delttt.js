import MessageType from '@whiskeysockets/baileys';
const handler = async (m, {conn, usedPrefix, command}) => {
  const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender));
  if (room == undefined) return conn.sendButton(m.chat, '> ⓘ Usted no esta en ninguna sala de juego, el comando: \`#delttt\` solo sirve si tienes una sala ya creada.', wm, null, [['𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝚂𝙰𝙻𝙰 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾', `${usedPrefix}ttt partida nueva`]], m);
  delete conn.game[room.id];
  await m.reply('> ✅ Se ha eliminado correctamente la sala del juego que has creado.');
};
handler.command = /^(deltttttt|delttss)$/i;
handler.fail = null;
export default handler;
