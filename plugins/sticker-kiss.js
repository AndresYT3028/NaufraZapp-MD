import {sticker} from '../lib/sticker.js';
import fetch from 'node-fetch';
import MessageType from '@whiskeysockets/baileys';
const handler = async (m, {conn, text}) => {
  try {
    const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;
    if (!who) throw "> ⓘ 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙚/𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙚 𝙖 𝙖𝙡𝙜𝙪𝙞𝙚𝙣 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.";
    const res = await fetch('https://nekos.life/api/kiss');
    const json = await res.json();
    const {url} = json;
    const name_1 = conn.getName(m.sender)
    const name_2 = conn.getName(who)
    const stiker = await sticker(null, url, `${name_1} le dio besos a ${name_2}`);
    conn.sendFile(m.chat, stiker, null, null, m, false, {asSticker: true});
  } catch { }
};
handler.command = /^(kiss|skiss|kis|besos|beso)$/i;
handler.group = true;
export default handler;
