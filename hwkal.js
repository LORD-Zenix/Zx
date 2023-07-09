// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab!!

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')
const igstalk = require('./baseikal/lib/igstalk')
const ffstalk = require('./baseikal/lib/ffstalk')
const mlstalk = require('./baseikal/lib/mlstalk')
const githubstalk = require('./baseikal/lib/githubstalk')
const tiktok = require("./baseikal/lib/tiktok")
const facebook = require("./baseikal/lib/facebook")
const instagram = require("./baseikal/lib/instagram")
const twitter = require("./baseikal/lib/twitter")
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/c/ZenixDEV' // ubah aia
global.gr = 'https://chat.whatsapp.com/IYVeXjHTu8kDTiH5757uvd' // isi aja link gruplu tot jan hps
global.ig = '@zenixdcode' // ubah aja ig lu taruh
global.email = 'zenixalfriansyah@gmail.com' //serah
global.region = 'Indonesian' // serah aja
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ZenixXd!' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6285701863281'] // ubah aja pake nomor lu
global.creator = "6285701863281@s.whatsapp.net"
global.premium = ['6285701863281'] // ubah aja pake nomor lu
//==========================BY Alpinzx=======================//
global.keyopenai = `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`
//====================BY Alpinzx=============================//
global.ownername = 'ZenixXd!' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'Hashira - BUG' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'ZenixXd!' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.packname = 'ZenixXd!' // ubah aja
global.ownerr = ['ZenixXdス'] // ubaha aja
global.author = 'ZenixXd! X Hashira' //ubah aja
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
//Terserah Kalau Paham 
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})