import React from "react"
import Layout from "../component/Layout"
import { New } from "../component/New"
import { Code } from "../component/Code"
import { Aboutme } from "../component/Aboutme"
import { Research } from "../component/Research"
import { graphql } from "gatsby"
import PeopleCards from "../component/PeopleCards"
import SEO from "../component/SEO"
const Home = ({ data }) => {
  const {
    allStrapiCodes: { nodes: codes },
    allStrapiRes: { nodes: researches },
    allStrapiNews: { nodes: news },
    allStrapiGraduates: { nodes: people },
    allStrapiPi: { nodes: pi },
  } = data

  return (
    <Layout>
      <SEO />
      <div className="grid sm:grid-cols-3 gap-10 justify-center sm:mb-11 pb-14 px-8">
        <Aboutme />
        <New news={news} />
      </div>
      <PeopleCards people={pi} />
      <PeopleCards people={people} title="GRADUATE" />
      <Research researches={researches} showLink />
      <Code codes={codes} showLink />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiCodes(limit: 3, sort: { fields: id, order: DESC }) {
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
      }
    }
    allStrapiGraduates {
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
        img {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    allStrapiRes(limit: 4, sort: { fields: id, order: DESC }) {
      nodes {
        id
        title
        descrip
        img {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default Home
