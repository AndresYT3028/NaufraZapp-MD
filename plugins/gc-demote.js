const handler = async (m, {conn, usedPrefix, text}) => {
  if (isNaN(text) && !text.match(/@/g)) {

  } else if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }

  if (!text && !m.quoted) return conn.reply(m.chat, `> ⓘ 𝙋𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙦𝙪𝙞𝙩𝙖𝙧𝙡𝙚 𝙖𝙙𝙢𝙞𝙣. 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n\n> ${usedPrefix}quitaradmin *@tag*`, m);
  if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `> ⓘ 𝙀𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙦𝙪𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙨𝙩𝙚 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤...`, m);

  try {
    if (text) {
      var user = number + '@s.whatsapp.net';
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + '@s.whatsapp.net';
    }
  } catch (e) {
  } finally {
    conn.groupParticipantsUpdate(m.chat, [user], 'demote');
    conn.reply(m.chat, `> ✅ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙮𝙖 𝙣𝙤 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.`, m);
  }
};
handler.help = ['*593xxx*', '*@usuario*', '*responder chat*'].map((v) => 'demote ' + v);
handler.tags = ['group'];
handler.command = /^(demote|quitarpoder|quitaradmin)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
handler.fail = null;
export default handler;
