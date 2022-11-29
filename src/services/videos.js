import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const getCRSF = async () => {
  const request = await axios.get('')
  console.log(request)
}

const loadPage = async (props) => 
{
  const d = props[0]+`--search_title=${(props[1] ? 'True' : 'False')}&search_description=${(props[2] ? 'True' : 'False')}--`
  const newObject = new FormData()
  newObject.append('search_text', d)
  newObject.append('search_title=', props[1] ? 'True' : 'False')
  newObject.append('search_description=', props[2] ? 'True' : 'False')
  newObject.append('react','on')
  const response = await axios.post('', newObject)
  return response.data
}
const getChannel = async (text) =>{
  const newObject = new FormData()
  newObject.append('search_text', text)
  newObject.append('search_title', 'on')
  newObject.append('react','on')
  const st = 'channel/'+text+'r45'
  const response = await axios.get(st)
  return response.data
}

export default { loadPage, getCRSF , getChannel}