// a changer !
const sujet = "Crypto"

const titre = "A Beginner's Guide to Trading on Binance"

const description = "Are you new to the world of cryptocurrency trading and looking for a reliable exchange? Binance is a popular choice among traders due to its wide range of options, user-friendly interface, and strong security measures. In this article, we'll provide a beginner's guide to getting started on Binance and provide some tips and strategies for successful trading."



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

const exchange_name = "Binance"
const exchange_link = "https://accounts.binance.com/en/register?ref=64172567"
const exchange_img = "https://images.unsplash.com/photo-1624438253998-7bb8eca8a3f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"

function Introduction(){
  return (
    <>
      <div className="mx-auto max-w-prose text-lg flex flex-col items-center">
        <UserHeader />
        
        <Sujet className={`text-${color}-500`}>{sujet}</Sujet>
        <Titre>{titre}</Titre>

        <Link target={"_blank"} href={exchange_link}>
          <img className='mt-5' alt="" src={exchange_img}/>
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


  <h2>Setting Up Your Account</h2>
<p>To start trading on Binance, the first step is to create an account. Visit the <a href={exchange_link}>Binance website</a> and click on the "Register" button. You'll be prompted to enter your email address and create a password. Make sure to choose a strong, unique password to protect your account. You'll also be asked to enter a verification code, which will be sent to your email address.</p>
<p>Once you've completed the registration process, you'll need to verify your identity. This is a standard process for most exchanges and is necessary to comply with anti-money laundering (AML) and know your customer (KYC) regulations. Binance requires you to provide a valid government-issued ID and proof of residence. You can do this by uploading scanned copies of your documents through the Binance website or mobile app.</p>
<h2>Depositing Funds</h2>
<p>Once your account is set up and verified, you'll need to deposit some funds in order to start trading. Binance offers a wide range of options for depositing funds, including <strong>cryptocurrencies</strong>, <strong>fiat currencies</strong>, and <strong>stablecoins</strong>. To deposit funds, click on the "Deposit" button in the "Funds" section of your account. You'll be able to choose from the available options and follow the prompts to complete the deposit.</p>
<p>It's important to note that Binance does not currently accept credit card deposits. If you want to deposit fiat currency, you'll need to use a bank transfer or a third-party payment provider such as PayPal or Skrill. Keep in mind that these options may take longer to process and may incur additional fees.</p>
<h2>Placing Your First Trade</h2>
<p>Once you have funds available in your Binance account, you're ready to start trading. To place your first trade, click on the "Exchange" button in the top menu and select the "Basic" or "Advanced" trading interface. You'll be able to choose from a wide range of trading pairs, including popular cryptocurrencies such as <strong>Bitcoin</strong>, <strong>Ethereum</strong>, and <strong>Litecoin</strong>. Select the pair you want to trade and enter the amount you want to buy or sell in the appropriate field.</p>
<p>It's important to carefully consider the price and quantity of your trade before placing an order. Binance offers several types of orders, including <strong>market orders</strong>, <strong>limit orders</strong>, and <strong>stop orders</strong>. Market orders are executed at the current market price, while limit orders allow you to specify the price at which you want to buy or sell. Stop orders, also known as stop-loss orders, allow you to set a trigger price at which your order will be executed. This can be useful for managing risk and protecting against price movements.</p>


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




