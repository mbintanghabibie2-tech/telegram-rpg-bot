import supabase
from '../database/supabase.js'

const waitingRegister =
new Set()

// BUTTON REGISTER 😭🔥
export async function registerCommand(
ctx
) {

const userId =
ctx.from.id

waitingRegister.add(
userId
)

await ctx.reply(

`daftar dulu dengan format dibawah!

nama_kamu

tanpa spasi`

)

}

// BUAT PLAYER 😭🔥
export async function createPlayer(

ctx,
nickname

) {

const userId =
ctx.from.id

const username =
ctx.from.username
? `@${ctx.from.username}`
: '@ belum pasang username'

// CEK SUDAH DAFTAR 😭🔥
const {
data:
existing
}
=
await supabase

.from('players')

.select('*')

.eq(
'telegram_id',
userId
)

.single()

if(
existing
) {

return ctx.reply(

'kamu sudah terdaftar'

)

}

// CEK NICKNAME 😭🔥
const {
data:
sameName
}
=
await supabase

.from('players')

.select('*')

.eq(
'nickname',
nickname
)

.single()

if(
sameName
) {

return ctx.reply(

'nickname sudah dipakai'

)

}

// INSERT PLAYER 😭🔥
await supabase

.from('players')

.insert({

telegram_id:
userId,

nickname,

username

})

// HAPUS DARI WAITING 😭🔥
waitingRegister.delete(
userId
)

}

export {
waitingRegister
}
