export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`> 👤 𝙃𝙤𝙡𝙖 𝙪𝙨𝙪𝙖𝙧𝙞𝙤/𝙖: @${m.sender.split`@`[0]}, 𝙣𝙤 𝙚𝙨𝙩𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙝𝙖𝙗𝙡𝙖𝙧 𝙥𝙧𝙞𝙫𝙖𝙙𝙖𝙢𝙚𝙣𝙩𝙚 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩.\n\n> 𝙎𝙚𝙧𝙖𝙨 𝙗𝙡𝙤𝙦𝙪𝙚𝙖𝙙𝙤 𝙨𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤, 𝙥𝙪𝙚𝙙𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙧 𝙖 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩.\n\n${gp1}`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}