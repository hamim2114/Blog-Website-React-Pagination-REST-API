import { useEffect, useState } from 'react'
import BlogList from '../../Components/BlogList/BlogList'
import Title from '../../Components/Title/Title'
import './HomePage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlog, fetchBlogBySearch } from '../../Redux/blogSlice'
import { useParams } from 'react-router-dom'

const HomePage = () => {
  const dispatch = useDispatch();
  const {blogs} = useSelector(state => state.blogs);
  const [searchKeyword, setSearchKeyword] = useState('')
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    dispatch(fetchBlog())  
  }, [])

  const handleSearchResult = (e) => {
    e.preventDefault();
    if(searchKeyword.length > 1){
      dispatch(fetchBlogBySearch(searchKeyword));
      setSearchKeyword('')
      setErrMsg('')
    } else {
      setErrMsg('Search field Empty')
    }
  }
  const handleSearchTerm = (e) => {
    if(e.target.value.replace(/[^\w\s]/gi,"").length !== 0){
      setSearchKeyword(e.target.value);
      setErrMsg('')
    } else {
      setErrMsg('Invalid Search')
    }
  }
  return (
    <div className = "main-holder bg-light-blue">
      <header className='header' style = {{
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${"banner_image.png"}) center/cover no-repeat`
      }}>
        <div className='container'>
          <div className='header-content text-center flex align-center justify-center flex-column text-white'>
            <h1 className='text-uppercase header-title ls-2'>a beatuiful blog with no images required</h1>
            <form className='flex align-center justify-center' onSubmit={(e) => handleSearchResult(e)}>
              <div className='header-input-group flex align-stretch'>
                  <input value={searchKeyword} type = "text" className='form-control fs-20' placeholder='Search here blog ...' onChange={(e) => handleSearchTerm(e)} />
                  <span className='form-text font-rubik fs-14 fw-4'>{errMsg}</span>
                  <button type = "submit" className='form-btn bg-purple flex align-center justify-center'>
                    <img src = "search_icon.png" alt = "" />
                  </button>
              </div>
            </form>
          </div>
        </div>
      </header>

      <section className='section py-7'>
        <div className='container'>
          <div className='section-content'>
            <Title title='Blogs' color={'#0D1741'} />
            {<BlogList blogs={blogs}/>}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage