import * as React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { useStaticQuery, graphql, Link } from 'gatsby'

import Section from '../components/section'

const PostLink = ({ post }: { post: any }) => (
  <div className="mt-4 font-serif text-xl">
    <Link to={post.frontmatter.slug} className="group">
      <span className="px-1 pt-1 mr-2 border-b-2 border-transparent group-hover:border-indigo-500 group-hover:bg-indigo-100">
        {post.frontmatter.title}
      </span>
      <span>|</span>
      <span className="ml-2 text-gray-500">{post.frontmatter.date}</span>
    </Link>
  </div>
)

const BlogPage: React.VFC = () => {
  const data: any = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMM. D, YYYY")
              slug
              title
            }
          }
        }
      }
    }
  `)

  let Posts = []
  if (data) {
    Posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  }

  return (
    <Layout>
      <Seo title="Home" />

      <Section>
        <div className="text-5xl font-semibold text-center md:text-left">
          Writing
        </div>
        <div className="mt-12">{Posts}</div>
      </Section>
    </Layout>
  )
}

export default BlogPage
