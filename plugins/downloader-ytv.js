import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {bestFormat, getUrlDl} from '../lib/y2dl.js';
const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw '> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧.';
  let enviando;
  if (enviando) return  
      enviando = true    
  let youtubeLink = '';
  if (args[0].includes('you')) {
    youtubeLink = args[0];
  } else {
    const index = parseInt(args[0]) - 1;
    if (index >= 0) {
      if (Array.isArray(global.videoList) && global.videoList.length > 0) {
        const matchingItem = global.videoList.find((item) => item.from === m.sender);
        if (matchingItem) {
          if (index < matchingItem.urls.length) {
            youtubeLink = matchingItem.urls[index];
          } else {
            enviando = false  
            throw `> ⓘ 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙚𝙡𝙚𝙜𝙞𝙧 𝙚𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙩𝙚 𝙙𝙚𝙡 1 𝙖𝙡 *${matchingItem.urls.length}*`;
          }
        } else {
          enviando = false  
          throw `> ⓘ 𝙋𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤, 𝙨𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙚𝙡 𝙣𝙪𝙢𝙚𝙧𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n\n${usedPrefix + command} 4\n\n> 𝙋𝙪𝙚𝙙𝙚𝙨 𝙗𝙪𝙨𝙘𝙖𝙧 𝙢𝙪𝙨𝙞𝙘𝙖𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: \`${usedPrefix}playlist\`.`;
        }
      } else {
        enviando = false  
        throw `> ⓘ 𝙋𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤, 𝙨𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙚𝙡 𝙣𝙪𝙢𝙚𝙧𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n\n${usedPrefix + command} 4\n\n> 𝙋𝙪𝙚𝙙𝙚𝙨 𝙗𝙪𝙨𝙘𝙖𝙧 𝙢𝙪𝙨𝙞𝙘𝙖𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: \`${usedPrefix}playlist\`.`;
      }
    }
  }
  const { key } = await m.reply(`> ✅ 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙨𝙪 𝙫𝙞𝙙𝙚𝙤.\n\n> 𝙎𝙞 𝙨𝙪 𝙫𝙞𝙙𝙚𝙤 𝙣𝙤 𝙚𝙨 𝙚𝙣𝙫𝙞𝙖𝙙𝙤, 𝙥𝙧𝙪𝙚𝙗𝙚 𝙘𝙤𝙣 𝙤𝙩𝙧𝙤𝙨 𝙢𝙚𝙩𝙤𝙙𝙤𝙨 𝙙𝙚 𝙫𝙞𝙙𝙚𝙤.`);
  try {
    const formats = await bestFormat(youtubeLink, 'video');
    const buff = await getBuffer(formats.url);
    const yt_1 = await youtubedl(youtubeLink).catch(async (_) => await youtubedlv2(youtubeLink));
    const ttl_1 = `${yt_1?.title ? yt_1.title : 'Tu_video_descargado'}`;
    const fileSizeInBytes = buff.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
   if (fileSizeInMB > 100) {
    await conn.sendMessage(m.chat, {document: buff, caption: `> ⓘ 𝙏𝙄𝙏𝙐𝙇𝙊/𝙉𝙊𝙈𝘽𝙍𝙀:\n> ✦ ${ttl_1}\n\n> ⓘ 𝙋𝙀𝙎𝙊 𝙏𝙊𝙏𝘼𝙇:\n> ✦ ${roundedFileSizeInMB}MB`, fileName: ttl_1 + '.mp4', mimetype: 'video/mp4'}, {quoted: m});
    await conn.sendMessage(m.chat, {text: `> ✅ 𝙑𝙞𝙙𝙚𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚.\n\n> ⓘ 𝙀𝙡 𝙫𝙞𝙙𝙚𝙤 𝙨𝙚 𝙚𝙣𝙫𝙞𝙖 𝙚𝙣 𝙛𝙤𝙧𝙢𝙖𝙩𝙤 𝙙𝙚 𝙙𝙤𝙘𝙪𝙢𝙚𝙣𝙩𝙤, 𝙮𝙖 𝙦𝙪𝙚 𝙥𝙚𝙨𝙖: *${roundedFileSizeInMB}MB*\n\n> ⓘ 𝙏𝙄𝙏𝙐𝙇𝙊/𝙉𝙊𝙈𝘽𝙍𝙀:\n${ttl_1}`, edit: key}, {quoted: m});
    enviando = false
   } else {
    await conn.sendMessage(m.chat, {video: buff, caption: `> ⓘ 𝙏𝙄𝙏𝙐𝙇𝙊/𝙉𝙊𝙈𝘽𝙍𝙀:\n> ✦ ${ttl_1}\n\n> ⓘ 𝙋𝙀𝙎𝙊 𝙏𝙊𝙏𝘼𝙇:\n> ✦ ${roundedFileSizeInMB}MB`, fileName: ttl_1 + '.mp4', mimetype: 'video/mp4'}, {quoted: m});
    await conn.sendMessage(m.chat, {text: `> ✅ 𝙑𝙞𝙙𝙚𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚.`, edit: key}, {quoted: m});
    enviando = false   
   }
 } catch (ee) {
    console.log(ee)
  try {
    const qu = args[1] || '360';
    const q = qu + 'p';
    const v = youtubeLink;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = yt.video[q].download();
    const ttl = yt.title;
    const size = yt.video[q].fileSizeH;
    await conn.sendMessage(m.chat, {video: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `> ⓘ 𝙏𝙄𝙏𝙐𝙇𝙊/𝙉𝙊𝙈𝘽𝙍𝙀:\n> ✦ ${ttl}\n\n> ⓘ 𝙋𝙀𝙎𝙊 𝙏𝙊𝙏𝘼𝙇:\n> ✦ ${size}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});
    await conn.sendMessage(m.chat, {text: '> ✅ 𝙑𝙞𝙙𝙚𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚.', edit: key}, {quoted: m});
    enviando = false
  } catch (ee2) {
    console.log(ee2)
    try {
      const mediaa = await ytMp4(youtubeLink);
      await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `error.mp4`, caption: `> ⓘ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙩𝙪 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤 𝙚𝙣 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 ✨`, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});
      await conn.sendMessage(m.chat, {text: '> ✅ 𝙑𝙞𝙙𝙚𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚.', edit: key}, {quoted: m});
      enviando = false
    } catch {
      try {
        const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${youtubeLink}`);
        const lolh = await lolhuman.json();
        const n = lolh.result.title || 'error';
        const n2 = lolh.result.link;
        const n3 = lolh.result.size;
        const n4 = lolh.result.thumbnail;
        await conn.sendMessage(m.chat, {video: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `> ⓘ 𝙏𝙄𝙏𝙐𝙇𝙊/𝙉𝙊𝙈𝘽𝙍𝙀:\n> ✦ ${n}\n\n> ⓘ 𝙋𝙀𝙎𝙊 𝙏𝙊𝙏𝘼𝙇:\n> ✦ ${n3}`, thumbnail: await fetch(n4)}, {quoted: m});
        await conn.sendMessage(m.chat, {text: '> ✅ 𝙑𝙞𝙙𝙚𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚.', edit: key}, {quoted: m});
        enviando = false
      } catch {
        await conn.sendMessage(m.chat, {text: `> ⓘ 𝙉𝙤 𝙨𝙚 𝙥𝙪𝙙𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙢𝙖𝙨 𝙩𝙖𝙧𝙙𝙚.`, edit: key}, {quoted: m});
        throw '> ⓘ 𝙉𝙤 𝙨𝙚 𝙥𝙪𝙙𝙤 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙨𝙪 𝙫𝙞𝙙𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙢𝙖𝙨 𝙩𝙖𝙧𝙙𝙚.';
      }
    }
  }
}};
handler.command = /^(video|fgmp4|dlmp4|getvid|play(v|mp4)?)$/i;
export default handler;

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}

const getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: 'get',
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    });

    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
};
