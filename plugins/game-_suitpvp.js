const handler = (m) => m;
handler.before = async function(m) {
  this.suit = this.suit ? this.suit : {};
  if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0;
  const room = Object.values(this.suit).find((room) => room.id && room.status && [room.p, room.p2].includes(m.sender));
  if (room) {
    let win = '';
    let tie = false;
    if (m.sender == room.p2 && /^(acc(ept)?|terima|aceptar|gas|aceptare?|nao|gamau|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
      if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
        const textno = `> ⓘ 𝗘𝗹/𝗟𝗮 𝗨𝘀𝘂𝗮𝗿𝗶𝗼/𝗮 @${room.p2.split`@`[0]} 𝗿𝗲𝗰𝗵𝗮𝘇𝗼 𝗲𝗹 𝗣𝗩𝗣, 𝗲𝗹 𝗷𝘂𝗲𝗴𝗼 𝘀𝗲 𝗰𝗮𝗻𝗰𝗲𝗹𝗮.`;
        m.reply(textno, null, {mentions: this.parseMention(textno)});
        delete this.suit[room.id];
        return !0;
      }
      room.status = 'play';
      room.asal = m.chat;
      clearTimeout(room.waktu);
      const textplay = `> ⓘ 𝗣𝗜𝗘𝗗𝗥𝗔, 𝗣𝗔𝗣𝗘𝗟, 𝗧𝗜𝗝𝗘𝗥𝗔:\n\n> ✦ 𝘾𝙤𝙢𝙞𝙚𝙣𝙯𝙖 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤, 𝙡𝙤𝙨 𝙙𝙤𝙨 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚𝙨: @${room.p.split`@`[0]} 𝙮 @${room.p2.split`@`[0]}, 𝙩𝙞𝙚𝙣𝙚𝙣 𝙦𝙪𝙚 𝙞𝙧 𝙖𝙡 𝙥𝙧𝙞𝙫𝙖𝙙𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩.\n\n> ✦ 𝙀𝙡𝙞𝙟𝙖𝙣 𝙡𝙖𝙨 𝙤𝙥𝙘𝙞𝙤𝙣𝙚𝙨 𝙚𝙣 𝙥𝙧𝙞𝙫𝙖𝙙𝙤, 𝙙𝙚𝙨𝙥𝙪𝙚𝙨 𝙫𝙖𝙣 𝙖𝙦𝙪𝙞 𝙣𝙪𝙚𝙫𝙖𝙢𝙚𝙣𝙩𝙚 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨...`;
      m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)});
      const comienzop = `> ✦ 𝙃𝙤𝙡𝙖 𝙪𝙨𝙪𝙖𝙧𝙞𝙤/𝙖, 𝙨𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> ⓵ \`piedra\`

> ⓶ \`papel\`

> ⓷ \`tijera\`
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> ⓘ El ganador gana: +${room.poin} de exp
> ⓘ El perdedor gana: ${room.poin_lose} de exp
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> • *Responda al mensaje con la opción que desea*
> *Por ejemplo:* papel`;
      const comienzop2 = `> ✦ 𝙃𝙤𝙡𝙖 𝙪𝙨𝙪𝙖𝙧𝙞𝙤/𝙖, 𝙨𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> ⓵ \`piedra\`

> ⓶ \`papel\`

> ⓷ \`tijera\`
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> ⓘ El ganador gana: +${room.poin} de exp
> ⓘ El perdedor gana: ${room.poin_lose} de exp
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> • *Responda al mensaje con la opción que desea*
> *Por ejemplo:* papel`;

      if (!room.pilih) this.sendMessage(room.p, {text: comienzop}, {quoted: m});
      if (!room.pilih2) this.sendMessage(room.p2, {text: comienzop2}, {quoted: m});
      room.waktu_milih = setTimeout(() => {
        const iniciativa = `> ⓘ Ningun jugador juega, se acaba el tiempo de espera, el juego se cancela.`;
        if (!room.pilih && !room.pilih2) this.sendMessage(m.chat, {text: iniciativa}, {quoted: m});
        else if (!room.pilih || !room.pilih2) {
          win = !room.pilih ? room.p2 : room.p;
          const textnull = `> ⓘ Hola @${(room.pilih ? room.p2 : room.p).split`@`[0]}, no has elegido ninguna opcion, el juego se cancela.`;
          this.sendMessage(m.chat, {text: textnull}, {quoted: m}, {mentions: this.parseMention(textnull)});
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin;
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot;
          db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose;
        }
        delete this.suit[room.id];
        return !0;
      }, room.timeout);
    }
    const jwb = m.sender == room.p;
    const jwb2 = m.sender == room.p2;
    const g = /tijera/i;
    const b = /piedra/i;
    const k = /papel/i;
    const reg = /^(tijera|piedra|papel)/i;
    if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
      room.pilih = reg.exec(m.text.toLowerCase())[0];
      room.text = m.text;
      m.reply(`> ✅ 𝙃𝙖𝙨 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 𝙤𝙥𝙘𝙞𝙤𝙣: \`${m.text}\`, 𝙧𝙚𝙜𝙧𝙚𝙨𝙖 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙮 ${room.pilih2 ? `𝙧𝙚𝙫𝙞𝙨𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙙𝙚𝙡 𝙟𝙪𝙚𝙜𝙤.` : '𝙚𝙨𝙥𝙚𝙧𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙙𝙚𝙡 𝙟𝙪𝙚𝙜𝙤.'}`);
      if (!room.pilih2) this.reply(room.p2, '> ⓘ 𝙀𝙡 𝙤𝙩𝙧𝙤 𝙟𝙪𝙜𝙖𝙙𝙤𝙧 𝙝𝙖 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣, 𝙩𝙚 𝙩𝙤𝙘𝙖 𝙚𝙡𝙚𝙜𝙞𝙧 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣.', 0);
    }
    if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
      room.pilih2 = reg.exec(m.text.toLowerCase())[0];
      room.text2 = m.text;
      m.reply(`> ✅ 𝙃𝙖𝙨 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣: \`${m.text}\`, 𝙧𝙚𝙜𝙧𝙚𝙨𝙖 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙮 ${room.pilih ? `𝙧𝙚𝙫𝙞𝙨𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙙𝙚𝙡 𝙟𝙪𝙚𝙜𝙤.` : '𝙚𝙨𝙥𝙚𝙧𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙙𝙚𝙡 𝙟𝙪𝙚𝙜𝙤.'}`);
      if (!room.pilih) this.reply(room.p, '> ⓘ 𝙀𝙡 𝙤𝙩𝙧𝙤 𝙟𝙪𝙜𝙖𝙙𝙤𝙧 𝙝𝙖 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣, 𝙩𝙚 𝙩𝙤𝙘𝙖 𝙚𝙡𝙚𝙜𝙞𝙧 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣.', 0);
    }
    const stage = room.pilih;
    const stage2 = room.pilih2;
    if (room.pilih && room.pilih2) {
      clearTimeout(room.waktu_milih);
      if (b.test(stage) && g.test(stage2)) win = room.p;
      else if (b.test(stage) && k.test(stage2)) win = room.p2;
      else if (g.test(stage) && k.test(stage2)) win = room.p;
      else if (g.test(stage) && b.test(stage2)) win = room.p2;
      else if (k.test(stage) && b.test(stage2)) win = room.p;
      else if (k.test(stage) && g.test(stage2)) win = room.p2;
      else if (stage == stage2) tie = true;
      this.reply(room.asal, `
> \`𝙅𝙐𝙀𝙂𝙊 𝙋𝙄𝙀𝘿𝙍𝘼, 𝙋𝘼𝙋𝙀𝙇, 𝙏𝙄𝙅𝙀𝙍𝘼\`
> 𝘓𝘰𝘴 𝘳𝘦𝘴𝘶𝘭𝘵𝘢𝘥𝘰𝘴 𝘴𝘰𝘯:
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> *${tie ? '𝐄𝐌𝐏𝐀𝐓𝐄 🤨' : '𝐔𝐍 𝐆𝐀𝐍𝐀𝐃𝐎𝐑 🥳'}
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> \`𝙅𝙐𝙂𝘼𝘿𝙊𝙍 1\`
> *@${room.p.split`@`[0]} (${room.text})* ${tie ? '' : room.p == win ? ` 🎊 *Ganaste: +${room.poin} de XP*` : ` 😂 *Perdiste: ${room.poin_lose} de XP*`}

> \`𝙅𝙐𝙂𝘼𝘿𝙊𝙍 2\`
> *@${room.p2.split`@`[0]} (${room.text2})* ${tie ? '' : room.p2 == win ? ` 🎊 *Ganaste: +${room.poin} de XP*` : ` 😂 *Perdiste: ${room.poin_lose}de XP*`}
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
`.trim(), m, {mentions: [room.p, room.p2]} );
      if (!tie) {
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin;
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot;
        db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose;
      }
      delete this.suit[room.id];
    }
  }
  return !0;
};
handler.exp = 0;
export default handler;
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
