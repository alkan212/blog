// a changer !
const sujet = "Crypto"

const titre = "DyDx and Decentralized Exchanges: A Comprehensive Guide"
const description = "DyDx is a decentralized exchange (DEX) that allows users to trade various crypto assets directly from their wallets. In this guide, we'll explore the concept of decentralized exchanges and how they differ from centralized exchanges, as well as the benefits and drawbacks of using a DEX like DyDx."


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
const exchange_img = "https://images.unsplash.com/photo-1656523864170-d4a1b4a263b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"

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

    <p><strong>What is a Decentralized Exchange (DEX)?</strong></p>
    <p>A decentralized exchange (DEX) is a type of cryptocurrency exchange that operates without a central authority. This means that users retain full control over their funds at all times and do not need to trust a third party with their assets. Instead, trades are facilitated using smart contracts on a blockchain network, such as the Ethereum network. DEXs offer a number of benefits over centralized exchanges, including increased security and greater control for users.</p>
    <p><strong>Centralized vs Decentralized Exchanges</strong></p>
    <p>Centralized exchanges are traditional cryptocurrency exchanges that operate through a central authority. This means that users must deposit their funds onto the exchange in order to trade. Centralized exchanges have the advantage of offering a wide range of features and often have higher liquidity than DEXs. However, they also come with additional risks, as users must trust the exchange to secure their funds and facilitate trades accurately. In contrast, DEXs offer greater security and control for users, but may have lower liquidity and a more limited range of features.</p>
    <p><strong>Benefits of Using a DEX</strong></p>
    <p>Some of the benefits of using a DEX like DyDx include:</p>
    <ul>
      <li>Security: Because users retain control over their funds at all times, DEXs offer a higher level of security compared to centralized exchanges. There is no central point of failure that hackers can target, and users are less vulnerable to scams and other security threats.</li>
      <li>Control: With a DEX, users have full control over their assets and do not need to trust a third party with their funds. This gives users greater control over their trades and reduces the risk of errors or malfeasance on the part of the exchange.</li>
      <li>Privacy: DEXs often offer greater privacy for users, as they do not require users to provide personal information in order to trade. This can be appealing for users who value their privacy or are concerned about potential regulations or restrictions on crypto trading.</li>
    </ul>
    <p><strong>Drawbacks of Using a DEX</strong></p>
    <p>While DEXs offer a number of benefits, they also come with some drawbacks to consider:</p>
    <ul>
      <li>Lower liquidity: DEXs may have lower liquidity compared to centralized exchanges, which can make it more difficult to execute trades or achieve the best prices. This is especially true for smaller or less popular assets.</li>
      <li>Limited features: DEXs may have a more limited range of features compared to centralized exchanges, such as margin trading or advanced charting tools. This can be a drawback for traders who require these features for their trading strategies.</li>
    </ul>

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




