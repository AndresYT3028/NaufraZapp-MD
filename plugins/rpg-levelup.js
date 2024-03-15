import {canLevelUp, xpRange} from '../lib/levelling.js';
import {levelup} from '../lib/canvas.js';

const handler = async (m, {conn}) => {
  const name = conn.getName(m.sender);
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const {min, xp, max} = xpRange(user.level, global.multiplier);
    throw `> ⓘ 𝙉𝙄𝙑𝙀𝙇 𝙔 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙄𝘼:

> ⓘ 𝙉𝙊𝙈𝘽𝙍𝙀:
*${name}*

> ⓘ 𝙉𝙄𝙑𝙀𝙇 𝘼𝘾𝙏𝙐𝘼𝙇:
*${user.level}*

> ⓘ 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙄𝘼:
*${user.exp - min}/${xp}*

> ⓘ 𝙎𝙚 𝙩𝙚 𝙝𝙖𝙘𝙚 𝙛𝙖𝙡𝙩𝙖: *${max - user.exp}* 𝙙𝙚 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖 𝙥𝙖𝙧𝙖 𝙨𝙪𝙗𝙞𝙧 𝙙𝙚 𝙣𝙞𝙫𝙚𝙡.
`.trim();
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const teks = `> ⓘ 𝙈𝙪𝙮 𝙗𝙞𝙚𝙣, ${conn.getName(m.sender)} 𝙣𝙞𝙫𝙚𝙡.`;
    const str = `> ⓘ 𝙉𝙐𝙀𝙑𝙊 𝙉𝙄𝙑𝙀𝙇 𝘿𝙀𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊.

> 𝘼𝙉𝙏𝙀𝙍𝙄𝙊𝙍 / 𝘼𝘾𝙏𝙐𝘼𝙇:
> \`${before}\` / \`${user.level}\`

> ⓘ 𝙈𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙢𝙖𝙨 𝙪𝙨𝙚𝙨 𝙚𝙡 𝙗𝙤𝙩, 𝙢𝙖𝙨 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖 𝙜𝙖𝙣𝙖𝙧𝙖𝙨.
`.trim();
    try {
      const img = await levelup(teks, user.level);
      conn.sendFile(m.chat, img, 'levelup.jpg', str, m);
    } catch (e) {
      m.reply(str);
    }
  }
};

handler.help = ['levelup'];
handler.tags = ['xp'];

handler.command = ['nivel', 'lvl', 'levelup', 'level'];

export default handler;