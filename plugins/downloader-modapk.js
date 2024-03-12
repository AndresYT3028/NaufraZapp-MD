import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙖𝙡𝙜𝙪𝙣𝙖 𝙖𝙥𝙡𝙞𝙘𝙖𝙘𝙞𝙤𝙣 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧.`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📂 *DESCARGADOR DE APK* 📂

ⓘ *NOMBRE:*
✦ ${data5.name}

ⓘ *PACKAGE:*
✦ ${data5.package}

ⓘ *ACTUALIZACION:*
✦ ${data5.lastup}

ⓘ *TAMAÑO:*
✦ ${data5.size}

ⁿᵃᵘᶠʳᵃᶻᵃᵖᵖ-ᵐᵈ`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '> ⓘ 𝙇𝙖 𝙖𝙥𝙠 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙚𝙨 𝙢𝙪𝙮 𝙥𝙚𝙨𝙖𝙙𝙤, 𝙣𝙤 𝙨𝙚 𝙥𝙤𝙙𝙧𝙖 𝙚𝙣𝙫𝙞𝙖𝙧.'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `> ⓘ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙧𝙚𝙥𝙤𝙧𝙩𝙚 𝙖 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙘𝙤𝙣 \`#reporte\``;
  }    
};
handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i;
handler.register = true
handler.limit = true
export default handler;
