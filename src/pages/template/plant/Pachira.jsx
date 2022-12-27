// a changer !
const sujet = "plant"

const titre = "how to take care of the Pachira"
const description = "If you're considering adding a Pachira plant to your home, congratulations! These beautiful plants not only add a touch of greenery to your space, but they are also believed to bring good luck and prosperity. Often called a money tree, the Pachira plant is native to Central and South America and is known for its lush, green leaves and braided trunk.Taking care of a Pachira plant is relatively easy, but there are a few key things to keep in mind to ensure that your plant stays healthy and happy. In this blog, we'll go over the basic care requirements for a Pachira plant and provide some tips and tricks to help you keep your plant thriving."


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

const exchange_name = "Pachira"
const exchange_link = "https://amzn.to/3VlyooM"
const exchange_img = "https://m.media-amazon.com/images/I/61JA2vsoRZL._AC_SL1200_.jpg"

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
      <TopTitre>1.Watering</TopTitre>

      <p>
      Kentia palms are drought-tolerant and can survive for long periods without water, but they do need regular watering to thrive. Water your Kentia palm about once a week, or when the top inch of soil feels dry. Be sure to water the plant thoroughly, allowing the excess water to drain out of the pot to prevent waterlogging.
      </p>
    </top>
    <top>
      <TopTitre>2.Light</TopTitre>

      <p>
      Kentia palms prefer bright, indirect light and can tolerate low light levels. Avoid placing your Kentia palm in direct sunlight, as this can cause the leaves to turn yellow and the plant to become stressed. A spot near a window that receives plenty of indirect light is a good choice. If you don't have a spot like this in your home, you can also use a grow light to provide your Kentia palm with the light it needs.
      </p>
    </top>
    <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
            <TopTitre>3.Fertilizing</TopTitre>
            <p>
            Pachira plants benefit from regular fertilization, especially during the growing season (spring and summer). Use a balanced liquid fertilizer and follow the instructions on the package for the recommended frequency and amount.
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
    Pachira plants are comfortable in a wide range of temperatures, but they do prefer temperatures between 60-80°F. Avoid placing your plant in a drafty or excessively hot location.
    </p>
    </top>
    <top>
    <TopTitre>5.Humidity</TopTitre>
    <p>
    Kentia Palms prefer humid environments. If the air in your home is dry, you can increase humidity by misting the leaves regularly or using a humidifier.
    </p>
    <ImagesGrid col={2} row={1} gap={4} >
            <Img text={"Electric Essential Oil Diffuser,"} src={"https://m.media-amazon.com/images/I/71ANL49UzPL._AC_SL1500_.jpg"} href={"https://amzn.to/3I6fiQC"} />
            <Img text={"Hair Sprayer"} src={"https://m.media-amazon.com/images/I/71hohHJg0gL._AC_SL1500_.jpg"} href={"https://amzn.to/3I5PnZi"} />
          </ImagesGrid>
    </top>
    <Top className="mt-10">

          <TopTitre>6.Pruning</TopTitre>
    <p>
    Pachira plants don't require a lot of pruning, but if you notice any yellow or wilted leaves, it's a good idea to remove them. This will help your plant stay healthy and look its best.
    </p>

      </Top>

    </>
  )
}

function Conclusion(){
  return (
    <>
    <h2>conclusion</h2>
    <p>With a little bit of care, a Pachira plant can be a beautiful and low-maintenance addition to your home. By providing your plant with the right amount of water, light, and fertilization, and keeping an eye out for any issues, you can help your Pachira thrive. With its lush green leaves and braided trunk, this plant is sure to bring a touch of good luck and prosperity to your home.</p>
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




