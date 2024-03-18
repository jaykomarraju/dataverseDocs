import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
    height: 80px;
    width:100vw;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-family: "Assistant", sans-serif;
font-optical-sizing: auto;
`

const Logo = styled.div`display:flex;`

const LogoImg = styled.img`width:150px;margin-left:20px;margin-top:5px;`

const LogoText = styled.h1`font-size:18px;`

const MenuItems = styled.ul`
    list-style:none;
    display:flex;
    margin-right:20px;
`

const MenuItem = styled.li`
    padding:10px;
    font-size:18px;
    cursor:pointer;
`


const MainNav = () => {
    return (
        <NavCont>
            <Logo>
                <LogoImg src="https://dataverse.org/files/dataverseorg/files/dataverse_r_project.png" />
            </Logo>

            <MenuItems>
                <MenuItem>About</MenuItem>
                <MenuItem>Community</MenuItem>
                <MenuItem>Best Practices</MenuItem>
                <MenuItem>Software</MenuItem>
                <MenuItem>Contact</MenuItem>
            </MenuItems>
        </NavCont>
    )
}

export default MainNav