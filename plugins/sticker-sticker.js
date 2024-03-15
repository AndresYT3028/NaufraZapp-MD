import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {

let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return m.reply(`> ⓘ 𝙀𝙡 𝙫𝙞𝙙𝙚𝙤 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙖 𝙨𝙚𝙧 𝙨𝙩𝙞𝙘𝙠𝙚𝙧, 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙙𝙪𝙧𝙖𝙧 𝙢𝙖𝙨 𝙙𝙚 \`7\` 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨...`)
let img = await q.download?.()

if (!img) throw `> ⓘ 𝙎𝙚 𝙥𝙧𝙤𝙙𝙪𝙟𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧, 𝙧𝙚𝙘𝙪𝙚𝙧𝙙𝙚 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙫𝙞𝙙𝙚𝙤 𝙤 𝙜𝙞𝙛 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤...`

let out
try {
stiker = await sticker(img, false, global.packname, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)

else return m.reply(`URL invalido`)

}
} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: ``, mediaType: 2, sourceUrl: [gp1, channel, yt, md, fb, ig, paypal].getRandom(), thumbnail: imagen6}}}, { quoted: m })

else throw `> ⓘ 𝙎𝙚 𝙥𝙧𝙤𝙙𝙪𝙟𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧, 𝙧𝙚𝙘𝙪𝙚𝙧𝙙𝙚 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙫𝙞𝙙𝙚𝙤 𝙤 𝙜𝙞𝙛 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤...`

}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}