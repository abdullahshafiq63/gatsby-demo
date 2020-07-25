import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Banner from "../components/banner"
import Info from "../components/info"
import Values from "../components/values"

const StyledInfoContainer = styled.div`
  padding: 0px 7%;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      first: file(
        relativePath: { eq: "woman-assisting-patient-in-wheelchair.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      second: file(relativePath: { eq: "christin-hume.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      third: file(relativePath: { eq: "patrick-tomasso.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Banner />
      <StyledInfoContainer>
        <Info contentRight image={data.first.childImageSharp.fluid} />
        <Info image={data.second.childImageSharp.fluid} />
        <Info contentRight image={data.third.childImageSharp.fluid} />
      </StyledInfoContainer>
      <Values />
    </Layout>
  )
}

export default IndexPage
