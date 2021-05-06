const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.login({ clientId : "839836024850874448" }).catch(console.error);

client.on('ready', () => {
console.log('It works..')
client.request('SET_ACTIVITY', {
pid: process.pid,
activity: {
    details: "MGMC",
    state: "MalluGamersMobileCommunity",
assets: {
         large_image: "shahad1111",
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