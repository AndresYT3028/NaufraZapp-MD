import similarity from 'similarity';
const threshold = 0.72;
const handler = {
  async before(m) {
    const id = m.chat;
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/ADIVINA EL TITULO DE LA CANCION/i.test(m.quoted.text)) return !0;
    this.tebaklagu = this.tebaklagu ? this.tebaklagu : {};
    if (!(id in this.tebaklagu)) return m.reply('> ⓘ El juego ha terminado...');
    if (m.quoted.id == this.tebaklagu[id][0].id) {
      const json = JSON.parse(JSON.stringify(this.tebaklagu[id][1]));
      if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        global.db.data.users[m.sender].exp += this.tebaklagu[id][2];
        m.reply(`> ⓘ Respuesta correcta!!! por acertar, ganas:\n> +${this.tebaklagu[id][2]} de XP`);
        clearTimeout(this.tebaklagu[id][3]);
        delete this.tebaklagu[id];
      } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`> Muy cerca, tu puedes!!`);
      else m.reply(`> ⓘ Respuesta incorrecta, intentalo de nuevo...`);
    }
    return !0;
  },
  exp: 0,
};
export default handler;
