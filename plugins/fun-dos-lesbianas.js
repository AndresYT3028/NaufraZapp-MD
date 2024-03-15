const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`> *😳 ENCONTRAMOS DOS LESBIANAS EN PAREJA EN ESTE GRUPO!!!!*\n\n🏳️‍⚧️🚺 ${toM(a)} & ${toM(b)} 🚺🏳️‍⚧️\n\n> *Estas dos si que tienen un amor oculto por aqui.*`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['doslesbianas', 'topgays2'];
handler.group = true;
export default handler;
