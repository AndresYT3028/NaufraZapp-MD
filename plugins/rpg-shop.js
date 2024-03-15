const xpperlimit = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
> ⓘ 𝘾𝙤𝙢𝙥𝙧𝙖 𝙙𝙚 𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨:
> +${count} 💎 

> ⓘ 𝙂𝙖𝙨𝙩𝙤 𝙙𝙚 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖:
>  -${xpperlimit * count} 𝙚𝙭𝙥.`, m);
  } else conn.reply(m.chat, `> ⓘ 𝙇𝙤 𝙨𝙞𝙚𝙣𝙩𝙤, 𝙣𝙤 𝙩𝙞𝙚𝙣𝙚𝙨 𝙨𝙪𝙛𝙞𝙘𝙞𝙚𝙣𝙩𝙚𝙨 𝙚𝙭𝙥 𝙥𝙖𝙧𝙖 𝙘𝙤𝙢𝙥𝙧𝙖𝙧: *${count}* 𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨. 💎`, m);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['buy', 'buyall'];

handler.disabled = false;

export default handler;
