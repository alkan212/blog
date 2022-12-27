// a changer !
const description = "A review of the top 10 cryptocurrencies that are worth considering for investment at this time."
const image = "https://images.unsplash.com/photo-1639825395303-94c8441b8b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

const sujet = "Crypto"
const titre = "Top 10 Crypto Exchanges On 2023"



import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import { Newsletter } from '@/components/Newsletter'
import { Logo } from '@/images/logo.svg'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Blog } from '@/components/Blog'
import { Top } from '@/components/blog/Top'
import { TopTitre } from '@/components/blog/TopTitre'
import { List } from '@/components/blog/List'
import { Lien } from '@/components/blog/Lien'

import { UserHeader } from '@/components/UserHeader'
import { iii } from '@/images/background.jpg'


import { IntroductionText } from '@/components/blog/IntroductionText'
import { Sujet } from '@/components/blog/Sujet'
import { Titre } from '@/components/blog/Titre'

const color = "text-indigo-600"


function Introduction(){
  return (
    <>
      <div>
        <h2 className="font-semibold leading-6 text-indigo-600">{sujet}</h2>
        <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">{titre}</h3>
        <p className="mt-8 text-lg text-gray-500">
  
        </p>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <p>
        <a href="https://accounts.binance.com/en/register?ref=64172567" className='text-indigo-500 underline-offset-4 decoration-2'><strong>Binance:</strong></a> Binance is one of the largest and most popular cryptocurrency exchanges in the world, with a wide selection of cryptocurrencies available for trading. It is known for its low fees and fast transaction speeds.
      </p>

      <p>
        <a href="https://kraken.app.link/dMC7lC8qRvb" className='text-indigo-500 underline-offset-4 decoration-2'><strong>Kraken:</strong></a> Kraken is a long-established exchange that is popular among traders due to its high liquidity and low fees. It offers a wide range of cryptocurrencies, as well as margin trading and futures trading.
      </p>

      <p>
        <a href="https://cex.io/r/0/up157644775/0/" className='text-indigo-500 underline-offset-4 decoration-2'><strong>CEX:</strong></a> CEX is a UK-based exchange that offers a range of cryptocurrency trading options, including margin trading and futures. It has a user-friendly interface and supports a variety of payment methods.
      </p>

      <p>
        <a href="https://www.huobi.com/en-us/v/register/double-invite/?inviter_id=11345710&invite_code=kbvw6223" className='text-indigo-500 underline-offset-4 decoration-2'><strong>Huobi:</strong></a> Huobi is a Singapore-based exchange that offers a wide selection of cryptocurrencies for trading. It has a user-friendly interface and low fees, and it also operates a number of other services, such as a cryptocurrency wallet and a mining pool.
      </p>

      <p>
        <a href="https://gemini.com/share/a688e9pfd" className='text-indigo-500 underline-offset-4 decoration-2'><strong>Gemini:</strong></a> Gemini is a US-based exchange that is known for its strict compliance with regulations. It offers a range of cryptocurrency trading options, including margin trading and futures, and has a user-friendly interface.
      </p>

      <p>
        <a href="https://bittrex.com/Account/Register?referralCode=FTC-4S5-XC3" className='text-indigo-500 underline-offset-4 decoration-2'><strong>Bittrex:</strong></a> Bittrex is a US-based exchange that offers a wide selection of cryptocurrencies for trading. It is known for its high security measures and fast transaction speeds.
      </p>

      <p>
        <a href="https://www.kucoin.com/ucenter/signup?rcode=rMP4P53" className='text-indigo-500 underline-offset-4 decoration-2'><strong>KuCoin:</strong></a> KuCoin is a Hong Kong-based exchange that offers a wide selection of cryptocurrencies for trading. It has low fees and a user-friendly interface, and it also operates a number of other services, such as a cryptocurrency wallet and a decentralized exchange.
      </p>

      <p>
        <a href="https://www.bitfinex.com/sign-up?refcode=biqYxPgaN" className='text-indigo-500 underline-offset-4 decoration-2'><strong>Bitfinex:</strong></a> Bitfinex is a Hong Kong-based exchange that offers a wide range of cryptocurrency trading options, including margin trading and futures. It is known for its high liquidity and low fees.
      </p>

      <p>
        <a href="https://www.gate.io/signup/12866220" className='text-indigo-500 underline-offset-4 decoration-2'><strong>Gate:</strong></a> Gate is a Malta-based exchange that offers a wide selection of cryptocurrencies for trading. It has a user-friendly interface and low fees, and it also operates a number of other services, such as a cryptocurrency wallet and a decentralized exchange.
      </p>

      <p>
        <a href="https://www.bybit.com/invite?ref=G6RG5Y" className='text-indigo-500 underline-offset-4 decoration-2'><strong>Bybit:</strong></a> Bybit is a Singapore-based exchange that offers margin trading and futures trading in a variety of cryptocurrencies. It has a user-friendly interface and low fees.
      </p>
    </>
  )
}

function Conclusion(){
  return (
    <>

      <h3>How Choose ?</h3>

      <p>
        Again, it is important to carefully consider your own needs and priorities when choosing an exchange. It is also recommended to do thorough research and compare several different exchanges before making a decision.
      </p>
    </>
  )
}




export default function Home() {
  return (
    <>
      <Head>
        <title>{`Weknow - ${title}`}</title>
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



function Content(){
  return(
    <div className="relative bg-white  ">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <Introduction />

            <div className="prose prose-indigo mt-5 text-gray-500">
              <Contenu />

              <Conclusion />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

