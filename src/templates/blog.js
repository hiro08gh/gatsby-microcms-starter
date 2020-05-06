import React from "react"
import Highlight from "react-highlight"
import marked from "marked"
import Layout from "../components/layout"
import Author from "../components/author"

const Blog = ({ data: { microcmsBlog } }) => {
  return (
    <Layout>
      <div className="mt-6">
        <h1>{microcmsBlog.title}</h1>
        <Highlight innerHTML>{marked(`${microcmsBlog.body}`)}</Highlight>
        {microcmsBlog.author.name}
        {microcmsBlog.author.description}
        <img src={microcmsBlog.author.image.url} alt="ユーザーイメージ" />
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      createdAt
      title
      body
      author {
        name
        description
        image {
          url
        }
      }
    }
  }
`
