import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const StyledValue = styled.div`
  width: 466.66px;
  position: relative;
  z-index: 1;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-right: 1px solid #d3d3d3;
  border-top: 1px solid #d3d3d3;

  h2 {
    font-size: 28px;
    color: #fff;
    margin: 0;
    padding-top: 1rem;
  }

  p {
    font-size: 20px;
    color: #fff;
    margin: 0;
    padding: 1rem 0;
  }

  &:nth-child(3n) {
    border-right: 0;
  }

  &:nth-child(-n + 3) {
    border-top: 0;
  }
`

const StyledImage = styled.div`
  width: 80px;
  display: inline-block;
`

const Value = () => {
  const data = useStaticQuery(graphql`
    query {
      value: file(relativePath: { eq: "value-img.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledValue>
      <StyledImage>
        <Img fluid={data.value.childImageSharp.fluid} />
      </StyledImage>
      <h2>Leadership</h2>
      <p>Do what you say, 100% of the time.</p>
    </StyledValue>
  )
}

export default Value
