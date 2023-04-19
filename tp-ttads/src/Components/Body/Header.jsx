import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight } from './styles.js'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
const Header = () => {
    return (
    <HeaderContainer>
        <HeaderLeft>
            <SearchIcon/>
            <input type="text" placeholder='Search for artists, songs, or other' />
        </HeaderLeft>
        <HeaderRight>
            <Avatar/>
            <h4>Username</h4>
        </HeaderRight>
    </HeaderContainer>

    )
}

export default Header