import { useState, useEffect } from 'react'
import SearchForm from './components/serchForm'
import Notification from './components/notification'
import VideoForm from './components/VideoForm'
import videoService from './services/videos'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Button from 'react-bootstrap/Button';


const App = () => {
  const [videos, setVideos] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [page, setPage] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const getData = async (event) => {
    event.preventDefault()
    if(searchText === ''){
      setErrorMessage('invalid search')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      return
    }
    setPage(0)
    setVideos(await videoService.loadPage(searchText))
  }


  const pageination = () => {
    var selectors = []
    if(page > 0){
      selectors.push(<Button onClick={() => setPage(page - 1)}>{page - 1}</Button>)
    }
    selectors.push(<Button disabled>{page}</Button>)
    if(videos.length > (page + 1) * 20){
      selectors.push(<Button onClick={() => setPage(page + 1)}>{page + 1}</Button>)
    }
    return selectors
  }

  return (
    <div>
      <h1>DataTube</h1>
      <div>
        {videos.length === 0 ? [<SearchForm searchText={searchText} setSearchText={setSearchText} getData={getData}></SearchForm>,
          <Notification message={errorMessage} />]: 
          [<SearchForm searchText={searchText} setSearchText={setSearchText} getData={getData}></SearchForm>,
          <Notification message={errorMessage} />,
          <VideoForm videos={videos} page={page}></VideoForm>,
          pageination()]
          }
      </div>
    </div>
  )
}

export default App
