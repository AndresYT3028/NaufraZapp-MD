const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `> ⓘ Debe de ingresar un prefijo para el bot, ya que esto es opcional para su funcionalidad, por ejemplo: ${usedPrefix + command} #`;
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
  await m.reply(`> *✅️ Prefijo Actualizado Con Éxito, Prefijo Actual: ${text}*`);
};
handler.help = ['setprefix'].map((v) => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(setprefix)$/i;
handler.rowner = true;
export default handler;
