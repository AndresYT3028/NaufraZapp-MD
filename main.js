process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';
import './config.js';
import './api.js';
import {createRequire} from 'module';
import path, {join} from 'path';
import {fileURLToPath, pathToFileURL} from 'url';
import {platform} from 'process';
import * as ws from 'ws';
import {readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch} from 'fs';
import yargs from 'yargs';
import {spawn} from 'child_process';
import lodash from 'lodash';
import chalk from 'chalk';
import syntaxerror from 'syntax-error';
import {tmpdir} from 'os';
import {format} from 'util';
import P from 'pino';
import pino from 'pino';
import Pino from 'pino';
import {Boom} from '@hapi/boom';
import {makeWASocket, protoType, serialize} from './lib/simple.js';
import {Low, JSONFile} from 'lowdb';
import {mongoDB, mongoDBV2} from './lib/mongoDB.js';
import store from './lib/store.js';
const {proto} = (await import('@whiskeysockets/baileys')).default;
const {DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC} = await import('@whiskeysockets/baileys');
import readline from 'readline';
import NodeCache from 'node-cache';
const {CONNECTING} = ws;
const {chain} = lodash;
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

protoType();
serialize();

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') {
  return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString();
}; global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
}; global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.timestamp = {start: new Date};
global.videoList = [];
global.videoListXXX = [];

