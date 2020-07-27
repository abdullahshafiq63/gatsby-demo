import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const StyledHeader = styled.header`
  @media (max-width: 991px) {
    display: none;
  }
`

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 1470px;
  padding-left: 15px;
  padding-right: 15px;
`

const StyledLogo = styled(Img)`
  width: 120px;
`

const StyledNav = styled.div`
  min-height: 100px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLi = styled.li`
  display: inline-flex;
`

const StyledAnchor = styled.a`
  color: #2d2d2d;
  text-decoration: none;
  margin: 0 10px;
  padding: 2px 4px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #3e7dfe;
    -moz-transition: 0.2s linear;
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s linear;
  }
`

const StyledLoginButton = styled(StyledAnchor)`
  border: 2px solid #2d2d2d;
  min-width: 100px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    border: 2px solid #3e7dfe;
    background-color: #3e7dfe;
    color: #fff;
    -moz-transition: 0.2s linear;
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s linear;
  }
`
const StyledRequestButton = styled(StyledAnchor)`
  border: 2px solid #3e7dfe;
  min-width: 180px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: #3e7dfe;
  color: #fff;

  &:hover {
    border: 2px solid #2d2d2d;
    color: #2d2d2d;
    background-color: #fff;
    -moz-transition: 0.2s linear;
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s linear;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledNav>
          <StyledLogo fluid={data.logo.childImageSharp.fluid} />
          <ul>
            <StyledLi>
              <StyledAnchor> Pricing</StyledAnchor>
            </StyledLi>
            <StyledLi>
              <StyledAnchor> Use</StyledAnchor>
            </StyledLi>
            <StyledLi>
              <StyledAnchor> About</StyledAnchor>
            </StyledLi>
            <StyledLi>
              <StyledAnchor> Blog</StyledAnchor>
            </StyledLi>
            <StyledLi>
              <StyledAnchor> About</StyledAnchor>
            </StyledLi>
            <StyledLi>
              <StyledLoginButton> Log in </StyledLoginButton>
            </StyledLi>
            <StyledLi>
              <StyledRequestButton> REQUEST A DEMO</StyledRequestButton>
            </StyledLi>
          </ul>
        </StyledNav>
      </StyledWrapper>
    </StyledHeader>
  )
}

export default Header
