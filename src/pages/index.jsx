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
        <title>Weknow - Just ask , We know</title>
        <meta
          name="description"
          content="Welcome to Weknow, the ultimate destination for all things crypto, trading, and Amazon products! Our blog is a one-stop shop for the latest news, trends, and analysis in these exciting fields. Whether you're a seasoned investor looking to stay up-to-date on the latest market movements, or a beginner just starting out in the world of crypto and trading, we've got you covered."
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
