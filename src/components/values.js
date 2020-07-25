import React from "react"
import styled from "styled-components"

import Value from "./value"
import ValuesImg from "../images/values.png"

const StyledValues = styled.section``

const StyledHeading = styled.h1`
  color: #2d2d2d;
  font-weight: 700;
  text-align: center;
  padding: 2.5rem 0;
  margin: 0;
  font-size: 42px;

  span {
    background-color: #2f6ff2;
    padding: 0 1rem;
    color: #fff;
  }
`

const StyledValuesBanner = styled.div`
  background: url(${props => props.imgUrl}) center center;
  min-height: 700px;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  padding: 200px 0;

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
    height: 137px;
    background-color: #fff;
    z-index: 1;
    left: -5%;
    top: -6%;
    border-bottom: 10px solid #b8cefb;
    transform: rotate(4deg);
  }

  h1 {
    color: #fff;
    margin: 0;
    padding: 3.5rem 0 2.5rem 0;
    text-align: center;
    position: relative;
    z-index: 1;
    font-size: 42px;
  }
`

const StyledValuesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledValuesWrapper = styled.div`
  margin: 0 auto;
  max-width: 1470px;
  padding-left: 15px;
  padding-rigth: 15px;
`

const Values = () => (
  <StyledValues>
    <StyledHeading>
      Let’s hire more <span>humanly</span> together.
    </StyledHeading>
    <StyledValuesBanner imgUrl={ValuesImg}>
      <StyledValuesWrapper>
        <h1>Our Values</h1>
        <StyledValuesContainer>
          <Value />
          <Value />
          <Value />
          <Value />
          <Value />
          <Value />
        </StyledValuesContainer>
      </StyledValuesWrapper>
    </StyledValuesBanner>
  </StyledValues>
)

export default Values
