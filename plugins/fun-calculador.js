const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `> ⓘ Menciona a alguien para aplicar el comando...`;
  const percentages = (500).getRandom();
  let emoji = '';
  let description = '';
  switch (command) {
    case 'gay2':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*Los calculos han arrojado que ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n> *ⓘ Eso es bajo... ¡Tu eres Joto, no Gay! 😄*`;
      } else if (percentages > 100) {
        description = `*Los calculos han arrojado que ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n> *ⓘ ¡Incluso más gay de lo que pensábamos! 💃*`;
      } else {
        description = `*Los calculos han arrojado que ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n> *ⓘ Lo tuyo, lo tuyo es que eres Gay. ☠*`;
      }
      break;
    case 'lesbiana':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Quizás necesites más películas románticas en tu vida.*`;
      } else if (percentages > 100) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ ¡Eso es un amor extremo por las chicas!*`;
      } else {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Mantén el amor floreciendo!*`;
      }
      break;
    case 'pajero':
    case 'pajera':
      emoji = '💦';
      if (percentages < 50) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Tal vez necesites más hobbies!*`;
      } else if (percentages > 100) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Eso es una resistencia admirable!*`;
      } else {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Mantén el buen trabajo (en solitario).*`;
      }
      break;
    case 'puto':
    case 'puta':
      emoji = '🔥';
      if (percentages < 50) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ ¡Más suerte en tu próxima conquista!*`;
      } else if (percentages > 100) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ ¡Estás en llamas!*`;
      } else {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Mantén ese encanto ardiente!*`;
      }
      break;
    case 'manco':
    case 'manca':
      emoji = '💩';
      if (percentages < 50) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ ¡No eres el único en ese club!*`;
      } else if (percentages > 100) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ ¡Tienes un talento muy especial!*`;
      } else {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Mantén esa actitud valiente!*`;
      }
      break;
    case 'rata':
      emoji = '🐁';
      if (percentages < 50) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Nada de malo en disfrutar del queso!*`;
      } else if (percentages > 100) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Un auténtico ratón de lujo!*`;
      } else {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Come queso con responsabilidad! *`;
      }
      break;
    case 'prostituto':
    case 'prostituta':
      emoji = '😳';
      if (percentages < 50) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ El mercado está en auge!*`;
      } else if (percentages > 100) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Un/a verdadero/a profesional!*`;
      } else {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n> *ⓘ Siempre es hora de negocios!*`;
      }
      break;
      default:
      throw `> El comando es inválido.`;
  }
  const responses = [
    "El universo ha hablado.",
    "Los científicos lo confirman.",
    "¡Sorpresa!"
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  const cal = `> ⓘ Calculador...

> ${description}

> *"${response}"*
`.trim()  
  async function loading() {
var hawemod = [
"> ⓘ Cargando... 10%",
"> ⓘ Cargando... 30%",
"> ⓘ Cargando... 50%",
"> ⓘ Cargando... 80%",
"> ⓘ Cargando... 100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `> *ⓘ Cargando... 0%*`, mentions: conn.parseMention(cal)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(cal)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: cal, edit: key, mentions: conn.parseMention(cal)}, {quoted: m});         
 }
loading()    
};
handler.help = ['gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + ' @tag | nombre');
handler.tags = ['calculator'];
handler.command = /^(gay2|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto)$/i;
export default handler;
