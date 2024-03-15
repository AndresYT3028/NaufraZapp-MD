import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `> ⓘ 𝙐𝙨𝙩𝙚𝙙 𝙮𝙖 𝙨𝙚 𝙚𝙣𝙘𝙪𝙚𝙣𝙩𝙧𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤.\n\n> ⓘ 𝙋𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙡 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤: *${usedPrefix}unreg*`;
  if (!Reg.test(text)) throw `> ⓘ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤, 𝙪𝙨𝙚 𝙘𝙤𝙢𝙤 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: *${usedPrefix + command} *${name2}.20*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '> ⓘ 𝙉𝙤𝙢𝙗𝙧𝙚 𝙛𝙖𝙡𝙩𝙖𝙣𝙩𝙚, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙨𝙪 𝙣𝙤𝙢𝙗𝙧𝙚 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.';
  if (!age) throw '> ⓘ 𝙀𝙙𝙖𝙙 𝙛𝙖𝙡𝙩𝙖𝙣𝙩𝙚, 𝙠𝙣𝙜𝙧𝙚𝙨𝙚 𝙨𝙪 𝙚𝙙𝙖𝙙 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.';
  if (name.length >= 30) throw '> ⓘ 𝙏𝙪 𝙣𝙤𝙢𝙗𝙧𝙚 𝙚𝙨 𝙢𝙪𝙮 𝙡𝙖𝙧𝙜𝙤, 𝙣𝙤 𝙙𝙚𝙗𝙚 𝙨𝙪𝙥𝙚𝙧𝙖𝙧 𝙖 𝙡𝙤𝙨 30 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨.';
  age = parseInt(age);
  if (age > 60) throw '> ⓘ 𝘿𝙚𝙗𝙚𝙨 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙧 𝙡𝙖 𝙚𝙙𝙖𝙙 𝙖𝙡 𝙢𝙚𝙣𝙤𝙨 𝙚𝙣 50.';
  if (age < 5) throw '> ⓘ 𝙇𝙖𝙢𝙚𝙣𝙩𝙖𝙢𝙤𝙨 𝙚𝙡 𝙖𝙨𝙪𝙣𝙩𝙤, 𝙥𝙚𝙧𝙤 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩 𝙚𝙣 𝙚𝙨𝙖 𝙚𝙙𝙖𝙙.';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `> \`𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 𝘿𝙀𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊/𝘼:\`
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> ⓘ 𝙉𝙊𝙈𝘽𝙍𝙀:
> • ${name}
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> ⓘ 𝙀𝘿𝘼𝘿:
> • ${age} años
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> ⓘ 𝘾𝙊𝘿𝙄𝙂𝙊 𝘿𝙀 𝙎𝙀𝙍𝙄𝙀: 
> • ${sn}
`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;