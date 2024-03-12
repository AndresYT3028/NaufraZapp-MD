import {sticker} from '../lib/sticker.js';
import MessageType from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import fs from 'fs';
const handler = async (m, {conn, text, args}) => {
  if (!args[0]) throw '> ⓘ 𝙀𝙧𝙧𝙤𝙧, 𝙩𝙖𝙡 𝙫𝙚𝙯 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙣𝙤 𝙚𝙭𝙞𝙨𝙩𝙖 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙗𝙤𝙩.';
  const [emoji1, emoji2] = text.split`&`;
  const anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
  for (const res of anu.results) {
    const stiker = await sticker(false, res.url, global.packname, global.author);
    conn.sendFile(m.chat, stiker, null, {asSticker: true});
  }
};
handler.help = ['emojimix'].map((v) => v + ' emot1|emot2>');
handler.tags = ['fun'];
handler.command = /^(emojimix)$/i;
export default handler;
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
  fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((err) => {
        reject(err);
      });
});
