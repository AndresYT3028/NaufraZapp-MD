const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {conn, isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('> 👑 𝙃𝙤𝙡𝙖 𝙖𝙙𝙢𝙞𝙣, 𝙚𝙡 𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠 𝙚𝙨𝙩𝙖 𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤, 𝙥𝙚𝙧𝙤 𝙩𝙚 𝙨𝙖𝙡𝙫𝙖𝙨 𝙥𝙤𝙧 𝙨𝙚𝙧 𝙖𝙙𝙢𝙞𝙣.');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `> 👑 𝘾𝙤𝙢𝙤 𝙪𝙨𝙩𝙚𝙙 𝙝𝙖 𝙧𝙤𝙩𝙤 𝙪𝙣𝙖 𝙧𝙚𝙜𝙡𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 (𝙣𝙤 𝙥𝙖𝙨𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨), 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤/𝙖.`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('> 🚫 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣, 𝙣𝙤 𝙥𝙪𝙚𝙙𝙤 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤.');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('> 🛡️ 𝙀𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚 𝙚𝙨𝙩𝙚 𝙗𝙤𝙩, 𝙣𝙤 𝙩𝙞𝙚𝙣𝙚 𝙝𝙖𝙗𝙞𝙡𝙞𝙙𝙖𝙙𝙤 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨.');
  }
  return !0;
}