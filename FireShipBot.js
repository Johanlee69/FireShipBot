import { Client, GatewayIntentBits } from 'discord.js'
import'dotenv/config'
import express from 'express';
import { getlatestVideo } from './FireShipAPI.js';
const Discord_Token = process.env.DC_FIRESHIP_BOT_TOKEN;
const Channel_id = process.env.DC_CHANNEL_ID;
const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.send('server is running')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

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
                if(video !== null)
                {
                    await channel.send(`@everyone fireship uploaded a 🔥 new video : ${video}`)
                }
            } catch (error) {
                console.log(error)
            }
        }
        Update();
        setInterval(Update,1000*60);
})

bot.login(Discord_Token);