// a changer !
const titreOnglet = "what gift to give to a woman"
const description = "Gifting for women can be a fun and rewarding experience, but it can also be challenging to choose the perfect present. Here are a few tips to help you choose the perfect gift for the woman in your life"

const sujet = "gift"
const titre = "what gift to give to a woman "





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
      
        <IntroductionText>Gifting for women can be a fun and rewarding experience, but it can also be challenging to choose the perfect present. Here are a few tips to help you choose the perfect gift for the woman in your life</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.Consider her interests and passions</TopTitre>

          <p>
          A gift that speaks to her hobbies or interests is likely to be well-received and appreciated. For example, if she loves to read, consider giving her a book or a gift card to a bookstore. If she's into fitness, a new pair of workout shoes or a fitness tracker might be a good option.{' '}
        
          </p>
      </Top>

      <Top>
          <TopTitre>2.Think about her style</TopTitre>

          <p>
          Consider the woman's personal style when choosing a gift. Does she prefer classic and timeless pieces, or is she more adventurous and experimental with her fashion and home decor? A gift that reflects her style is likely to be more appreciated.
          </p>
      </Top>
      <Top>
          <TopTitre>3.Personalize the gift</TopTitre>
          <p>
          A personalized gift, such as a monogrammed tote bag or a custom piece of jewelry, can be a thoughtful and sentimental present.
          </p>
     </Top>
      <Top>
          <TopTitre>4.Consider her needs</TopTitre>
          <p>
          Is there something that the woman in your life has been needing or wanting? Consider giving her something practical that will be useful and appreciated.
          </p>
      </Top>
      <Top>
          <TopTitre>5.Don't forget the little things</TopTitre>
          <p>
          mall gestures, such as a bouquet of flowers or a box of her favorite chocolates, can be a thoughtful and appreciated gift.
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
        Ultimately, the most important thing is to choose a gift that comes from the heart and shows that you care about the woman in your life. By considering her interests, style, and needs, you can choose a gift that is meaningful and appreciated.
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