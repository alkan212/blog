// a changer !
const sujet = "Crypto"
const titre = "The History and Development of dYdX"

const description = "dYdX is a decentralized finance (DeFi) platform and cryptocurrency exchange that has become one of the leading players in the DeFi space. In this article, we'll take a look at the history and development of dYdX, from its humble beginnings as a simple exchange to its current position as a leading DeFi platform."


import Image from 'next/image'
import Head from 'next/head'
import { Logo } from '@/images/logo.svg'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Blog } from '@/components/Blog'
import { Top } from '@/components/blog/Top'
import { TopTitre } from '@/components/blog/TopTitre'
import { List } from '@/components/blog/List'
import { Lien } from '@/components/blog/Lien'
import { VisitButton } from '@/components/button/VisitButton'

import { UserHeader } from '@/components/UserHeader'
import { ImagesGrid } from '@/components/blog/ImagesGrid'


import { IntroductionText } from '@/components/blog/IntroductionText'
import { Sujet } from '@/components/blog/Sujet'
import { Titre } from '@/components/blog/Titre'
import staticFile from "@/js/utils"
import Link from 'next/link'

const color = "indigo"

const exchange_name = "DyDx"
const exchange_link = "https://dydx.exchange/r/VOBDZHQM"
const exchange_img = "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"

function Introduction(){
  return (
    <>
      <div className="mx-auto max-w-prose text-lg flex flex-col items-center">
        <UserHeader />
        
        <Sujet className={`text-${color}-500`}>{sujet}</Sujet>
        <Titre>{titre}</Titre>

        <Link target={"_blank"} href={exchange_link}>
          <Image className='mt-5' alt="" width={2000} height={1000} src={exchange_img}/>
        </Link> 

        <VisitButton className={`bg-${color}-500 hover:bg-${color}-600`} href={exchange_link}>Visit {exchange_name}</VisitButton>
      
        <IntroductionText>{description}</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>

  <div className='mt-10'>

  <h2>The Early Days of dYdX</h2>

<p>dYdX was founded in 2017 by Antonio Juliano, a software engineer with a background in finance. The company was initially focused on building a simple, user-friendly cryptocurrency exchange that would make it easy for people to buy and sell digital assets. In its early days, dYdX was a small player in the crowded cryptocurrency exchange market, competing with larger, more established exchanges such as Coinbase and Binance.</p>

<h2>The Shift to DeFi</h2>

<p>In 2018, dYdX began to shift its focus from a traditional cryptocurrency exchange to a decentralized finance (DeFi) platform. DeFi is a movement that seeks to use blockchain technology and smart contracts to create financial services that are open, transparent, and accessible to anyone with an internet connection. dYdX saw an opportunity to use DeFi to revolutionize the way people access financial services and decided to pivot its business model accordingly.</p>

<h2>Growth and Expansion</h2>

<p>Since shifting its focus to DeFi, dYdX has experienced rapid growth and expansion. In 2020, the company launched a new version of its platform that included a number of new features and improvements, including margin trading, lending and borrowing, and a redesigned user interface. dYdX has also attracted significant investment from venture capital firms and other investors, including a $10 million investment from Andreessen Horowitz in 2019.</p>

<h2>The Future of dYdX</h2>

<p>Looking to the future, dYdX has ambitious plans for further expansion and growth. The company is actively working on new features and improvements for its platform, and is looking to expand into new markets and regions. With its focus on DeFi

    </p>

  </div>

    </>
  )
}

function Conclusion(){
  return (
    <>
    <VisitButton className={`bg-${color}-500 hover:bg-${color}-600`} href={exchange_link}>Visit {exchange_name}</VisitButton>
    </>
  )
}


function Content() {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8 ">


        {/* Introduction */}
        <Introduction />

        {/* contenu */}
        <div className="prose prose-lg prose-indigo mx-auto text-gray-500 ">


          <Contenu />


          <div className='mt-20'>
            <Conclusion />
          </div>
        
        </div>
      </div>
    </div>
  )
}




export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href={staticFile("favicon.ico")} type="image/x-icon" />
        <title>Weknow - {titre}</title>
        <meta httpEquiv='Content-Type' content="text/html; charset=utf-8" />
        <meta
          name="description"
          content={description}
        />
      </Head>
      <Header />
      <main>
        <Content />
        <Blog sujet={sujet} />
      </main>
      <Footer />
    </>
  )
}




