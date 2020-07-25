import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"

const GlobalStyledLayout = createGlobalStyle`
  body {
    font-family: 'Noto Sans', sans-serif;
    margin: 0;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  ul li {
    list-style: none;
  }
  img {
    max-width: 100%;
  }
  h3 {
    margin: 0;
  }
  p {
    margin-top: 10px;
    margin-bottom: 0;
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }
`

const StyledMain = styled.div`
  margin: 0 auto;
  max-width: 2000px;
`

const Layout = ({ children }) => {
  return (
    <StyledMain>
      <GlobalStyledLayout />
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledMain>
  )
}

export default Layout
