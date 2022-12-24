// a changer !
const titreOnglet = "Weknow - Top 3 crypto trading plateform"
const description = " three cryptocurrency exchanges: Poloniex, BitForex, and Probit. Poloniex is a US-based exchange with advanced trading features and a strong reputation for security. BitForex is a digital asset trading platform with a user-friendly interface and fast transaction speeds. Probit is a global exchange with a focus on security and fast transaction speeds. These exchanges offer a range of trading pairs and other features, such as low fees and high liquidity."

const sujet = "Crypto"
const titre = "Top 3 crypto trading plateform"




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

const color = "text-indigo-600"


function Introduction(){
  return (
    <>
      <div className="mx-auto max-w-prose text-lg flex flex-col items-center">
        <UserHeader />
        
        <Sujet className={color}>{sujet}</Sujet>
        <Titre>{titre}</Titre>
      
        <IntroductionText>{description}</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>

  <div className='mt-10'>
    <h2 className='mb-4'>crypto.com</h2>
    <p className='mt-0'>Crypto.com is a popular cryptocurrency exchange that allows users to buy, sell, and store a wide range of digital assets. One of the key advantages of using Crypto.com is its low fees, which are among the lowest in the industry. Additionally, the exchange offers a wide range of trading options, including spot, margin, and futures trading, making it suitable for traders of all levels of experience. </p>
    <VisitButton href='https://crypto.com/exch/ayznp5auqj'>Visit crypto.com</VisitButton>
    <h2>openOcean</h2>
    <p>OpenOcean is a decentralized finance (DeFi) platform that allows users to access a wide range of financial products and services, such as lending, borrowing, and trading. The platform is built on top of the Ethereum blockchain, which ensures transparency and security of all transactions. One of the key advantages of using OpenOcean is its high liquidity, which allows users to quickly and easily access the products and services they need. </p>
    <VisitButton href='https://app.openocean.finance/referral/dAv03-RoDom3Uq44rrEZ5Z99mukStwbT4r1CPrOEyAeshx8t5CBdkYrp0-v7oMec'>Visit openOcean</VisitButton>
    <h2>ApolloX</h2>
    <p>ApolloX is a decentralized e-commerce platform that aims to disrupt the traditional e-commerce industry by eliminating intermediaries and allowing buyers and sellers to transact directly with each other. The platform is built on top of the Ethereum blockchain and utilizes smart contracts to ensure the security and transparency of all transactions. One of the key advantages of using ApolloX is its low fees, which are significantly lower than those of traditional e-commerce platforms. </p>
    <VisitButton href='https://www.apollox.finance/en/invite/ref/1000000320725'>Visit ApolloX</VisitButton>
  </div>

    </>
  )
}

function Conclusion(){
  return (
    <>



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
        <title>{titreOnglet}</title>
        <meta httpEquiv='Content-Type' content="text/html; charset=utf-8" />
        <meta
          name="description"
          content={description}
        />
      </Head>
      <Header />
      <main>
        <Content />
        <Blog />
      </main>
      <Footer />
    </>
  )
}




