// a changer !
const titreOnglet = "5 gifts for a guitarist"
const description = "Gifts for guitarists are a great way to show your appreciation for their musical talent and passion. As a musician, a guitar is more than just an instrument – it's a way of life. For guitarists, playing and practicing is a constant source of joy and fulfillment, so it's important to choose gifts that reflect their love of music. "

const sujet = "gifts"
const titre = " gifts for guitarist"


import { Img } from '@/components/blog/Img'
import { VisitButton } from '@/components/button/VisitButton'
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
      
        <IntroductionText>Gifts for guitarists are a great way to show your appreciation for their musical talent and passion. As a musician, a guitar is more than just an instrument – it's a way of life. For guitarists, playing and practicing is a constant source of joy and fulfillment, so it's important to choose gifts that reflect their love of music.</IntroductionText>
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
          <ImagesGrid col={3} row={1} >
            <Img text={"Wittner Pyramid"} src={"https://m.media-amazon.com/images/I/619olDihj0L._AC_SL1200_.jpg"} href={"https://amzn.to/3Yys145"} />
            <Img text={"Soundbrenner Pulse"} src={"https://m.media-amazon.com/images/I/61KWm+uGIqL._AC_SL1196_.jpg"} href={"https://amzn.to/3hzj4a6"} />
            <Img text={"seiko"} src={"https://m.media-amazon.com/images/I/61jhLnCRarL._AC_SL1024_.jpg"} href={"https://amzn.to/3WsX6o5"} />
          </ImagesGrid>
      </Top>

      <Top>
      <div className='w-full h-full flex justify-between items-center'>
      <div className='pr-10'>
          <TopTitre>2.guitare maintenance tools</TopTitre>
          

          <p>
          A guitar care kit is a practical gift that every guitarist will appreciate. It might include a guitar stand, cleaning cloths, and other tools to keep their guitar in top shape.
          </p>
          </div>


        <ImagesGrid col={1} row={1} size={10}>
        <Img text={"Elagon"} src={"https://m.media-amazon.com/images/I/718MoZUmMKL._AC_SL1200_.jpg"} href={"https://amzn.to/3jfCzVT"} />
        </ImagesGrid>
        </div>


      </Top>

      <Top>
          <TopTitre>3.Music books</TopTitre>
          <p>
          Guitarists are always looking for new music to play. Consider getting them a book of guitar tabs for their favorite songs or a book of music theory to help them improve their skills.
          </p>
          <ImagesGrid col={2} row={1} gap={4}>
            <Img text={"THE BEATLES COMPLETE CHORD"} src={"https://m.media-amazon.com/images/I/41C6oxWXpAL._SX341_BO1,204,203,200_.jpg"} href={"https://amzn.to/3BMLTqx"} />
            <Img text={"MICKEY BAKER'S COMPLETE COURSE IN JAZZ GUITAR GUITARE"} src={"https://m.media-amazon.com/images/I/51JcOA56aaL._SX484_BO1,204,203,200_.jpg"} href={"https://amzn.to/3BL1Gq1"} />
          </ImagesGrid>
      </Top>
      <Top>
          <TopTitre>4.jewely related to music</TopTitre>
          <p>
          Jewelry related to music can be a great gift for pianists because it allows them to show off their passion for music in a personal and creative way. Music-themed jewelry can include a wide variety of items, such as pendants with musical notes or symbols, earrings with piano keys or treble clefs, or bracelets with music-themed charms.
          </p>
          <ImagesGrid col={3} row={1} >
            <Img text={"Cuff Bracelet for Women"} src={"https://m.media-amazon.com/images/I/619MJHSsWJL._AC_SX679_.jpg"} href={"https://amzn.to/3PzxNyy"} />
            <Img text={"mixed bracelet"} src={"https://m.media-amazon.com/images/I/61hXtNRcHXL._AC_SX679_.jpg"} href={"https://amzn.to/3Yv5epT"} />
            <Img text={"Maigendoo"} src={"https://m.media-amazon.com/images/I/51yl61ZXo-L._AC_SX679_.jpg"} href={"https://amzn.to/3WqMRk7"} />
          </ImagesGrid>
      </Top>
      <Top>
          <TopTitre>5.guitar accessories</TopTitre>
          <p>
          Guitarists can always use new picks, strings, straps, and other accessories. Consider getting them a set of their favorite brand of strings or a new guitar strap.
          </p>
          <ImagesGrid col={3} row={1} >
            <Img text={"tuner"} src={"https://m.media-amazon.com/images/I/51JJIcjiB8L._AC_SL1000_.jpg"} href={"https://amzn.to/3WtdAMZ"} />
            <Img text={"Guitar Wall Mount"} src={"https://m.media-amazon.com/images/I/61mf5vmQNAL._AC_SL1200_.jpg"} href={"https://amzn.to/3Yv5epT"} />
            <Img text={"WiNGO Guitar Capo"} src={"https://m.media-amazon.com/images/I/71+4zd1hMdL._AC_SL1200_.jpg"} href={"https://amzn.to/3WqlcQd"} />
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

        the key to choosing a great gift for a guitarist is to think about their interests and passions. With a little bit of thought, you can find a gift that they will truly appreciate and enjoy.
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