let handler = async(m, { conn, command, text }) => {

  let users = m.sender.split`@`[0]
  if ( users == 5493873687620 || users == 19145948340) try {
  if (!text) return m.reply(`> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙢𝙤𝙩𝙞𝙫𝙤 𝙙𝙚 𝙡𝙖 𝙧𝙚𝙪𝙣𝙞𝙤𝙣.`)
    if (text.length < 10) return m.reply(`> ⓘ 𝙀𝙡 𝙢𝙤𝙩𝙞𝙫𝙤 𝙚𝙨 𝙢𝙪𝙮 𝙘𝙤𝙧𝙩𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙢𝙞𝙣𝙞𝙢𝙤 𝙩𝙞𝙚𝙣𝙚 𝙦𝙪𝙚 𝙨𝙚𝙧 \`10\` 𝙘𝙨𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨.`)

    let texto = `> ⓘ 𝙎𝙚 𝙝𝙖 𝙨𝙤𝙡𝙞𝙘𝙞𝙩𝙖𝙙𝙤 𝙪𝙣𝙖 𝙧𝙚𝙪𝙣𝙞𝙤𝙣 𝙥𝙖𝙧𝙖 𝙡𝙤𝙨 𝙘𝙧𝙚𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩.

@${m.sender.split`@`[0]} 
${text}

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`
m.reply('> ⓘ 𝙎𝙚 𝙝𝙖 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙘𝙧𝙚𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '99', texto, m)}
  } catch (e) { await conn.reply(m.chat, '> ⓘ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙣𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.', m)
               console.log(e)
               } else {
    await m.reply('> ⓘ 𝙇𝙤 𝙨𝙞𝙚𝙣𝙩𝙤, 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙚𝙨 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙥𝙤𝙧 𝙡𝙤𝙨 𝙘𝙧𝙚𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩, 𝙮 𝙡𝙤𝙨 𝙪𝙨𝙪𝙖𝙧𝙞𝙤𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢.')}

                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })


}
handler.tags = ['owner']
handler.command = handler.help =['reunion']
handler.rowner = true

export default handler
