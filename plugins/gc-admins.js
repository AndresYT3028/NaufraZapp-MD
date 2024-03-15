const handler = async (m, {conn, participants, groupMetadata, args}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/admins.jpg';
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `> ${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const pesan = args.join` `;
  const oi = `${pesan}`;
  const text = `> ⓘ 𝙈𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙥𝙖𝙧𝙖 𝙖𝙙𝙢𝙞𝙣𝙨.

> 𝙈𝙚𝙣𝙨𝙖𝙟𝙚:
> ${oi}

> 𝙋𝙖𝙧𝙖 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨:
${listAdmin}

> ⓘ 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙨𝙚 𝙪𝙨𝙖 𝙥𝙖𝙧𝙖 𝙖𝙡𝙜𝙤 𝙞𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩𝙚.`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['admins <texto>'];
handler.tags = ['group'];
// regex detect A word without case sensitive
handler.customPrefix = /a|@/i;
handler.command = /^(admins|@admins|dmins)$/i;
handler.group = true;
export default handler;
