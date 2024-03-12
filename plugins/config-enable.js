const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `> 📍 Funciones de activar y desactivar comandos.

╔◊ •═════════════════• ◊╗
║            🟢 \`ON Y OFF\` 🔴
╚◊ •═════════════════• ◊╝
> ╭•─────────────────•╮
> │❒ _${usedPrefix}on *antiprivado*_ 
> │❒ _${usedPrefix}on *restrict*_
> │❒ _${usedPrefix}on *autoread*_
> │❒ _${usedPrefix}on *antispam*_
> │❒ _${usedPrefix}on *modoia*_
> │❒ _${usedPrefix}on *anticall*_
> │❒ _${usedPrefix}on *welcome*_
> │❒ _${usedPrefix}on *antilink2*_
> │❒ _${usedPrefix}on *antilink*_
> │❒ _${usedPrefix}on *juegos*_
> │❒ _${usedPrefix}on *detect*_
> │❒ _${usedPrefix}on *audios*_
> │❒ _${usedPrefix}on *autosticker*_
> │❒ _${usedPrefix}on *antiviewonce*_
> │❒ _${usedPrefix}on *antitoxic*_
> │❒ _${usedPrefix}on *antiarabes*_
> │❒ _${usedPrefix}on *antitraba*_
> │❒ _${usedPrefix}on *modoadmin*_
> │❒ _${usedPrefix}on *antidelete*_
> │❒ _${usedPrefix}on *public*_
> │❒ _${usedPrefix}on *pconly*_
> │❒ _${usedPrefix}on *gconly*_
> │•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> │❒ _${usedPrefix}off *antiprivado*_ 
> │❒ _${usedPrefix}off *restrict*_
> │❒ _${usedPrefix}off *autoread*_
> │❒ _${usedPrefix}off *antispam*_
> │❒ _${usedPrefix}off *modoia*_
> │❒ _${usedPrefix}off *anticall*_
> │❒ _${usedPrefix}off *welcome*_
> │❒ _${usedPrefix}off *antilink2*_
> │❒ _${usedPrefix}off *antilink*_
> │❒ _${usedPrefix}off *juegos*_
> │❒ _${usedPrefix}off *detect*_
> │❒ _${usedPrefix}off *audios*_
> │❒ _${usedPrefix}off *autosticker*_
> │❒ _${usedPrefix}off *antiviewonce*_
> │❒ _${usedPrefix}off *antitoxic*_
> │❒ _${usedPrefix}off *antiarabes*_
> │❒ _${usedPrefix}off *antitraba*_
> │❒ _${usedPrefix}off *modoadmin*_
> │❒ _${usedPrefix}off *antidelete*_
> │❒ _${usedPrefix}off *public*_
> │❒ _${usedPrefix}off *pconly*_
> │❒ _${usedPrefix}off *gconly*_
> ╰•─────────────────•╯`.trim();

    const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
      case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
   conn.sendMessage(m.chat, {text: `> ❬📂❭ \`𝘾𝙊𝙈𝘼𝙉𝘿𝙊\` ❬📂❭:\n> ${type}\n\n> ❬⚙️❭ \`𝙁𝙐𝙉𝘾𝙄𝙊𝙉\` ❬⚙️❭:\n> ${isEnable ? '𝘈𝘤𝘵𝘪𝘷𝘢𝘥𝘰' : '𝘋𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢𝘥𝘰'}\n\n> ❬♻️❭ \`𝙀𝙅𝙀𝘾𝙐𝙏𝘼𝘿𝙊 𝙋𝘼𝙍𝘼\` ❬♻️❭:\n> ${isAll ? '𝘕𝘢𝘶𝘧𝘳𝘢𝘡𝘢𝘱𝘱-𝘔𝘋 ' : isUser ? '' : '𝘌𝘴𝘵𝘦 𝘤𝘩𝘢𝘵'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i;
export default handler;