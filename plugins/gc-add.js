const {generateWAMessageFromContent, prepareWAMessageMedia, proto} = (await import('@whiskeysockets/baileys')).default;
import fetch from 'node-fetch';
const {getBinaryNodeChild, getBinaryNodeChildren} = (await import('@whiskeysockets/baileys')).default;
const handler = async (m, {conn, text, participants, args}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '> ⓘ 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤 𝙥𝙤𝙧 𝙚𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧.';
  if (!args[0]) throw '> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙚 𝙖𝙜𝙧𝙚𝙜𝙖𝙧 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n\n\`#add\` +5493873605231\n\`#add\` +54 9 3873 68-7620';
  try {
    const _participants = participants.map((user) => user.id);
    const users = (await Promise.all(
        text.split(',')
            .map((v) => v.replace(/[^0-9]/g, ''))
            .filter((v) => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async (v) => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter((v) => v[1][0]?.exists).map((v) => v[0] + '@c.us');
    const response = await conn.query({tag: 'iq', attrs: {type: 'set', xmlns: 'w:g2', to: m.chat}, content: users.map((jid) => ({tag: 'add', attrs: {}, content: [{tag: 'participant', attrs: {jid}}]}))});
    const pp = await conn.profilePictureUrl(m.chat).catch((_) => null);
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0);
    const add = getBinaryNodeChild(response, 'add');
    const participant = getBinaryNodeChildren(add, 'participant');
    for (const user of participant.filter((item) => item.attrs.error == 403)) {
      const jid = user.attrs.jid;
      const content = getBinaryNodeChild(user, 'add_request');
      const invite_code = content.attrs.code;
      const invite_code_exp = content.attrs.expiration;
      const teks = `> ⓘ 𝙉𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙖𝙜𝙧𝙚𝙜𝙖𝙧 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤/𝙖: @${jid.split('@')[0]}, 𝙨𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙖 𝙪𝙣𝙖 𝙞𝙣𝙫𝙞𝙩𝙖𝙘𝙞𝙤𝙣 𝙙𝙚𝙡 𝙘𝙝𝙖𝙩 𝙜𝙧𝙪𝙥𝙖𝙡 𝙚𝙣 𝙨𝙪 𝙡𝙪𝙜𝙖𝙧.`;
      m.reply(teks, null, {mentions: conn.parseMention(teks)});
      const captionn = `> 😄 Holaaa @${jid.split('@')[0]}, soy \`NaufraZapp-MD\`, un bot de WhatsApp automatizado, un admin te invita a que te unas a un grupo 😄, adelante, te esperamos en el grupo 😁...\n\n> \`#menu\` : ver el menu completo.\n\n> \`#infobot\` : ver información del bot.\n\n> NaufraZapp-MD`;
      const messaa = await prepareWAMessageMedia({image: jpegThumbnail}, {upload: conn.waUploadToServer});
      const groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({groupInviteMessage: {groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail}}), {userJid: jid});
      await conn.relayMessage(jid, groupInvite.message, {messageId: groupInvite.key.id});
    }
  } catch {
    throw '> ⓘ Error, no fue posible agregar el usuario, esto puede ser por que el numero sea incorrecto o el comando tiene fallas.';
  }
};
handler.help = ['add', '+'].map((v) => v + ' número');
handler.tags = ['group'];
handler.command = /^(add|agregar|añadir|\+)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;
