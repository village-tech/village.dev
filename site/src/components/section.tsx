import * as React from 'react'

const Section: React.VFC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="w-full max-w-screen-lg px-12 pb-12 mx-auto mt-24 mb-24 antialiased bg-white">
      {children}
    </section>
  )
}

export default Section
