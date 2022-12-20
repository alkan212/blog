// a changer !
const titreOnglet = "how to stop sweating"
const description = " Sweating is a natural process that helps regulate your body temperature. However, excessive sweating, also known as hyperhidrosis, can be uncomfortable and embarrassing. Here are some tips for reducing sweating."

const sujet = "advice"
const titre = "how to stop sweating"




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
      
        <IntroductionText>Sweating is a natural process that helps regulate your body temperature. However, excessive sweating, also known as hyperhidrosis, can be uncomfortable and embarrassing. Here are some tips for reducing sweating.</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.Keep cool</TopTitre>

          <p>
          Wearing loose, lightweight clothing and staying in a cool environment can help reduce sweating.{' '}
          </p>
      </Top>

      <Top>
          <TopTitre>2.Use antiperspirants</TopTitre>

          <p>
          Antiperspirants contain aluminum-based compounds that block the sweat glands and help reduce sweating.It works very well.
          </p>
          <ImagesGrid col={2}>
          <a href="https://amzn.to/3V7GJME">
            <img
            src="https://m.media-amazon.com/images/I/61LjpgadHZL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3V7GJME'>etiaxil</a>
          </ImagesGrid>

      </Top>

      <Top>
          <TopTitre>3.Avoid triggers</TopTitre>
          <p>
          Certain foods, drinks, and activities can trigger sweating. Avoiding these triggers can help reduce sweating. For example, spicy foods, caffeine, and alcohol can all cause sweating.
         </p>        
      </Top>
      <Top>
          <TopTitre>5.Consider prescription treatments</TopTitre>
          <p>
          Washing your body regularly and using antiperspirant deodorants can help reduce sweating and body odor.
          </p>

      </Top>
      <Top>
          <TopTitre>5.Address any health issues</TopTitre>
          <p>
          If lifestyle changes and over-the-counter antiperspirants are not effective, your doctor may recommend prescription treatments such as anticholinergic medications or botulinum toxin injections.
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

        If you are concerned about excessive sweating, it is important to speak with a healthcare professional for proper diagnosis and treatment. They can help determine the cause of your excessive sweating and recommend the most appropriate course of action.
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
        <Newsletter />
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