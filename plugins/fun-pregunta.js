const handler = async (m, {command, text}) => m.reply(`
> ⓘ *PREGUNTAS BOT*
  
\`TU PREGUNTA:\`
> ${text}


\`RESPUESTA:\`
> ${['Si', 'Tal vez sí', 'Posiblemente', 'Probablemente no', 'No', 'Imposible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
handler.help = ['pregunta <texto>?'];
handler.tags = ['kerang'];
handler.command = /^preguntassss|preguntameee|aaaapakah$/i;
export default handler;
