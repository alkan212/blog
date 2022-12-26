// a changer !
const titreOnglet = "The Benefits of Using Kraken for Your Cryptocurrency Trades"
const description = "Kraken is a popular cryptocurrency exchange that offers a range of features and benefits to traders. If you're considering using Kraken for your trading needs, here are a few reasons why it might be a good choice"

const sujet = "crypto"
const titre = "The Benefits of Using Kraken for Your Cryptocurrency Trades"



import { Img } from '@/components/blog/Img'
import { ImagesGrid } from '@/components/blog/ImagesGrid'
import Head from 'next/head'
import { Newsletter } from '@/components/Newsletter'
import { Logo } from '@/images/logo.svg'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Blog } from '@/components/Blog'
import { Top } from '@/components/blog/Top'
import { TopTitre } from '@/components/blog/TopTitre'
import { List } from '@/components/blog/List'

import { UserHeader } from '@/components/UserHeader'


import { IntroductionText } from '@/components/blog/IntroductionText'
import { Sujet } from '@/components/blog/Sujet'
import { Titre } from '@/components/blog/Titre'
import { VisitButton } from '@/components/button/VisitButton'

const color = "text-indigo-600"


function Introduction(){
  return (
    <>
      <div className="mx-auto max-w-prose text-lg flex flex-col items-center">
        <UserHeader />
        
        <Sujet className={color}>{sujet}</Sujet>
        <Titre>{titre}</Titre>
      
        <IntroductionText><a href={"https://kraken.app.link/dMC7lC8qRvb"}>Kraken</a> is a popular cryptocurrency exchange that offers a range of features and benefits to traders. If you're considering using Kraken for your trading needs, here are a few reasons why it might be a good choice</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>1.Security</TopTitre>
          <p>
         <a href={"https://accounts.binance.com/en/register?ref=64172567"}>KRAKEN</a> has a strong track record when it comes to security, and has implemented a range of measures to protect its users' assets. These measures include cold storage for the majority of its assets, two-factor authentication, and mandatory use of secure passwords.
          </p>
          </div>

          </div>
      </Top>
      <Top className="mt-10">
        <TopTitre>2.Low fees</TopTitre>
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <p>
          Kraken has some of the lowest fees in the industry, making it an attractive choice for traders who are looking to minimize their trading costs.
          </p>
          </div>
          </div>
      </Top>
      <Top>
          <TopTitre>3.Advanced trading features</TopTitre>
          <p>
          Kraken offers a range of advanced trading features such as margin trading, futures trading, and options trading, which can be useful for experienced traders who want to use more advanced strategies.
          </p>
      </Top>
      <Top>
          <TopTitre>4.Wide range of cryptocurrencies</TopTitre>
          <p>
          Kraken offers a wide range of cryptocurrencies that can be traded, including both major coins like Bitcoin and Ethereum as well as smaller, lesser-known altcoins. This gives you a wide range of options to choose from when building your portfolio.
          </p>
      </Top>
      <Top>
          <TopTitre>5.User-friendly interface</TopTitre>
          <p>
          Kraken has a user-friendly interface that is easy to navigate, making it a good choice for traders who are new to the market. It also offers a range of educational resources and tools to help you learn more about trading and improve your skills.
          </p>
      </Top>
    </>
  )
}

function Conclusion(){
  return (
    <>

        <h2>Conclusion</h2>
        <p>

        Overall, Kraken is a solid choice for traders looking to buy, sell, and trade a wide range of cryptocurrencies. Its low fees, advanced trading features, wide range of cryptocurrencies, and user-friendly interface make it an appealing choice for traders of all levels of experience. However, it's important to note that trading cryptocurrencies carries inherent risks, and it's important to do your own research and assess whether it's right for you.click on the button below to earn $10.
        </p>
        <VisitButton href='https://kraken.app.link/dMC7lC8qRvb'>open a Kraken account</VisitButton>

    </>
  )
}





export default function Home() {
  return (
    <>
      <Head>
        <title>{titreOnglet}</title>
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
      <div className="relative px-4 sm:px-6 lg:px-8">


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