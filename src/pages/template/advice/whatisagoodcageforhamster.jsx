// a changer !
const titreOnglet = "  what is a good cage for hamster "
const description = "Choosing the right cage for a hamster is an important decision for any pet owner. Hamsters are active and energetic creatures that need plenty of room to run and play, and a good cage can help to keep them healthy and happy. In this blog, we will explore what makes a good cage for a hamster and provide some tips on how to choose the best option for your furry friend."

const sujet = "advice"
const titre = "what is a good cage for hamster"



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
          <TopTitre>1.Spacious</TopTitre>
          <p>
          Hamsters need plenty of room to move around and explore, so a cage that is too small can lead to boredom and frustration. Look for a cage that provides at least 360 square inches of floor space for your hamster.{' '}      
          </p>
      </Top>
      <Top>
          <TopTitre>2.Well-ventilated</TopTitre>

          <p>
          Poor ventilation can lead to respiratory problems in hamsters, so look for a cage with plenty of airflow.
          </p>
      </Top>

      <Top>
          <TopTitre>3.Durable material</TopTitre>
          <p>
          Plastic cages are lightweight and easy to clean, but they may not be as sturdy as metal or wire cages. Metal and wire cages are more durable, but they may be more difficult to clean and may not provide as much insulation for the hamster.
          </p>

      </Top>
      <Top>
          <TopTitre>4.Easy to access and maintain</TopTitre>
          <p>
          Choose a cage with doors that open easily and make sure there are enough feeding and watering stations to keep your hamster well-fed and hydrated. Overall, taking the time to research and choose the right cage for your hamster can go a long way in ensuring your furry friend's well-being and happiness.
          </p>
      </Top>
      <Top>
          <TopTitre>here is a selection that we choose for you</TopTitre>
          <ImagesGrid col={2} row={1} gap={4} >
            <Img text={"Zolux Rody 3"} src={"https://m.media-amazon.com/images/I/71un63msANL._AC_SL1072_.jpg"} href={"https://amzn.to/3Vld4j9"} />
            <Img text={"Ferplast FSC"} src={"https://m.media-amazon.com/images/I/71Ugnb8X-+L._AC_SL1000_.jpg"} href={"https://amzn.to/3VnMGoV"} />
          </ImagesGrid>
          </Top>
    </>
  )
}

function Conclusion(){
  return (
    <>

        <h2>Conclusion</h2>
        <p>

        In conclusion, a good cage for a hamster should be spacious, well-ventilated, made of a durable material, and easy to access and maintain. By following these guidelines, you can ensure that your hamster has a happy and healthy home.
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