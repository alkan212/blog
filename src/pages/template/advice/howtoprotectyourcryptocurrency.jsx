// a changer !
const titreOnglet = "  how to protect your crypto-currency  "
const description = "Cryptocurrency has gained popularity as a digital asset for investment and for use in financial transactions, but it's important to remember that it is not without risks. One of the main risks associated with cryptocurrency is the potential for it to be stolen or hacked. Therefore, it's essential to take steps to secure your cryptocurrency and protect it from unauthorized access."

const sujet = "crypto"
const titre = "how to protect your crypto-currency"



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

const color = "text-indigo-600"


function Introduction(){
  return (
    <>
      <div className="mx-auto max-w-prose text-lg flex flex-col items-center">
        <UserHeader />
        
        <Sujet className={color}>{sujet}</Sujet>
        <Titre>{titre}</Titre>
      
        <IntroductionText>Choosing the right cage for a hamster is an important decision for any pet owner. Hamsters are active and energetic creatures that need plenty of room to run and play, and a good cage can help to keep them healthy and happy. In this blog, we will explore what makes a good cage for a hamster and provide some tips on how to choose the best option for your furry friend.
</IntroductionText>
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
          <TopTitre>1.Use a hardware wallet</TopTitre>
          <p>
          A hardware wallet is a physical device that stores your cryptocurrency offline. This can help protect your coins from being accessed by hackers or malware.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={3}>
            <Img text={"Ledger Nano S Plus"} src={"https://m.media-amazon.com/images/I/515tKpfEJAL._AC_SL1500_.jpg"} href={"https://amzn.to/3FPsQx0"} />
          </ImagesGrid>
          </div>
      </Top>
      <Top>
          <TopTitre>2.Enable two-factor authentication</TopTitre>

          <p>
          Two-factor authentication (2FA) adds an extra layer of security to your accounts by requiring you to provide a second form of authentication, such as a code sent to your phone, in addition to your password. Like you can activate on <a href={"https://accounts.binance.com/en/register?ref=64172567"}>binance</a>.
          </p>
      </Top>

      <Top>
          <TopTitre>3.Use a strong, unique password</TopTitre>
          <p>
          Choose a strong, unique password for your cryptocurrency accounts and avoid using the same password for multiple accounts.
          </p>

      </Top>
      <Top>
          <TopTitre>4.Keep your software up to date</TopTitre>
          <p>
          Make sure to keep your software, including your operating system and any cryptocurrency-related applications, up to date with the latest security updates.
          </p>
      </Top>
      <Top>
          <TopTitre>5.Be cautious of phishing attacks</TopTitre>
          <p>
          Be wary of emails or messages that ask you to click on a link or enter your login credentials. These may be phishing attacks designed to steal your personal information.
          </p>
      </Top>      <Top>
          <TopTitre>6.Be careful with your private keys</TopTitre>
          <p>
          Your private keys are the keys to your cryptocurrency, so it's important to keep them safe. Don't share them with anyone and make sure to store them securely, such as in a password manager
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

        By following these tips, you can help protect your cryptocurrency from being stolen or hacked and ensure that it remains secure.
        </p>

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