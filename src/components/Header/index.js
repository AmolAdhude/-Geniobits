import './index.css'
import {MdOutlineCircleNotifications} from 'react-icons/md'
import {BiUserCircle} from 'react-icons/bi'
import Sidebar from '../Sidebar'

const Header = () => (
  <div className="top-container">
    <Sidebar />
    <nav className="nav-header">
      <h1 className="web-heading">
        My Apps> <span className="sub-text">Task</span>
      </h1>

      <div>
        <MdOutlineCircleNotifications className="icons" />
        <BiUserCircle className="icons" />
      </div>
    </nav>
  </div>
)

export default Header
