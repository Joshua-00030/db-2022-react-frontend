import Row from 'react-bootstrap/Row';
import Video from './Video'
import { useState } from 'react';

const VideoForm = ({videos, page}) => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  if(!selectedVideo){
    var dvid = []
    for (var j = 0; j < 4; j++){
      dvid.push(
            <Row className='mx-0' key={`video-row-${j}`}>
            {videos.slice(20 * page + 4 * j, 20 * page + 4 * (j+1)).map(video =>
            <Video key={video.fields.videoid} video={video} setSelectedVideo={setSelectedVideo}/>
            )}
            </Row>
        )
      }
      return dvid
    }
  
  }

  export default VideoForm