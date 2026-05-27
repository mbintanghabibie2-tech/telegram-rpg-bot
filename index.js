import { Bot }
from 'grammy'

import dotenv
from 'dotenv'

import {
startCommand
}

from './commands/start.js'

import {
registerCommand
}

from './commands/register.js'

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
