// a changer !
const titreOnglet = " how to be an attractive man"
const description = "Tips for maintaining a daily skincare routine, including cleansing, toning, and moisturizing"

const sujet = "advice"
const titre = "how to be an ugly man"




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
      
        <IntroductionText>It's important to note that attractiveness is subjective and can vary greatly from person to person. However, here are some tips that may help men feel more confident and attractive</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.be in shape</TopTitre>

          <p>
          Take care of your physical health by eating a healthy diet, getting regular exercise, and practicing good hygiene.{' '}
        
          </p>
      </Top>

      <Top>
          <TopTitre>2.smell good</TopTitre>

          <p>
          A good perfume can help a man make a good first impression. A pleasant scent can leave a positive impression on those around him, especially in professional or social situations.
          </p>
          <ImagesGrid col={6}>
          <a href="https://amzn.to/3j37dl0">
            <img
            src="https://m.media-amazon.com/images/I/71Iu3XNRIXL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3j37dl0'>azzaro for men</a>
          <a href="https://amzn.to/3G0KnU7">
            <img
            src="https://m.media-amazon.com/images/I/71ecjSJa1oS._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3G0KnU7'>DIOR SAUVAGE</a>
          <a href="https://amzn.to/3j2BmRu">
            <img
            src="https://m.media-amazon.com/images/I/41ZcVeWZkeL._AC_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3j2BmRu'>INVICTUS PACO RABANNE</a>
          </ImagesGrid>

      </Top>

      <Top>
          <TopTitre>3.work on your posture</TopTitre>
          <p>
          Work on your posture and body language. Standing up straight, making eye contact, and maintaining good posture can help you appear more confident and attractive.
          </p>
      </Top>
      <Top>
          <TopTitre>4.read books</TopTitre>
          <p>
          Cultivate your interests and passions, and be well-rounded and knowledgeable about a variety of topics. This can make you more interesting and attractive to others.
          </p>
          <a href="https://amzn.to/3FMQlHc">
            <img
            src="https://m.media-amazon.com/images/I/51A88IvtjGL._SX331_BO1,204,203,200_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3FMQlHc'>RICH DAD POOR DAD</a>
      </Top>
      <Top>
          <TopTitre>5.hygiene</TopTitre>
          <p>
          Practice good hygiene, including brushing and flossing regularly, using deodorant, and keeping your hair clean and well-groomed. a good dental hygiene makes you more attractive use an electric toothbrush.
          </p>
          <ImagesGrid col={2}>
          <a href="https://amzn.to/3WbZ9Nx">
            <img
            src="https://m.media-amazon.com/images/I/81IifBHmAcL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3WbZ9Nx'>Oral-B</a>
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

        In conclusion, there are many ways that men can feel more confident and attractive. Taking care of your physical and mental health, dressing well and grooming yourself appropriately, being kind, considerate, and respectful towards others, and cultivating your interests and passions can all contribute to feeling more attractive. Wearing a good perfume can also be an important aspect of appearing and feeling more attractive, as it can help a man feel confident, make a good first impression, stand out from the crowd, express his individuality, and show attention to detail. Ultimately, being attractive is subjective and what one person finds attractive may be different from what another person finds attractive. It's important to focus on being the best version of yourself and not trying to be someone you're not. By being genuine and confident, a man can feel more attractive and appealing to others.
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