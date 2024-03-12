import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn, args, usedPrefix, command }) => {
    let who;
    if (m.isGroup) {
      who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else { 
      who = m.chat;
    }
      const textquien = `> ⓘ 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙚/𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖 𝙖 𝙖𝙡𝙜𝙪𝙞𝙚𝙣, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> ${usedPrefix + command} @${global.suittag}`;
    if (who === m.chat && m.isGroup || !who && m.isGroup) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  try {
    let name;
    if (who === m.chat) {
      name = "𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿";
    } else {
      name = conn.getName(who);
    }
    let name2 = conn.getName(m.sender);
    let apislap = await fetch(`https://api.waifu.pics/sfw/slap`);
    let jkis = await apislap.json();
    let { url } = jkis;
    let stiker = await sticker(null, url, `${name2} le dio una bofetada a ${name}`, null);
    conn.sendFile(m.chat, stiker, null, {asSticker: true}, m, true, {contextInfo: {forwardingScore: 200, isForwarded: true}}, {quoted: m});
  } catch {
    throw `> ⓘ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤.`;
  };
};
handler.help = ["slap"];
handler.tags = ["General"];
handler.command = /^(slap|bofetada)$/i;
export default handler;
