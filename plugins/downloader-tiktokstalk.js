import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  if (!text) return conn.reply(m.chat, '> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠.', m);
  try {
    const res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`);
    const res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
    const json = await res.json();
    if (res.status !== 200) throw await res.text();
    if (!json.status) throw json;
    const thumb = await (await fetch(json.result.user_picture)).buffer();
    const Mystic = `
> ⓘ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊/𝘼:
${json.result.username}
 
> ⓘ 𝙉𝙊𝙈𝘽𝙍𝙀:
${json.result.nickname}
 
> ⓘ 𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙍𝙀𝙎:
${json.result.followers}

> ⓘ 𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙎:
${json.result.followings}
 
> ⓘ 𝙇𝙄𝙆𝙀𝙎:
${json.result.likes}

> ⓘ 𝙑𝙄𝘿𝙀𝙊𝙎 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊𝙎:
${json.result.video}

> ⓘ 𝘽𝙄𝙊𝙂𝙍𝘼𝙁𝙄𝘼:
${json.result.bio}
`.trim();
    conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false);
  } catch (e) {
    throw '> ⓘ 𝙉𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙧 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙢𝙖𝙨 𝙩𝙖𝙧𝙙𝙚...';
  }
};
handler.help = ['tiktokstalk'].map((v) => v + ' <username>');
handler.tags = ['stalk'];
handler.command = /^(tiktokstalk|ttstalk)$/i;
export default handler;
