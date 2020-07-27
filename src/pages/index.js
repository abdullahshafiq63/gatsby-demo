import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Banner from "../components/banner"
import Info from "../components/info"
import Values from "../components/values"

const StyledInfoContainer = styled.div`
  margin: 0 auto;
  max-width: 1470px;
  padding-left: 15px;
  padding-right: 15px;
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
        <Info
          contentRight
          image={data.first.childImageSharp.fluid}
          title={"How We Started"}
          content={
            "We started Chattr™ to do our part in solving the Home Healthcare recruiting crisis. Sterile applications, inefficient processes and a lack of transparency only compound the challenges of finding and hiring top quality candidates."
          }
        />
        <Info
          image={data.second.childImageSharp.fluid}
          title={"Empowering Humanity"}
          content={
            "We’re using AI automation to empower humanity throughout your recruiting process. This means replacing the mundane with what matters, converting mind-numbing applications to stimulating conversations and turning overwhelmed recruiters into highly efficient talent magnets."
          }
        />
        <Info
          contentRight
          image={data.third.childImageSharp.fluid}
          title={"Creating An Amazing Recruiting Experience"}
          content={
            "Our first-of-its-kind home healthcare recruiting platform combines intuitive artificial intelligence, delightful chatbots and a little bit of love to create an amazing experience for both your candidates and your hiring teams. An experience that differentiates your company, attracts higher quality candidates and leads to better hiring decisions."
          }
        />
      </StyledInfoContainer>
      <Values />
    </Layout>
  )
}

export default IndexPage
