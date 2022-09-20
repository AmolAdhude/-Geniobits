import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar'

// import icons from react icons

import {FaList, FaRegHeart} from 'react-icons/fa'
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from 'react-icons/fi'
import {RiPencilLine} from 'react-icons/ri'
import {BiCog} from 'react-icons/bi'

// import sidebar css from react-pro-sidebar module and our custom css

import 'react-pro-sidebar/dist/css/styles.css'
import './index.css'

const Sidebar = () => (
  <>
    <div id="header">
      <ProSidebar>
        <SidebarHeader>
          <div className="logotext">
            <img
              src="https://i.ibb.co/XbTw7d4/image.png"
              alt="logo"
              className="logo"
            />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FiHome />}>Home</MenuItem>
            <MenuItem icon={<FaList />}>Category</MenuItem>
            <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
            <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
            <MenuItem icon={<BiCog />}>Settings</MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  </>
)

export default Sidebar
