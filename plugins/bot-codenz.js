import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

          m.reply(`> ✅ Codigo de NaufraZapp-MD\n\n\`E3K9-KDN8-JF3L3\`\n\n> Use este comando con GuardianBot-MD, para un regalo. ✨`);
            });
}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['codenaufrago']
handler.register = true
export default handler
