import React from "react"
import styled from "styled-components"

import BannerImg from "../images/banner-1.png"

const StyledBanner = styled.section`
  display: flex;
  background: url(${props => props.imgUrl}) center center;
  height: 550px;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(42 108 244 / 79%);
    z-index: 1;
    left: 0;
    top: 0;
  }

  &:after {
    content: "";
    position: absolute;
    width: 110%;
    height: 150px;
    background-color: #fff;
    z-index: 1;
    left: -5%;
    bottom: -12%;
    border-top: 10px solid #b8cefb;
    transform: rotate(4deg);
  }
`

const StyledBannerDetail = styled.div`
  text-align: center;
`

const StyledParagraph = styled.p`
  color: #ffffff;
  font-size: 44px;
  margin: 0;
  position: relative;
  z-index: 1;
  font-weight: 700;
  position: relative;
  z-index: 2;
  @media (max-width: 360px) {
    font-size: 34px;
  }
`

const StyledHuman = styled.span`
  background-color: #21c904;
  padding: 0 1rem;
  margin-left: 4rem;
  line-height: 50px;
  display: inline-block;
  padding-top: 8px;
`

const Banner = () => (
  <StyledBanner imgUrl={BannerImg}>
    <StyledBannerDetail>
      <StyledParagraph>Driven by AI automation so</StyledParagraph>
      <StyledParagraph>
        you can be more <StyledHuman>human.</StyledHuman>
      </StyledParagraph>
    </StyledBannerDetail>
  </StyledBanner>
)

export default Banner
