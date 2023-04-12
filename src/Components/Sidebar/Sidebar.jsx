import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { GiPapers } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarClose } from '../../Redux/sidebarSlice'

const Sidebar = () => {
  const dispatch = useDispatch();
  const {isSidebarOpen} = useSelector(state => state.sidebar)

  return (
    <div className = {`sidebar ${isSidebarOpen ? 'sidebar-open' : ""}`}>
        <button type = "button" className='sidebar-close-btn' onClick={() => dispatch(sidebarClose())}>
            <FaTimes size = {24} className='text-white' />
        </button>
        <Link className='navbar-brand text-white flex align-center fs-26' to = "/">
            <span className='navbar-brand-icon'>
                <GiPapers />
            </span>
            <span className='navbar-brand-txt font-rubik fw-5'>Blog.</span>
        </Link>
        <ul className = "sidebar-nav font-rubik my-5">
            <li className='nav-item'>
                <Link to = "/" className='nav-link text-white fw-4 fs-18'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to = "/blog" className='nav-link text-white fw-4 fs-18'>Blog</Link>
            </li>
            <li className='nav-item'>
                <Link to = "/about" className='nav-link text-white fw-4 fs-18'>About</Link>
            </li>
        </ul>
        <div className='sidebar-blocks my-5'>
            <div className='sidebar-block'>
                <h3 className='font-rubik text-white'>Address</h3>
                <p className='text-white'>3538 Cambridge Place Laurel, MD 20707</p>
            </div>
            <div className='sidebar-block'>
                <h3 className='font-rubik text-white'>Phone</h3>
                <p className='text-white'>687-009-5768</p>
            </div>
            <div className='sidebar-block'>
                <h3 className='font-rubik text-white'>Email</h3>
                <p className='text-white'>blog@contact.com</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar