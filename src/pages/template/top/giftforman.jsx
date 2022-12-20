// a changer !
const titreOnglet = "5 gifts to give to a man"
const description = "It is always hard to find a gift for your husband your dad or your son. Heres 10 gifts how will be always be appreciated by a man "

const sujet = "gifts"
const titre = "5 gifts to give to a man"




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
import { ImagesGrid } from '@/components/blog/ImagesGrid'

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
      
        <IntroductionText>It is always hard to find a gift for your husband your dad or your son. Heres 10 gifts how will be always be appreciated by a man</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.watches</TopTitre>
          <p>
          Watches have long been a staple accessory for men, serving not only as a practical tool for keeping track of time, but also as a fashion statement and symbol of status.If he already has one it is still a good gift because watches for man are like bag for women we love having a lot of them.{' '}
          </p>
          <div>
          Here are some watches that men often like.
          <ImagesGrid col={4} row={2}>
          <a href="https://amzn.to/3G1I3MN">
            <img
            src="https://m.media-amazon.com/images/I/81+9JdS7UNL._AC_SX342_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3G1I3MN'>AUTOMATIC LAVAREDO</a>
          <a href="https://amzn.to/3W5XFnX">
            <img
            src="https://m.media-amazon.com/images/I/61XEg3nbJuL._AC_SX342_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3W5XFnX'>BENYAR</a>
          <a href="https://amzn.to/3W9Jb6L">
            <img
            src="https://m.media-amazon.com/images/I/61FwtvznZ1L._AC_SX342_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3W9Jb6L'>Emporio Armani</a>
          <a href="https://amzn.to/3G0JsTF">
            <img
            src="https://m.media-amazon.com/images/I/61h5jLtuOVL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3G0JsTF'>IDEALROYAL</a>
          </ImagesGrid>
          </div>
      </Top>

      <Top>
          <TopTitre>2.parfume</TopTitre>

          <p>
          Perfume, or cologne, can be an important accessory for men for a number of reasons. Here are a few:
          </p>
          <List>
            <li>Personal grooming: Perfume can be used to help men feel clean and refreshed, and can be a part of their daily grooming routine.</li>
            <li>Impression: Perfume can make a positive impression on others and may be viewed as a sign of sophistication and attention to detail.</li>
            <li>Mood and well-being: Some people believe that certain scents can have an effect on mood and well-being, and may choose to wear a particular perfume for this reason.</li>
          </List>
          <p>men love to have a multitude of perfumes to change according to their mood so don't be afraid to buy him some even if he already has one </p>

          <ImagesGrid col={2} row={1} gap={20} >
            <div>
              <a href="https://amzn.to/3j37dl0">
                <img
                className='h-full object-contain m-0 p-0'
                src="https://m.media-amazon.com/images/I/71Iu3XNRIXL._AC_SL1500_.jpg"/>
  
                <a href='https://amzn.to/3j37dl0'>azzaro for men</a>
              </a>
              
            </div>

            <div>
                <a href="https://amzn.to/3G0KnU7">
                  <img
                  className='h-full object-contain m-0 p-0'
        
                  src="https://m.media-amazon.com/images/I/71ecjSJa1oS._AC_SL1500_.jpg" />
                  <a href='https://amzn.to/3G0KnU7'>DIOR SAUVAGE</a>
                </a>
                
            </div>
            
            <div>
              <a href="https://amzn.to/3j2BmRu">
                <img
                className='h-full object-contain m-0 p-0'
                src="https://m.media-amazon.com/images/I/41ZcVeWZkeL._AC_.jpg">
                </img>
              </a>
              <a href='https://amzn.to/3j2BmRu'>INVICTUS PACO RABANNE</a>
            </div>
            
            <div>
              <a href="https://amzn.to/3Yw7g9l">
                <img
                className='h-full object-contain m-0 p-0'
                src="https://m.media-amazon.com/images/I/71z-Gw53MaL._AC_SL1500_.jpg">
                </img>
              </a>
              <a href='https://amzn.to/3Yw7g9l'>AUTOMATIC LAVAREDO</a>
            </div>

          </ImagesGrid>
          
      </Top>

      <Top>
          <TopTitre>3.cardholder</TopTitre>
          
          <p>
          cardholders are a great gift for men because they are practical, stylish, durable, and versatile. They provide a convenient way to keep cards organized and can be used for a wide range of purposes.{' '}
          </p>
          <ImagesGrid col={4} row={2}>

          <a href="https://amzn.to/3PBpv9i">
            <img
            src="https://m.media-amazon.com/images/I/91YmIz5wHYL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3PBpv9i'>Tommy Hilfiger</a>
          <a href="https://amzn.to/3WmmH1O">
            <img
            src="https://m.media-amazon.com/images/I/71HrESbZ70L._AC_SL1500_.jpg_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3WmmH1O'>vulkit</a>
          <a href="https://amzn.to/3uY1aRJ">
            <img
            src="https://m.media-amazon.com/images/I/5199Okxl47L._AC_SL1024_.jpg">

            </img>
          </a>
          <a href='https://amzn.to/3uY1aRJ'>performante</a>
          <a href="https://amzn.to/3hyzTC6">
            <img
            src="https://m.media-amazon.com/images/I/71eolCU-kFL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3hyzTC6'>NANIMOO</a>
          </ImagesGrid>
      </Top>
      <Top>
          <TopTitre>4.car accessories</TopTitre>

          <p>
          car accessories can make good gifts for men because they can be both practical and enjoyable. They can help to keep a car clean and organized, allow men to personalize their car, provide entertainment, and improve safety{' '}
          </p>
          <ImagesGrid col={4} row={2}>
          <a href="https://amzn.to/3v0DU5u">
            <img
            src="https://m.media-amazon.com/images/I/71jcgA7iHAL._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3v0DU5u'>PHONE HOLDER</a>
          <a href="https://amzn.to/3W60J3n">
            <img
            src="https://m.media-amazon.com/images/I/61imcHPvBTL._AC_SL1000_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3W60J3n'>led for car</a>
          <a href="https://amzn.to/3HJYDSu">
            <img
            src="https://m.media-amazon.com/images/I/61VOvCu-ruL._AC_SL1077_.jpg">

            </img>
          </a>
          <a href='https://amzn.to/3HJYDSu'>Bluetooth Car FM Transmitter</a>
          <a href="https://amzn.to/3hBs2DW">
            <img
            src="https://m.media-amazon.com/images/I/81Fp5UMFd-L._AC_SL1500_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3hBs2DW'>dash cam</a>
          </ImagesGrid>
      </Top>
      <Top>
          <TopTitre>5.business case</TopTitre>

          <p>
          laptop cases can be good gifts for men because they can help to protect a laptop, add a touch of style, provide convenience, and be versatile. They are a practical and functional gift that can be used on a daily basis.{' '}
          </p>
          <ImagesGrid col={4} row={2}>
          <a href="https://amzn.to/3G3oOma">
            <img
            src="https://m.media-amazon.com/images/I/71PWO9lhxCL._AC_SL1200_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3G3oOma'>David Jones</a>
          <a href="https://amzn.to/3WpIiqq">
            <img
            src="https://m.media-amazon.com/images/I/81qawNsmxiL._AC_SL1280_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3WpIiqq'>stilord</a>
          <a href="https://amzn.to/3hx26tc">
            <img
            src="https://m.media-amazon.com/images/I/81BtbFG1qvL._AC_SL1500_.jpg">

            </img>
          </a>
          <a href='https://amzn.to/3hx26tc'>Wenger Venture</a>
          <a href="https://amzn.to/3FGva9s">
            <img
            src="https://m.media-amazon.com/images/I/81ni+RRaH-L._AC_SX679_.jpg">
            </img>
          </a>
          <a href='https://amzn.to/3FGva9s'>Alfheim</a>
          </ImagesGrid>
      </Top>
    </>
    
  )
}

function Conclusion(){
  return (
    <>

        <h2>conclusion</h2>
        <p>

        In conclusion, there are many gift options for men that can be both practical and enjoyable. Some ideas include watches, cardholders, car accessories, laptop cases, and grooming products. It's important to consider the recipient's interests and preferences when selecting a gift, as well as the occasion and the budget. Personalized gifts, such as a monogrammed wallet or a gift certificate for a special experience, can also be a thoughtful and meaningful choice. Ultimately, the best gift for a man will depend on his individual interests and needs
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