const __dirname = global.__dirname(import.meta.url);

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`));

global.DATABASE = global.db; 
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise((resolve) => setInterval(async function() {
      if (!global.db.READ) {
        clearInterval(this);
        resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1 * 1000));
  }
  if (global.db.data !== null) return;
  global.db.READ = true;
  await global.db.read().catch(console.error);
  global.db.READ = null;
  global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    ...(global.db.data || {}),
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();

/* Creditos a Otosaka (https://wa.me/51993966345) */

global.chatgpt = new Low(new JSONFile(path.join(__dirname, '/db/chatgpt.json')));
global.loadChatgptDB = async function loadChatgptDB() {
  if (global.chatgpt.READ) {
    return new Promise((resolve) =>
      setInterval(async function() {
        if (!global.chatgpt.READ) {
          clearInterval(this);
          resolve( global.chatgpt.data === null ? global.loadChatgptDB() : global.chatgpt.data );
        }
      }, 1 * 1000));
  }
  if (global.chatgpt.data !== null) return;
  global.chatgpt.READ = true;
  await global.chatgpt.read().catch(console.error);
  global.chatgpt.READ = null;
  global.chatgpt.data = {
    users: {},
    ...(global.chatgpt.data || {}),
  };
  global.chatgpt.chain = lodash.chain(global.chatgpt.data);
};
loadChatgptDB();

/* ❒═════════════════◊【 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐃𝐄 𝐌𝐄𝐓𝐎𝐃𝐎𝐒 】◊═════════════════❒ */

global.authFile = `BotsWhatsAppSession`;
const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile);
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = global.botnumber

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))

//Código adaptado para la compatibilidad de ser bot con el código de 8 digitos. Hecho por: https://github.com/GataNina-Li
let opcion
if (methodCodeQR) {
opcion = '1'
}
if (!methodCodeQR && !methodCode && !fs.existsSync(`./${authFile}/creds.json`)) {
do {
let lineM = '══════════════════'
opcion = await question('╔◊═════════════════════◊\n║🌎 OPCIONES DISPONIBLES 🌎\n╚◊═════════════════════◊\n1. Con código QR\n2. Con código de texto de 8 dígitos\n---> ')
//if (fs.existsSync(`./${authFile}/creds.json`)) {
//console.log(chalk.bold.redBright(`PRIMERO BORRE EL ARCHIVO ${chalk.bold.greenBright("creds.json")} QUE SE ENCUENTRA EN LA CARPETA ${chalk.bold.greenBright(authFile)} Y REINICIE.`))
//process.exit()
if (!/^[1-2]$/.test(opcion)) {
console.log('❮🔴❯ ERROR, SELECCIONE SOLO LA OPCION 1 O 2.\n')
}} while (opcion !== '1' && opcion !== '2' || fs.existsSync(`./${authFile}/creds.json`))
}

const connectionOptions = {
logger: pino({ level: 'silent' }),
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
mobile: MethodMobile, 
browser: opcion == '1' ? ['NaufraZapp-MD', 'Safari', '2.0.0'] : methodCodeQR ? ['NaufraZapp-MD', 'Safari', '2.0.0'] : ['Ubuntu', 'Chrome', '110.0.5585.95'],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true, 
generateHighQualityLinkPreview: true, 
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid)
let msg = await store.loadMessage(jid, clave.id)
return msg?.message || ""
},
msgRetryCounterCache,
msgRetryCounterMap,
defaultQueryTimeoutMs: undefined,   
version
}

global.conn = makeWASocket(connectionOptions);

if (!fs.existsSync(`./${authFile}/creds.json`)) {
if (opcion === '2' || methodCode) {
//if (fs.existsSync(`./${authFile}/creds.json`)) {
//console.log(chalk.bold.redBright(`PRIMERO BORRE EL ARCHIVO ${chalk.bold.greenBright("creds.json")} QUE SE ENCUENTRA EN LA CARPETA ${chalk.bold.greenBright(authFile)} Y REINICIE.`))
//process.exit()
//}
opcion = '2'
if (!conn.authState.creds.registered) {  
if (MethodMobile) throw new Error('❮🔴❯ No se puede usar un código de emparejamiento con la API móvil')

let numeroTelefono
if (!!phoneNumber) {
numeroTelefono = phoneNumber.replace(/[^0-9]/g, '')
if (!Object.keys(PHONENUMBER_MCC).some(v => numeroTelefono.startsWith(v))) {
console.log(chalk.bgBlack(chalk.bold.greenBright("❮🛠️❯ Comience con el código de país de su número de WhatsApp.\nEjemplo: +5493873687620\n")))
process.exit(0)
}} else {
while (true) {
numeroTelefono = await question(chalk.bgBlack(chalk.bold.cyanBright('❮🌎❯ Por favor, escriba su número de WhatsApp.\nEjemplo: +5493873687620\n')))
numeroTelefono = numeroTelefono.replace(/[^0-9]/g, '')

if (numeroTelefono.match(/^\d+$/) && Object.keys(PHONENUMBER_MCC).some(v => numeroTelefono.startsWith(v))) {
break 
} else {
console.log(chalk.bgBlack(chalk.bold.greenBright("❮📗❯ Por favor, escriba su número de WhatsApp.\nEjemplo: +5493873687620.\n")))
}}
rl.close()  
} 

        setTimeout(async () => {
            let codigo = await conn.requestPairingCode(numeroTelefono)
            codigo = codigo?.match(/.{1,4}/g)?.join("-") || codigo
            console.log(chalk.green('❮🛠️❯ introduce el código de emparejamiento en WhatsApp.'));
            console.log(chalk.black(chalk.bgGreen(`Su código de emparejamiento: `)), chalk.black(chalk.white(codigo)))
        }, 3000)
}}
}

conn.isInit = false;
conn.well = false;
conn.logger.info(`❮✅❯ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎....\n`);

if (!opts['test']) {
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) await global.db.write();
      if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', 'BotsWhatsAppOFC'], tmp.forEach((filename) => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])));
    }, 30 * 1000);
  }
}

if (opts['server']) (await import('./server.js')).default(global.conn, PORT);


/* ❒═════════════════◊【 𝐀𝐑𝐂𝐇𝐈𝐕𝐎𝐒 】◊═════════════════❒ */

function clearTmp() {
  const tmp = [join(__dirname, './tmp')];
  const filename = [];
  tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
  return filename.map((file) => {
    const stats = statSync(file);
    if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file); // 3 minutes
    return false;
  });
}

function purgeSession() {
let prekey = []
let directorio = readdirSync("./BotsWhatsAppSession")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-') /*|| file.startsWith('session-') || file.startsWith('sender-') || file.startsWith('app-') */
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./MysticSession/${files}`)
})
} 

