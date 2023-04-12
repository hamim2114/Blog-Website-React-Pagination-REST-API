import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {  fetchBlogSingle, fetchComment, fetchUserSingle } from '../../Redux/blogSlice';
import Title from '../../Components/Title/Title';
import SingleBlog from '../../Components/SingleBlog/SingleBlog';
import { STATUS } from '../../Utils/status';
import Loader from '../../Components/Loader/Loader';

const SingleBlogPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {blogSingle,blogSingleStatus} = useSelector(state => state.blogs);
  
  useEffect(() => {
    dispatch(fetchBlogSingle(id))
  },[id])
  useEffect(() => {
    
    dispatch(fetchComment(id))
  },[id]);

  if(blogSingleStatus === STATUS.LOADING){
    return (
      <Loader/>
    )
  }

  return (
    <div className = "main-holder bg-light-blue">
      <header className='header' style = {{
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url("/banner_image.png") center/cover no-repeat`
      }}>
        <div className='container'>
          <div className='header-content text-center flex align-center justify-center flex-column text-white'>
            <Title title = "Blog Details" color = {`#fff`} />
          </div>
        </div>
      </header>
      <section className='section py-7'>
        <div className='container'>
          <div style={{padding: '40px'}} className='section-content bg-white'>
            <SingleBlog />     
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleBlogPage