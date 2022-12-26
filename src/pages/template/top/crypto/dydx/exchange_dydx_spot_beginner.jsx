// a changer !
const sujet = "Crypto"

const titre = "dydx: A Beginner's Guide to Trading on a Leading Crypto Exchange"

const description = "Are you new to the world of crypto trading and looking for a reputable exchange to get started on? Look no further than dydx. In this beginner's guide, we'll introduce you to the basics of trading on dydx, including how to create an account, place orders, and take advantage of its user-friendly interface. Let's get started!"



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
const exchange_img = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

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

  <h2>What is dydx?</h2>

<p>dydx is a decentralized finance (DeFi) platform and crypto exchange that allows users to trade various digital assets, including <strong>Bitcoin</strong>, <strong>Ethereum</strong>, and <strong>USDT</strong>, among others. It was founded in 2017 and has since become one of the leading DeFi platforms in the space.</p>

<h2>How to Create a dydx Account</h2>

<p>Creating a dydx account is simple and only takes a few minutes. First, visit the dydx website and click on the "Sign Up" button. You'll be prompted to enter your email address and create a password. Make sure to use a strong, unique password to ensure the security of your account.</p>

<p>After you've entered your email and password, click on the "Create Account" button. You'll then be asked to confirm your email address by clicking on a link sent to your email inbox. Once you've done this, your dydx account will be created and you can start trading on the platform.</p>

<h2>Placing Orders on dydx</h2>

<p>To place an order on dydx, first log in to your account and navigate to the "Exchange" page. From here, you can select the trading pair you'd like to trade, such as <strong>BTC/ETH</strong> (Bitcoin and Ethereum).</p>

<p>Next, select whether you'd like to place a "Buy" or "Sell" order. You can enter the amount of the asset you'd like to buy or sell, or you can specify the total cost or total receive amount in the other asset. For example, if you want to buy 1 BTC for 10 ETH, you can enter the amount of ETH you want to spend in the "Total Cost" field. Once you've entered your desired trade parameters, click on the "Place Order" button to submit your order.</p>

<h2>Other dydx Features for Beginners</h2>

<p>dydx also offers a number of features that can be helpful for beginners, including:</p>

<ul>
  <li>A user-friendly interface that makes it easy to navigate and place orders</li>
  <li>A wide range of trading options, including margin trading, which allows you to leverage your positions for potentially higher returns</li>
  <li>A helpful FAQ section and customer support team to assist with any questions or issues you may have</li>
</ul>

<h2>Conclusion</h2>

<p>dydx is a great option for beginners looking to start trading crypto. Its user-friendly interface, wide range of trading options, and helpful support make it an ideal choice for those new to the world of crypto trading.
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




