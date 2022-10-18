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

const Home = ({ data }) => {
  const {
    allStrapiCodes: { nodes: codes },
    allStrapiResearchWorks: { nodes: researches },
    allStrapiNews: { nodes: news },
    allStrapiGraduates: { nodes: graduates },
    allStrapiPi: { nodes: pi },
    allStrapiPositions: { nodes: positions },
  } = data

  return (
    <Layout>
      <Seo />
      <div className="grid sm:grid-cols-3 gap-10 justify-center sm:mb-11 pb-8 px-8">
        <Aboutme />
        <New news={news} />
      </div>
      <PeopleCards graduates={graduates} pi={pi} />
      <Research researches={researches} />
      {/* <Research researches={researches} showLink /> */}
      <Code codes={codes} />
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
    allStrapiNews(sort: { fields: id, order: DESC }) {
      nodes {
        content
        id
        title
        date(formatString: "MMMM Do, YYYY")
        # img {
        #   localFile {
        #     childImageSharp {
        #       gatsbyImageData
        #     }
        #   }
        # }
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
