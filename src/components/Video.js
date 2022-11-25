import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Video = ({video, setSelectedVideo, selectedVideo, setChannel}) =>{
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
          {false ? 
          <div className='mx-auto' style={{width: 300 + 'px'}}>
            <iframe src={`https://www.youtube.com/embed/${video.pk}`} title="YouTube video player" frameborder="0" allow="encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> : <></>
          }
          <Row className='mx-0'>
          <Col>
            <p>ID: {video.pk}</p>
          </Col>
          <Col>
            <p>views: {video.fields.views < 1000 ? video.fields.views : 
            video.fields.views < 1000000 ? Math.trunc(video.fields.views / 1000) + 'K' :
            Math.trunc(video.fields.views / 1000000) + 'M'}</p>
          </Col>
          </Row>
          <Row className='mx-0'>
          <Col>
            <p onClick={() => setChannel(video.fields.channel)}>{video.fields.channel}</p>
          </Col>
          <Col>
            <p>{video.fields.published}</p>
          </Col>
          </Row>
          <Row className='mx-0'>

          {selectedVideo === null ?[<>
          <p>{video.fields.description.substring(0,200)}. . .</p>
          {moreButton()}
          </>]
          :[<>
            <p>{video.fields.category}</p>
            <p>{video.fields.description}</p>
          </>]
          }
          </Row>
        </div>
      </Card>
    </Col> 
 )}
export default Video