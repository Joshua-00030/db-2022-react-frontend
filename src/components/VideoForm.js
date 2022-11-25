import Row from 'react-bootstrap/Row';
import Video from './Video'
import { useState } from 'react';

const VideoForm = ({videos, page, setChannel}) => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  if(!selectedVideo){
    var dvid = []
    for (var j = 0; j < 4; j++){
      dvid.push(
            <Row className='mx-0' key={`video-row-${j}`}>
            {videos.slice(16 * page + 4 * j, 16 * page + 4 * (j+1)).map(video =>
            <Video key={video.fields.videoid} video={video} setSelectedVideo={setSelectedVideo} selectedVideo={selectedVideo} setChannel={setChannel}/>
            )}
            </Row>
        )
      }
      return dvid
    }
    else{
      return (
      <>
      <Video key={selectedVideo.fields.videoid} video={selectedVideo} setSelectedVideo={setSelectedVideo} setChannel={setChannel}/>
      <button class='btn btn-warning' onClick={() => setSelectedVideo(null)}>back</button>
      </>
      )
    }
  
  }

  export default VideoForm