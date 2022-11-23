import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Video = ({video, setSelectedVideo, selectedVideo}) =>{
  const moreButton = () => (
    <p>
    <button class='btn btn-info' onClick={() => setSelectedVideo(video)}>More Info</button>
    </p>
    )

  return(
    <Col className="d-flex mb-1" key={video.fields.videoid} href='localhost' target='al'>
      <Card className="bg-dark text-white flex-fill">
        <p className='text-center'>
        <a href={`https://www.youtube.com/watch?v=${video.fields.videoid}`}><b>{video.fields.title}</b></a>
        </p>
        <div>
          <div className='mx-auto' style={{width: 300 + 'px'}}>
            <iframe src={`https://www.youtube.com/embed/${video.fields.videoid}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <Row className='mx-0'>
          <Col>
            <p>ID: {video.fields.videoid}</p>
          </Col>
          <Col>
            <p>views: {video.views}</p>
          </Col>
          <p>Channel: {video.author}</p>
          </Row>
          {selectedVideo === null ?[<>
          <p>{video.fields.description.substring(0,200)}...</p>
          {moreButton()}
          </>]
          :[<>
            <p>{video.fields.tags}</p>
            <p>{video.fields.description}</p>
          </>]
          }
        </div>
      </Card>
    </Col> 
 )}
export default Video