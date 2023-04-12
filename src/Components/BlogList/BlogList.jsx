import './BlogList.scss'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { STATUS } from '../../Utils/status';
import Loader from '../Loader/Loader';
import { MdAddReaction } from 'react-icons/md'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const BlogList = ({blogs}) => {
  const {blogStatus, blogSearchStatus} = useSelector(state => state.blogs);
  const blogLimit = 6
  const [paginate, setPaginate] = useState(1 * blogLimit);

  const paginateHandler = (value) => setPaginate(value * blogLimit);

  if(blogStatus === STATUS.LOADING || blogSearchStatus === STATUS.LOADING){
    return (
      <Loader/>
    )
  }

  return (
  <>
    <div className="blog-items grid my-6">
      {
        blogs.slice(paginate - 6, paginate).map((item) => (
          <div key={item.id} className="blog-item">
            <div className="blog-item-title fw-5 fs-18">{item.title}</div>
            <div className="blog-item-text">{(item.body).substring(0,100)} ...</div>
            <div className="blog-item-reaction flex align-center">
              <MdAddReaction/>
              <span className="reaction-value font-rubik fs-15 fw-5">{item.reactions}</span>
            </div>

            <div className="blog-item-tags">
              {
                item.tags.map((tag, id) => (
                  <span key={id} className="blog-item-tags-single fs-13 font-rubik text-uppercase">{tag}</span>
                  ))
                }
            </div>

            <div className="blog-item-btn">
              <Link className='read-more-btn' to={`blog/${item.id}`}>Read More</Link>
            </div>
          </div>
        ))
      }
    </div>
    <Pagination noOfBlogs={blogs.length} paginateHandler={paginateHandler} />
  </>
  )
}

export default BlogList