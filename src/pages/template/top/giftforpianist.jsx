// a changer !
const titreOnglet = "4 gifts for a pianist"
const description = "Are you looking for the perfect gift for the pianist in your life? Whether they are a beginner or an experienced player, there are many gift options that can be both practical and enjoyable. "

const sujet = "gifts"
const titre = "4 gifts for pianist"




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
      
        <IntroductionText>Are you looking for the perfect gift for the pianist in your life? Whether they are a beginner or an experienced player, there are many gift options that can be both practical and enjoyable.</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.metronome</TopTitre>

          <p>
          metronomes are a good gift for musicians because they can be an important tool for practicing and improving their skills. They provide a consistent beat, can be used to break down complex pieces, and come in a variety of styles and prices{' '}
        
          </p>
          <ImagesGrid col={6} >
          <a href="https://amzn.to/3Yys145">
            <img
            src="https://m.media-amazon.com/images/I/619olDihj0L._AC_SL1200_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3Yys145'>Wittner Pyramid</a>
          <a href="https://amzn.to/3hzj4a6">
            <img
            src="https://m.media-amazon.com/images/I/61KWm+uGIqL._AC_SL1196_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3hzj4a6'>Soundbrenner Pulse</a>
          <a href="https://amzn.to/3WsX6o5">
            <img
            src="https://m.media-amazon.com/images/I/61jhLnCRarL._AC_SL1024_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3WsX6o5'>seiko</a>
          </ImagesGrid>
      </Top>

      <Top>
          <TopTitre>2. scales</TopTitre>

          <p>
          Training scales on the piano is important for several reasons. First and foremost, practicing scales helps to improve finger dexterity and coordination, which are essential skills for playing the piano. Scales also help to develop a sense of musical phrasing and rhythm, as well as the ability to play smoothly and evenly. In addition, learning and practicing scales can improve your musical memory, as well as your ability to read and interpret sheet music.
          </p>
          <a href="https://amzn.to/3hzl0PU">
            <img
            src="https://m.media-amazon.com/images/I/51DqrbQF+XL._SX377_BO1,204,203,200_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3hzl0PU'>THE COMPLETE BOOK OF SCALES</a>
      </Top>

      <Top>
          <TopTitre>3.score books</TopTitre>
          <p>
          Score books can be a great gift for a pianist for several reasons. First and foremost, score books provide a convenient and organized way for pianists to access and play a wide variety of music. Score books typically contain collections of sheet music for various pieces, arranged by genre, composer, or difficulty level. This allows pianists to easily find and play the music they are interested in, whether they are looking for classical repertoire, popular songs, or original compositions
          </p>
          <ImagesGrid col={3}>
          <a href="https://amzn.to/3W95E3A">
            <img
            src="https://m.media-amazon.com/images/I/61YH4ZroncL._AC_SL1166_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3W95E3A'>fur klavier</a>
          </ImagesGrid>
      </Top>
      <Top>
          <TopTitre>4.jewely related to music</TopTitre>
          <p>
          Jewelry related to music can be a great gift for pianists because it allows them to show off their passion for music in a personal and creative way. Music-themed jewelry can include a wide variety of items, such as pendants with musical notes or symbols, earrings with piano keys or treble clefs, or bracelets with music-themed charms.
          </p>
          <ImagesGrid col={6}>
          <a href="https://amzn.to/3PzxNyy">
            <img
            src="https://m.media-amazon.com/images/I/619MJHSsWJL._AC_SX679_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3PzxNyy'>Cuff Bracelet for Women</a>
          <a href="https://amzn.to/3Yv5epT">
            <img
            src="https://m.media-amazon.com/images/I/61hXtNRcHXL._AC_SX679_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3Yv5epT'> mixed bracelet </a>
          <a href="https://amzn.to/3WqMRk7">
            <img
            src="https://m.media-amazon.com/images/I/51yl61ZXo-L._AC_SX679_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3WqMRk7'> Maigendoo </a>
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

        In conclusion, there are many great gift options for pianists, depending on their interests and needs. Some ideas for gifts for pianists might include:

Score books: As mentioned above, score books can be a great gift for pianists because they provide a convenient and organized way to access a wide variety of music.

Piano accessories: There are many accessories that can be useful for pianists, such as metronomes, practice pedals, or music stands. These types of gifts can be particularly useful for students or amateur pianists who may not have all the equipment they need for their practice and performances.

Piano-related items: Pianists may appreciate gifts that are related to their instrument, such as books about the history of the piano or interesting articles about famous pianists.

Piano-themed gifts: Gifts that have a piano-themed design or motif can be a fun and creative way to show appreciation for a pianist's passion. These might include piano-shaped objects, music-themed jewelry, or other piano-themed items.
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