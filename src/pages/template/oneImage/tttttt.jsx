// a changer !
const description = "The Kentia Palm, also known as the Kentia Palm Tree, is a beautiful and popular choice for indoor plants. It is native to Lord Howe Island, located off the coast of Australia. Known for its graceful, arching fronds and ability to thrive in low light conditions, the Kentia Palm is a great addition to any home or office. However, like any plant, it requires proper care to thrive. In this blog, we will go over some tips on how to take care of your Kentia Palm to help it grow and flourish."
const image = "https://m.media-amazon.com/images/I/91rLW9EflZL._AC_SL1500_.jpg"

const sujet = "plant"
const titre = "how to take care of the Kentia Palm"

import { ImagesGrid } from '@/components/blog/ImagesGrid'
import { CameraIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { Img } from '@/components/blog/Img'
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
  
      <p className="text-lg text-gray-500 mb-5">
      The Kentia Palm, also known as the Kentia Palm Tree, is a beautiful and popular choice for indoor plants. It is native to Lord Howe Island, located off the coast of Australia. Known for its graceful, arching fronds and ability to thrive in low light conditions, the Kentia Palm is a great addition to any home or office. However, like any plant, it requires proper care to thrive. In this blog, we will go over some tips on how to take care of your Kentia Palm to help it grow and flourish.
      </p>

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
            <TopTitre>3.Keep your dog hydrated</TopTitre>
            <p>
            Provide your dog with clean, fresh water at all times. Some dogs may prefer to drink from a water bottle rather than a dish, so be sure to offer both options.
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
    <ImagesGrid col={2} row={1} gap={4}>
            <Img text={"Electric Essential Oil Diffuser,"} src={"https://m.media-amazon.com/images/I/71ANL49UzPL._AC_SL1500_.jpg"} href={"https://amzn.to/3I6fiQC"} />
            <Img text={"Hair Sprayer"} src={"https://m.media-amazon.com/images/I/41JblRLJ-eL._AC_SL1500_.jpg"} href={"https://amzn.to/3I5PnZi"} />
          </ImagesGrid>
    </top>
    <top>
    <TopTitre>2.Watering</TopTitre>
    <p>
   Kentia Palms do not require a lot of water, but it is important to keep the soil evenly moist. Water your Kentia Palm once a week, or whenever the top inch of soil feels dry to the touch. Be sure to avoid overwatering, as this can lead to root rot.
    </p>
    </top>
    </>
  )
}


export default function Home() {
  return (
    <>
      <Head>
        <title>{`Weknow - ${titre}`}</title>
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



export function Content() {
  return (
    <div className="overflow-hidden bg-white pb-20">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-indigo-600">{sujet}</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">{titre}</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                <Introduction />
                  <a className='mt-5' target={"_blank"} href='https://amzn.to/3YUE5Ne'>
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src={image}
                    alt=""
                  /></a>
                </div>

                  
<a className='underline underline-offset-2 text-indigo-600' target={"_blank"} href='https://amzn.to/3YUE5Ne'>
Kentia Howea Palm Tree</a>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">


              <Contenu />


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




