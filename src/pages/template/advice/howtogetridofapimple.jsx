// a changer !
const titreOnglet = " how to get rid of a pimple"
const description = "Tips for maintaining a daily skincare routine, including cleansing, toning, and moisturizing"

const sujet = "advice"
const titre = "how to get rid of a pimple"



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
      
        <IntroductionText>Here are some tips for maintaining a daily skincare routine that includes cleansing, toning, and moisturizing</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.clean your skin</TopTitre>

          <p>
          Cleanse your skin twice a day, once in the morning and once at night, to remove dirt, oil, and makeup. Use a gentle cleanser that is appropriate for your skin type. Avoid over-cleansing or using hot water, as this can strip the skin of its natural oils and cause irritation.{' '}
        
          </p>
      </Top>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>2.use a toners</TopTitre>
          <p>
          After cleansing, use a toner to help restore your skin's pH balance and remove any remaining impurities. Look for toners that contain ingredients such as glycerin or aloe vera to help moisturize and soothe the skin.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={3}>
            <Img text={"toner"} src={"https://m.media-amazon.com/images/I/71u96tQdspL._AC_SL1500_.jpg"} href={"https://amzn.to/3v3tHVU"} />
          </ImagesGrid>
          </div>
      </Top>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>3.use a moistuzer</TopTitre>
          <p>
          Apply a moisturizer to help hydrate and protect the skin. Choose a moisturizer that is appropriate for your skin type and any specific concerns you may have, such as oily or acne-prone skin.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={3}>
            <Img text={"moistuzer"} src={"https://m.media-amazon.com/images/I/51rcI-TbYjL._AC_SL1500_.jpg"} href={"https://amzn.to/3YAIiWd"} />
          </ImagesGrid>
          </div>
      </Top>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>4.sunscreen</TopTitre>
          <p>
          Use a sunscreen with an SPF of at least 30 every day, even on cloudy days, to protect your skin from damaging UV rays. Reapply sunscreen every 2 hours or after swimming or sweating.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={3}>
            <Img text={"Roche Anth Uv"} src={"https://m.media-amazon.com/images/I/41n298Rm3gL._AC_.jpg"} href={"https://amzn.to/3FIONxT"} />
          </ImagesGrid>
          </div>
      </Top>
      <Top>
          <TopTitre>5.Exfoliate</TopTitre>
          <p>
          Exfoliate your skin once or twice a week to remove dead skin cells and improve the texture and appearance of your skin. Use a gentle exfoliator, such as a scrub or enzyme peel, to avoid damaging or irritating the skin.
          </p>
          <ImagesGrid col={1} row={1} size={3}>
            <Img text={"Paula's Choice"} src={"https://m.media-amazon.com/images/I/61jy4NdM7RL._AC_SL1500_.jpg"} href={"https://amzn.to/3YCTEJm"} />
          </ImagesGrid>
      </Top>
      <Top>
          <TopTitre>6.don't touch</TopTitre>
          <p>
          Avoid touching your face frequently, as this can spread bacteria and cause breakouts. Keep your hands clean, and avoid using harsh or abrasive products on your skin.
          </p>
      </Top>
      <Top>
          <TopTitre>7.Stay hydrated</TopTitre>
          <p>
          Stay hydrated by drinking plenty of water throughout the day. Proper hydration helps keep your skin looking healthy and radiant.
          </p>
      </Top>
      <Top>
          <TopTitre>8.Sleep</TopTitre>
          <p>
          Get enough sleep and manage stress, as both can have a negative impact on the appearance and health of your skin. Aim for 7-9 hours of sleep per night, and try stress-reducing activities like yoga or meditation to help keep your skin looking its best.
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

        In conclusion, maintaining a daily skincare routine that includes cleansing, toning, and moisturizing is essential for maintaining healthy and radiant skin. Cleansing removes dirt, oil, and makeup, while toning helps restore the pH balance of the skin and remove any remaining impurities. Moisturizing helps hydrate and protect the skin, and using a sunscreen with an SPF of at least 30 every day can help protect your skin from damaging UV rays. Exfoliating once or twice a week can help remove dead skin cells and improve the texture and appearance of your skin. It's also important to avoid touching your face frequently, stay hydrated, and get enough sleep and manage stress to help keep your skin looking its best. By following these tips and using skincare products that are appropriate for your skin type and concerns, you can help maintain healthy, glowing skin.
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