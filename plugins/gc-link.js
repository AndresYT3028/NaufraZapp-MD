import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
       title: '𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙚𝙡 𝙡𝙞𝙣𝙠 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.',
      body: '🍃 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑-𝑴𝑫 🍃',    
      previewType: 0, thumbnail: fs.readFileSync('./Menu.png'),
 sourceUrl: `https://github.com/Bots-WhatsApp-OFC/NaufraZapp-MD`}}});
};     
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
