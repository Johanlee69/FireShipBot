import { Client, GatewayIntentBits } from 'discord.js'
import'dotenv/config'
import { getlatestVideo } from './FireShipAPI.js';
const Discord_Token = process.env.DC_FIRESHIP_BOT_TOKEN;
const Channel_id = process.env.DC_CHANNEL_ID;

const bot = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
    ]
  });
  
  bot.once('ready',async ()=>{
      const channel = await bot.channels.fetch(Channel_id);
        const Update = async () =>{
            try {
                const video = await getlatestVideo();
                if(video != null){
                    await channel.send(` Wake up 🔥fireship :${video}`);
                }
            } catch (error) {
                console.log(error)
            }
        }
        Update();
        setInterval(Update,6*60*60*1000);
})

bot.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.channelId === Channel_id) {
        try {
            const video =await getlatestVideo();
            await message.reply(`Here is the latest video of FireShip : ${video}`);
        } catch (error) {
            console.error('Error replying to message:', error);
        }
    }
});

bot.login(Discord_Token);