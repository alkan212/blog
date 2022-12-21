// a changer !
const titreOnglet = "how to get rid of hair dandruff"
const description = "Dandruff is a common condition that can cause flakes of skin to appear in the hair and on the scalp. It can be caused by a variety of factors, including dry skin, oily skin, irritation, and certain skin conditions."

const sujet = "advice"
const titre = "how to get rid of hair dandruff"



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
      
        <IntroductionText>Dandruff is a common condition that can cause flakes of skin to appear in the hair and on the scalp. It can be caused by a variety of factors, including dry skin, oily skin, irritation, and certain skin conditions.</IntroductionText>
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
          <TopTitre>1.Wash your hair regularly with a dandruff shampoo</TopTitre>
          <p>
          There are several over-the-counter dandruff shampoos available that contain ingredients like pyrithione zinc, selenium sulfide, or ketoconazole. These ingredients can help to reduce the amount of yeast on the scalp, which can contribute to dandruff.{' '}
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={3}>
            <Img text={"Anti Dandruff Shampoo"} src={"https://m.media-amazon.com/images/I/81y-9A8a+vL._AC_SL1500_.jpg"} href={"https://amzn.to/3Wyxzd5"} />
          </ImagesGrid>
          </div>
        </Top>
        <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>2.Use a gentle, moisturizing shampoo</TopTitre>
          <p>
          If you have dry skin, using a harsh shampoo can strip the scalp of its natural oils and make dandruff worse. Instead, try using a gentle, moisturizing shampoo to help keep the scalp hydrated.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={2}>
            <Img text={"Redken"} src={"https://m.media-amazon.com/images/I/71ldsxWU0zL._AC_SL1500_.jpg"} href={"https://amzn.to/3jpRNYw"} />
          </ImagesGrid>
          </div>
        </Top>
      <Top>
          <TopTitre>3.Avoid using hair products that contain alcohol</TopTitre>
          <p>
          Hair products that contain alcohol can dry out the scalp and make dandruff worse. Instead, look for products that are specifically formulated for dry or sensitive scalp.
         </p>        
      </Top>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>4.Use a scalp scrub</TopTitre>
          <p>
          A scalp scrub can help to remove dead skin cells and excess oil from the scalp, which can help to reduce dandruff. You can make your own scalp scrub by mixing equal parts sugar and olive oil and massaging it into the scalp.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={2}>
            <Img text={"The INKEY List"} src={"https://m.media-amazon.com/images/I/51V8MPnofIL._AC_SL1000_.jpg"} href={"https://amzn.to/3G994hd"} />
          </ImagesGrid>
          </div>
        </Top>
        <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>5.Try using tea tree oil</TopTitre>
          <p>
          Tea tree oil has antifungal and anti-inflammatory properties that can help to reduce dandruff. Mix a few drops of tea tree oil with a carrier oil like coconut oil and massage it into the scalp.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={3}>
            <Img text={"Organic Tea Tree"} src={"https://m.media-amazon.com/images/I/61b0N+wJEPS._AC_SL1500_.jpg"} href={"https://amzn.to/3WfsNl9"} />
          </ImagesGrid>
          </div>
        </Top>
      <Top>
          <TopTitre>6.Avoid tight hairstyles</TopTitre>
          <p>
          Tight hairstyles, such as ponytails or braids, can cause irritation and inflammation on the scalp, which can contribute to dandruff. Try to avoid tight hairstyles and opt for looser styles instead.
          </p>
      </Top>
      <Top>
          <TopTitre>7.Stay hydrated</TopTitre>
          <p>
          Drinking plenty of water and staying hydrated can help to keep the scalp healthy and reduce dandruff. Aim for at least eight glasses of water per day.
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

        It's important to note that dandruff can be a persistent problem and may require ongoing treatment. If you have tried these tips and your dandruff persists, consider speaking with a dermatologist or healthcare provider for further evaluation and treatment.
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