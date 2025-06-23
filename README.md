# FireShipBot

FireShipBot is a Discord bot that automatically notifies a specified Discord channel whenever the [Fireship](https://www.youtube.com/@Fireship) YouTube channel uploads a new video. The bot checks for new videos at a regular interval and sends an @everyone notification with a link to the latest video.

## Features

- Polls the Fireship YouTube channel for new uploads.
- Sends a notification message to a designated Discord channel when a new video is detected.
- Includes a simple Express server for health checks or hosting on services like Heroku.

## How It Works

1. The bot uses the YouTube Data API v3 to fetch the latest video from the Fireship channel.
2. It checks every minute for new uploads.
3. If a new video is found (one that hasn't been posted before), it sends an `@everyone` message with a link to the video in a configured Discord channel.

## Setup

### Prerequisites

- Node.js (v18+ recommended)
- A Discord bot token ([Discord developer portal](https://discord.com/developers/applications))
- A YouTube Data API v3 key ([Google Cloud Console](https://console.cloud.google.com/))
- The Discord channel ID where notifications should be sent

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
DC_FIRESHIP_BOT_TOKEN=your_discord_bot_token
DC_CHANNEL_ID=your_discord_channel_id
YTV3API=your_youtube_data_api_key
PORT=3000 # Optional, defaults to 3000
```

### Installation

```bash
git clone https://github.com/aditya-wuw/FireShipBot.git
cd FireShipBot
npm install
```

### Running the Bot

```bash
node FireShipBot.js
or
npm run bot 
```

## File Structure

- `FireShipBot.js`: Main entry point for the Discord bot and Express server.
- `FireShipAPI.js`: Contains logic for fetching the latest video from the Fireship YouTube channel.

## Example

When a new Fireship video is uploaded, the bot posts a message like:

```
@everyone fireship uploaded a 🔥 new video : https://www.youtube.com/watch?v=XXXXXXXXXXX
```

## License

MIT

## Author

[@aditya-wuw](https://github.com/aditya-wuw)
