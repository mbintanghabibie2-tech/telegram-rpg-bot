const waitingRegister =
new Set()

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

export {
waitingRegister
}
