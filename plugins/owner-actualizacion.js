// adartado por mario (Ns: un ladrón de código)

import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
let previousCommitUser = ''; 
const owner = 'Bots-WhatsApp-OFC';
const repo = 'NaufraZapp-MD';
const handler = async (m, {conn, text, usedPrefix, command}) => {
 conn.sendMessage(m.chat, {text: `> ⓘ *Comando activado con éxito, te notificaremos cuando se actualize el repositorio.*`}, {quoted: m});  
try {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
      const {sha, commit: {message}, html_url, author: { login } } = response.data[0];

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha;
        previousUpdatedAt = message;
        previousCommitUser = login
        conn.sendMessage(m.chat, {text: `> ⓘ *¡El repositorio ha sido actualizado!*\n*- Repositorio:* ${html_url}\n*- Mensaje de commit:* ${message}\n*- Commit por:* ${login}`}, {quoted: m});
      }
    } catch (error) {
      console.error(error)
      m.reply('> ⓘ 𝙎𝙚 𝙝𝙖 𝙥𝙧𝙤𝙙𝙪𝙟𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧, 𝙫𝙪𝙚𝙡𝙫𝙖 𝙖 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧𝙡𝙤.');
    }
  }
  setInterval(checkRepoUpdates, 6000);
} catch (e) {
m.reply(e)
}
};
handler.command = /^(actualizacion|actualizaciones)/i;
handler.rowner = true;
export default handler;
