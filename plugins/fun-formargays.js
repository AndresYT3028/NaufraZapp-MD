const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`> *😳 ENCONTRAMOS DOS GAYS EN PAREJA EN ESTE GRUPO!!!!*\n\n🏳️‍🌈🚹 ${toM(a)} & ${toM(b)} 🚹🏳️‍🌈\n\n> *Estos dos si que tienen un amor oculto por aqui.*`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['dosgays', 'topgays1'];
handler.group = true;
export default handler;
