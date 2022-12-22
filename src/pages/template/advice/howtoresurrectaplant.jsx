// a changer !
const titreOnglet = "how to resurrect a plant"
const description = " Welcome to our blog on how to resurrect a dying plant! We know how heartbreaking it can be to see a beloved plant wilt and fade away, but there is often hope for recovery. In this blog, we will share some tips and techniques for reviving ailing plants and bringing them back to health. Whether you are a seasoned plant parent or just starting out, we hope you will find these tips helpful and informative."

const sujet = "advice"
const titre = "how to resurrect a plant"



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
      
        <IntroductionText>Welcome to our blog on how to resurrect a dying plant! We know how heartbreaking it can be to see a beloved plant wilt and fade away, but there is often hope for recovery. In this blog, we will share some tips and techniques for reviving ailing plants and bringing them back to health. Whether you are a seasoned plant parent or just starting out, we hope you will find these tips helpful and informative.</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.Assess the situation</TopTitre>

          <p>
          Is the plant wilting, yellowing, or showing other signs of distress? Identifying the problem can help you determine the best course of action.{' '}
        
          </p>
      </Top>

      <Top>
          <TopTitre>2.Check the soil</TopTitre>

          <p>
          If your dog has an accident inside, be sure to clean it up thoroughly to prevent odors from lingering. Use an enzymatic cleaner specifically designed to neutralize pet odors.
          </p>

      </Top>

      <Top>
          <TopTitre>3.Consider the plant's light exposure</TopTitre>
          <p>
          Does the plant have access to enough light, or is it getting too much or too little? Adjusting the plant's light exposure may help it regain its strength.
          </p>         
      </Top>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>4.Fertilize</TopTitre>
          <p>
          A healthy plant requires the right nutrients to thrive. Using a balanced fertilizing solution can help provide the necessary nutrients and boost the plant's growth.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={3}>
            <Img text={"Fertiligène"} src={"https://m.media-amazon.com/images/I/71mbTs1IAiL._SL1500_.jpg"} href={"https://amzn.to/3PH5E8C"} />
          </ImagesGrid>
          </div>
      </Top>
      <Top>
          <TopTitre>5.Prune dead or damaged foliage</TopTitre>
          <p>
          Removing dead or damaged foliage can help the plant redirect its energy towards healthier growth.
          </p>
      </Top>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>6.Repot the plant</TopTitre>
          <p>
          If the plant is rootbound or the soil is unhealthy, repotting the plant in fresh soil may help it recover.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={3}>
            <Img text={"potting"} src={"https://m.media-amazon.com/images/I/61DyeMQNRNL._AC_SL1024_.jpg"} href={"https://amzn.to/3G6TCSQ"} />
          </ImagesGrid>
          </div>
      </Top>
      <Top>
          <TopTitre>7.Be patient</TopTitre>
          <p>
          Reviving a plant can take time and may require trial and error. Don't be discouraged if the plant doesn't immediately recover – keep trying and adjusting your approach as needed.
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

        In conclusion, reviving a dying plant can be a rewarding and satisfying experience. It may require some trial and error, but with the right approach and care, it is often possible to bring a struggling plant back to health. By following the tips outlined in this blog, you can give your plant the best chance of recovery. Remember to always consider the specific needs of your plant, including its light exposure, watering schedule, and nutrient requirements. With a little patience and persistence, you may be able to enjoy the beauty and greenery of your plant for many more seasons to come.
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