function purgeSessionSB() {
try {
let listaDirectorios = readdirSync('./BotsWhatsAppOFC/');
let SBprekey = []
listaDirectorios.forEach(directorio => {
if (statSync(`./BotsWhatsAppOFC/${directorio}`).isDirectory()) {
let DSBPreKeys = readdirSync(`./BotsWhatsAppOFC/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-') /*|| fileInDir.startsWith('app-') || fileInDir.startsWith('session-')*/
})
SBprekey = [...SBprekey, ...DSBPreKeys]
DSBPreKeys.forEach(fileInDir => {
unlinkSync(`./BotsWhatsAppOFC/${directorio}/${fileInDir}`)
})
}
})
if (SBprekey.length === 0) return; //console.log(chalk.cyanBright(`=> No hay archivos por eliminar.`))
} catch (err) {
console.log(chalk.bold.red(`❮♨️❯ Algo salio mal durante la eliminación, archivos no eliminados`))
}}

function purgeOldFiles() {
const directories = ['./BotsWhatsAppSession/', './BotsWhatsAppOFC/']
const oneHourAgo = Date.now() - (60 * 60 * 1000)
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
const filePath = path.join(dir, file)
stat(filePath, (err, stats) => {
if (err) throw err;
if (stats.isFile() && stats.mtimeMs < oneHourAgo && file !== 'creds.json') { 
unlinkSync(filePath, err => {  
if (err) throw err
console.log(chalk.bold.green(`Archivo ${file} borrado con éxito`))
})
} else {  
console.log(chalk.bold.red(`Archivo ${file} no borrado` + err))
} }) }) }) })
}

async function connectionUpdate(update) {
  const {connection, lastDisconnect, isNewLogin} = update;
  global.stopped = connection;
  if (isNewLogin) conn.isInit = true;
  const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
  if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
    await global.reloadHandler(true).catch(console.error);
    //console.log(await global.reloadHandler(true).catch(console.error));
    global.timestamp.connect = new Date;
  }
  if (global.db.data == null) loadDatabase();
if (update.qr != 0 && update.qr != undefined || methodCodeQR) {
if (opcion == '1' || methodCodeQR) {
    console.log(chalk.green('❮✅❯ Por favor, escanea el codigo QR.'));
 }}
 /* ❒═════════════════◊【 𝐈𝐍𝐈𝐂𝐈𝐎 𝐘 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎𝐍 】◊═════════════════❒ */
   if (connection == 'open') {
console.log(chalk.yellowBright('\n╭━─━━─━━─━─≪  👑  ≫─━─━━─━━─━╮\n│ Se ha conectado el bot con exito.\n╰━─━━━─━━─━─≪ 👑 ≫─━─━━─━━━─━╯\n'))
conn.fakeReply('19145948340@s.whatsapp.net', '𝘚𝘰𝘺 𝘶𝘯 𝘯𝘶𝘦𝘷𝘰 𝘣𝘰𝘵 𝘤𝘰𝘯𝘦𝘤𝘵𝘢𝘥𝘰.', '0@s.whatsapp.net', '🛡️ 𝙂𝙪𝙖𝙧𝙙𝙞𝙖𝙣𝘽𝙤𝙩-𝙈𝘿 🛡️', '0@s.whatsapp.net')
 await conn.groupAcceptInvite('Bp9kWG8jjoL8j4QLaP0ZZl');
   }
   /* ❒═════════════════◊【 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 𝐄𝐍 𝐋𝐀 𝐂𝐎𝐍𝐒𝐎𝐋𝐀 】◊═════════════════❒ */
let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
if (reason == 405) {
await fs.unlinkSync("./BotsWhatsAppSession/" + "creds.json")
console.log(chalk.bold.redBright(`[ 🍷 ] Conexión replazada, Por favor espere un momento me voy a reiniciar...\nSi aparecen error vuelve a iniciar con : npm start`)) 
process.send('reset')}
if (connection === 'close') {
    if (reason === DisconnectReason.badSession) {
        conn.logger.error(`[ 🍷 ] Sesión incorrecta, por favor elimina la carpeta ${global.authFile} y escanea nuevamente.`);
        //process.exit();
    } else if (reason === DisconnectReason.connectionClosed) {
        conn.logger.warn(`[ 🍷 ] Conexión cerrada, reconectando...`);
        await global.reloadHandler(true).catch(console.error);
    } else if (reason === DisconnectReason.connectionLost) {
        conn.logger.warn(`[ 🍷 ] Conexión perdida con el servidor, reconectando...`);
        await global.reloadHandler(true).catch(console.error);
    } else if (reason === DisconnectReason.connectionReplaced) {
        conn.logger.error(`[ 🍷 ] Conexión reemplazada, se ha abierto otra nueva sesión. Por favor, cierra la sesión actual primero.`);
        //process.exit();
    } else if (reason === DisconnectReason.loggedOut) {
        conn.logger.error(`[ 🍷 ] Conexion cerrada, por favor elimina la carpeta ${global.authFile} y escanea nuevamente.`);
        //process.exit();
    } else if (reason === DisconnectReason.restartRequired) {
        conn.logger.info(`[ 🍷 ] Reinicio necesario, reinicie el servidor si presenta algún problema.`);
        await global.reloadHandler(true).catch(console.error);
    } else if (reason === DisconnectReason.timedOut) {
        conn.logger.warn(`[ 🍷 ] Tiempo de conexión agotado, reconectando...`);
        await global.reloadHandler(true).catch(console.error);
    } else {
        conn.logger.warn(`[ 🍷 ] Razón de desconexión desconocida. ${reason || ''}: ${connection || ''}`);
        await global.reloadHandler(true).catch(console.error);
    }
}
  /*if (connection == 'close') {
    console.log(chalk.yellow(`🦤ㅤConexion cerrada, por favor borre la carpeta ${global.authFile} y reescanee el codigo QR`));
  }*/
}

process.on('uncaughtException', console.error);

let isInit = true;
let handler = await import('./handler.js');
global.reloadHandler = async function(restatConn) {
  try {
    const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error);
    if (Object.keys(Handler || {}).length) handler = Handler;
  } catch (e) {
    console.error(e);
  }
  if (restatConn) {
    const oldChats = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch { }
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {chats: oldChats});
    isInit = true;
  }
  /* ❒═════════════════◊【 𝐍𝐎 𝐂𝐀𝐌𝐁𝐈𝐀𝐑 】◊═════════════════❒ */
  if (!isInit) {
    conn.ev.off('messages.upsert', conn.handler);
    conn.ev.off('group-participants.update', conn.participantsUpdate);
    conn.ev.off('groups.update', conn.groupsUpdate);
    conn.ev.off('message.delete', conn.onDelete);
    conn.ev.off('call', conn.onCall);
    conn.ev.off('connection.update', conn.connectionUpdate);
    conn.ev.off('creds.update', conn.credsUpdate);
  }
/* ❒═════════════════◊【 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎𝐍 𝐏𝐀𝐑𝐀 𝐆𝐑𝐔𝐏𝐎𝐒 】◊═════════════════❒ */
  conn.welcome = '> ⓘ 𝙉𝙪𝙚𝙫𝙤 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤:\n@subject\n\n𝙃𝙤𝙡𝙖 𝙪𝙨𝙪𝙖𝙧𝙞𝙤/𝙖:\n> @user*\n> 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤/𝙖 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤.\n\n> ⓘ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙡𝙚𝙖 𝙡𝙖 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.\n\n@desc\n\n*𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿*';
  conn.bye = '> ⓘ 𝙎𝙚 𝙝𝙖 𝙞𝙙𝙤 𝙪𝙣 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙧𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚:\n> @user*';
  conn.spromote = '> ⓘ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤: @user 𝙖𝙝𝙤𝙧𝙖 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 𝙙𝙚 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.';
  conn.sdemote = '> ⓘ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤: @user 𝙛𝙪𝙚 𝙙𝙚𝙨𝙘𝙖𝙧𝙩𝙖𝙙𝙤 𝙘𝙤𝙢𝙤 𝙖𝙙𝙢𝙞𝙣.';
  conn.sDesc = '> ⓘ 𝙎𝙚 𝙝𝙖 𝙢𝙚𝙟𝙤𝙧𝙖𝙙𝙤 𝙡𝙖 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙡𝙖 𝙣𝙪𝙚𝙫𝙖 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣 𝙚𝙨:\n\n@desc';
  conn.sSubject = '> ⓘ 𝙎𝙚 𝙝𝙖 𝙢𝙚𝙟𝙤𝙧𝙖𝙙𝙤 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙡 𝙣𝙪𝙚𝙫𝙤 𝙣𝙤𝙢𝙗𝙧𝙚 𝙚𝙨:\n\n@subject';
  conn.sIcon = '> ⓘ 𝙎𝙚 𝙝𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙡𝙖 𝙛𝙤𝙩𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙧𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚.';
  conn.sRevoke = '> ⓘ 𝙎𝙚 𝙝𝙖 𝙧𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙡 𝙣𝙪𝙚𝙫𝙤 𝙚𝙣𝙡𝙖𝙘𝙚 𝙚𝙨:\n\n@revoke';

  conn.handler = handler.handler.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.onCall = handler.callUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn, true);

  const currentDateTime = new Date();
  const messageDateTime = new Date(conn.ev);
  if (currentDateTime >= messageDateTime) {
    const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0]);
  } else {
    const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0]);
  }

  conn.ev.on('messages.upsert', conn.handler);
  conn.ev.on('group-participants.update', conn.participantsUpdate);
  conn.ev.on('groups.update', conn.groupsUpdate);
  conn.ev.on('message.delete', conn.onDelete);
  conn.ev.on('call', conn.onCall);
  conn.ev.on('connection.update', conn.connectionUpdate);
  conn.ev.on('creds.update', conn.credsUpdate);
  isInit = false;
  return true;
};

/*

const pluginFolder = join(__dirname, './plugins');
const pluginFilter = filename => /\.js$/.test(filename);
global.plugins = {};

async function filesInit(folder) {
  for (let filename of readdirSync(folder).filter(pluginFilter)) {
    try {
      let file = join(folder, filename);
      const module = await import(file);
      global.plugins[file] = module.default || module;
    } catch (e) {
      console.error(e);
      delete global.plugins[filename];
    }
  }

  for (let subfolder of readdirSync(folder)) {
    const subfolderPath = join(folder, subfolder);
    if (statSync(subfolderPath).isDirectory()) {
      await filesInit(subfolderPath);
    }
  }
}

await filesInit(pluginFolder).then(_ => Object.keys(global.plugins)).catch(console.error);

*/

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'));
const pluginFilter = (filename) => /\.js$/.test(filename);
global.plugins = {};
async function filesInit() {
  for (const filename of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      const file = global.__filename(join(pluginFolder, filename));
      const module = await import(file);
      global.plugins[filename] = module.default || module;
    } catch (e) {
      conn.logger.error(e);
      delete global.plugins[filename];
    }
  }
}
filesInit().then((_) => Object.keys(global.plugins)).catch(console.error);

global.reload = async (_ev, filename) => {
  if (pluginFilter(filename)) {
    const dir = global.__filename(join(pluginFolder, filename), true);
    if (filename in global.plugins) {
      if (existsSync(dir)) conn.logger.info(` updated plugin - '${filename}'`);
      else {
        conn.logger.warn(`deleted plugin - '${filename}'`);
        return delete global.plugins[filename];
      }
    } else conn.logger.info(`new plugin - '${filename}'`);
    const err = syntaxerror(readFileSync(dir), filename, {
      sourceType: 'module',
      allowAwaitOutsideFunction: true,
    });
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`);
    else {
      try {
        const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`));
        global.plugins[filename] = module.default || module;
      } catch (e) {
        conn.logger.error(`error require plugin '${filename}\n${format(e)}'`);
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  const test = await Promise.all([
    spawn('ffmpeg'),
    spawn('ffprobe'),
    spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    spawn('convert'),
    spawn('magick'),
    spawn('gm'),
    spawn('find', ['--version']),
  ].map((p) => {
    return Promise.race([
      new Promise((resolve) => {
        p.on('close', (code) => {
          resolve(code !== 127);
        });
      }),
      new Promise((resolve) => {
        p.on('error', (_) => resolve(false));
      })]);
  }));
  const [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test;
  const s = global.support = {ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find};
  Object.freeze(global.support);
}
/* ❒═════════════════◊【 𝐍𝐎 𝐂𝐀𝐌𝐁𝐈𝐀𝐑 】◊═════════════════❒ */
setInterval(async () => {
  if (stopped === 'close' || !conn || !conn.user) return;
  const a = await clearTmp();
console.log(chalk.cyanBright(`\n▣───────────[ 𝙰𝚄𝚃𝙾𝙲𝙻𝙴𝙰𝚁TMP ]──────────────···\n│\n▣─❧ 𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾𝚂 ✅\n│\n▣───────────────────────────────────────···\n`));
}, 180000);
setInterval(async () => {
  if (stopped === 'close' || !conn || !conn.user) return;
  await purgeSession();
console.log(chalk.cyanBright(`\n▣────────[ AUTOPURGESESSIONS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`));
}, 1000 * 60 * 60);
setInterval(async () => {
  if (stopped === 'close' || !conn || !conn.user) return;
  await purgeSessionSB();
console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_SESSIONS_SUB-BOTS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`));
}, 1000 * 60 * 60);
setInterval(async () => {
  if (stopped === 'close' || !conn || !conn.user) return;
  await purgeOldFiles();
console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_OLDFILES ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`));
}, 1000 * 60 * 60);
setInterval(async () => {
  if (stopped === 'close' || !conn || !conn.user) return;
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  /* ❒═════════════════◊【 𝐓𝐈𝐄𝐌𝐏𝐎 𝐃𝐄 𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 】◊═════════════════❒ */
  const bio = `𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿 • ${uptime} • 𝙗𝙮 𝘉𝘰𝘵𝘴-𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱-𝘖𝘍𝘊`;
  await conn.updateProfileStatus(bio).catch((_) => _);
}, 60000);
function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [d, 'd ️', h, 'h ', m, 'm ', s, 's '].map((v) => v.toString().padStart(2, 0)).join('');
}
_quickTest().catch(console.error);