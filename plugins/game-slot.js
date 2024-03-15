/* CREDITOS A https://github.com/FG98F */

const handler = async (m, {args, usedPrefix, command}) => {
  const fa = `
> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙡𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚 𝙣𝙪𝙢𝙚𝙧𝙤 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖 𝙖𝙥𝙤𝙨𝙩𝙖𝙧.

> 𝙋𝙊𝙍 𝙀𝙅𝙀𝙈𝙋𝙇𝙊:
> *${usedPrefix + command} 100*`.trim();
  if (!args[0]) throw fa;
  if (isNaN(args[0])) throw fa;
  const apuesta = parseInt(args[0]);
  const users = global.db.data.users[m.sender];
  const time = users.lastslot + 10000;
  if (new Date - users.lastslot < 10000) throw `> ⓘ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙚𝙨𝙥𝙚𝙧𝙚: ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙟𝙪𝙜𝙖𝙧.`;
  if (apuesta < 100) throw '> ⓘ 𝙇𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚 𝙖𝙥𝙪𝙚𝙨𝙩𝙖 𝙡𝙞𝙢𝙞𝙩𝙖𝙙𝙤 𝙚𝙨 𝙙𝙚 \`100 exp\`';
  if (users.exp < apuesta) {
    throw `> ⓘ 𝙉𝙤 𝙩𝙞𝙚𝙣𝙚𝙨 𝙨𝙪𝙛𝙞𝙘𝙞𝙚𝙣𝙩𝙚 \`𝙚𝙭𝙥\` 𝙥𝙖𝙧𝙖 𝙟𝙪𝙜𝙖𝙧, 𝙛𝙖𝙫𝙤𝙧 𝙙𝙚 𝙘𝙤𝙣𝙨𝙚𝙜𝙪𝙞𝙧 \`𝙚𝙭𝙥\` 𝙚𝙣 𝙤𝙩𝙧𝙤𝙨 𝙟𝙪𝙚𝙜𝙤𝙨 𝙥𝙖𝙧𝙖 𝙟𝙪𝙜𝙖𝙩.`;
  }
  const emojis = ['🪙', '💰', '💎'];
  let a = Math.floor(Math.random() * emojis.length);
  let b = Math.floor(Math.random() * emojis.length);
  let c = Math.floor(Math.random() * emojis.length);
  const x = [];
  const y = [];
  const z = [];
  for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
  }
  for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
  }
  for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
  }
  let end;
  if (a == b && b == c) {
    end = `> ✅ 𝙁𝙀𝙇𝙄𝘾𝙄𝘿𝘼𝘿𝙀𝙎!!! 𝙂𝘼𝙉𝘼𝙎𝙏𝙀: +${apuesta + apuesta} 𝘿𝙀 𝙀𝙓𝙋.`;
    users.exp += apuesta;
  } else if (a == b || a == c || b == c) {
    end = `> ⓘ 𝘾𝙖𝙨𝙞 𝙡𝙤 𝙡𝙤𝙜𝙧𝙖𝙨, 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙖\n> 𝙩𝙚 𝙧𝙚𝙜𝙖𝙡𝙤: \`+10\` 𝙙𝙚 𝙚𝙭𝙥.`;
    users.exp += 10;
  } else {
    end = `> ⓘ 𝙃𝘼𝙎 𝙋𝙀𝙍𝘿𝙄𝘿𝙊!!! 𝙊𝘽𝙏𝙄𝙀𝙉𝙀𝙎: -${apuesta} 𝘿𝙀 𝙀𝙓𝙋.`;
    users.exp -= apuesta;
  }
  users.lastslot = new Date * 1;
  return await m.reply(
      `
> 👑 𝘽𝙊𝙏 𝙎𝙇𝙊𝙏𝙎 👑 
> •──────────•
> ${x[0]} ┃ ${y[0]} ┃ ${z[0]}
> ${x[1]} ┃ ${y[1]} ┃ ${z[1]}
> ${x[2]} ┃ ${y[2]} ┃ ${z[2]}
> •──────────•
${end}`);
};
handler.help = ['slot <apuesta>'];
handler.tags = ['game'];
handler.command = ['slotttt'];
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m ' + seconds + ' s ';
}

