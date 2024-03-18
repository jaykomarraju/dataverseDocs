import React from 'react'
import styled from 'styled-components'

const MenuCont = styled.div`
    width:20vw;
    height:100vh;
    position:fixed;
    left:0;
    top:0;
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction: column;
    font-family: "Assistant", sans-serif;
font-optical-sizing: auto;
`


const SearchBar = styled.input`
    width:70%;
    // height:40px;
    border-radius:10px;
    padding:15px;
    font-size:16px;
    
`

const MenuItems = styled.ul`
    list-style:none;
    // margin:0;
    padding:0;
    width:80%;
`

const MenuItem = styled.li`
    padding:15px;
    font-size:18px;
    text-align:center;
    border-radius:10px;
    cursor:pointer;

    &:hover{
        background:#ededed;
    }
`

const DocsMenu = () => {
    return (
        <MenuCont>
            <SearchBar placeholder='Search' />
            <MenuItems>

                <MenuItem>User Guide</MenuItem>

                <MenuItem>Admin Guide</MenuItem>

                <MenuItem>API Guide</MenuItem>

                <MenuItem>Installation Guide</MenuItem>

                <MenuItem>Developer Guide</MenuItem>

                <MenuItem>Container Guide</MenuItem>

                <MenuItem>Style Guide</MenuItem>

            </MenuItems>
        </MenuCont>
    )
}

export default DocsMenu