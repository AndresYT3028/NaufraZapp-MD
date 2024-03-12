import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `> 👑 𝙋𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙖𝙜𝙧𝙚𝙜𝙖𝙙𝙤 𝙘𝙤𝙢𝙤 𝙖𝙙𝙢𝙞𝙣 👑\n\n`;
    txt1 += `> 𝙂𝙍𝙐𝙋𝙊:\n${groupName}\n\n`;
    txt1 += `> 𝘼𝘿𝙈𝙄𝙉:\n@${m.messageStubParameters[0].split`@`[0]}\n\n`;
    txt1 += `> 𝙀𝘾𝙃𝙊 𝙋𝙊𝙍:\n@${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `> 👑 𝙃𝙖𝙣 𝙙𝙚𝙨𝙘𝙖𝙩𝙖𝙙𝙤 𝙖 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣.\n\n`;
    txt2 += `> 𝙂𝙍𝙐𝙋𝙊:\n${groupName}\n\n`;
    txt2 += `> 𝘼𝘿𝙈𝙄𝙉:\n@${m.messageStubParameters[0].split`@`[0]}\n\n`;
    txt2 += `> 𝙀𝘾𝙃𝙊 𝙋𝙊𝙍:\n@${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `> 👤 𝙎𝙚 𝙝𝙖 𝙖𝙜𝙧𝙚𝙜𝙖𝙙𝙤 𝙖 𝙪𝙣 𝙣𝙪𝙚𝙫𝙤 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚.\n\n`;
    txt3 += `> 𝙂𝙍𝙐𝙋𝙊:\n${groupName}\n\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `> 𝙋𝘼𝙍𝙏𝙄𝘾𝙄𝙋𝘼𝙉𝙏𝙀:\n@${m.messageStubParameters[0].split`@`[0]}\n\n`;
      txt3 += `> 𝙀𝘾𝙃𝙊 𝙋𝙊𝙍:\n@${m.sender.split`@`[0]}`;
    } else {
      txt3 += `> 𝙋𝘼𝙍𝙏𝙄𝘾𝙄𝙋𝘼𝙉𝙏𝙀:\n@${m.messageStubParameters[0].split`@`[0]}\n\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `> 👤 𝙎𝙚 𝙝𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙖 𝙪𝙣 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚.\n\n`;
    txt4 += `> 𝙂𝙍𝙐𝙋𝙊:\n${groupName}\n\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `> 𝙋𝘼𝙍𝙏𝙄𝘾𝙄𝙋𝘼𝙉𝙏𝙀:\n@${m.messageStubParameters[0].split`@`[0]}\n\n`;
      txt4 += `> 𝙀𝘾𝙃𝙊 𝙋𝙊𝙍:\n@${m.sender.split`@`[0]}`;
    } else {
      txt4 += `> 𝙋𝘼𝙍𝙏𝙄𝘾𝙄𝙋𝘼𝙉𝙏𝙀:\n@${m.messageStubParameters[0].split`@`[0]}\n\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = '𝙨𝙖𝙡𝙞𝙙𝙤';
    } else {
      ax = '𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤';
    }
    let txt5 = `> 🍷 𝙐𝙣 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙨𝙚 𝙖 ${ax} 𝙙𝙚 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n\n`;
    txt5 += `> 𝙂𝙍𝙐𝙋𝙊:\n${groupName}\n`;
    if (ax === '𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤') {
      txt5 += `> 𝙋𝘼𝙍𝙏𝙄𝘾𝙄𝙋𝘼𝙉𝙏𝙀:\n@${m.messageStubParameters[0].split`@`[0]}\n\n`;
      txt5 += `> 𝙀𝘾𝙃𝙊 𝙋𝙊𝙍:\n@${m.sender.split`@`[0]}`;
    } else {
      txt5 += `> 𝙎𝙀 𝙎𝘼𝙇𝙄𝙊:\n@${m.messageStubParameters[0].split`@`[0]}\n\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = '𝘾𝙀𝙍𝙍𝘼𝘿𝙊.';
    } else {
      accion = '𝘼𝘽𝙄𝙀𝙍𝙏𝙊.';
    }
    let txt6 = `> 🥏 𝙎𝙚 𝙝𝙖 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙙𝙤 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.\n\n`;
    txt6 += `> 𝙂𝙍𝙐𝙋𝙊:\n${groupName}\n`;
    txt6 += `> 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎𝙏𝘼 ${'```' + accion + '```'}\n\n`;
    txt6 += `> 𝙀𝘾𝙃𝙊 𝙋𝙊𝙍:\n@${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `> 🛡️ 𝙎𝙚 𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.\n\n`;
    txt7 += `> 𝙉𝙊𝙈𝘽𝙍𝙀:\n${'```' + groupName + '```'}\n\n`;
    txt7 += `> 𝙀𝘾𝙃𝙊 𝙋𝙊𝙍:\n@${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
}
