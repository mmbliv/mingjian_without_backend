// import React from "react"
// import Layout from "../component/Layout"
// import { graphql } from "gatsby"
// import { Research } from "../component/Research"

// const Researches = ({ data }) => {
//   const {
//     allStrapiResearchWorks: { nodes: researches },
//   } = data

//   return (
//     <Layout>
//       <Research researches={researches} />
//     </Layout>
//   )
// }
// export const query = graphql`
//   {
//     allStrapiResearchWorks(
//       filter: { show_it: { eq: true } }
//       sort: { fields: order, order: ASC }
//     ) {
//       nodes {
//         id
//         title
//         content
//         # img {
//         #   localFile {
//         #     childImageSharp {
//         #       gatsbyImageData
//         #     }
//         #   }
//         # }
//       }
//     }
//   }
// `
// export default Researches
