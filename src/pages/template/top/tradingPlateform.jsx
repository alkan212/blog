// a changer !
const titreOnglet = "Weknow - Top 10 crypto trading plateform"
const description = "Present the top 10 cryptocurrency trading platforms, along with a brief overview of each platform and its key features"

const sujet = "Crypto"
const titre = "Top 10 crypto trading plateform"




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
      
        <IntroductionText>Present the top 10 cryptocurrency trading platforms, along with a brief overview of each platform and its key features.</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre><a target={"_blank"} rel="noreferrer" href="https://accounts.binance.com/en/register?ref=64172567" className='no-underline text-black font-bold'>1. Binance</a></TopTitre>

          <List>
            <li>Wide range of cryptocurrencies available for trading</li>
            <li>Low fees for trading and depositing funds</li>
            <li>Strong security measures, including two-factor authentication and cold storage of assets</li>
          </List>

          <div className='mt-6'>
            <VisitButton href='https://accounts.binance.com/en/register?ref=64172567'>Visit Binance Website</VisitButton>
          </div>
      </Top>

      <Top>
          <TopTitre><a target={"_blank"} rel="noreferrer" href="https://kraken.app.link/dMC7lC8qRvb" className='no-underline text-black font-bold'>2. Kraken</a></TopTitre>

          <List>
            <li>Support for a wide range of cryptocurrencies and fiat currencies</li>
            <li>Competitive trading fees</li>
            <li>Strong security measures, including encrypted data storage and two-factor authentication</li>
          </List>

          <div className='mt-6'>
            <VisitButton href='https://kraken.app.link/dMC7lC8qRvb'>Visit Kraken Website</VisitButton>
          </div>
      </Top>

      <Top>
          <TopTitre><a target={"_blank"} rel="noreferrer" href="https://www.bitfinex.com/sign-up?refcode=biqYxPgaN" className='no-underline text-black font-bold'>3. Bitfinex</a></TopTitre>

          <List>
            <li>Wide range of cryptocurrency trading pairs available</li>
            <li>Advanced trading features, such as margin trading and margin funding</li>
            <li>Strong security measures, including the use of cold storage and two-factor authentication</li>
          </List>

          <div className='mt-6'>
            <VisitButton href='https://www.bitfinex.com/sign-up?refcode=biqYxPgaN'>Visit Bitfinex Website</VisitButton>
          </div>
      </Top>

      <Top>
          <TopTitre><a target={"_blank"} rel="noreferrer" href="https://gemini.com/share/a688e9pfd" className='no-underline text-black font-bold'>4. Gemini</a></TopTitre>

          <List>
            <li>Regulated by financial authorities in the US, providing added security and trust</li>
            <li>User-friendly platform with a focus on ease of use</li>
            <li>Strong security measures, including offline storage of assets and two-factor authentication</li>
          </List>

          <div className='mt-6'>
            <VisitButton href='https://gemini.com/share/a688e9pfd'>Visit Gemini Website</VisitButton>
          </div>
      </Top>

      <Top>
          <TopTitre><a target={"_blank"} rel="noreferrer" href="https://www.huobi.com/en-us/v/register/double-invite/?inviter_id=11345710&invite_code=kbvw6223" className='no-underline text-black font-bold'>5. Huobi</a></TopTitre>

          <List>
            <li>Wide range of cryptocurrencies available for trading</li>
            <li>Low fees for trading and depositing funds</li>
            <li>Strong security measures, including two-factor authentication and cold storage of assets</li>
          </List>

          <div className='mt-6'>
            <VisitButton href='https://www.huobi.com/en-us/v/register/double-invite/?inviter_id=11345710&invite_code=kbvw6223'>Visit Huobi Website</VisitButton>
          </div>
      </Top>

      <Top>
          <TopTitre><a target={"_blank"} rel="noreferrer" href="https://www.okx.com/fr/account/login" className='no-underline text-black font-bold'>6. OKEx</a></TopTitre>

          <List>
            <li>Wide range of cryptocurrencies available for trading</li>
            <li>Competitive trading fees</li>
            <li>Advanced trading features, such as margin trading and futures trading</li>
          </List>

          <div className='mt-6'>
            <VisitButton href='https://www.okx.com/fr/account/login'>Visit OKEx Website</VisitButton>
          </div>
      </Top>

      <Top>
          <TopTitre><a target={"_blank"} rel="noreferrer" href="https://etoro.tw/3jnsGFL" className='no-underline text-black font-bold'>7. eToro</a></TopTitre>

          <List>
            <li>Social trading features allow users to copy the trades of successful traders</li>
            <li>Wide range of assets available for trading, including stocks, commodities, and cryptocurrencies</li>
            <li>User-friendly platform with a focus on ease of use</li>
          </List>

          <div className='mt-6'>
            <VisitButton href='https://etoro.tw/3jnsGFL'>Visit eToro Website</VisitButton>
          </div>
      </Top>

      <Top>
          <TopTitre><a target={"_blank"} rel="noreferrer" href="https://www.bitfinex.com/sign-up?refcode=biqYxPgaN" className='no-underline text-black font-bold'>8. Bittrex</a></TopTitre>

          <List>
            <li>Wide range of cryptocurrencies available for trading</li>
            <li>Strong security measures, including two-factor authentication and cold storage of assets</li>
            <li>Advanced trading features, such as margin trading and OTC trading</li>
          </List>

          <div className='mt-6'>
            <VisitButton href='https://www.bitfinex.com/sign-up?refcode=biqYxPgaN'>Visit Bittrex Website</VisitButton>
          </div>
      </Top>

      <Top>
          <TopTitre><a target={"_blank"} rel="noreferrer" href="https://www.coinbase.com/" className='no-underline text-black font-bold'>9. Coinbase</a></TopTitre>

          <List>
            <li>Coinbase is one of the most well-known and widely-used cryptocurrency exchanges, with a strong reputation in the industry</li>
            <li>Coinbase has a user-friendly interface and is designed to be easy to use, making it a good choice for beginners</li>
            <li>Coinbase has strong security measures in place to protect your funds and personal information</li>
          </List>

          <div className='mt-6'>
            <VisitButton href='https://www.coinbase.com/'>Visit Coinbase Website</VisitButton>
          </div>
      </Top>

      <Top>
          <TopTitre><a target={"_blank"} rel="noreferrer" href="https://bitflyer.com/invitation?id=uredmia2&lang=en-GB" className='no-underline text-black font-bold'>10. bitFlyer</a></TopTitre>

          <List>
            <li>bitFlyer is a well-known and respected cryptocurrency exchange that has been in operation since 2014.</li>
            <li>bitFlyer has strong security measures in place to protect your funds and personal information, including two-factor authentication and offline storage of assets</li>
            <li>Wide range of cryptocurrencies available for trading: bitFlyer supports trading of a wide range of cryptocurrencies</li>
          </List>

          <div className='mt-6'>
            <VisitButton href='https://bitflyer.com/invitation?id=uredmia2&lang=en-GB'>Visit bitFlyer Website</VisitButton>
          </div>
      </Top>
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




