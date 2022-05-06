import React from 'react'

import Layout from '../components/layout'
import Section from '../components/section'
import Seo from '../components/seo'
import 'katex/dist/katex.min.css'

import { graphql } from 'gatsby'

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

const Template: React.VFC<{
  data: {
    markdownRemark: {
      html: string
      frontmatter: { date: string; slug: string; title: string }
    }
  }
}> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  deckDeckGoHighlightElement()

  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <Section>
        <div className="blog-post-container">
          <div className="prose-lg markdown blog-post">
            <h1>{frontmatter.title}</h1>
            <h3 className="font-serif text-gray-500">{frontmatter.date}</h3>
            <div
              className="blog-post-content"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
