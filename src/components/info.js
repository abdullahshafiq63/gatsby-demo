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
  width: 60%;
`
const StyledContent = styled.div`
  width: 40%;
  color: rgb(45, 45, 45);
  padding: 5rem;
`

const StyledHeading = styled.h3`
  font-weight: bold;
  font-size: 1.8rem;
`

const StyledParagraph = styled.p`
  margin-top: 25px;
`

const Info = ({ title, content, image, contentRight }) => {
  return (
    <StyledInfo contentRight={contentRight}>
      <StyledImg>
        <Img fluid={image} />
      </StyledImg>
      <StyledContent>
        <StyledHeading>How we started {title}</StyledHeading>
        <StyledParagraph>
          We started Chattr™ to do our part in solving the Home Healthcare
          recruiting crisis. Sterile applications, inefficient processes and
          alack of transparency only compound the challenges of finding and
          hiring top quality candidates.
        </StyledParagraph>
      </StyledContent>
    </StyledInfo>
  )
}

export default Info
