let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙡𝙤 𝙘𝙪𝙖𝙡 𝙨𝙚𝙧𝙖 𝙖𝙜𝙧𝙚𝙜𝙖𝙙𝙤 𝙘𝙤𝙢𝙤 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩.`
  try {
    await conn.updateProfileName(text)
    m.reply('> ⓘ 𝙀𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙛𝙪𝙚 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.')
  } catch (e) {
    console.log(e)
    throw `> ⓘ 𝙀𝙧𝙧𝙤𝙧 𝙖𝙡 𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['owner']
handler.command = /^(setbotname|cambianombre)$/i

handler.owner = true
export default handler