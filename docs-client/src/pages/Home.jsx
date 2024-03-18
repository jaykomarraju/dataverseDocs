import React from 'react'
import MainNav from '../components/MainNav'
import DocsMenu from '../components/DocsMenu'
import MainView from '../components/MainView'
import styled from 'styled-components'

const Fonte = styled.div`
font-family: "Assistant", sans-serif;
font-optical-sizing: auto;
`

const Home = () => {
  return (
    <Fonte>
        <MainNav />
        <DocsMenu />
        <MainView />
    </Fonte>
  )
}

export default Home