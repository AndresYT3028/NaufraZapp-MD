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

 await conn.sendMessage(m.chat, { react: { text: '🌍', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `╔◊ •═════════════════• ◊╗
║ ${(conn.user.jid == global.conn.user.jid ? '' : `@${global.conn.user.jid.split`@`[0]}`) || '👑 𝘕𝘢𝘶𝘧𝘳𝘢𝘡𝘢𝘱𝘱-𝘔𝘋 𝘖𝘍𝘊 👑'}
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║𝘏𝘰𝘭𝘢 ${taguser}
║ ${date}
╚◊ •═════════════════• ◊╝

╔◊ •═════════════════• ◊╗
║✨ 𝗧𝗨𝗦 𝗥𝗘𝗖𝗨𝗥𝗢𝗦 ✨
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║Nivel ➝ ${level}
║Diamantes ➝ ${limit}
║NZCoins ➝ ${money}
║Monedas ➝ ${joincount}
║Rango ➝ ${role}
║Experiencia ➝ ${exp}
╚◊ •═════════════════• ◊╝


╔◊ •═════════════════• ◊╗
║        🗂️ `INFORMACION` 🗂️
╠◊ •═════════════════• ◊╝
╰• _${usedPrefix}contactos_
╰• _${usedPrefix}cuentas_
╰• _${usedPrefix}owner_
╰• _${usedPrefix}donar_
╰• _${usedPrefix}estado_
╰• _${usedPrefix}ofcguardian_
╰• _${usedPrefix}installbot_
╰• _${usedPrefix}infobot_
╰• _${usedPrefix}grupo_
╰• _${usedPrefix}velocidad_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║            🟢 \`ON Y OFF\` 🔴
╠◊ •═════════════════• ◊╝
╰• _${usedPrefix}on *antiprivado*_ 
╰• _${usedPrefix}on *restrict*_
╰• _${usedPrefix}on *autoread*_
╰• _${usedPrefix}on *antispam*_
╰• _${usedPrefix}on *modoia*_
╰• _${usedPrefix}on *anticall*_
╰• _${usedPrefix}on *welcome*_
╰• _${usedPrefix}on *antilink2*_
╰• _${usedPrefix}on *antilink*_
╰• _${usedPrefix}on *juegos*_
╰• _${usedPrefix}on *detect*_
╰• _${usedPrefix}on *audios*_
╰• _${usedPrefix}on *autosticker*_
╰• _${usedPrefix}on *antiviewonce*_
╰• _${usedPrefix}on *antitoxic*_
╰• _${usedPrefix}on *antiarabes*_
╰• _${usedPrefix}on *antitraba*_
╰• _${usedPrefix}on *modoadmin*_
╰• _${usedPrefix}on *antidelete*_
╰• _${usedPrefix}on *public*_
╰• _${usedPrefix}on *pconly*_
╰• _${usedPrefix}on *gconly*_
╰•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
╰• _${usedPrefix}off *antiprivado*_ 
╰• _${usedPrefix}off *restrict*_
╰• _${usedPrefix}off *autoread*_
╰• _${usedPrefix}off *antispam*_
╰• _${usedPrefix}off *modoia*_
╰• _${usedPrefix}off *anticall*_
╰• _${usedPrefix}off *welcome*_
╰• _${usedPrefix}off *antilink2*_
╰• _${usedPrefix}off *antilink*_
╰• _${usedPrefix}off *juegos*_
╰• _${usedPrefix}off *detect*_
╰• _${usedPrefix}off *audios*_
╰• _${usedPrefix}off *autosticker*_
╰• _${usedPrefix}off *antiviewonce*_
╰• _${usedPrefix}off *antitoxic*_
╰• _${usedPrefix}off *antiarabes*_
╰• _${usedPrefix}off *antitraba*_
╰• _${usedPrefix}off *modoadmin*_
╰• _${usedPrefix}off *antidelete*_
╰• _${usedPrefix}off *public*_
╰• _${usedPrefix}off *pconly*_
╰• _${usedPrefix}off *gconly*_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║        ⬇️ \`DESCARGADOR\` ⬇️
╠◊ •═════════════════• ◊╝
╰• _${usedPrefix}instagram *url*_
╰• _${usedPrefix}mediafire *url*_
╰• _${usedPrefix}gitclone *url*_
╰• _${usedPrefix}gdrive *url*_
╰• _${usedPrefix}tiktok *url*_
╰• _${usedPrefix}tiktokimg *url*_
╰• _${usedPrefix}xnxxdl *url*_
╰• _${usedPrefix}xvideosdl *url*_
╰• _${usedPrefix}twitter *url*_
╰• _${usedPrefix}fb *url*_
╰• _${usedPrefix}ytshort *url*_
╰• _${usedPrefix}ytmp3 *url*_
╰• _${usedPrefix}ytmp4 *url*_
╰• _${usedPrefix}ytmp3doc *url*_
╰• _${usedPrefix}ytmp4doc *url*_
╰• _${usedPrefix}videodoc *url*_
╰• _${usedPrefix}dapk2 *url*_
╰• _${usedPrefix}stickerpack *url*_
╰• _${usedPrefix}play *texto*_
╰• _${usedPrefix}play2 *texto*_
╰• _${usedPrefix}githubsearch *texto*_
╰• _${usedPrefix}modapk *texto*_
╰• _${usedPrefix}stickersearch *texto*_
╰• _${usedPrefix}stickersearch2 *texto*_
╰• _${usedPrefix}xnxxsearch *texto*_
╰• _${usedPrefix}animeinfo *texto*_
╰• _${usedPrefix}google *texto*_
╰• _${usedPrefix}letra *texto*_
╰• _${usedPrefix}wikipedia *texto*_
╰• _${usedPrefix}ytsearch *texto*_
╰• _${usedPrefix}playstore *texto*_
╰• _${usedPrefix}play.1 *texto*_
╰• _${usedPrefix}play.2 *texto*_
╰• _${usedPrefix}playdoc *texto*_
╰• _${usedPrefix}playdoc2 *texto*_
╰• _${usedPrefix}playlist *texto*_
╰• _${usedPrefix}spotify *texto*_
╰• _${usedPrefix}ringtone *texto*_
╰• _${usedPrefix}soundcloud *texto*_
╰• _${usedPrefix}imagen *texto*_
╰• _${usedPrefix}pinterest *texto*_
╰• _${usedPrefix}wallpaper *texto*_
╰• _${usedPrefix}pptiktok *user*_
╰• _${usedPrefix}igstalk *user*_
╰• _${usedPrefix}igstory *user*_
╰• _${usedPrefix}tiktokstalk *user*_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║          ✨ \`NO COMMAND\` ✨
╠◊ •═════════════════• ◊╝
╰• _bot_
╰• _admins_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║       👥 \`CONFIG GROUP\` 👥
╠◊ •═════════════════• ◊╝
╰• _${usedPrefix}salir *admins*_
╰• _${usedPrefix}add *numero*_
╰• _${usedPrefix}kick *@tag*_
╰• _${usedPrefix}kick2 *@tag*_
╰• _${usedPrefix}mute *@tag*_
╰• _${usedPrefix}unmute *@tag*_
╰• _${usedPrefix}listanum *texto*_
╰• _${usedPrefix}kicknum *texto*_
╰• _${usedPrefix}grupo *abrir*_
╰• _${usedPrefix}grupo *cerrar*_
╰• _${usedPrefix}grouptime_
╰• _${usedPrefix}promote *@tag*_
╰• _${usedPrefix}demote *@tag*_
╰• _${usedPrefix}demote *@tag*_
╰• _${usedPrefix}infogroup_
╰• _${usedPrefix}resetlink_
╰• _${usedPrefix}link_
╰• _${usedPrefix}setname *texto*_
╰• _${usedPrefix}setdesc *texto*_
╰• _${usedPrefix}invocar *texto*_
╰• _${usedPrefix}setwelcome *texto*_
╰• _${usedPrefix}setbye *texto*_
╰• _${usedPrefix}hidetag *texto*_
╰• _${usedPrefix}hidetag *audio*_
╰• _${usedPrefix}hidetag *video*_
╰• _${usedPrefix}hidetag *imagen*_
╰• _${usedPrefix}warn *@tag*_
╰• _${usedPrefix}unwarn *@tag*_
╰• _${usedPrefix}listwarn_
╰• _${usedPrefix}fantasmas_
╰• _${usedPrefix}destraba_
╰• _${usedPrefix}setpp *imagen*_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║     ♻️ \`MENU ALEATORIO\` ♻️
╠◊ •═════════════════• ◊╝
╰• _${usedPrefix}inspect *url grupal*_
╰• _${usedPrefix}chatgpt *texto*_
╰• _${usedPrefix}delchatgpt_
╰• _${usedPrefix}logos_
╰• _${usedPrefix}logochristmas *texto*_
╰• _${usedPrefix}logocorazon *texto*_
╰• _${usedPrefix}ytcomment *texto*_
╰• _${usedPrefix}hornycard *@tag*_
╰• _${usedPrefix}simpcard *@tag*_
╰• _${usedPrefix}fixmsgespera_
╰• _${usedPrefix}dsowner_
╰• _${usedPrefix}lolice *@tag*_
╰• _${usedPrefix}itssostupid_
╰• _${usedPrefix}gptvoz *texto*_
╰• _${usedPrefix}dall-e *texto*_
╰• _${usedPrefix}spamwa_
╰• _${usedPrefix}join *url grupal*_
╰• _${usedPrefix}consejo_
╰• _${usedPrefix}pixelar_
╰• _${usedPrefix}blur_
╰• _${usedPrefix}piropo_
╰• _${usedPrefix}tamaño_
╰• _${usedPrefix}reporte *texto*_
╰• _${usedPrefix}readviewonce_
╰• _${usedPrefix}clima *pais*_
╰• _${usedPrefix}encuesta *texto*_
╰• _${usedPrefix}afk_
╰• _${usedPrefix}start_
╰• _${usedPrefix}next_
╰• _${usedPrefix}leave_
╰• _${usedPrefix}ocr *img*_
╰• _${usedPrefix}hd *img*_
╰• _${usedPrefix}acortar *url*_
╰• _${usedPrefix}calc_
╰• _${usedPrefix}del_
╰• _${usedPrefix}whatmusic *audio*_
╰• _${usedPrefix}readqr *qr img*_
╰• _${usedPrefix}qrcode *texto*_
╰• _${usedPrefix}readmore *texto*_
╰• _${usedPrefix}styletext *texto*_
╰• _${usedPrefix}traducir *texto*_
╰• _${usedPrefix}nowa *numero*_
╰• _${usedPrefix}covid *pais*_
╰• _${usedPrefix}horario_
╰• _${usedPrefix}dropmail_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║   🎮 \`MENU PARA JUEGOS\` 🎮
╠◊ •═════════════════• ◊╝
╰• _${usedPrefix}ruleta_
╰• _${usedPrefix}mates *noob*_
╰• _${usedPrefix}mates *easy*_
╰• _${usedPrefix}mates *medium*_
╰• _${usedPrefix}mates *hard*_
╰• _${usedPrefix}mates *extreme*_
╰• _${usedPrefix}mates *impossible*_
╰• _${usedPrefix}mates *impossible2*_
╰• _${usedPrefix}fake *@tag*_
╰• _${usedPrefix}ppt_
╰• _${usedPrefix}prostituto *@tag*_
╰• _${usedPrefix}prostituta *@tag*_
╰• _${usedPrefix}gay2 *@tag*_
╰• _${usedPrefix}lesbiana *@tag*_
╰• _${usedPrefix}pajero *@tag*_
╰• _${usedPrefix}pajera *@tag*_
╰• _${usedPrefix}follar *@tag*_
╰• _${usedPrefix}puto *@tag*_
╰• _${usedPrefix}puta *@tag*_
╰• _${usedPrefix}manco *@tag*_
╰• _${usedPrefix}manca *@tag*_
╰• _${usedPrefix}rata *@tag*_
╰• _${usedPrefix}love *@tag*_
╰• _${usedPrefix}doxear *@tag*_
╰• _${usedPrefix}pregunta *texto*_
╰• _${usedPrefix}suitpvp *@tag*_
╰• _${usedPrefix}slot *apuesta*_
╰• _${usedPrefix}ttt *sala*_
╰• _${usedPrefix}delttt_
╰• _${usedPrefix}acertijo_
╰• _${usedPrefix}personalidad *@tag*_
╰• _${usedPrefix}simi *texto*_
╰• _${usedPrefix}top *texto*_
╰• _${usedPrefix}topgays_
╰• _${usedPrefix}topotakus_
╰• _${usedPrefix}formarpareja_
╰• _${usedPrefix}verdad_
╰• _${usedPrefix}crime_
╰• _${usedPrefix}reto_
╰• _${usedPrefix}cancion_
╰• _${usedPrefix}pista_
╰• _${usedPrefix}akinator_
╰• _${usedPrefix}wordfind_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║   👑 \`MENU PARA OWNERS\` 👑
╠◊ •═════════════════• ◊╝
╰• _${usedPrefix}cajafuerte_
╰• _${usedPrefix}reunion_ *texto*
╰• _${usedPrefix}setprefix *prefix*_
╰• _${usedPrefix}resetprefix_
╰• _${usedPrefix}autoadmin_
╰• _${usedPrefix}grouplist_
╰• _${usedPrefix}chetar_
╰• _${usedPrefix}leavegc_
╰• _${usedPrefix}cajafuerte_
╰• _${usedPrefix}blocklist_
╰• _${usedPrefix}addowner *@tag*_
╰• _${usedPrefix}delowner *@tag*_
╰• _${usedPrefix}block *@tag*_
╰• _${usedPrefix}unblock *@tag*_
╰• _${usedPrefix}msg *texto*_
╰• _${usedPrefix}banchat_
╰• _${usedPrefix}unbanchat_
╰• _${usedPrefix}resetuser *@tag*_
╰• _${usedPrefix}banuser *@tag*_
╰• _${usedPrefix}unbanuser *@tag*_
╰• _${usedPrefix}dardiamantes *@tag*_
╰• _${usedPrefix}añadirxp *@tag*_
╰• _${usedPrefix}banuser *@tag*_
╰• _${usedPrefix}bc *texto*_
╰• _${usedPrefix}bcchats *texto*_
╰• _${usedPrefix}bcgc *texto*_
╰• _${usedPrefix}bcgc2 *audio*_
╰• _${usedPrefix}bcgc2 *video*_
╰• _${usedPrefix}bcgc2 *img*_
╰• _${usedPrefix}bcbot *texto*_
╰• _${usedPrefix}cleartpm_
╰• _${usedPrefix}restart_
╰• _${usedPrefix}update_
╰• _${usedPrefix}banlist_
╰• _${usedPrefix}addprem *@tag*_
╰• _${usedPrefix}addprem2 *@tag*_
╰• _${usedPrefix}addprem3 *@tag*_
╰• _${usedPrefix}addprem4 *@tag*_
╰• _${usedPrefix}delprem *@tag*_
╰• _${usedPrefix}listcmd_
╰• _${usedPrefix}setppbot *img*_
╰• _${usedPrefix}addcmd_
╰• _${usedPrefix}delcmd_
╰• _${usedPrefix}saveimage_
╰• _${usedPrefix}pviewimage_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║       🤖 \`FUNCION BOT\` 🤖
╠◊ •═════════════════• ◊╝
╰• _${usedPrefix}serbot_
╰• _${usedPrefix}deletebot_
╰• _${usedPrefix}gvincular_
╰• _${usedPrefix}stop_
╰• _${usedPrefix}bots_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║     🪙 \`RPG / ECONOMÍA\` 🪙
╠◊ •═════════════════• ◊╝
╰• _${usedPrefix}adventure_
╰• _${usedPrefix}cazar_
╰• _${usedPrefix}cofre_
╰• _${usedPrefix}balance_
╰• _${usedPrefix}claim_
╰• _${usedPrefix}heal_
╰• _${usedPrefix}lb_
╰• _${usedPrefix}levelup_
╰• _${usedPrefix}myns_
╰• _${usedPrefix}perfil_
╰• _${usedPrefix}work_
╰• _${usedPrefix}minar_
╰• _${usedPrefix}minar2_
╰• _${usedPrefix}buy_
╰• _${usedPrefix}buyall_
╰• _${usedPrefix}verificar_
╰• _${usedPrefix}robar *@tag*_
╰• _${usedPrefix}transfer *@tag*_
╰• _${usedPrefix}unreg_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║      🎨 \`STICKERS Y MAS\` 🎨
╠◊ •═════════════════• ◊╝
╰• _${usedPrefix}sticker *img*_
╰• _${usedPrefix}s *img*_
╰• _${usedPrefix}emojimix_
╰• _${usedPrefix}scircle *img*_
╰• _${usedPrefix}sremovebg *img*_
╰• _${usedPrefix}semoji *img*_
╰• _${usedPrefix}qc *texto*_
╰• _${usedPrefix}toanime *img*_
╰• _${usedPrefix}togifaud *video*_
╰• _${usedPrefix}toimg *sticker*_
╰•─────────────────•╯`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrio un error al mostrar el menu de servidores en GuardianBot-MD', m);
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

/*import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];

 const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/231b618729371a4e30f0e.jpg');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '⌛ 𝘗𝘳𝘦𝘱𝘢𝘳𝘢𝘯𝘰 𝘮𝘦𝘯𝘶...',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👑 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑-𝑴𝑫 👑', body: '« • 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝘽𝙤𝙩 • »', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🏆');
    await conn.sendMessage(m.chat, { react: { text: '👑', key: m.key } })
  let txt =`
╔◊ •═════════════════• ◊╗
║ ${(conn.user.jid == global.conn.user.jid ? '' : `@${global.conn.user.jid.split`@`[0]}`) || '👑 𝘕𝘢𝘶𝘧𝘳𝘢𝘡𝘢𝘱𝘱-𝘔𝘋 𝘖𝘍𝘊 👑'}
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║𝘏𝘰𝘭𝘢 ${taguser}
║ ${date}
╚◊ •═════════════════• ◊╝

╔◊ •═════════════════• ◊╗
║✨ 𝗧𝗨𝗦 𝗥𝗘𝗖𝗨𝗥𝗢𝗦 ✨
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║Nivel ➝ ${level}
║Diamantes ➝ ${limit}
║NZCoins ➝ ${money}
║Monedas ➝ ${joincount}
║Rango ➝ ${role}
║Experiencia ➝ ${exp}
╚◊ •═════════════════• ◊╝

╔◊ •═════════════════• ◊╗
║        🗂️ `INFORMACION` 🗂️
╚◊ •═════════════════• ◊╝
╭•─────────────────•╮
│❒ _${usedPrefix}contactos_
│❒ _${usedPrefix}cuentas_
│❒ _${usedPrefix}owner_
│❒ _${usedPrefix}donar_
│❒ _${usedPrefix}estado_
│❒ _${usedPrefix}ofcguardian_
│❒ _${usedPrefix}installbot_
│❒ _${usedPrefix}infobot_
│❒ _${usedPrefix}grupo_
│❒ _${usedPrefix}velocidad_
╰•─────────────────•╯
╔◊ •═════════════════• ◊╗
║            🟢 \`ON Y OFF\` 🔴
╚◊ •═════════════════• ◊╝
╭•─────────────────•╮
│❒ _${usedPrefix}on *antiprivado*_ 
│❒ _${usedPrefix}on *restrict*_
│❒ _${usedPrefix}on *autoread*_
│❒ _${usedPrefix}on *antispam*_
│❒ _${usedPrefix}on *modoia*_
│❒ _${usedPrefix}on *anticall*_
│❒ _${usedPrefix}on *welcome*_
│❒ _${usedPrefix}on *antilink2*_
│❒ _${usedPrefix}on *antilink*_
│❒ _${usedPrefix}on *juegos*_
│❒ _${usedPrefix}on *detect*_
│❒ _${usedPrefix}on *audios*_
│❒ _${usedPrefix}on *autosticker*_
│❒ _${usedPrefix}on *antiviewonce*_
│❒ _${usedPrefix}on *antitoxic*_
│❒ _${usedPrefix}on *antiarabes*_
│❒ _${usedPrefix}on *antitraba*_
│❒ _${usedPrefix}on *modoadmin*_
│❒ _${usedPrefix}on *antidelete*_
│❒ _${usedPrefix}on *public*_
│❒ _${usedPrefix}on *pconly*_
│❒ _${usedPrefix}on *gconly*_
│•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
│❒ _${usedPrefix}off *antiprivado*_ 
│❒ _${usedPrefix}off *restrict*_
│❒ _${usedPrefix}off *autoread*_
│❒ _${usedPrefix}off *antispam*_
│❒ _${usedPrefix}off *modoia*_
│❒ _${usedPrefix}off *anticall*_
│❒ _${usedPrefix}off *welcome*_
│❒ _${usedPrefix}off *antilink2*_
│❒ _${usedPrefix}off *antilink*_
│❒ _${usedPrefix}off *juegos*_
│❒ _${usedPrefix}off *detect*_
│❒ _${usedPrefix}off *audios*_
│❒ _${usedPrefix}off *autosticker*_
│❒ _${usedPrefix}off *antiviewonce*_
│❒ _${usedPrefix}off *antitoxic*_
│❒ _${usedPrefix}off *antiarabes*_
│❒ _${usedPrefix}off *antitraba*_
│❒ _${usedPrefix}off *modoadmin*_
│❒ _${usedPrefix}off *antidelete*_
│❒ _${usedPrefix}off *public*_
│❒ _${usedPrefix}off *pconly*_
│❒ _${usedPrefix}off *gconly*_
╰•─────────────────•╯
╔◊ •═════════════════• ◊╗
║        ⬇️ \`DESCARGADOR\` ⬇️
╚◊ •═════════════════• ◊╝
╭•─────────────────•╮
│❒ _${usedPrefix}instagram *url*_
│❒ _${usedPrefix}mediafire *url*_
│❒ _${usedPrefix}gitclone *url*_
│❒ _${usedPrefix}gdrive *url*_
│❒ _${usedPrefix}tiktok *url*_
│❒ _${usedPrefix}tiktokimg *url*_
│❒ _${usedPrefix}xnxxdl *url*_
│❒ _${usedPrefix}xvideosdl *url*_
│❒ _${usedPrefix}twitter *url*_
│❒ _${usedPrefix}fb *url*_
│❒ _${usedPrefix}ytshort *url*_
│❒ _${usedPrefix}ytmp3 *url*_
│❒ _${usedPrefix}ytmp4 *url*_
│❒ _${usedPrefix}ytmp3doc *url*_
│❒ _${usedPrefix}ytmp4doc *url*_
│❒ _${usedPrefix}videodoc *url*_
│❒ _${usedPrefix}dapk2 *url*_
│❒ _${usedPrefix}stickerpack *url*_
│❒ _${usedPrefix}play *texto*_
│❒ _${usedPrefix}play2 *texto*_
│❒ _${usedPrefix}githubsearch *texto*_
│❒ _${usedPrefix}modapk *texto*_
│❒ _${usedPrefix}stickersearch *texto*_
│❒ _${usedPrefix}stickersearch2 *texto*_
│❒ _${usedPrefix}xnxxsearch *texto*_
│❒ _${usedPrefix}animeinfo *texto*_
│❒ _${usedPrefix}google *texto*_
│❒ _${usedPrefix}letra *texto*_
│❒ _${usedPrefix}wikipedia *texto*_
│❒ _${usedPrefix}ytsearch *texto*_
│❒ _${usedPrefix}playstore *texto*_
│❒ _${usedPrefix}play.1 *texto*_
│❒ _${usedPrefix}play.2 *texto*_
│❒ _${usedPrefix}playdoc *texto*_
│❒ _${usedPrefix}playdoc2 *texto*_
│❒ _${usedPrefix}playlist *texto*_
│❒ _${usedPrefix}spotify *texto*_
│❒ _${usedPrefix}ringtone *texto*_
│❒ _${usedPrefix}soundcloud *texto*_
│❒ _${usedPrefix}imagen *texto*_
│❒ _${usedPrefix}pinterest *texto*_
│❒ _${usedPrefix}wallpaper *texto*_
│❒ _${usedPrefix}pptiktok *user*_
│❒ _${usedPrefix}igstalk *user*_
│❒ _${usedPrefix}igstory *user*_
│❒ _${usedPrefix}tiktokstalk *user*_
╰•─────────────────•╯
╔◊ •═════════════════• ◊╗
║          ✨ \`NO COMMAND\` ✨
╚◊ •═════════════════• ◊╝
╭•─────────────────•╮
│❒ _bot_
│❒ _admins_
╰•─────────────────•╯
╔◊ •═════════════════• ◊╗
║       👥 \`CONFIG GROUP\` 👥
╚◊ •═════════════════• ◊╝
╭•─────────────────•╮
│❒ _${usedPrefix}salir *admins*_
│❒ _${usedPrefix}add *numero*_
│❒ _${usedPrefix}kick *@tag*_
│❒ _${usedPrefix}kick2 *@tag*_
│❒ _${usedPrefix}mute *@tag*_
│❒ _${usedPrefix}unmute *@tag*_
│❒ _${usedPrefix}listanum *texto*_
│❒ _${usedPrefix}kicknum *texto*_
│❒ _${usedPrefix}grupo *abrir*_
│❒ _${usedPrefix}grupo *cerrar*_
│❒ _${usedPrefix}grouptime_
│❒ _${usedPrefix}promote *@tag*_
│❒ _${usedPrefix}demote *@tag*_
│❒ _${usedPrefix}demote *@tag*_
│❒ _${usedPrefix}infogroup_
│❒ _${usedPrefix}resetlink_
│❒ _${usedPrefix}link_
│❒ _${usedPrefix}setname *texto*_
│❒ _${usedPrefix}setdesc *texto*_
│❒ _${usedPrefix}invocar *texto*_
│❒ _${usedPrefix}setwelcome *texto*_
│❒ _${usedPrefix}setbye *texto*_
│❒ _${usedPrefix}hidetag *texto*_
│❒ _${usedPrefix}hidetag *audio*_
│❒ _${usedPrefix}hidetag *video*_
│❒ _${usedPrefix}hidetag *imagen*_
│❒ _${usedPrefix}warn *@tag*_
│❒ _${usedPrefix}unwarn *@tag*_
│❒ _${usedPrefix}listwarn_
│❒ _${usedPrefix}fantasmas_
│❒ _${usedPrefix}destraba_
│❒ _${usedPrefix}setpp *imagen*_
╰•─────────────────•╯
╔◊ •═════════════════• ◊╗
║     ♻️ \`MENU ALEATORIO\` ♻️
╚◊ •═════════════════• ◊╝
╭•─────────────────•╮
│❒ _${usedPrefix}inspect *url grupal*_
│❒ _${usedPrefix}chatgpt *texto*_
│❒ _${usedPrefix}delchatgpt_
│❒ _${usedPrefix}logos_
│❒ _${usedPrefix}logochristmas *texto*_
│❒ _${usedPrefix}logocorazon *texto*_
│❒ _${usedPrefix}ytcomment *texto*_
│❒ _${usedPrefix}hornycard *@tag*_
│❒ _${usedPrefix}simpcard *@tag*_
│❒ _${usedPrefix}fixmsgespera_
│❒ _${usedPrefix}dsowner_
│❒ _${usedPrefix}lolice *@tag*_
│❒ _${usedPrefix}itssostupid_
│❒ _${usedPrefix}gptvoz *texto*_
│❒ _${usedPrefix}dall-e *texto*_
│❒ _${usedPrefix}spamwa_
│❒ _${usedPrefix}join *url grupal*_
│❒ _${usedPrefix}consejo_
│❒ _${usedPrefix}pixelar_
│❒ _${usedPrefix}blur_
│❒ _${usedPrefix}piropo_
│❒ _${usedPrefix}tamaño_
│❒ _${usedPrefix}reporte *texto*_
│❒ _${usedPrefix}readviewonce_
│❒ _${usedPrefix}clima *pais*_
│❒ _${usedPrefix}encuesta *texto*_
│❒ _${usedPrefix}afk_
│❒ _${usedPrefix}start_
│❒ _${usedPrefix}next_
│❒ _${usedPrefix}leave_
│❒ _${usedPrefix}ocr *img*_
│❒ _${usedPrefix}hd *img*_
│❒ _${usedPrefix}acortar *url*_
│❒ _${usedPrefix}calc_
│❒ _${usedPrefix}del_
│❒ _${usedPrefix}whatmusic *audio*_
│❒ _${usedPrefix}readqr *qr img*_
│❒ _${usedPrefix}qrcode *texto*_
│❒ _${usedPrefix}readmore *texto*_
│❒ _${usedPrefix}styletext *texto*_
│❒ _${usedPrefix}traducir *texto*_
│❒ _${usedPrefix}nowa *numero*_
│❒ _${usedPrefix}covid *pais*_
│❒ _${usedPrefix}horario_
│❒ _${usedPrefix}dropmail_
╰•─────────────────•╯
╔◊ •═════════════════• ◊╗
║   🎮 \`MENU PARA JUEGOS\` 🎮
╚◊ •═════════════════• ◊╝
╭•─────────────────•╮
│❒ _${usedPrefix}ruleta_
│❒ _${usedPrefix}mates *noob*_
│❒ _${usedPrefix}mates *easy*_
│❒ _${usedPrefix}mates *medium*_
│❒ _${usedPrefix}mates *hard*_
│❒ _${usedPrefix}mates *extreme*_
│❒ _${usedPrefix}mates *impossible*_
│❒ _${usedPrefix}mates *impossible2*_
│❒ _${usedPrefix}fake *@tag*_
│❒ _${usedPrefix}ppt_
│❒ _${usedPrefix}prostituto *@tag*_
│❒ _${usedPrefix}prostituta *@tag*_
│❒ _${usedPrefix}gay2 *@tag*_
│❒ _${usedPrefix}lesbiana *@tag*_
│❒ _${usedPrefix}pajero *@tag*_
│❒ _${usedPrefix}pajera *@tag*_
│❒ _${usedPrefix}follar *@tag*_
│❒ _${usedPrefix}puto *@tag*_
│❒ _${usedPrefix}puta *@tag*_
│❒ _${usedPrefix}manco *@tag*_
│❒ _${usedPrefix}manca *@tag*_
│❒ _${usedPrefix}rata *@tag*_
│❒ _${usedPrefix}love *@tag*_
│❒ _${usedPrefix}doxear *@tag*_
│❒ _${usedPrefix}pregunta *texto*_
│❒ _${usedPrefix}suitpvp *@tag*_
│❒ _${usedPrefix}slot *apuesta*_
│❒ _${usedPrefix}ttt *sala*_
│❒ _${usedPrefix}delttt_
│❒ _${usedPrefix}acertijo_
│❒ _${usedPrefix}personalidad *@tag*_
│❒ _${usedPrefix}simi *texto*_
│❒ _${usedPrefix}top *texto*_
│❒ _${usedPrefix}topgays_
│❒ _${usedPrefix}topotakus_
│❒ _${usedPrefix}formarpareja_
│❒ _${usedPrefix}verdad_
│❒ _${usedPrefix}crime_
│❒ _${usedPrefix}reto_
│❒ _${usedPrefix}cancion_
│❒ _${usedPrefix}pista_
│❒ _${usedPrefix}akinator_
│❒ _${usedPrefix}wordfind_
╰•─────────────────•╯
╔◊ •═════════════════• ◊╗
║   👑 \`MENU PARA OWNERS\` 👑
╚◊ •═════════════════• ◊╝
╭•─────────────────•╮
│❒ _${usedPrefix}cajafuerte_
│❒ _${usedPrefix}reunion_ *texto*
│❒ _${usedPrefix}setprefix *prefix*_
│❒ _${usedPrefix}resetprefix_
│❒ _${usedPrefix}autoadmin_
│❒ _${usedPrefix}grouplist_
│❒ _${usedPrefix}chetar_
│❒ _${usedPrefix}leavegc_
│❒ _${usedPrefix}cajafuerte_
│❒ _${usedPrefix}blocklist_
│❒ _${usedPrefix}addowner *@tag*_
│❒ _${usedPrefix}delowner *@tag*_
│❒ _${usedPrefix}block *@tag*_
│❒ _${usedPrefix}unblock *@tag*_
│❒ _${usedPrefix}msg *texto*_
│❒ _${usedPrefix}banchat_
│❒ _${usedPrefix}unbanchat_
│❒ _${usedPrefix}resetuser *@tag*_
│❒ _${usedPrefix}banuser *@tag*_
│❒ _${usedPrefix}unbanuser *@tag*_
│❒ _${usedPrefix}dardiamantes *@tag*_
│❒ _${usedPrefix}añadirxp *@tag*_
│❒ _${usedPrefix}banuser *@tag*_
│❒ _${usedPrefix}bc *texto*_
│❒ _${usedPrefix}bcchats *texto*_
│❒ _${usedPrefix}bcgc *texto*_
│❒ _${usedPrefix}bcgc2 *audio*_
│❒ _${usedPrefix}bcgc2 *video*_
│❒ _${usedPrefix}bcgc2 *img*_
│❒ _${usedPrefix}bcbot *texto*_
│❒ _${usedPrefix}cleartpm_
│❒ _${usedPrefix}restart_
│❒ _${usedPrefix}update_
│❒ _${usedPrefix}banlist_
│❒ _${usedPrefix}addprem *@tag*_
│❒ _${usedPrefix}addprem2 *@tag*_
│❒ _${usedPrefix}addprem3 *@tag*_
│❒ _${usedPrefix}addprem4 *@tag*_
│❒ _${usedPrefix}delprem *@tag*_
│❒ _${usedPrefix}listcmd_
│❒ _${usedPrefix}setppbot *img*_
│❒ _${usedPrefix}addcmd_
│❒ _${usedPrefix}delcmd_
│❒ _${usedPrefix}saveimage_
│❒ _${usedPrefix}pviewimage_
╰•─────────────────•╯
╔◊ •═════════════════• ◊╗
║       🤖 \`FUNCION BOT\` 🤖
╚◊ •═════════════════• ◊╝
╭•─────────────────•╮
│❒ _${usedPrefix}serbot_
│❒ _${usedPrefix}deletebot_
│❒ _${usedPrefix}token_
│❒ _${usedPrefix}stop_
│❒ _${usedPrefix}bots_
╰•─────────────────•╯
╔◊ •═════════════════• ◊╗
║     🪙 \`RPG / ECONOMÍA\` 🪙
╚◊ •═════════════════• ◊╝
╭•─────────────────•╮
│❒ _${usedPrefix}adventure_
│❒ _${usedPrefix}cazar_
│❒ _${usedPrefix}cofre_
│❒ _${usedPrefix}balance_
│❒ _${usedPrefix}claim_
│❒ _${usedPrefix}heal_
│❒ _${usedPrefix}lb_
│❒ _${usedPrefix}levelup_
│❒ _${usedPrefix}myns_
│❒ _${usedPrefix}perfil_
│❒ _${usedPrefix}work_
│❒ _${usedPrefix}minar_
│❒ _${usedPrefix}minar2_
│❒ _${usedPrefix}buy_
│❒ _${usedPrefix}buyall_
│❒ _${usedPrefix}verificar_
│❒ _${usedPrefix}robar *@tag*_
│❒ _${usedPrefix}transfer *@tag*_
│❒ _${usedPrefix}unreg_
╰•─────────────────•╯
╔◊ •═════════════════• ◊╗
║      🎨 \`STICKERS Y MAS\` 🎨
╚◊ •═════════════════• ◊╝
╭•─────────────────•╮
│❒ _${usedPrefix}sticker *img*_
│❒ _${usedPrefix}s *img*_
│❒ _${usedPrefix}emojimix_
│❒ _${usedPrefix}scircle *img*_
│❒ _${usedPrefix}sremovebg *img*_
│❒ _${usedPrefix}semoji *img*_
│❒ _${usedPrefix}qc *texto*_
│❒ _${usedPrefix}toanime *img*_
│❒ _${usedPrefix}togifaud *video*_
│❒ _${usedPrefix}toimg *sticker*_
╰•─────────────────•╯`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🧸⸽⃕  𝕾𝖆𝖐𝖚𝖗𝖆 - 𝕭𝖔𝖙 - 𝕷𝖎𝖙𝖊 - 𝕸𝕯 🦋⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🎊');
  } catch {
    conn.reply(m.chat, '> 🛡️ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙫𝙪𝙚𝙡𝙫𝙖 𝙖 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧𝙡𝙤...', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|allmenu|menú|help|menucompleto)$/i;
handler.register = true
export default handler;

var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = '🏙️ 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥 🏙️'; break; case 1: hour = '🏙️ 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥 🏙️'; break; case 2: hour = '🏙️ 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥 🏙️'; break; case 3: hour = '🏙️ 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥 🏙️'; break; case 4: hour = '🏙️ 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥 🏙️'; break; case 5: hour = '🏙️ 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥 🏙️'; break; case 6: hour = '🏙️ 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥 🏙️'; break; case 7: hour = '🏙️ 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥 🏙️'; break; case 8: hour = '🏙️ 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥 🏙️'; break; case 9: hour = '🏙️ 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥 🏙️'; break; case 10: hour = '🌌 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 🌌'; break; case 11: hour = '🌌 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 🌌'; break; case 12: hour = '🌌 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 🌌'; break; case 13: hour = '🌌 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 🌌'; break; case 14: hour = '👑 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 👑'; break; case 15: hour = '👑 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 👑'; break; case 16: hour = '👑 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 👑'; break; case 17: hour = '👑 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑 👑'; break; case 18: hour = '🍷 𝑁𝑎𝑢𝑓𝑟𝑎𝑍𝑎𝑝𝑝 🍷'; break; case 19: hour = '🍷 𝑁𝑎𝑢𝑓𝑟𝑎𝑍𝑎𝑝𝑝 🍷'; break; case 20: hour = '🍷 𝑁𝑎𝑢𝑓𝑟𝑎𝑍𝑎𝑝𝑝 🍷'; break; case 21: hour = '🍷 𝑁𝑎𝑢𝑓𝑟𝑎𝑍𝑎𝑝𝑝 🍷'; break; case 22: hour = '🍷 𝑁𝑎𝑢𝑓𝑟𝑎𝑍𝑎𝑝𝑝 🍷'; break; case 23: hour = '🍷 𝑁𝑎𝑢𝑓𝑟𝑎𝑍𝑎𝑝𝑝 🍷'; break;}
 global.saludo = "🌎" + hour;*/
