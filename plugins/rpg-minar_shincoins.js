/*const handler = async (m, {conn, isPrems}) => { // lastmiming
  const user = global.db.data.users[m.sender];
  const premium = user.premium;
  const minar = `${pickRandom(['Que Pro 😎 has minado',
    '🌟✨ Genial!! Obtienes',
    'WOW!! eres un(a) gran Minero(a) ⛏️ Obtienes',
    'Has Minado!!',
    '😲 Lograste Minar la cantidad de',
    'Tus Ingresos subiran gracias a que minaste',
    '⛏️⛏️⛏️⛏️⛏️ Minando',
    '🤩 SII!!! AHORA TIENES',
    'La minaria esta de tu lado, por ello obtienes',
    '😻 La suerte de Minar',
    '♻️ Tu Mision se ha cumplido, lograste minar',
    '⛏️ La Mineria te ha beneficiado con',
    '🛣️ Has encontrado un Lugar y por minar dicho lugar Obtienes',
    '👾 Gracias a que has minado tus ingresos suman',
    'Felicidades!! Ahora tienes', '⛏️⛏️⛏️ Obtienes'])}`;
  const pp = 'https://w0.peakpx.com/wallpaper/531/920/HD-wallpaper-video-game-project-sekai-colorful-stage-feat-hatsune-miku-akiyama-mizuki-ena-sakurabot.jpg';
  const aqua = `${pickRandom([1, 48, 33, 25, 50])}` * 1;
  const aquapremium = `${pickRandom([200, 400, 600, 700, 500, 900])}` * 1;
  const rock = `${pickRandom([20, 88, 60, 45, 32])}` * 1;
  const rockpremium = `${pickRandom([130, 900, 107, 200, 205])}` * 1;
  const pancingan = `${pickRandom([12, 20, 24, 18, 51, 81, 55])}` * 1;
  const pancinganpremium = `${pickRandom([100, 30, 400, 90, 20, 500, 80])}` * 1;
  const recompensas = {aqua: premium ? aquapremium : aqua, rock: premium ? rockpremium : rock, pancingan: premium ? pancinganpremium : pancingan};
  const money = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1;
  const moneypremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1;
  const time = user.lastcoins + 600000; // 10 min
  if (new Date - user.lastcoins < 600000) return await conn.reply(m.chat, `> ⓘ 𝙑𝙪𝙚𝙡𝙫𝙖 𝙚𝙣 ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙖𝙧 𝙢𝙞𝙣𝙖𝙣𝙙𝙤 ${global.rpgshopp.emoticon('money')} ⛏️*`, m);
  user.money += premium ? moneypremium : money;
  let texto = '';
  for (const reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue;
    user[reward] += recompensas[reward];
    texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`;
  }
  const text = `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${money} ${global.rpgshop.emoticon('money')}*\n\n𝙗𝙤𝙣𝙤:\n${texto}\n\n𝙥𝙧𝙚𝙢𝙞𝙪𝙢: ${premium ? '✅' : '❌'}\n${wm}`;
  await conn.sendFile(m.chat, pp, 'sakura.jpg', text, m);
  user.lastcoins = new Date * 1;
};
handler.help = ['minar2'];
handler.tags = ['gata'];
handler.command = ['minar2', 'miming2', 'mine2', 'minarsakucoins', 'minarcoins', 'minarshin'];
handler.fail = null;
handler.exp = 0;
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' m y ' + seconds + ' s ';
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
*/
