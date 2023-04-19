import React from 'react'
import { SidebarContainer } from './styles.js'
import SidebarChoice from '../SidebarChoice/SidebarChoice.jsx'
import HomeIcon from '@material-ui/icons/Home';
const Sidebar = () => {
    return (
        <SidebarContainer>
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="Logo de Spotify" />
            <SidebarChoice title="Home" Icon={HomeIcon}/>
        </SidebarContainer>
    )
}

export default Sidebar