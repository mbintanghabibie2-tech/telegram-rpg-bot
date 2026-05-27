import { Bot } from 'grammy'

import dotenv from 'dotenv'
dotenv.config()

import {
startCommand
} from './commands/start.js'

import {
registerCommand,
waitingRegister,
createPlayer
} from './commands/register.js'

import {
loading
} from './systems/animation.js'

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

const userId =
ctx.from.id

// =====================
// REGISTER NAME 😭🔥
// =====================

if (
waitingRegister.has(userId)
) {

const nickname =
text.trim()

// jangan baca command
if (
nickname.startsWith('/') ||
nickname.startsWith('.') ||
nickname.startsWith('!') ||
nickname.startsWith('#') ||
nickname.startsWith('?')
) {
return
}

// ADA SPASI 😭🔥
if (
nickname.includes(' ')
) {

return ctx.reply(
'Nickname tidak boleh pakai spasi'
)

}

// KEPENDEKAN 😭🔥
if (
nickname.length < 3
) {

return ctx.reply(
'Nickname minimal 3 huruf'
)

}

// LOADING 😭🔥
await loading(ctx)

// BUAT PLAYER 😭🔥
await createPlayer(
ctx,
nickname
)

// HAPUS WAITING 😭🔥
waitingRegister.delete(
userId
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

// =====================
// PREFIX COMMAND 😭🔥
// =====================

const usedPrefix =
prefixes.find(
p =>
text.startsWith(p)
)

if (!usedPrefix) return

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

// START 😭🔥
if (
command === 'start'
) {

return startCommand(ctx)

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

console.log(
'BOT ONLINE 😭🔥'
)
