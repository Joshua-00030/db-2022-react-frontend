import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Video = ({video, setSelectedVideo, solo=false}) =>(
    <Col className="d-flex mb-1" key={video.fields.videoid} href='localhost' target='al'>
      <Card className="bg-dark text-white flex-fill">
        <p className='text-center'>
        <a href={`https://www.youtube.com/watch?v=${video.fields.videoid}`}><b>{video.fields.title}</b></a>
        </p>
        <div>
          <div className='mx-auto' style={{width: 300 + 'px'}}>
            <iframe src={`https://www.youtube.com/embed/${video.fields.videoid}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className='w-100'>
          <div className='w-50 float-start'>
            <p>ID: {video.duration}</p>
          </div>
          <div className='w-50 float-start'>
            <p>views: {video.views}</p>
          </div>
          <p>Channel: {video.author}</p>
          </div>
          <p>{video.fields.description.substring(0,200)}...</p>
          <p>
          <button class='btn btn-info' onClick={() => setSelectedVideo(video)}>More Info</button>
          </p>
        </div>
      </Card>
    </Col> 
 )
export default Video