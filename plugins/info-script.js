import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://api.github.com/repos/Bots-WhatsApp-OFC/NaufraZapp-MD');
   const json = await res.json();
   let txt = `           *NaufraZapp - Script*\n\n`;
      txt += `*Repositorio:* ${json?.name || 'NaufraZapp-MD'}\n`;
      txt += `*Visitantes:* ${json?.watchers_count || '-'}\n`;
      txt += `*Peso/Tamaño:* ${(json?.size / 1024).toFixed(2) || '-'} MB\n`;
      txt += `*Actualizado en:* ${moment(json?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}\n`;
      txt += `*Enlace:* ${json?.html_url || 'https://github.com/Bots-WhatsApp-OFC/NaufraZapp-MD'}\n\n`;
      txt += `         ${json?.forks_count || '-'} Forks · ${json?.stargazers_count || '-'} Stars · ${json?.open_issues_count || '-'} Issues`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `https://atom.bio/sakuralite`, "sourceUrl": `https://atom.bio/sakuralite`}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(sc|scbot|scrip|script)$/i;
handler.register = true
//handler.premium = true
export default handler;