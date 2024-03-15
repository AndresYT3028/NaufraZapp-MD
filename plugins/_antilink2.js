// manden porno test
const linkRegex = /https:/i;
export async function before(m, {conn, isAdmin, isBotAdmin, text}) {
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
  if (chat.antiLink2 && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      const linkThisGroup2 = `https://www.youtube.com/`;
      const linkThisGroup3 = `https://youtu.be/`;
      if (m.text.includes(linkThisGroup)) return !0;
      if (m.text.includes(linkThisGroup2)) return !0;
      if (m.text.includes(linkThisGroup3)) return !0;
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
