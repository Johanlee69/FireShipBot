import axios from 'axios'
import 'dotenv/config'

let lastVid = null;
const APIkey = process.env.YTV3API
const EndPointURL = "https://www.googleapis.com/youtube/v3/";
const FireShip = "UCsBjURrPoezykLs9EqgamOA"; 

const fetchChannelUploadID = async () => {
    try {
        const response = await axios.get(EndPointURL+'channels', {
            params: {
                part: 'contentDetails',       
                id: FireShip,              
                maxResults: 10,        
                key: APIkey             
            }
        });
        return response.data.items[0].contentDetails.relatedPlaylists.uploads;
    } catch (error) {
        return error;
    } 
}

export const getlatestVideo = async () => {
    try {
        const playlistID = await fetchChannelUploadID();
        const res = await axios.get(EndPointURL+'playlistItems',{
            params : {
                part: 'snippet',       
                playlistId: playlistID,              
                maxResults: 1,        
                key: APIkey 
            }
        })
        const video = res.data.items[0].snippet;
        const videoId = video.resourceId.videoId;
        if(videoId === lastVid) return null;
        lastVid = videoId;
        const VideoURL = `https://www.youtube.com/watch?v=${videoId}`;  
        return VideoURL;       
    } catch (error) {
        console.log(error)
    }
};

