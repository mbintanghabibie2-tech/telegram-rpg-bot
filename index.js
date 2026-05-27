import { Bot }
from 'grammy'

import dotenv
from 'dotenv'
dotenv.config()

import {
startCommand
}
from './commands/start.js'

import {
registerCommand
}
from './commands/register.js'

import {
waitingRegister 
}
from './commands/register.js'

import {
createPlayer
}
from './commands/register.js'

import {
loading
}
from './systems/animation.js'

dotenv.config()

const bot =
new Bot(
process.env.BOT_TOKEN
)

const prefixes =
['.', '/', '!', '#', '?']

bot.on(
'message:text',

async (ctx) => {

const text =
ctx.message.text

const usedPrefix =
prefixes.find(
p =>
text.startsWith(p)
)

if(
!usedPrefix
) return

const args =
text
.slice(
usedPrefix.length
)
.trim()
.split(/ +/)

const command =
args.shift()
?.toLowerCase()

const userId =
ctx.from.id

// REGISTER NAME 😭🔥
if(
waitingRegister.has(
userId
)
) {

const nickname =
text.trim()

// ADA SPASI 😭🔥
if(
nickname.includes(' ')
) {

return ctx.reply(

'Nickname tidak boleh pakai spasi'

)

}

// KEPENDEKAN 😭🔥
if(
nickname.length < 3
) {

return ctx.reply(

'Nickname minimal 3 huruf'

)

}

waitingRegister.delete(
userId
)

// LOADING 😭🔥
await loading(ctx)

await createPlayer(
ctx,
nickname
)

return ctx.reply(

`berhasil daftar ✔️

👤 Nickname:
${nickname}

⭐ Level:
1

💰 Gold:
100

❤️ Nyawa:
100

🔮 Mana:
50`

)

}

// START 😭🔥
if(
command === 'start'
) {

return startCommand(
ctx
)

}

}
)

// BUTTON 😭🔥
bot.callbackQuery(
'register',

async (ctx) => {

return registerCommand(
ctx
)

}
)

bot.start()
