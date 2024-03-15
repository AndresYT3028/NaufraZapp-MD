const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let enviando;
const handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
 if (enviando) return;
     enviando = true 
  try {
    const link = text //(m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
    if (!link || !link.match(linkRegex)) throw '> ⓘ Enlace faltante, por favor ingrese el enlace del grupo, por ejemplo: #join https://chat.whatsapp.com/DMNdCYvPGnOIO5Pg8MUQoV';
    const [_, code] = link.match(linkRegex) || [];
    if ( isPrems || isMods || isOwner || m.fromMe) {
      const res = await conn.groupAcceptInvite(code);
      await conn.sendMessage(m.chat, {text: '*El bot se ha unido al grupo exitosamente...*'}, {quoted: m})
      enviando = false 
    } else {
      conn.sendMessage(m.chat, {text: '> ⓘ EL ENLACE DE SU GRUPO FUE ENVIADO A LOS CREADORES DEL BOT, UNO DE ELLOS TE COMENTARÁ EN PRIVADO.'}, {quoted: m});
      const data = global.owner.filter(([id]) => id)[0];
      const dataArray = Array.isArray(data) ? data : [data];
      for (const entry of dataArray) await conn.sendMessage(entry + '@s.whatsapp.net', {text: '> ⓘ Un solicitante acaba de mandar un enlace grupal para agregar el bot, puedes comentarle tu palabra, o también puedes responder este mensaje con el comando \`#unete\`\n\n> ✦ *USUARIO/A:* ' + '@' + m.sender.split('@')[0] + '\n\n> ✦ *LINK GRUPAL:* ' + link, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: m});
      enviando = false 
    }
  } catch {
    enviando = false 
    throw '> ✦ ERROR, NO SE PUDO ENVIAR LA SOLICITUD.';
  }
};
handler.help = ['join [chat.whatsapp.com]'];
handler.tags = ['premium'];
handler.command = /^join|unete|unirte$/i;
export default handler;
