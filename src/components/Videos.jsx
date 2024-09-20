import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";


const Videos = ({videos,direction}) => {

  if(!videos?.length) return 'Loading...';
  
  let videoList;

  console.log(videos, videoList);

  if(videos.length === 1){
    videoList = videos[0];
  }else{
    videoList = videos;
  }

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videoList && videoList.map((item, idx) => (
        <Box key={idx}>
          {item && item.id && item.id.videoId && <VideoCard video={item} />}
          {item && item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
        ))}
    </Stack>
  )
}

export default Videos