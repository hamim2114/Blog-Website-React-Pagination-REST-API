import { useEffect } from 'react'
import './SingleBlog.scss'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineAddReaction } from 'react-icons/md'

import { Link } from 'react-router-dom'
import { fetchBlog } from '../../Redux/blogSlice'
import BlogOutlet from '../BlogOutlet/BlogOutlet'

const SingleBlog = () => {
  const {blogs} = useSelector(state => state.blogs)
  const tempBlog = [...blogs].sort(() => Math.random() - 0.5);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBlog())  
  }, [])
  return (
    <div className='blog-single grid'>
        <div className='blog-single-l'>
          <BlogOutlet/>
        </div>

        <div className='blog-single-r'>
          <div className='recent-blogs'>
            <h2 className='font-rubik my-3 fw-6'>Recent News</h2>
            <div className='recent-blogs-list grid'>
              {
                tempBlog.slice(0, 5).map(blog => {
                  return (
                    <div className='recent-blogs-item' key = {blog.id}>
                      <Link to = {`/blog/${blog.id}`}>
                        <h3>{blog?.title}</h3>
                      </Link>
                      <div className='flex align-center'>
                        <MdOutlineAddReaction /> &nbsp; 
                        <span>{blog?.reactions}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default SingleBlog