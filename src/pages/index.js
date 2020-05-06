import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { allMicrocmsBlog } }) => (
  <Layout>
    <SEO title="Home" />
    <div className="container mx-auto mt-6">
      <div className="flex">
        {allMicrocmsBlog.edges.map(({ node }) => (
          <React.Fragment key={node.id}>
            <Link to={`blog/${node.blogId}`}>
              <img src={node.image.url} alt="ブログイメージ" />
              {node.title}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsBlog(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          blogId
          createdAt
          title
          image {
            url
          }
        }
      }
    }
  }
`
