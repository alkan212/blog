// a changer !
const titreOnglet = " 5 gifts for the bookworms"
const description = "If you have a tech-savvy loved one in your life, finding the perfect gift can be a challenge. They probably have the latest gadgets and devices, and it can be tough to find something that will truly surprise and delight them. But fear not! We've compiled a list of gift ideas that are sure to please even the most discerning technology lover. "

const sujet = "gifts"
const titre = "5 gifts for the bookworms"




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
      
        <IntroductionText>Gifts for bookworms are always a great idea because they show that you care about their interests and hobbies. Bookworms are people who love to read and are often passionate about literature, so it's important to choose gifts that reflect their love of books. Here are a few ideas for gifts that bookworms will love.</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.books</TopTitre>

          <p>
          This may seem obvious, but bookworms can never have too many books! Consider getting them a new release or a classic that they've always wanted to read.{' '}
        
          </p>
          <ImagesGrid col={3}>
          <a href="https://amzn.to/3G3plEu">
            <img
            src="https://m.media-amazon.com/images/I/71rOzy4cyAL.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3G3plEu'>Harry Potter</a>
          </ImagesGrid>
      </Top>

      <Top>
          <TopTitre>2.Bookmarks</TopTitre>

          <p>
          Bookmarks are a practical and thoughtful gift for bookworms. Consider getting them a bookmark with a quote from their favorite book or a bookmark with a design that reflects their interests.
          </p>
          <ImagesGrid col={4}>
          <a href="https://amzn.to/3uXE6T5">
            <img
            src="https://m.media-amazon.com/images/I/81yqi4yECmL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3uXE6T5'>Hedwig Bookmark</a>
          <a href="https://amzn.to/3W9uiRU">
            <img
            src="https://m.media-amazon.com/images/I/71X0BEYAkxL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3W9uiRU'>Toirxarn Metal Feather Bookmark</a>
          </ImagesGrid>
      </Top>

      <Top>
          <TopTitre>3.Reading lights</TopTitre>
          <p>
          Reading lights are a great gift for bookworms because they allow them to read late into the night without disturbing others. There are many different styles of reading lights available, so you can choose one that fits their personality and decor.
          </p>
          <ImagesGrid col={4}>
          <a href="https://amzn.to/3FDnZyP">
            <img
            src="https://m.media-amazon.com/images/I/61VJd67Xa+L._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3FDnZyP'>TEAMPD</a>
          <a href="https://amzn.to/3BHAMPO">
            <img
            src="https://m.media-amazon.com/images/I/61WQvhvkLsL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3BHAMPO'>Luxjet</a>
          </ImagesGrid>
      </Top>
      <Top>
          <TopTitre>4.E-reader</TopTitre>
          <p>
           e-reader can be a great gift for someone who loves to read and wants a convenient way to access their favorite books.
          </p>
          <a href="https://amzn.to/3PzxNyy">
            <img
            src="https://m.media-amazon.com/images/I/61IvEw1KL+L._AC_SL1001_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3PzxNyy'>All-new Kindle</a>
      </Top>
      <Top>
          <TopTitre>5.Book-themed gifts</TopTitre>
          <p>
          Bookworms will love gifts that show off their love of literature. Consider getting them a book-themed mug, t-shirt, or piece of jewelry.
          </p>
          <ImagesGrid col={4}>
          <a href="https://amzn.to/3hC6W8g">
            <img
            src="https://m.media-amazon.com/images/I/61GY1A6fdKL._AC_SL1001_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3hC6W8g'>TMISHION Jewellery</a>
          <a href="https://amzn.to/3Wf7CzO">
            <img
            src="https://m.media-amazon.com/images/I/61drHiKOjXL._AC_SX679_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3Wf7CzO'>Miniblings Silver Book </a>
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

        Remember, the key to choosing a great gift for a bookworm is to think about their interests and passions. With a little bit of thought, you can find a gift that they will truly appreciate and enjoy.
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