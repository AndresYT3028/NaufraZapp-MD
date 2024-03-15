import fg from 'api-dylux'
import { tiktokdl } from '@bochilteam/scraper'

var handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!args[0]) throw `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> ${usedPrefix + command} https://vm.tiktok.com/ZMjbonqPu/`
if (!args[0].match(/tiktok/gi)) throw `> ⓘ 𝙀𝙧𝙧𝙤𝙧, 𝙫𝙚𝙧𝙞𝙛𝙞𝙦𝙪𝙚 𝙦𝙪𝙚 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙨𝙚𝙖 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤...`


const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitt}`, edit: key})
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `${waittt}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitttt}`, edit: key})

try {
let p = await fg.tiktok(args[0])
let te = `> ❒ 𝙉𝙊𝙈𝘽𝙍𝙀:
> ⓘ ${p.nickname}

> ❒ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊/𝘼:
> ⓘ ${p.unique_id}

> ❒ 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉:
> ⓘ ${p.duration}

> ❒ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉:
> ⓘ ${p.description}`
conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
} catch {
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) throw '> ⓘ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙙𝙚𝙨𝙘𝙨𝙧𝙜𝙨𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤...'
conn.sendFile(m.chat, url, 'fb.mp4', `> ⓘ 𝙉𝙊𝙈𝘽𝙍𝙀: ${nickname}\n> ⓘ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉: ${description}`, m)
m.react(done)
} catch {
m.reply(`> ⓘ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤...`)
}}

}
handler.help = ['tiktok']
handler.tags = ['descargas']
handler.command = /^(tiktok|tt|ttdl|tiktokdl|tiktoknowm)$/i
handler.register = true
handler.diamond = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))