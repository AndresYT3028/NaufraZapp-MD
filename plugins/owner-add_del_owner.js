const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  const why = `> ⓘ 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙙𝙚 𝙚𝙨𝙩𝙖 𝙢𝙖𝙣𝙚𝙧𝙖, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix + command} @${m.sender.split('@')[0]}*\n> *${usedPrefix + command} ${m.sender.split('@')[0]}*\n> *${usedPrefix + command}* 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙢𝙚𝙣𝙨𝙖𝙟𝙚.`;
  const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  if (!who) return conn.reply(m.chat, why, m, {mentions: [m.sender]});
  switch (command) {
    case 'addowner':
      const nuevoNumero = who;
      global.owner.push([nuevoNumero]);
      await conn.reply(m.chat, '> ⓘ 𝙎𝙚 𝙝𝙖 𝙖𝙜𝙧𝙚𝙜𝙖𝙙𝙤 𝙖 𝙪𝙣 𝙣𝙪𝙚𝙫𝙞 𝙤𝙬𝙣𝙚𝙧 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.', m);
      break;
    case 'delowner':
      const numeroAEliminar = who;
      const index = global.owner.findIndex(owner => owner[0] === numeroAEliminar);
      if (index !== -1) {
        global.owner.splice(index, 1);
        await conn.reply(m.chat, '> ⓘ 𝙎𝙚 𝙝𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙤𝙬𝙣𝙚𝙧 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤 𝙖𝙡 𝙗𝙤𝙩.', m);
      } else {
        await conn.reply(m.chat, '> ⓘ 𝙀𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙣𝙤 𝙚𝙨𝙩𝙖 𝙚𝙣 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙤𝙬𝙣𝙚𝙧𝙨.', m);
      }
      break;
  }
};
handler.command = /^(addowner|delowner)$/i;
handler.rowner = true;
export default handler;
