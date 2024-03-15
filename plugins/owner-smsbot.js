const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤, 𝙚𝙣𝙡𝙖𝙘𝙚, 𝙤 𝙪𝙣𝙖 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙘𝙞𝙤𝙣, 𝙚𝙨𝙩𝙤 𝙩𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚 𝙘𝙤𝙡𝙖𝙗𝙤𝙧𝙖𝙧 𝙘𝙤𝙣 𝙚𝙡 𝙗𝙤𝙩, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n\n> Podrian agregar un juego de piedra, papel, tijera, con imagenes implementados/personalizados 🐱`;
  if (text.length < 10) throw `> ⓘ 𝙀𝙡 𝙩𝙚𝙭𝙩𝙤 𝙙𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙚𝙧 𝙢𝙞𝙣𝙞𝙢𝙤: \`10\` 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨 𝙥𝙖𝙧𝙖 𝙚𝙣𝙫𝙞𝙖𝙧𝙡𝙤.`;
  if (text.length > 1000) throw `> ⓘ 𝙀𝙡 𝙩𝙚𝙭𝙩𝙤 𝙣𝙤 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙨𝙪𝙥𝙚𝙧𝙖𝙧 𝙖 𝙡𝙤𝙨 \`800\` 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨.`;
  const teks = `> \`ⓘ 𝙏𝙚𝙭𝙩𝙤 𝙙𝙚 𝙘𝙤𝙡𝙖𝙗𝙤𝙧𝙖𝙘𝙞𝙤𝙣 𝙥𝙤𝙧 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚𝙨...\`

> 『 𝐔𝐒𝐔𝐀𝐑𝐈𝐎/𝐀 』
> ✦ wa.me/${m.sender.split`@`[0]}

> 『 𝐓𝐄𝐗𝐓𝐎 』
${text}

\`NaufraZapp-MD\`
ᶜᵒˡˡᵃᵇᵒʳᵃᵗᵒʳˢ
`;
  conn.reply('5493873687620@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('19145948340@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedjid: [m.sender]}});
  conn.reply('5493873605231@s.whatsapp.net',m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedjid: [m.sender]}});
  m.reply(`> ⓘ 𝙀𝙡 𝙩𝙚𝙭𝙩𝙤 𝙛𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤 𝙖 𝙡𝙤𝙨 𝙘𝙧𝙚𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩, 𝙩𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙖𝙣 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖𝙨 𝙡𝙤 𝙖𝙣𝙩𝙚𝙨 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙨𝙞 𝙚𝙨 𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙤...`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(nzcollaborar|colaborarbot|yoayudo)$/i;
export default handler;