import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];

 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `╔◊ •═════════════════• ◊╗
║♨️ \`𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑-𝑴𝑫\` ♨️
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║𝘏𝘰𝘭𝘢 ${taguser}
║ ${date}
╚◊ •═════════════════• ◊╝

╔◊ •═════════════════• ◊╗
║✨ \`𝗧𝗨𝗦 𝗥𝗘𝗖𝗨𝗥𝗢𝗦\` ✨
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║🚻 \`Nivel\` ➝ ${level}
║•┄┄┄┄┄┄┄┄┄┄┄•
║💎 \`Diamantes\` ➝ ${limit}
║•┄┄┄┄┄┄┄┄┄┄┄•
║💰 \`NZCoins\` ➝ ${money}
║•┄┄┄┄┄┄┄┄┄┄┄•
║🪙 \`Monedas\` ➝ ${joincount}
║•┄┄┄┄┄┄┄┄┄┄┄•
║⚔️ \`Rango\` ➝ ${role}
║•┄┄┄┄┄┄┄┄┄┄┄•
║⭐ \`Experiencia\` ➝ ${exp}
╚◊ •═════════════════• ◊╝
${readMore}

╔◊ •═════════════════• ◊╗
║        🗂️ \`INFORMACION\` 🗂️
╠◊ •═════════════════• ◊╝
> _#contactos_
> _#cuentasnz_
> _#owner_
> _#donar_
> _#estado_
> _#ofcguardian_
> _#installbot_
> _#infobot_
> _#grupo_
> _#velocidad_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║            🟢 \`ON Y OFF\` 🔴
╠◊ •═════════════════• ◊╝
> _#on *antiprivado*_ 
> _#on *restrict*_
> _#on *autoread*_
> _#on *antispam*_
> _#on *modoia*_
> _#on *anticall*_
> _#on *welcome*_
> _#on *antilink2*_
> _#on *antilink*_
> _#on *juegos*_
> _#on *detect*_
> _#on *audios*_
> _#on *autosticker*_
> _#on *antiviewonce*_
> _#on *antitoxic*_
> _#on *antiarabes*_
> _#on *antitraba*_
> _#on *modoadmin*_
> _#on *antidelete*_
> _#on *public*_
> _#on *pconly*_
> _#on *gconly*_
╰•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> _#off *antiprivado*_ 
> _#off *restrict*_
> _#off *autoread*_
> _#off *antispam*_
> _#off *modoia*_
> _#off *anticall*_
> _#off *welcome*_
> _#off *antilink2*_
> _#off *antilink*_
> _#off *juegos*_
> _#off *detect*_
> _#off *audios*_
> _#off *autosticker*_
> _#off *antiviewonce*_
> _#off *antitoxic*_
> _#off *antiarabes*_
> _#off *antitraba*_
> _#off *modoadmin*_
> _#off *antidelete*_
> _#off *public*_
> _#off *pconly*_
> _#off *gconly*_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║        ⬇️ \`DESCARGADOR\` ⬇️
╠◊ •═════════════════• ◊╝
> _#instagram *url*_
> _#mediafire *url*_
> _#gitclone *url*_
> _#tiktok *url*_
> _#twitter *url*_
> _#fb *url*_
> _#ytshort *url*_
> _#ytmp3 *url*_
> _#ytmp4 *url*_
> _#ytmp3doc *url*_
> _#ytmp4doc *url*_
> _#videodoc *url*_
> _#apk *texto*_
> _#modapk *texto*_
> _#google *texto*_
> _#ytsearch *texto*_
> _#playstore *texto*_
> _#play *texto*_
> _#play2 *texto*_
> _#play.1 *texto*_
> _#play.2 *texto*_
> _#playdoc *texto*_
> _#playdoc2 *texto*_
> _#playlist *texto*_
> _#imagen *texto*_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║          ✨ \`NO COMMAND\` ✨
╠◊ •═════════════════• ◊╝
> _bot_
> _admins_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║       👥 \`CONFIG GROUP\` 👥
╠◊ •═════════════════• ◊╝
> _#salir *admins*_
> _#add *numero*_
> _#kick *responder*_
> _#kick2 *responder*_
> _#mute *@tag*_
> _#unmute *@tag*_
> _#listanum *texto*_
> _#kicknum *texto*_
> _#grupo *abrir*_
> _#grupo *cerrar*_
> _#grouptime_
> _#promote *@tag*_
> _#demote *@tag*_
> _#demote *@tag*_
> _#link_
> _#setname *texto*_
> _#setdesc *texto*_
> _#invocar *texto*_
> _#setwelcome *texto*_
> _#setbye *texto*_
> _#hidetag *texto*_
> _#hidetag *audio*_
> _#hidetag *video*_
> _#hidetag *imagen*_
> _#warn *@tag*_
> _#unwarn *@tag*_
> _#listwarn_
> _#setpp *imagen*_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║     ♻️ \`MENU ALEATORIO\` ♻️
╠◊ •═════════════════• ◊╝
> _#inspect *url grupal*_
> _#chatgpt *texto*_
> _#delchatgpt_
> _#logos_
> _#logochristmas *texto*_
> _#logocorazon *texto*_
> _#ytcomment *texto*_
> _#hornycard *@tag*_
> _#simpcard *@tag*_
> _#dsowner_
> _#gptvoz *texto*_
> _#dall-e *texto*_
> _#spamwa_
> _#join *url grupal*_
> _#consejo_
> _#pixelar_
> _#blur_
> _#piropo_
> _#tamaño_
> _#reporte *texto*_
> _#readviewonce_
> _#clima *pais*_
> _#encuesta *texto*_
> _#afk_
> _#start_
> _#next_
> _#leave_
> _#ocr *img*_
> _#hd *img*_
> _#acortar *url*_
> _#calc_
> _#del_
> _#whatmusic *audio*_
> _#readqr *qr img*_
> _#qrcode *texto*_
> _#readmore *texto*_
> _#styletext *texto*_
> _#traducir *texto*_
> _#nowa *numero*_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║   🎮 \`MENU PARA JUEGOS\` 🎮
╠◊ •═════════════════• ◊╝
> _#mates *noob*_
> _#mates *easy*_
> _#mates *medium*_
> _#mates *hard*_
> _#mates *extreme*_
> _#mates *impossible*_
> _#mates *impossible2*_
> _#fake *@tag*_
> _#ppt_
> _#topgays1_
> _#topgays2_
> _#prostituto *@tag*_
> _#prostituta *@tag*_
> _#gay2 *@tag*_
> _#lesbiana *@tag*_
> _#pajero *@tag*_
> _#pajera *@tag*_
> _#follar *@tag*_
> _#puto *@tag*_
> _#puta *@tag*_
> _#manco *@tag*_
> _#manca *@tag*_
> _#rata *@tag*_
> _#love *@tag*_
> _#doxear *@tag*_
> _#suitpvp *@tag*_
> _#slot *apuesta*_
> _#ttt *sala*_
> _#delttt_
> _#acertijo_
> _#simi *texto*_
> _#top *texto*_
> _#topgays_
> _#topotakus_
> _#bot *texto*_
> _#pista_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║   👑 \`MENU PARA OWNERS\` 👑
╠◊ •═════════════════• ◊╝
> _#reunion_ *texto*
> _#setprefix *prefix*_
> _#resetprefix_
> _#autoadmin_
> _#grouplist_
> _#chetar_
> _#leavegc_
> _#cajafuerte_
> _#blocklist_
> _#addowner *@tag*_
> _#delowner *@tag*_
> _#block *@tag*_
> _#unblock *@tag*_
> _#msg *texto*_
> _#banchat_
> _#unbanchat_
> _#resetuser *@tag*_
> _#banuser *@tag*_
> _#unbanuser *@tag*_
> _#dardiamantes *@tag*_
> _#añadirxp *@tag*_
> _#banuser *@tag*_
> _#bc *texto*_
> _#bcchats *texto*_
> _#bcgc *texto*_
> _#bcgc2 *audio*_
> _#bcgc2 *video*_
> _#bcgc2 *img*_
> _#bcbot *texto*_
> _#cleartpm_
> _#restart_
> _#update_
> _#banlist_
> _#addprem *@tag*_
> _#delprem *@tag*_
> _#listcmd_
> _#setppbot *img*_
> _#addcmd_
> _#delcmd_
> _#saveimage_
> _#pviewimage_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║       🤖 \`FUNCION BOT\` 🤖
╠◊ •═════════════════• ◊╝
> _#serbot_
> _#deletebot_
> _#gvincular_
> _#stop_
> _#bots_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║     🪙 \`RPG / ECONOMÍA\` 🪙
╠◊ •═════════════════• ◊╝
> _#adventure_
> _#cazar_
> _#cofre_
> _#balance_
> _#claim_
> _#heal_
> _#lb_
> _#levelup_
> _#myns_
> _#perfil_
> _#work_
> _#minar_
> _#minar2_
> _#buy_
> _#buyall_
> _#verificar_
> _#robar *@tag*_
> _#transfer *@tag*_
> _#unreg_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║      🎨 \`STICKERS Y MAS\` 🎨
╠◊ •═════════════════• ◊╝
> _#sticker *img*_
> _#s *img*_
> _#emojimix_
> _#toanime *img*_
> _#togifaud *video*_
> _#toimg *sticker*_
╰•─────────────────•╯

> 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrio un error al mostrar el menu.', m);
  }
};
handler.command = /^(menu|allmenu|menú|allmenú)$/i;
handler.register = true
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}