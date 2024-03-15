import fs from 'fs';
import acrcloud from 'acrcloud';
const acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
});

const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (/audio|video/.test(mime)) {
    if ((q.msg || q).seconds > 20) return m.reply('> ⓘ El archivo es muy pesado, le recomiendo que corte el archivo a un archivo de 10 o 20 segundos para realizar este comando.');
    const media = await q.download();
    const ext = mime.split('/')[1];
    fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
    const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
    const {code, msg} = res.status;
    if (code !== 0) throw msg;
    const {title, artists, album, genres, release_date} = res.metadata.music[0];
    const txt = `
> ⓘ Estos son los resultados de la busqueda realizada.

> *NOMBRE:*
> • ${title}

> *ARTISTA:*
> • ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'No encontrado'}

> *ALBUM:*
> • ${album.name || 'No encontrado'}

> *GENERO:*
> • ${genres !== undefined ? genres.map((v) => v.name).join(', ') : 'No encontrado'}

> *PUBLICADO EN:
> • ${release_date || 'No encontrado'}
`.trim();
    fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
    m.reply(txt);
  } else throw '> ⓘ tiene que responder a un audio para completar el comando.';
};
handler.command = /^quemusica|quemusicaes|whatmusic$/i;
export default handler;
