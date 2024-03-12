const handler = (m) => m;
handler.before = async function(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
  /* if (m.message) {
    console.log(m.message)
  }*/
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (isBotAdmin && chat.antiArab2 && !isAdmin && !isOwner && !isROwner && bot.restrict) {
    if (m.sender.startsWith('212' || '212')) {
      m.reply(`> *❬⚠️ ALERTA ⚠️❭➮ En este grupo no esta permitido los siguientes numeros:*\n\n\`+212\`\n\`+404\`\n\`+265\`\n\n> *👑 O tambien se eliminara los numeros raros por igual.*\n\n> *❬🌎❭➮ Se te eliminara del grupo inmediatamente*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('265' || '265')) {
      m.reply(`> *❬⚠️ ALERTA ⚠️❭➮ En este grupo no esta permitido los siguientes numeros:*\n\n\`+212\`\n\`+404\`\n\`+265\`\n\n> *👑 O tambien se eliminara los numeros raros por igual.*\n\n> *❬🌎❭➮ Se te eliminara del grupo inmediatamente*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('92' || '92')) {
      m.reply(`> *❬⚠️ ALERTA ⚠️❭➮ En este grupo no esta permitido los siguientes numeros:*\n\n\`+212\`\n\`+404\`\n\`+265\`\n\n> *👑 O tambien se eliminara los numeros raros por igual.*\n\n> *❬🌎❭➮ Se te eliminara del grupo inmediatamente*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }
  }
};
export default handler;
    
