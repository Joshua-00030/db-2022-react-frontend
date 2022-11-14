  import  Button from 'react-bootstrap/Button';

  const Pagination = ({page, setPage, videos}) => {
    var selectors = []
    if(page > 0){
      selectors.push(<Button onClick={() => setPage(page - 1)} key='page-back'>{page - 1}</Button>)
    }
    selectors.push(<Button disabled key='page-curr'>{page}</Button>)
    if(videos.length > (page + 1) * 16){
      selectors.push(<Button onClick={() => setPage(page + 1)} key='page-forward'>{page + 1}</Button>)
    }
    return selectors
  }

  export default Pagination