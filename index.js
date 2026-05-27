import { Bot, InlineKeyboard } from 'grammy'
import dotenv from 'dotenv'

dotenv.config()

const bot =
new Bot(process.env.BOT_TOKEN)

// PREFIX 😭🔥
const prefixes =
['.', '/', '!', '#', '?']

bot.on(
'message:text',

async (ctx) => {

const text =
ctx.message.text

// CEK PREFIX 😭🔥
const usedPrefix =
prefixes.find(
p => text.startsWith(p)
)

if(
!usedPrefix
) return

// ARGUMENT 😭🔥
const args =
text
.slice(
usedPrefix.length
)
.trim()
.split(/ +/)

const command =
args.shift()?.toLowerCase()

// START 😭🔥
if(
command === 'start'
) {

const keyboard =
new InlineKeyboard()
.text(
'Daftar Sekarang',
'register'
)

return ctx.reply(

`Hei. disini kamu bisa memainkan game seru,

daftar terlebih dahulu sebelum memainkannya!`,

{
reply_markup:
keyboard
}

)

}

}
)

// BUTTON REGISTER 😭🔥
bot.callbackQuery(
'register',

async (ctx) => {

await ctx.reply(

`daftar dulu dengan format dibawah!

nama_kamu

tanpa spasi ya`

)

}

)

bot.start()
