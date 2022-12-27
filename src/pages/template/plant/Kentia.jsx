// a changer !
const sujet = "plant"

const titre = "how to take care of the Kentia Palm"
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

const exchange_name = "Kenya"
const exchange_link = "https://amzn.to/3YUE5Ne"
const exchange_img = "https://m.media-amazon.com/images/I/91rLW9EflZL._AC_SL1500_.jpg"

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
      Kentia Palms prefer indirect, bright light. Avoid placing them in direct sunlight, as this can cause the leaves to yellow or become damaged. A south or east-facing window is a good location for a Kentia Palm.
      </p>
    </top>
    <top>
      <TopTitre>2.Watering</TopTitre>

      <p>
      Kentia Palms do not require a lot of water, but it is important to keep the soil evenly moist. Water your Kentia Palm once a week, or whenever the top inch of soil feels dry to the touch. Be sure to avoid overwatering, as this can lead to root rot.
      </p>
    </top>
    <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
            <TopTitre>3.Fertilizing</TopTitre>
            <p>
            Kentia palms benefit from regular fertilization, especially during the growing season (spring and summer). Use a balanced liquid fertilizer and follow the instructions on the package for the recommended frequency and amount.
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
    Kentia Palms prefer warm temperatures between 60-75°F (15-24°C). Avoid placing them in areas with drafts or extreme temperature fluctuations.
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
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>6.Repotting</TopTitre>
    <p>
    Kentia Palms do not need to be repotted often, but if you notice the roots growing out of the bottom of the pot, it may be time to repot your plant. Choose a pot that is only slightly larger than the previous one and use a well-draining potting mix.
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
    <p>By following these simple care tips, your Kentia Palm should thrive and bring a touch of tropical elegance to your home. Remember to keep the soil evenly moist, avoid direct sunlight, and provide the plant with indirect, bright light. Fertilize during the growing season and be mindful of temperature and humidity levels. With proper care, your Kentia Palm will be a beautiful and low-maintenance addition to your home</p>
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




