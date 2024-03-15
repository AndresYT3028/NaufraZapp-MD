const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`> ⓘ 𝘽𝙖𝙡𝙖𝙣𝙘𝙚 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤.

> 『 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 』
> ✦ ${name}

> 『 𝗗𝗜𝗔𝗠𝗔𝗡𝗧𝗘𝗦 』
> ✦ ${global.db.data.users[who].diamond} 💎

> 『 𝗘𝗫𝗣𝗘𝗥𝗜𝗘𝗡𝗖𝗜𝗔』
> ✦ ${global.db.data.users[who].exp}
•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ⓘ 𝙋𝙪𝙚𝙙𝙚𝙨 𝙘𝙤𝙢𝙥𝙧𝙖𝙧 𝙢𝙖𝙨 𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙨𝙩𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨:

> *${usedPrefix}buy*
> *${usedPrefix}buyall*
`)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
