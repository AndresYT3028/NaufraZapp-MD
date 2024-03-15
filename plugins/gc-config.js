const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
> ⓘ 𝙋𝙖𝙧𝙖 𝙖𝙗𝙧𝙞𝙧 𝙮 𝙘𝙚𝙧𝙧𝙖𝙧 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙪𝙨𝙚 𝙚𝙨𝙩𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨:

> ${usedPrefix + command} abrir*
> ${usedPrefix + command} cerrar*

> 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('> ✅ 𝙀𝙡 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚 𝙝𝙖 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙙𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚...');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
