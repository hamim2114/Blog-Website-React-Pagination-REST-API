import './Comments.scss'

const Comments = ({comment, userAll}) => {
  const usersImg = userAll?.filter(users => users.id === comment?.user.id)
  // console.log(userImg,comment)
  // console.log(t[0])
  // console.log(usersImg)
  return (
    <div className='blog-comments-item grid align-center' key = {comment.id}>
            <div className='comment-img'>
              {usersImg?.map(i => <img key={i.id} src={i.image} />)}
                {/* <img src = {postUser?.image} alt = "" /> */}
            </div>
            <div className='comment-info'>
                <span className='comment-info-name fw-7 text-dark-blue fs-18'>{comment?.user?.username}</span>
                <p className='my-1 fs-15'>{comment?.body}</p>
            </div>
        </div>
  )
}

export default Comments