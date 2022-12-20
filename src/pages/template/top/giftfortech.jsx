// a changer !
const titreOnglet = " 5 gifts for a technology lover"
const description = "If you have a tech-savvy loved one in your life, finding the perfect gift can be a challenge. They probably have the latest gadgets and devices, and it can be tough to find something that will truly surprise and delight them. But fear not! We've compiled a list of gift ideas that are sure to please even the most discerning technology lover. "

const sujet = "gifts"
const titre = "5 gifts for a technology lover"





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
      
        <IntroductionText>If you have a tech-savvy loved one in your life, finding the perfect gift can be a challenge. They probably have the latest gadgets and devices, and it can be tough to find something that will truly surprise and delight them. But fear not! We've compiled a list of gift ideas that are sure to please even the most discerning technology lover.</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.Smart home devices</TopTitre>

          <p>
          Smart home devices like a smart thermostat, smart lighting, or a smart security system can be a great gift for someone who loves to stay connected and in control of their home.{' '}
        
          </p>
          <a href="https://amzn.to/3BL78sH">
            <img
            src="https://m.media-amazon.com/images/I/61VkzvlBTOL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3BL78sH'>Philips Lighting</a>
          <a href="https://amzn.to/3V9WJxH">
            <img
            src="https://m.media-amazon.com/images/I/51JFCf7NImL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3V9WJxH'>Smart Thermostat WiFi Heater</a>
          <a href="https://amzn.to/3HIAgEX">
            <img
            src="https://m.media-amazon.com/images/I/71QUcoCQzIL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3HIAgEX'>Wolf-Guard</a>
      </Top>

      <Top>
          <TopTitre>2. Virtual reality headset</TopTitre>

          <p>
          A virtual reality headset can be a great gift for someone who loves to experience new technologies and immersive experiences.
          </p>
          <a href="https://amzn.to/3jfjp28">
            <img
            src="https://m.media-amazon.com/images/I/51yB98vFpSL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3jfjp28'>occulus quest 2</a>
          <a href="https://amzn.to/3FZJ4VI">
            <img
            src="https://m.media-amazon.com/images/I/61gPT5KkOkL._AC_SL1000_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3FZJ4VI'>FIYAPOO</a>
      </Top>

      <Top>
          <TopTitre>3.Smartwatch</TopTitre>
          <p>
          A smartwatch can be a useful and stylish gift for someone who loves technology and staying connected
          </p>
          <a href="https://amzn.to/3G0JsTF">
            <img
            src="https://m.media-amazon.com/images/I/61h5jLtuOVL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3G0JsTF'>IDEALROYAL</a>
          <a href="https://amzn.to/3Wv7Xh8">
            <img
            src="https://m.media-amazon.com/images/I/71JfGjxM5lL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3Wv7Xh8'>AGPTEK Women's</a>
      </Top>
      <Top>
          <TopTitre>4.E-reader</TopTitre>
          <p>
           e-reader can be a great gift for someone who loves to read and wants a convenient way to access their favorite books.
          </p>
          <a href="https://amzn.to/3PzxNyy">
            <img
            src="https://m.media-amazon.com/images/I/61IvEw1KL+L._AC_SL1001_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3PzxNyy'>All-new Kindle</a>
      </Top>
      <Top>
          <TopTitre>5.drone</TopTitre>
          <p>
          A drone can be a fun and unique gift for someone who loves technology and enjoys exploring new perspectives.
          </p>
          <a href="https://amzn.to/3hFkIHd">
            <img
            src="https://m.media-amazon.com/images/I/61Y1P6uIRFL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3hFkIHd'>Dji Mini 3 Pro</a>
          <a href="https://amzn.to/3PAIP6q">
            <img
            src="https://m.media-amazon.com/images/I/61R03KloSKL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3PAIP6q'>BAICHUN</a>
      </Top>
    </>
  )
}

function Conclusion(){
  return (
    <>

        <h2>Conclusion</h2>
        <p>

        In conclusion, there are many great gift options for the technology lover in your life. From the latest gadgets and devices to smart home accessories and virtual reality experiences, there are plenty of ways to show your appreciation for their love of all things tech. Whether you choose a practical gift like a new smartphone or laptop, or opt for something more indulgent like a gaming console or virtual reality headset, there are plenty of options to choose from. So if you're looking for the perfect gift for the tech-savvy person in your life, consider one of these ideas and surprise them with something they'll truly love and appreciate.
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
        <Newsletter />
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