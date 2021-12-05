let handler = async m => m.reply(`
「 Donasi • Pulsa 」
• Telkomsel : 082324075079
• Gopay : 082324075079
• Dana : 082324075079
• Indosat : 085877043652

Transaksi Di atas , di atasnamakan Deris firmansyah
Note : Donasi seikhlas nya ya... kalo ga bisa ga usah ... 
Kalo ga bisa bantu follow ig aja @violettsss__
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282324075079
| > Saweria : https://saweria.co/Derispewwss
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
