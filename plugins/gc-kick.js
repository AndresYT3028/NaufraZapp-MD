
const handler = async (m, {conn, participants, command, usedPrefix}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '> ⓘ 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤 𝙥𝙤𝙧 𝙚𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩.';
  const kicktext = `> ⓘ 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙖/𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙖𝙧𝙡𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('> ⓘ 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙖 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧𝙡𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.');
  if (m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== '') {
    const mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant;
    if (conn.user.jid.includes(mentioned)) return m.reply('> ⓘ 𝙀𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧𝙨𝙚 𝙨𝙤𝙡𝙤, 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖 𝙪𝙣𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖.');
    const responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove');
    const exitoso1 = `> ✅ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤: *@${mentioned.split('@')[0]}* 𝙛𝙪𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙚𝙭𝙞𝙩𝙤𝙨𝙖𝙢𝙚𝙣𝙩𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`;
    const error1 = `> ⓘ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤: *@${mentioned.split('@')[0]}* 𝙚𝙨 𝙚𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙣𝙤 𝙥𝙪𝙚𝙙𝙤 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧𝙡𝙤.`;
    const error2 = `> ⓘ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤: *@${mentioned.split('@')[0]}* 𝙮𝙖 𝙛𝙪𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙤 𝙮𝙖 𝙨𝙚 𝙝𝙖 𝙨𝙖𝙡𝙞𝙙𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`;
    if (responseb[0].status === '200') m.reply(exitoso1, m.chat, {mentions: conn.parseMention(exitoso1)});
    else if (responseb[0].status === '406') m.reply(error1, m.chat, {mentions: conn.parseMention(error1)});
    else if (responseb[0].status === '404') m.reply(error2, m.chat, {mentions: conn.parseMention(error2)});
    else conn.sendMessage(m.chat, {text: `✨ *Api Caida*`, mentions: [m.sender], contextInfo: {forwardingScore: 999, isForwarded: true}}, {quoted: m});
  } else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
    return;
  }
};
handler.help = ['kick'];
handler.tags = ['group'];
handler.command = /^(kick|ban|hechar|sacar)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;
