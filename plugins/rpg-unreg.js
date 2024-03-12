import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙨𝙪 𝙘𝙤𝙙𝙞𝙜𝙤 𝙙𝙚 𝙨𝙚𝙧𝙞𝙚 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙨𝙪 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤, 𝙨𝙞 𝙣𝙤 𝙨𝙚 𝙖𝙘𝙪𝙚𝙧𝙙𝙖 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: \`#myns\`';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙨𝙪 𝙘𝙤𝙙𝙞𝙜𝙤 𝙙𝙚 𝙨𝙚𝙧𝙞𝙚 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙨𝙪 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤, 𝙨𝙞 𝙣𝙤 𝙨𝙚 𝙖𝙘𝙪𝙚𝙧𝙙𝙖 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: \`#myns\`';
  user.registered = false;
  m.reply(`> ⓘ 𝙎𝙚 𝙝𝙖 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙙𝙤 𝙡𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙘𝙞𝙤𝙣 𝙙𝙚𝙡 𝙩𝙪 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤..`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;
