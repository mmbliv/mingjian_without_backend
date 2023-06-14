import React from "react"
import Layout from "../component/Layout"
import { New } from "../component/New"
import { Code } from "../component/Code"
import { Aboutme } from "../component/Aboutme"
import { Research } from "../component/Research"
import { graphql } from "gatsby"
import PeopleCards from "../component/PeopleCards"
import Seo from "../component/Seo"
import { Position } from "../component/Position"
import { convertHtmlToArray } from "../utils/convertHtmlToArray"

const Home = ({ data }) => {
  const {
    // allStrapiCodes: { nodes: codes },
    // allStrapiResearchWorks: { nodes: researches },
    // allMarkdownRemark: { nodes: news },
    // allStrapiGraduates: { nodes: graduates },
    // allStrapiPi: { nodes: pi },
    allStrapiPositions: { nodes: positions },
  } = data
  const researchData = data.researchData.nodes
  const newsData = data.newsData.nodes
  const codeData = data.codeData.nodes
  const newsArray = convertHtmlToArray(newsData[0].html)
  return (
    <Layout>
      <Seo />
      <div className="grid sm:grid-cols-3 gap-10 justify-center sm:mb-11 pb-8 px-8">
        <Aboutme />
        <New news={newsArray} />
      </div>
      <PeopleCards />
      <Research researches={researchData} />
      {/* <Research researches={researches} showLink /> */}
      <Code codes={codeData} />
      <Position positions={positions} />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiCodes(
      # limit: 3
      sort: { fields: order, order: ASC }
      filter: { show_it: { eq: true } }
    ) {
      nodes {
        content
        github
        document
        title
        id
      }
    }
    allStrapiPi {
      nodes {
        photo {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        name
        email
        description
        id
        title
        cv
      }
    }
    allStrapiGraduates(
      sort: { fields: order, order: ASC }
      filter: { show_it: { eq: true } }
    ) {
      nodes {
        description
        email
        name
        id
        title
        photo {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        website
      }
    }
    newsData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/news/.*/" } }
    ) {
      nodes {
        id
        html
      }
    }
    codeData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/code/.*/" } }
    ) {
      nodes {
        id
        frontmatter {
          title
          github
          document
          description
        }
      }
    }
    researchData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/research/.*/" } }
    ) {
      nodes {
        frontmatter {
          img
          title
        }
        html
        id
      }
    }
    allStrapiResearchWorks(
      limit: 4
      filter: { show_it: { eq: true } }
      sort: { fields: order, order: ASC }
    ) {
      nodes {
        id
        title
        content
        # img {
        #   localFile {
        #     childImageSharp {
        #       gatsbyImageData(height: 200)
        #     }
        #   }
        # }
      }
    }
    allStrapiPositions(filter: { show_it: { eq: true } }) {
      nodes {
        title
        content
        id
      }
    }
  }
`

export default Home
