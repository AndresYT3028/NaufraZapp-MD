const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply('> ⓘ 𝙎𝙚 𝙝𝙖 𝙘𝙤𝙣𝙛𝙪𝙜𝙪𝙧𝙖𝙙𝙤 𝙡𝙖 𝙙𝙚𝙨𝙥𝙚𝙙𝙞𝙙𝙖 𝙙𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤𝙨 𝙚𝙭𝙞𝙩𝙤𝙨𝙖𝙢𝙚𝙣𝙩𝙚.');
  } else throw `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙧 𝙡𝙖 𝙙𝙚𝙨𝙥𝙚𝙙𝙞𝙙𝙖 𝙙𝙚 𝙡𝙤𝙨 𝙪𝙨𝙪𝙖𝙧𝙞𝙤𝙨 𝙦𝙪𝙚 𝙨𝙚 𝙨𝙖𝙡𝙚𝙣 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.\n> ⓘ 𝙋𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙢𝙚𝙩𝙤𝙙𝙤 𝙥𝙖𝙧𝙖 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙧 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤: *@user (mención)*`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['setbye'];
handler.admin = true;
export default handler;

