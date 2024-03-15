global.math = global.math ? global.math : {};
const handler = async (m, {conn, args, usedPrefix, command}) => {
  const mat =`
> ⓘ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙞𝙫𝙚𝙡 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖 𝙟𝙪𝙜𝙖𝙧.

> 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿𝙀𝙎 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀𝙎:
> *${Object.keys(modes).join(' | ')}*

> 𝙀𝙅𝙀𝙈𝙋𝙇𝙊:
> \`#mates noob\`
`.trim();
  if (args.length < 1) return await conn.reply(m.chat, mat, m);
  /* conn.sendButton(m.chat, mat, wm, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`],
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`],
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)

conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`],
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`],
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)*/

  const mode = args[0].toLowerCase();
  if (!(mode in modes)) return await conn.reply(m.chat, mat, m);

  /* conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`],
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`],
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)*/

  const id = m.chat;
  if (id in global.math) return conn.reply(m.chat, '> ⓘ 𝙀𝙡 𝙟𝙪𝙚𝙜𝙤 𝙣𝙞 𝙩𝙚𝙧𝙢𝙞𝙣𝙤, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙖 𝙦𝙪𝙚 𝙙𝙚𝙣 𝙡𝙖 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙤 𝙦𝙪𝙚 𝙩𝙚𝙧𝙢𝙞𝙣𝙚 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤.', global.math[id][0]);
  const math = genMath(mode);
  global.math[id] = [
    await conn.reply(m.chat, `> ⓘ 𝘾𝙪𝙖𝙡 𝙚𝙨 𝙚𝙡 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚: *${math.str}*?\n\n> 𝙏𝙄𝙀𝙈𝙋𝙊: *${(math.time / 1000).toFixed(2)}*\n\n> 𝘽𝙤𝙣𝙤: ${math.bonus}`, m),
    math, 4,
    setTimeout(() => {
      if (global.math[id]) {
        conn.reply(m.chat, `> ⓘ 𝙀𝙇 𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀 𝙀𝙎𝙋𝙀𝙍𝘼 𝙏𝙀𝙍𝙈𝙄𝙉𝙊.\n\n> 𝙇𝙖 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙛𝙪𝙚:\n> *${math.result}*`, m),
        // conn.sendButton(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙴 𝙰𝙷 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝙰𝚁𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁*\n\n*𝙻𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙴𝚂 ${math.result}*`, author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁', `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
        delete global.math[id];
      }
    }, math.time),
  ];
};
handler.help = ['math <mode>'];
handler.tags = ['game'];
handler.command = /^matessss|matemáticassss/i;
export default handler;

const modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 10],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
  medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000],
};

const operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷',
};

function genMath(mode) {
  const [a1, a2, b1, b2, ops, time, bonus] = modes[mode];
  let a = randomInt(a1, a2);
  const b = randomInt(b1, b2);
  const op = pickRandom([...ops]);
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))();
  if (op == '/') [a, result] = [result, a];
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result,
  };
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from];
  from = Math.floor(from);
  to = Math.floor(to);
  return Math.floor((to - from) * Math.random() + from);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
