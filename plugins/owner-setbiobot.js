let handler = async (m, { conn, text }) => {
   if (!text) throw `> ⓘ Por favior, ingrese un texto en el cual se vera en la biografía del bot.`
     try {
                await conn.updateProfileStatus(text).catch(_ => _)
                conn.reply(m.chat, `> ✅ la biografía del bot fue cambiada con éxito.`, m)
} catch {
       throw '> ⓘ Ocurrio un error inesperado, por favor vuelva a intentarlo.'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^setbiobot|setbotbio$/i
handler.owner = true

export default handler