import { sticker } from '../lib/sticker.js';
import axios from 'axios';
const handler = async (m, {conn, args, usedPrefix, command}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else throw "> ⓘ𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.";
   if (!text) return m.reply('> ⓘ 𝙏𝙚𝙭𝙩𝙤 𝙛𝙖𝙡𝙩𝙖𝙣𝙩𝙚...');
    const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; 
    const mentionRegex = new RegExp(`@${who.split('@')[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'g');
    const mishi = text.replace(mentionRegex, '');
   if (mishi.length > 30) return m.reply('> ⓘ 𝙀𝙡 𝙩𝙚𝙭𝙩𝙤 𝙚𝙨 𝙙𝙚𝙢𝙖𝙘𝙞𝙖𝙙𝙤 𝙡𝙖𝙧𝙜𝙤, 𝙨𝙤𝙡𝙤 𝙨𝙚 𝙖𝙙𝙢𝙞𝙩𝙚 \`30\` 𝙘𝙨𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨.');
    const pp = await conn.profilePictureUrl(who).catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    const nombre = await conn.getName(who)
    const obj = {"type": "quote", "format": "png", "backgroundColor": "#000000", "width": 512, "height": 768, "scale": 2, "messages": [{"entities": [], "avatar": true, "from": {"id": 1, "name": `${who?.name || nombre}`, "photo": {url: `${pp}`}}, "text": mishi, "replyMessage": {}}]};
    const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {headers: {'Content-Type': 'application/json'}});
    const buffer = Buffer.from(json.data.result.image, 'base64');
   let stiker = await sticker(buffer, false, global.packname, global.author);
   if (stiker) return conn.sendFile(m.chat, stiker, 'error.webp', '', m);
}
handler.help = ['qc'];
handler.tags = ['sticker'];
handler.command = /^(qc)$/i;
export default handler;
