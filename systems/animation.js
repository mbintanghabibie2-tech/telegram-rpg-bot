export async function loading(
ctx
) {

const msg =
await ctx.reply(

'░░░░░░░░░░ 0%'

)

const steps = [

'██░░░░░░░░ 20%',
'████░░░░░░ 40%',
'██████░░░░ 60%',
'████████░░ 80%',
'██████████ 100%'

]

for(
const step
of steps
) {

await new Promise(
r =>
setTimeout(r, 700)
)

await ctx.api.editMessageText(

ctx.chat.id,

msg.message_id,

step

)

}

}
