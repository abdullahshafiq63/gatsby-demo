import React from "react"
import { createGlobalStyle } from "styled-components"

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
  *, ::after, ::before {
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyledLayout />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
