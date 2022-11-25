import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Video from './Video'
import { useState } from 'react';

const Channel = ({channel}) => {
  if(channel.fields)
  return(
    <Row>  
      <Col><h2 className='text-center'>{channel.pk}</h2></Col>
    </Row>
  )
  return(
    <h2>{channel}</h2>
  )
  }

  export default Channel