// a changer !
const titreOnglet = "how to have a cat that smells good"
const description = "Welcome to our blog about how to have a cat that smells good! If you're a cat owner, you know that despite their cute and cuddly appearance, cats can sometimes have less-than-pleasant odors. Whether it's litter box smells, musky fur, or just general muskiness, it's natural to want to keep your feline friend smelling fresh and clean. In this blog, we'll be sharing tips and tricks for maintaining a clean and fresh-smelling cat, from regular grooming to addressing any health issues that may be causing odors. We hope you'll find these tips helpful and that they'll help you and your cat enjoy each other's company even more!"

const sujet = "advice"
const titre = "how to have a cat that smells good"




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
      
        <IntroductionText>Welcome to our blog about how to have a cat that smells good! If you're a cat owner, you know that despite their cute and cuddly appearance, cats can sometimes have less-than-pleasant odors. Whether it's litter box smells, musky fur, or just general muskiness, it's natural to want to keep your feline friend smelling fresh and clean. In this blog, we'll be sharing tips and tricks for maintaining a clean and fresh-smelling cat, from regular grooming to addressing any health issues that may be causing odors. We hope you'll find these tips helpful and that they'll help you and your cat enjoy each other's company even more!</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.Regular grooming</TopTitre>

          <p>
          Regular grooming is essential for maintaining a clean and fresh-smelling cat. This includes brushing or combing your cat's coat (depending on the length and type of their fur), and trimming their nails. Grooming can also help prevent matting, which can trap odors.you can do it your self with that kis{' '}
        
          </p>
          <ImagesGrid col={4}>
          <a href="https://amzn.to/3G5Vo6D">
            <img
            src="https://m.media-amazon.com/images/I/71pMj5nohaL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3G5Vo6D'>long-haired cat</a>
          <a href="https://amzn.to/3jhf0fc">
            <img
            src="https://m.media-amazon.com/images/I/81blkXwk3LL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3jhf0fc'>short-haired cat</a>
          </ImagesGrid>
      </Top>

      <Top>
          <TopTitre>2.Keep your cat's litter box clean</TopTitre>

          <p>
          A dirty litter box can be a major source of bad smells. Be sure to scoop it at least once a day, and completely empty and clean it out once a week. Use a litter deodorizer if needed, and consider switching to a litter brand that is formulated to control odors.
          </p>
          <ImagesGrid col={2}>
          <a href="https://amzn.to/3G6GGfE">
            <img
            src="https://m.media-amazon.com/images/I/81tgmC1l0fL._AC_SL1500_.jpg">
            </img>

          </a>
          <a href='https://amzn.to/3G6GGfE'>covered litter</a>
          </ImagesGrid>


      </Top>

      <Top>
          <TopTitre>3.Keep your cat's living space clean</TopTitre>
          <p>
          Regularly wash your cat's bedding, toys, and any other items they come into contact with to keep odors at bay.you can also perfume the cat.
          <ImagesGrid col={4}>
          <a href="https://amzn.to/3PJSzf2">
            <img
            src="https://m.media-amazon.com/images/I/71nHYSA30jL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3PJSzf2'>BEAPHAR</a>
          </ImagesGrid>
          </p>
      </Top>
      <Top>
          <TopTitre>4.Address any health issues</TopTitre>
          <p>
          If your cat has a particular odor that doesn't go away with regular grooming, it could be a sign of a health issue such as dental problems or a skin condition. In this case, it's important to consult with a veterinarian to determine the cause and get proper treatment.
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

        We hope you've found these tips for keeping your cat smelling fresh and clean helpful! By following a regular grooming and cleaning routine, staying on top of litter box maintenance, and addressing any health issues that may be causing odors, you can help your cat maintain a pleasant smell. Remember, keeping your cat smelling good is just one part of being a responsible pet owner – it's also important to provide your cat with proper nutrition, exercise, and medical care to ensure their overall health and well-being. Thanks for reading, and we hope you and your feline friend enjoy a lifetime of fresh, clean smells!
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