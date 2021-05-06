const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.login({ clientId : "799863650797879317" }).catch(console.error);

client.on('ready', () => {
console.log('It works..')
client.request('SET_ACTIVITY', {
pid: process.pid,
activity: {
    details: "MGMC|BETA-VERSION|MOBILE\PC|VOICE|ROLEPLAY",
    state: "Server Status Running",
assets: {
         large_image: "shahadq",
         large_text: "MGMC",
         small_image: "shahad",
         small_text: "MGMC",
},
buttons : [
    {
        label : "PLAY MGMCRP", url : "https://discord.gg/dmr8BKfF6V"
    },
    ]
    }
})
})
//Shahad uyir