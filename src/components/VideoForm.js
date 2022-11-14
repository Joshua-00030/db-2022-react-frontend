import Row from 'react-bootstrap/Row';
import Video from './Video'

const videoForm = ({videos, page}) => {
    var dvid = []
      for (var j = 0; j < 4; j++){
        dvid.push(
            <Row key={`video-row-${j}`}>
            {videos.slice(20 * page + 4 * j, 20 * page + 4 * (j+1)).map(video =>
            <Video key={video.fields.videoid} video={video} />
            )}
            </Row>
        )
      }
    return dvid
  }

  export default videoForm