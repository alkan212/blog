import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { BlogList } from '@/components/BlogList'
import { UserHeader } from '@/components/UserHeader'
import data from "../blogList.js"



let eles = data;
let eles_key = Object.keys(eles);
let blogSujet = []

for (let i = 0; i < eles_key.length; i++) {
  const element = eles_key[i];
  let data = eles[element]

  if(element == "crypto"){
    blogSujet.push(<BlogList key={element} sujet={element} data={data} ne={true} />);
  }else{
    blogSujet.push(<BlogList key={element} sujet={element} data={data} />);
  }
  
}



export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main className='bg-gray-50'>

        {blogSujet}

      </main>
      <Footer />
    </>
  )
}
