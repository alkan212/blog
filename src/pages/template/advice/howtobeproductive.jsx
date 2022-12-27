// a changer !
const titreOnglet = " how to be more productive"
const description = "Being more productive can be a challenge, especially when you have a lot on your plate. Here are a few tips that may help you increase your productivity "

const sujet = "advice"
const titre = "how to be more productive"



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
      
        <IntroductionText>Being more productive can be a challenge, especially when you have a lot on your plate. Here are a few tips that may help you increase your productivity</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.Set specific, achievable goals</TopTitre>

          <p>
          It's important to have a clear idea of what you want to accomplish. Break your goals down into smaller, more manageable tasks, and focus on one thing at a time.{' '}
        
          </p>
      </Top>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>2.Create a to-do list</TopTitre>
          <p>
          A to-do list can help you stay organized and prioritize your tasks. Keep your list short and focus on the most important tasks first.it it's easier for your brain to stay focused by using a paper to do list like this one
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={5}>
            <Img text={"to-do list"} src={"https://m.media-amazon.com/images/I/71uih1YW9GL._AC_SL1500_.jpg"} href={"https://amzn.to/3Wbg3Ma"} />
          </ImagesGrid>
          </div>
      </Top>
      <Top>
          <TopTitre>3.Minimize distractionsh</TopTitre>
          <p>
          Eliminate as many distractions as possible when you're working. This might mean turning off your phone, closing unnecessary tabs on your computer, or finding a quiet place to work.
          </p>
      </Top>
      <Top>
          <TopTitre>4.Take breaks</TopTitre>
          <p>
          It's important to take breaks to give your mind a chance to rest and recharge. Take a walk, do some stretching, or engage in a relaxing activity.
          </p>
      </Top>
      <Top>
          <TopTitre>5.Use time-management techniques</TopTitre>
          <p>
          Techniques like the Pomodoro Technique and time blocking can help you stay focused and make the most of your time.
          </p>
      </Top>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>6.Get enough sleep</TopTitre>
          <p>
          Proper sleep is essential for productivity. Make sure you're getting enough rest so that you can work at your best.use an clock too not be wake up by your phone and be attempt to use it.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={5}>
            <Img text={"alarm clock"} src={"https://m.media-amazon.com/images/I/614dzV5TGUL._AC_SL1500_.jpg"} href={"https://amzn.to/3YAZj2Q"} />
          </ImagesGrid>
          </div>
      </Top>
      <Top>
          <TopTitre>7.Stay organized:</TopTitre>
          <p>
          Keep your workspace clean and clutter-free. This can help you stay focused and reduce stress.
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

        By following these tips, you can increase your productivity and get more done in less time.
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