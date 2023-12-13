const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "51902679067"
global.ownername = "🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢"
global.ytname = "YT: SysSolutions Peru"
global.socialm = "GitHub: SysSolutions"
global.location = "Peru"

global.ownername = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢' //owner name
global.botname = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢' //name of the bot

//sticker details
global.stickername = '💙𓆩🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢ׁׅܻ𓆪_✰'
global.packname = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.author = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
//console view/theme
global.themeemoji = '🧩'
global.wm = "🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢"

//theme link
global.link = 'https://whatsapp.com/channel/0029VaEsxUbJP21BfklgZS3m'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
