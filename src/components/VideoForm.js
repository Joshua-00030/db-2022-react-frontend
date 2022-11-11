import Row from 'react-bootstrap/Row';
import Video from './Video'

const videoForm = ({videos, page}) => {
    var dvid = []
      for (var j = 0; j < 4; j++){
        dvid.push(
            <Row id={`video-row-${j}`}>
            {videos.slice(20 * page + 4 * (j - 1), 20 * page + 4 * j).map(video =>
            <Video key={video.videoid} video={video} />
            )}
            </Row>
        )
      }
    return dvid
  }

  export default videoForm