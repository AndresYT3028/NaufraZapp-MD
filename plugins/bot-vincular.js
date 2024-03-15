import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

          m.reply(`> ⓘ 𝙀𝙨𝙩𝙚 𝙘𝙤𝙙𝙞𝙜𝙤 𝙩𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚 𝙫𝙞𝙣𝙘𝙪𝙡𝙖𝙧 𝙘𝙤𝙣 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿\n\n> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙨𝙩𝙚 𝙘𝙤𝙙𝙞𝙜𝙤 𝙚𝙣 𝙂𝙪𝙖𝙧𝙙𝙞𝙖𝙣𝘽𝙤𝙩-𝙈𝘿 connectnaufrazappmd\n> • wa.me/19145948340`);
            });
}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['gvincular']
handler.register = true
export default handler