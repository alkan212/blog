// a changer !
const sujet = "plant"

const titre = "how to take care of the Monstera Deliciosa"
const description = "Monstera deliciosa, also known as the Swiss cheese plant or split-leaf philodendron, is a popular houseplant known for its large, split leaves and ability to thrive in a variety of conditions. It is a relatively easy plant to care for, making it a great choice for plant beginners. Here's how to care for your Monstera deliciosa:"


import { Img } from '@/components/blog/Img'
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

const exchange_name = "Monstera Deliciosa"
const exchange_link = "https://amzn.to/3IgHvUE"
const exchange_img = "https://m.media-amazon.com/images/I/81u2VdaQ5SL._AC_SL1500_.jpg"

function Introduction(){
  return (
    <>
      <div className="mx-auto max-w-prose text-lg flex flex-col items-center">
        <UserHeader />
        
        <Sujet className={`text-${color}-500`}>{sujet}</Sujet>
        <Titre>{titre}</Titre>

        <Link target={"_blank"} href={exchange_link}>
          <img className='mt-5' alt=""  src={exchange_img}/>
        </Link> 

        <VisitButton className={`bg-${color}-500 hover:bg-${color}-600`} href={exchange_link}>buy {exchange_name}</VisitButton>
      
        <IntroductionText>{description}</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>

<top>
      <TopTitre>1.Light</TopTitre>

      <p>
      Monstera deliciosa prefers bright, indirect light but can tolerate low light conditions. Avoid placing it in direct sunlight as this can cause the leaves to yellow and become sunburn
      </p>
    </top>
    <top>
      <TopTitre>2.Water</TopTitre>

      <p>
      Monstera deliciosa prefers evenly moist soil, but be careful not to overwater it. Allow the top inch of soil to dry out before watering again, and make sure the plant is draining properly to prevent root rot.


      </p>
    </top>
    <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
            <TopTitre>3.Fertilizing</TopTitre>
            <p>
            Monstera deliciosa does not require a lot of fertilizer. In fact, it is best to only fertilize it during the growing season (spring and summer) and to use a balanced fertilizer at half strength.
            </p>
          </div>

        

          <ImagesGrid col={1} size={6}>
            <Img text={"CULTIVERS"} src={"https://m.media-amazon.com/images/I/71IR2xy3DBS._SL1500_.jpg"} href={"https://amzn.to/3C4kSio"} />
          </ImagesGrid>
        </div>
      </Top>
    <top>
    <TopTitre>4.Temperature</TopTitre>
    <p>
    Monstera deliciosa prefers room temperatures between 70-80 degrees Fahrenheit. It can tolerate a wider range of temperatures, but extreme heat or cold can cause stress to the plant.
    </p>
    </top>
    <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
            <TopTitre>5.Soil</TopTitre>
            <p>
            Monstera deliciosa prefers a well-draining soil mix. A commercial potting mix or a mix of peat moss, perlite, and sand will work well.
            </p>
          </div>
          <ImagesGrid col={1} size={6}>
            <Img text={"PEAT MOSS"} src={"https://m.media-amazon.com/images/I/812bAbiyoEL._AC_SL1500_.jpg"} href={"https://amzn.to/3Q99OWZ"} />
          </ImagesGrid>
        </div>
      </Top>

    </>
  )
}

function Conclusion(){
  return (
    <>
    <h2>conclusion</h2>
    <p>By following these basic care instructions, your Monstera deliciosa should thrive and bring a touch of greenery to your home. Remember to provide bright, indirect light, water evenly, use a well-draining soil mix, fertilize during the growing season, and keep your plant at room temperature for best results. With a little bit of care, your Monstera deliciosa will be a beautiful and low-maintenance addition to your home.</p>
    <VisitButton className={`bg-${color}-500 hover:bg-${color}-600`} href={exchange_link}>buy {exchange_name}</VisitButton>
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




