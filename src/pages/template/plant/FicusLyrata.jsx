// a changer !
const sujet = "plant"

const titre = "how to take care of the Ficus Lyrata"
const description = "The Kentia Palm, also known as the Kentia Palm Tree, is a beautiful and popular choice for indoor plants. It is native to Lord Howe Island, located off the coast of Australia. Known for its graceful, arching fronds and ability to thrive in low light conditions, the Kentia Palm is a great addition to any home or office. However, like any plant, it requires proper care to thrive. In this blog, we will go over some tips on how to take care of your Kentia Palm to help it grow and flourish."


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

const exchange_name = "Ficus Lyrata"
const exchange_link = "https://amzn.to/3GlFxRy"
const exchange_img = "https://m.media-amazon.com/images/I/71dJm5C6UeS._AC_SL1200_.jpg"

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
      Your Ficus Lyrata loves bright, indirect light. Think of it as the plant equivalent of a sunny day at the beach - too much direct sunlight can lead to sunburned leaves. Place your Ficus Lyrata near a south or east-facing window for optimal lighting.
      </p>
    </top>
    <top>
      <TopTitre>2.Watering</TopTitre>

      <p>
      Ficus Lyrata plants are drought-resistant, but they still need a regular supply of H2O. Water your plant once a week, or whenever the top inch of soil feels dry to the touch. As with any plant, it's important to avoid overwatering - soggy soil can lead to root rot.
      </p>
    </top>
    <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
            <TopTitre>3.Fertilizing</TopTitre>
            <p>
            During the growing season (spring and summer), your Ficus Lyrata will appreciate a light fertilization. Choose a balanced, slow-release fertilizer and follow the instructions on the label.
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
    Ficus Lyrata plants prefer warm temperatures between 60-75°F (15-24°C). Keep your plant away from drafts and extreme temperature fluctuations to avoid stressing it out.
    </p>
    </top>
    <top>
    <TopTitre>5.Humidity</TopTitre>
    <p>
    Ficus Lyrata plants hail from the humid forests of West Africa, so they prefer a bit of extra moisture in the air. If your home tends to be on the dry side, consider misting the leaves regularly or using a humidifier to create a more comfortable environment for your plant
    </p>
    <ImagesGrid col={2} row={1} gap={4} >
            <Img text={"Electric Essential Oil Diffuser,"} src={"https://m.media-amazon.com/images/I/71ANL49UzPL._AC_SL1500_.jpg"} href={"https://amzn.to/3I6fiQC"} />
            <Img text={"Hair Sprayer"} src={"https://m.media-amazon.com/images/I/71hohHJg0gL._AC_SL1500_.jpg"} href={"https://amzn.to/3I5PnZi"} />
          </ImagesGrid>
    </top>
    <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>6.Repotting</TopTitre>
    <p>
    Ficus Lyrata plants don't need to be repotted very often, but if you notice the roots poking out of the bottom of the pot, it may be time for a bigger home. Choose a pot that is only slightly larger than the previous one and use a well-draining potting mix to give your plant the best chance at success.
    </p>
          </div>
          <ImagesGrid col={1} size={6}>
            <Img text={"FERTILIGENE"} src={"https://m.media-amazon.com/images/I/81I7P7HsJZL._AC_SL1500_.jpg"} href={"https://amzn.to/3I5kWlP"} />
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
    <p>With just a little bit of effort, your Ficus Lyrata will be a stunning addition to any room. Follow these care tips to ensure that your plant stays healthy and happy. Bright, indirect light, regular watering, and appropriate fertilization will help your Ficus Lyrata thrive. And by keeping an eye on temperature and humidity levels, you can create a comfortable environment for your plant to grow and flourish. With the right care, your Ficus Lyrata will be a low-maintenance and beautiful addition to your home.</p>
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




