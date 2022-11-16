import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Video = ({video, setSelectedVideo}) =>(
    <Col className="d-flex mb-1" key={video.fields.videoid} href='localhost' target='al'>
      <Card className="bg-dark text-white flex-fill">
        <p>
        <a href={`https://www.youtube.com/watch?v=${video.fields.videoid}`}><b>{video.fields.title}</b></a>
        </p>
        <div>
          <p>
            Channel: {video.author}
          </p>
          <p>views: {video.views}</p>
          <p>duration: {video.duration}</p>
          <p>desc</p>
          <p>
          <span className='bg-info' onClick={() => setSelectedVideo(video)} style={{cursor: 'pointer'}}>drefhui</span>
          </p>
          <p>Likes:12k</p>
          <p>10/24/2022</p>
        </div>
      </Card>
    </Col> 
 )
export default Video