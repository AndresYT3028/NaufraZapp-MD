import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

          m.reply(`> ⓘ 𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙪𝙣 𝙨𝙚𝙧𝙫𝙞𝙙𝙤𝙧 𝙥𝙖𝙧𝙖 𝙩𝙪 𝙗𝙤𝙩, 𝙥𝙪𝙚𝙙𝙚𝙨 𝙞𝙧 𝙖𝙦𝙪𝙞 𝙚𝙣 𝙚𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚 ¡¡¡𝙂𝙪𝙖𝙧𝙙𝙞𝙖𝙣𝘽𝙤𝙩-𝙈𝘿!!!\n\n> ⓘ ¡¡𝙎𝙚𝙧𝙫𝙞𝙙𝙤𝙧𝙚𝙨 𝙥𝙤𝙧 𝙘𝙖𝙩𝙚𝙜𝙤𝙧𝙞𝙖𝙨!!\n\n> 『 𝘽𝘼𝙅𝙊 』\n> ⎉ Servidor 24/7, \`4 dias\`\n\n> 『 𝙈𝙀𝘿𝙄𝙊 』\n> ⎉ Servidor 24/7, \`10 dias\`\n\n> 『 𝘼𝙇𝙏𝙊 』\n> ⎉ Servidor 24/7, \`30 dias\`\n\n> \`ⓘ Puedes saber mas información aqui:\`\n> • https://wa.me/19145948340`);
            });
}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['guardianserver']
handler.register = true
export default handler