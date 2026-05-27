import { InlineKeyboard }
from 'grammy'

export async function startCommand(
ctx
) {

const keyboard =
new InlineKeyboard()
.text(
'Daftar Sekarang',
'register'
)

await ctx.reply(

`Hei. disini kamu bisa memainkan game seru,

daftar terlebih dahulu sebelum memainkannya!`,

{
reply_markup:
keyboard
}

)

}
