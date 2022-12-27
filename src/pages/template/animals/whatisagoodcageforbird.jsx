// a changer !
const titreOnglet = "  what is a good cage for bird "
const description = "When it comes to choosing the right cage for a bird, there are a few important factors to consider. A good cage will provide your feathered friend with a safe, comfortable, and stimulating environment, and can help to ensure their overall well-being and happiness. In this blog, we will explore what makes a good cage for a bird and provide some tips on how to choose the best option for your pet."

const sujet = "advice"
const titre = "what is a good cage for bird"



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
      
        <IntroductionText>When it comes to choosing the right cage for a bird, there are a few important factors to consider. A good cage will provide your feathered friend with a safe, comfortable, and stimulating environment, and can help to ensure their overall well-being and happiness. In this blog, we will explore what makes a good cage for a bird and provide some tips on how to choose the best option for your pet.
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
          Birds need plenty of room to move around and stretch their wings, so a cage that is too small can lead to boredom and frustration. Look for a cage that provides at least 2-3 times the bird's wingspan in width and height.{' '}      
          </p>
      </Top>
      <Top>
          <TopTitre>2.Well-ventilated</TopTitre>

          <p>
          Good airflow is important for the overall health and well-being of birds, so look for a cage with plenty of ventilation.
          </p>
      </Top>

      <Top>
          <TopTitre>3.Durable material</TopTitre>
          <p>
          Metal or powder-coated metal cages are generally the most durable and long-lasting options, but plastic and wooden cages can also be good choices as long as they are sturdy and well-made.
          </p>

      </Top>
      <Top>
          <TopTitre>4.Easy to access and maintain</TopTitre>
          <p>
          Choose a cage with doors that open easily and make sure there are enough feeding and watering stations to keep your bird well-fed and hydrated. Overall, taking the time to research and choose the right cage for your bird can go a long way in ensuring your feathered friend's happiness and well-being.
          </p>
      </Top>
      <Top>
          <TopTitre>here is a selection that we choose for you</TopTitre>
          <ImagesGrid col={2} row={1} gap={4} >
            <Img text={"UISEBRT"} src={"https://m.media-amazon.com/images/I/71j77vEefLL._AC_SL1000_.jpg"} href={"https://amzn.to/3VnXALd"} />
            <Img text={"Zolux Neo"} src={"https://m.media-amazon.com/images/I/41kHIq-FwwL._AC_SL1125_.jpg"} href={"https://amzn.to/3I0rCS8"} />
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

        In conclusion, a good cage for a bird should be spacious, well-ventilated, made of a durable material, and easy to access and maintain. By following these guidelines, you can ensure that your bird has a happy and healthy home.
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
        <Blog sujet={sujet}/>
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