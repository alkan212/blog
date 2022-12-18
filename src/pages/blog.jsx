import Head from 'next/head'
import { Newsletter } from '@/components/Newsletter'
import { Logo } from '@/images/logo.svg'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Content } from '@/components/Content'
import { Blog } from '@/components/Blog'


export default function Home() {
  return (
    <>
      <Head>
        <title>Weknow - Top 10 Crypto to buy now</title>
        <favicon url={Logo} />
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Content />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
