import * as React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Section from '../components/section'
import Seo from '../components/seo'

const IndexPage: React.VFC = () => {
  return (
    <Layout>
      <Seo
        title="Home"
        description="Village Technologies"
        lang="us-en"
        meta="Village"
      />

      <Section>
        <div>
          We're building a full-stack framework for real-time collaboration.
          <br />
          Check back soon for details.
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
