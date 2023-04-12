import './Navbar.scss'
import { Link } from 'react-router-dom'
import { GiPapers } from 'react-icons/gi'
import { FaBars } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { sidebarOpen } from '../../Redux/sidebarSlice'

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className='navbar bg-purple flex align-center'>
        <div className='container w-100'>
            <div className='navbar-content flex align-center justify-between'>
                <div className = "brand-and-toggler">
                    <Link to = "/" className='navbar-brand text-white flex align-center fs-26'>
                        <span className='navbar-brand-icon'>
                            <GiPapers />
                        </span>
                        <span className='navbar-brand-txt font-rubik fw-5'>Blog.</span>
                    </Link>
                </div>
                <div className='navbar-row flex align-center'>
                    <ul className = "navbar-nav flex align-center font-rubik">
                        <li className='nav-item'>
                            <Link to = "/" className='nav-link text-white fw-4 fs-19'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = "/blog" className='nav-link text-white fw-4 fs-19'>Blog</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = "/about" className='nav-link text-white fw-4 fs-19'>About</Link>
                        </li>
                    </ul>
                    <div className='vertical-line'></div>

                    <div className='navbar-btns flex align-center'>
                        <button type = "button" className='navbar-search-btn'>
                            <img src = '/search_icon.png' alt = "" />
                        </button>
                        <button type = "button" className='sidebar-show-btn bg-white flex align-center justify-center' onClick={() => dispatch(sidebarOpen())}>
                            <FaBars size = {21} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar