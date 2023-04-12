import './Pagination.scss'

const Pagination = ({noOfBlogs, paginateHandler}) => {
  let noOfPaginateItems = Math.ceil(noOfBlogs / 6)

  return (
    <div className="paginate-items flex align-center justify-center">
      {
        [...Array(noOfPaginateItems)].map((item, id) => (
          <button onClick={() => paginateHandler(id + 1)} key={id} className="paginate-item font-rubik bg-ex-blue flex align-center justify-center text-white">
            {id + 1}
          </button>
        ))
      }
    </div>
  )
}

export default Pagination