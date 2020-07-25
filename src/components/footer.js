import React from "react"
import styled from "styled-components"

import fb from "../images/fb.svg"
import insta from "../images/insta.svg"
import linkdin from "../images/linkdin.svg"
import logo from "../images/footer-logo.png"

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;
  padding-top: 137px;
  margin-top: -145px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #454545;
  }

  &:after {
    content: "";
    position: absolute;
    width: 110%;
    height: 150px;
    background-color: #454545;
    z-index: 1;
    left: -5%;
    top: 70px;
    transform: rotate(-4deg);
  }
`

const StyledFooterWrapper = styled.div`
  position: relative;
  z-index: 55;
  margin: 0 auto;
  max-width: 1470px;
`

const StyledFooterTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem 0;
`

const StyledFooterNav = styled.div`
  padding-top: 1.5rem;

  li {
    display: inline-flex;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    padding: 2px 4px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }

  a:hover {
    color: #3e7dfe;
    -moz-transition: 0.2s linear;
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s linear;
  }
`

const StyledFooterAddress = styled.div`
  padding-top: 2rem;

  p {
    margin: 0;
    color: #fff;
    text-align: center;
  }
`

const StyledFooterSocial = styled.div`
  padding-top: 2rem;
  display: inline-flex;

  ul {
    display: inline-flex;
  }

  span {
    width: 35px;
    height: 35px;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
  }

  span:hover {
    background-color: rgba(255, 255, 255, 0.788);
    -moz-transition: 0.2s linear;
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s linear;
  }
`

const StyledMainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  p {
    color: #fff;
    margin: 0;
    font-size: 14px;
  }
`

const Footer = () => (
  <StyledFooter>
    <StyledFooterWrapper>
      <StyledFooterTop>
        <div class="footer-logo">
          <a href="#">
            <img width="120" src={logo} />
          </a>
        </div>
        <StyledFooterNav>
          <ul>
            <li>
              <a href="#">Pricing </a>
            </li>
            <li>
              <a href="#">Use </a>
            </li>
            <li>
              <a href="#">About </a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </StyledFooterNav>
        <StyledFooterAddress>
          <p>802 E. Whiting Street </p>
          <p>Tampa, FL 33602</p>
        </StyledFooterAddress>
        <StyledFooterSocial>
          <ul>
            <li>
              <a href="#">
                <span>
                  <img src={fb} />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img src={insta} />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img src={linkdin} />
                </span>
              </a>
            </li>
          </ul>
        </StyledFooterSocial>
      </StyledFooterTop>
      <StyledMainFooter>
        <p>Chattr™ 2018-2020. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </StyledMainFooter>
    </StyledFooterWrapper>
  </StyledFooter>
)

export default Footer
