// a changer !
const titreOnglet = " what to take for a roadtrip"
const description = "Road trips can be a fun and exciting way to see new places and have new experiences. However, it's important to properly prepare and bring everything you need to ensure a smooth and enjoyable trip. In this blog post, we'll cover some essential items to bring on a road trip, from practical items like maps and snacks to entertainment options like books and games."

const sujet = "advice"
const titre = "what to take for a roadtrip"



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
      
        <IntroductionText>Road trips can be a fun and exciting way to see new places and have new experiences. However, it's important to properly prepare and bring everything you need to ensure a smooth and enjoyable trip. In this blog post, we'll cover some essential items to bring on a road trip, from practical items like maps and snacks to entertainment options like books and games.</IntroductionText>
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
          <TopTitre>1.Maps and navigation tools</TopTitre>
          <p>
          It's important to have a reliable way to get from point A to point B on your road trip. This can include physical maps, a GPS device, or a navigation app on your phone.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={5}>
            <Img text={"GARMIN DriveSmart 55"} src={"https://m.media-amazon.com/images/I/71RQrNqSFOL._AC_SL1500_.jpg"} href={"https://amzn.to/3vghJZa"} />
          </ImagesGrid>
          </div>
      </Top>
      <Top className="mt-10">
        <TopTitre>2.Snacks and drinks</TopTitre>
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <p>
          It's always a good idea to have some non-perishable snacks and drinks on hand in case you get hungry or thirsty during your trip. This can include things like granola bars, trail mix, and bottles of water.
          </p>
          </div>
          </div>
      </Top>
      <Top>
          <TopTitre>3.Personal items</TopTitre>
          <p>
          Don't forget to bring your personal essentials, such as your driver's license, car insurance information, and any medications you need. You should also bring a change of clothes in case of emergencies or unexpected weather conditions.
          </p>
      </Top>
      <Top>
          <TopTitre>4.Entertainment options</TopTitre>
          <p>
          Long car rides can get boring, so it's important to have some entertainment options on hand to keep you and your passengers entertained. This can include books, music, podcasts, or games.
          </p>
      </Top>
      <Top>
          <TopTitre>5.Car maintenance items</TopTitre>
          <p>
          It's always a good idea to be prepared for car issues on a road trip. This can include things like a spare tire, jack, and lug wrench, as well as basic tools like pliers and a screwdriver.
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

        By following these tips and packing the essential items for your road trip, you can set yourself up for a successful and enjoyable journey. Whether you're planning a short trip or a cross-country adventure, these items will help you be prepared for whatever the road throws your way.
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