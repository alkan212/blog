// a changer !
const titreOnglet = "Giftsaaaaaaaaaaaaaaaaaaa for the Gardener: Ideas for the Green Thumb in Your Life"
const description = "Gardening is a hobby that brings joy and beauty to people's lives. If you have a green thumb in your life, chances are they love spending time in their garden and taking care of their plants. If you're looking for the perfect gift for the gardener in your life, here are some ideas to get you started."

const sujet = "gifts"
const titre = "Gifts for the Gardener: Ideas for the Green Thumb in Your Life"



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
      
        <IntroductionText>Gardening is a hobby that brings joy and beauty to people's lives. If you have a green thumb in your life, chances are they love spending time in their garden and taking care of their plants. If you're looking for the perfect gift for the gardener in your life, here are some ideas to get you started.</IntroductionText>
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
            <TopTitre>1.Gardening tools</TopTitre>
            <p>
            Every gardener needs a good set of tools to tend to their plants. Consider gifting them a new set of pruning shears, trowels, or a watering can. If they're into organic gardening, consider getting them a compost bin or a worm farm to help them turn their kitchen scraps into rich soil.
            </p>
          </div>

          <ImagesGrid col={1} row={1} size={10}>
            <Img text={"DEWINNER"} src={"https://m.media-amazon.com/images/I/71Sg6Y3s7+L._AC_SL1500_.jpg"} href={"https://amzn.to/3HTClxP"} />
          </ImagesGrid>
        </div>
      </Top>

      <Top>
          <TopTitre>2.Seeds and seedlings</TopTitre>

          <p>
          Help the gardener in your life expand their garden by giving them a variety of seeds or seedlings. You can find seeds for almost any type of plant, from herbs and vegetables to flowers and trees.
          </p>
          <ImagesGrid col={2} row={1} gap={4}>
            <Img text={"Antique Historical Vegetables"} src={"https://m.media-amazon.com/images/I/91kDXvgEfhL._AC_SL1500_.jpg"} href={"https://amzn.to/3jn1p5X"} />
            <Img text={"YAUNGEL"} src={"https://m.media-amazon.com/images/I/71v39jCinaL._AC_SL1200_.jpg"} href={"https://amzn.to/3BVnBLc"} />
          </ImagesGrid>
      </Top>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
            <TopTitre>3.Gardening gloves</TopTitre>
            <p>
            Gardening can be tough on the hands, so a good pair of gloves can make all the difference. Look for gloves that are durable and comfortable, with features like padded palms and moisture-wicking material to keep hands dry.
            </p>
          </div>

          <ImagesGrid col={1} row={1} size={10}>
            <Img text={"DIY Doctor"} src={"https://m.media-amazon.com/images/I/81pD8YbH3aL._AC_SX679_.jpg"} href={"https://amzn.to/3hDEW4p"} />
          </ImagesGrid>
        </div>
      </Top>
      <Top>
          <TopTitre>4.Gardening books</TopTitre>

          <p>
          For the gardener who loves to learn, consider getting them a gardening book. There are so many great options out there, from general gardening guides to specific books on growing particular types of plants.{' '}
          </p>
          <ImagesGrid col={2} row={1} gap={4}>
            <Img text={"RHS Botany for Gardeners"} src={"https://m.media-amazon.com/images/I/51uxdfxHqRS._SX376_BO1,204,203,200_.jpg"} href={"https://amzn.to/3YJ3Sba"} />
            <Img text={"RHS Gardening Through the Year"} src={"https://m.media-amazon.com/images/I/51SUzMbJd-L._SX415_BO1,204,203,200_.jpg"} href={"https://amzn.to/3v9dfTX"} />
          </ImagesGrid>
      </Top>
      <Top>
          <TopTitre>5.Plant care products</TopTitre>

          <p>
          There are many products out there that can help gardeners take care of their plants more easily. Consider getting them a plant food or fertiliser, a pest control product, or a plant protector to keep their plants healthy and thriving.{' '}
          </p>
          <ImagesGrid col={3} row={1} >
            <Img  text={"Seramis Vital Food for Green Plants"} src={"https://m.media-amazon.com/images/I/81XH9MNgzaL._AC_SL1500_.jpg"} href={"https://amzn.to/3YGYPrH"} />
            <Img text={"Blattwerk"} src={"https://m.media-amazon.com/images/I/711U81niqQL._SL1500_.jpg"} href={"https://amzn.to/3BSytJE"} />
            <Img text={"LINSOCLE Winter ProtectorWenger Venture"} src={"https://m.media-amazon.com/images/I/61cuifjZ0rL._AC_SL1083_.jpg"} href={"https://amzn.to/3joqUDZ"} />
          </ImagesGrid>
      </Top>
    </>
    
  )
}

function Conclusion(){
  return (
    <>

        <h2>conclusion</h2>
        <p>

        No matter what gift you choose, the most important thing is that it comes from the heart. A thoughtful gift for the gardener in your life will surely be appreciated and put to good use in the garden.
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