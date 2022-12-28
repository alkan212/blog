// a changer !
const sujet = "plant"

const titre = "how to take care of the croton plant"
const description = "The Croton plant, also known as Codiaeum variegatum, is a popular indoor plant known for its colorful, variegated leaves and ability to thrive in a wide range of conditions. Native to the tropical regions of Asia and Australia, the Croton is a beautiful and easy-to-care-for plant that adds a vibrant touch to any home or office.In this blog, we will go over the basic care instructions for the Croton plant, including tips on watering, lighting, and fertilizing. By following these guidelines, you can keep your Croton healthy and thriving for years to come."


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

const exchange_name = "croton plant"
const exchange_link = "https://amzn.to/3Q1wJnq"
const exchange_img = "https://m.media-amazon.com/images/I/81X+TKqydKL._AC_SL1500_.jpg"

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
      Croton plants prefer evenly moist soil, but they do not like to be consistently waterlogged. To avoid over-watering, it's a good idea to allow the top inch or two of soil to dry out before watering again. It's also a good idea to use a soil moisture meter to ensure that you're providing the right amount of moisture to your plant. Water your Croton thoroughly, but be sure to avoid getting the leaves wet, as this can cause them to yellow and become diseased.
      </p>
    </top>
    <top>
      <TopTitre>2.Light</TopTitre>

      <p>
      Croton plants prefer bright, indirect light and can tolerate some direct sunlight. However, they do not do well in low light conditions and may become leggy or lose their color if not exposed to enough light. A south- or west-facing window is a good spot for a Croton plant, as it will receive plenty of natural light.
      </p>
    </top>
    <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
            <TopTitre>3.Fertilizing</TopTitre>
            <p>
            Croton plants benefit from regular fertilization during the growing season, typically from spring to fall. Use a balanced, water-soluble fertilizer every two to four weeks, following the instructions on the package for proper dilution. During the winter months, you can reduce the frequency of fertilization or stop altogether.
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
    Croton plants prefer a moderate temperature range of 70-85°F (21-29°C). They can tolerate a slight drop in temperature, but they should not be exposed to temperatures below 60°F (16°C). Additionally, avoid placing your Croton plant near drafts or heat sources, as extreme temperatures can cause stress to the plant. By maintaining a consistent and moderate temperature range, you can help ensure the overall health and well-being of your Croton.
    </p>
    </top>
    <top>
    <TopTitre>5.Humidity</TopTitre>
    <p>
    Croton plants prefer moderate to high humidity levels, around 50-70%. If the air in your home or office is particularly dry, you may need to increase the humidity around your plant. One easy way to do this is by placing a humidity tray under the pot and filling it with water and pebbles. The water will evaporate and increase the humidity around the plant. You can also use a humidifier or mist your Croton plant regularly to keep the air around the plant moist. It's important to note that while Croton plants do prefer a moderate to high level of humidity, they can tolerate dry air as long as their soil is kept consistently moist. Just be sure to monitor the soil moisture and adjust your watering schedule accordingly if the air in your home or office is particularly dry.
    </p>
    <ImagesGrid col={2} row={1} gap={4} >
            <Img text={"Electric Essential Oil Diffuser,"} src={"https://m.media-amazon.com/images/I/71ANL49UzPL._AC_SL1500_.jpg"} href={"https://amzn.to/3I6fiQC"} />
            <Img text={"Hair Sprayer"} src={"https://m.media-amazon.com/images/I/71hohHJg0gL._AC_SL1500_.jpg"} href={"https://amzn.to/3I5PnZi"} />
          </ImagesGrid>
    </top>


    </>
  )
}

function Conclusion(){
  return (
    <>
    <h2>conclusion</h2>
    <p>By following these basic care instructions, you can keep your Croton plant healthy and thriving. Watering, lighting, and fertilizing are all important factors in the overall health of your plant, so be sure to pay attention to these needs. With a little bit of care and attention, your Croton will be a beautiful and low-maintenance addition to your home or office.</p>
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




