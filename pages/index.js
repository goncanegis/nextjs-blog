import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Gonca!</p>
        <p>
          I'm a front-end developer with a love for React and Next.js. Find me
          on <a href="https://twitter.com/gncnegis">Twitter!</a>)
        </p>
      </section>
    </Layout>
  )
}
