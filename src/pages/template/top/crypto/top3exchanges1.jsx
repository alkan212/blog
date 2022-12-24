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


<Top>
  <TopTitre><a href='https://www.coinex.com/register?refer_code=ghtya' target={"_blank"} rel="noreferrer" className='no-underline text-black font-bold'>1. Coinex</a></TopTitre>
  <p>Coinex is a global digital asset trading platform that provides safe, stable, and convenient trading services for global users. It is committed to building a comprehensive digital asset trading platform that serves global users.</p>
  <List>
    <li>Provides a wide range of digital asset trading services</li>
    <li>Offers a user-friendly interface for easy navigation</li>
  </List>
  <VisitButton href='https://www.coinex.com/register?refer_code=ghtya'>Visit Coinex Website</VisitButton>
</Top>
<Top>
  <TopTitre><a href='https://app.openocean.finance/referral/dAv03-RoDom3Uq44rrEZ5Z99mukStwbT4r1CPrOEyAeshx8t5CBdkYrp0-v7oMec' target={"_blank"} rel="noreferrer" className='no-underline text-black font-bold'>2. OpenOcean</a></TopTitre>
  <p>OpenOcean is a decentralized exchange platform that allows users to trade and exchange digital assets securely and transparently. It offers a user-friendly interface and a wide range of trading options.</p>
  <List>
    <li>Decentralized exchange platform for increased security</li>
    <li>Offers a wide range of trading options</li>
  </List>
  <VisitButton href='https://app.openocean.finance/referral/dAv03-RoDom3Uq44rrEZ5Z99mukStwbT4r1CPrOEyAeshx8t5CBdkYrp0-v7oMec'>Visit OpenOcean Website</VisitButton>
</Top>
<Top>
  <TopTitre><a href='https://bittrex.com/Account/Register?referralCode=FTC-4S5-XC3' target={"_blank"} rel="noreferrer" className='no-underline text-black font-bold'>3. Bittrex</a></TopTitre>
  <p>Bittrex is a secure, reliable, and advanced digital asset trading platform that offers a wide range of trading options for both individual and institutional investors. It is known for its advanced security measures and fast trade execution.</p>
  <List>
    <li>Advanced security measures for increased security</li>
    <li>Fast trade execution for efficient trading</li>
  </List>
  <VisitButton href='https://bittrex.com/Account/Register?referralCode=FTC-4S5-XC3'>Visit Bittrex Website</VisitButton>
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




