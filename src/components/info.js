import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledInfo = styled.div`
  display: flex;
  background-color: ${props =>
    props.contentRight ? "rgb(240, 252, 238)" : "rgb(240, 245, 255)"};
  flex-direction: ${props => (props.contentRight ? "row" : "row-reverse")};
  margin: 3rem 0px;
`
const StyledImg = styled.div`
  width: 55%;
`
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  color: rgb(45, 45, 45);
  padding: 6rem;
`

const StyledHeading = styled.h3`
  font-weight: bold;
  font-size: 36px;
`

const StyledParagraph = styled.p`
  margin-top: 15px;
  font-size: 20px;
  line-height: 30px;
`

const Info = ({ title, content, image, contentRight }) => {
  return (
    <StyledInfo contentRight={contentRight}>
      <StyledImg>
        <Img fluid={image} />
      </StyledImg>
      <StyledContent>
        <StyledHeading>{title}</StyledHeading>
        <StyledParagraph>
          {content}
        </StyledParagraph>
      </StyledContent>
    </StyledInfo>
  )
}

export default Info
