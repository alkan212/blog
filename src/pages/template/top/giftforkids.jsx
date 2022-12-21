// a changer !
const titreOnglet = " 5 gifts for kids"
const description = "Welcome to our blog about gift ideas for kids! As parents and caregivers, it can be challenging to find the perfect gift for the little ones in our lives. They may not yet have specific interests or hobbies, and it can be hard to know what they will enjoy and use. That's where we come in! Our team has scoured the internet and tested out various gifts to bring you a curated selection of the best gift ideas for kids. From educational toys to fun games and activities, we've got you covered. We hope our suggestions will inspire you and make your gift-giving experience a little easier. Happy shopping! "

const sujet = "gifts"
const titre = "5 gifts for kids"



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
      
        <IntroductionText>Welcome to our blog about gift ideas for kids! As parents and caregivers, it can be challenging to find the perfect gift for the little ones in our lives. They may not yet have specific interests or hobbies, and it can be hard to know what they will enjoy and use. That's where we come in! Our team has scoured the internet and tested out various gifts to bring you a curated selection of the best gift ideas for kids. From educational toys to fun games and activities, we've got you covered. We hope our suggestions will inspire you and make your gift-giving experience a little easier. Happy shopping!</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.musical instrument</TopTitre>

          <p>
          Musical instruments can be a great gift for kids for a number of reasons. First and foremost, learning to play an instrument can be a fun and rewarding activity for kids. It helps to stimulate their creativity and can provide a sense of accomplishment as they learn new skills. Additionally, studies have shown that learning to play a musical instrument can have numerous cognitive benefits, including improving memory and concentration, enhancing problem-solving skills, and increasing spatial-temporal skills.

Playing an instrument can also help kids to develop fine motor skills and coordination, and it can be a great way for them to express themselves and connect with others through music. Finally, learning to play an instrument can be a great way for kids to relax and de-stress, as it can be a soothing and meditative activity. Overall, a musical instrument can be a wonderful gift that keeps on giving, as it can provide kids with a lifetime of enjoyment and personal growth{' '}
        
          </p>
          <ImagesGrid col={3} row={1} >
            <Img text={"Ukulele"} src={"https://m.media-amazon.com/images/I/71zbhxqqMAS._AC_SL1500_.jpg"} href={"https://amzn.to/3PCRGEK"} />
            <Img text={"Rockjam"} src={"https://m.media-amazon.com/images/I/91CS0eGcsXL._AC_SL1500_.jpg"} href={"https://amzn.to/3v2jzN9"} />
            <Img text={"Alesis Turbo Mesh Kit"} src={"https://m.media-amazon.com/images/I/81Ic8U91IiL._AC_SL1500_.jpg"} href={"https://amzn.to/3jjw8kk"} />
          </ImagesGrid>

      </Top>

      <Top>
          <TopTitre>2.Board games or puzzles</TopTitre>

          <p>
          Board games and puzzles can be great gifts for kids for several reasons. First, they provide a fun and engaging activity that kids can enjoy on their own or with others. This can be especially useful during the pandemic when social distancing measures may limit in-person play dates or other activities. Board games and puzzles can also help to promote cognitive development in kids by challenging their problem-solving skills, strategic thinking, and decision-making abilities.
          </p>
          <ImagesGrid col={2} row={1} gap={4}>
            <Img text={"Puzzle 3D"} src={"https://m.media-amazon.com/images/I/81HjTEb9Z6L._AC_SL1500_.jpg"} href={"https://amzn.to/3HNSvsG"} />
            <Img text={"JUMANJI"} src={"https://m.media-amazon.com/images/I/9130T-YaWeL._AC_SL1500_.jpg"} href={"https://amzn.to/3V7Ml9x"} />
          </ImagesGrid>         
      </Top>
      <Top>
          <TopTitre>3.lego</TopTitre>
          <p>
          Legos are also a versatile toy that can be enjoyed by kids of all ages. There are different Lego sets available that cater to different interests and skill levels, so kids can continue to challenge themselves as they grow and develop. Legos can be a great toy for kids to play with on their own or with others, as they can build and play together, fostering teamwork and collaboration. Overall, Legos can be a great gift that provides kids with endless hours of fun and learning.
          </p>
          <ImagesGrid col={2} row={1} gap={4}>
            <Img text={"Star Wars"} src={"https://m.media-amazon.com/images/I/61X1rcPCh3L._AC_SL1005_.jpg"} href={"https://amzn.to/3FDK1S4"} />
            <Img text={"classic"} src={"https://m.media-amazon.com/images/I/710nlp90uCL._AC_SL1000_.jpg"} href={"https://amzn.to/3WsCxbl"} />
          </ImagesGrid>
      </Top>
      <Top>
          <TopTitre>4.video games</TopTitre>
          <p>
          Video games can be a great gift for kids for a number of reasons. First and foremost, video games can be a lot of fun and provide a way for kids to relax and unwind after a long day. They can also be a great way for kids to engage in solo play or connect with friends online or in person.

In addition to being enjoyable, video games can also provide a number of educational and developmental benefits for kids. Many video games require players to solve problems, think critically, and make decisions, which can help to promote cognitive development. Some video games also offer educational content, such as history or science-based games, which can be a fun and interactive way for kids to learn.

Video games can also be a great way for kids to develop hand-eye coordination and fine motor skills, as they use a controller or other input device to interact with the game. Finally, video games can be a great way for kids to learn about teamwork and collaboration, as many games require players to work together in order to succeed.

Overall, video games can be a great gift for kids that provides a balance of fun and learning. However, it's important to keep in mind that video games should be used in moderation and that parents and caregivers should monitor their use to ensure that they are age-appropriate and not causing any negative impacts on the child's development or well-being.
          </p>
          <p>video games can be very expensive <a href="https://www.instant-gaming.com/?igr=gamer-0f1f70">click here </a>for discounts</p>
          
      </Top>
      <Top>
          <TopTitre>5.Book-themed gifts</TopTitre>
          <p>
          Science kits can also be a lot of fun for kids, as they often include activities or experiments that kids can perform on their own or with others. This can be a great way for kids to learn and have fun at the same time. Science kits can also be a great way for kids to learn about the scientific method and how to conduct experiments, which can be valuable skills for later in life.
          </p>
          <ImagesGrid col={2} row={1} gap={4}>
            <Img text={"NATIONAL GEOGRAPHIC Kit"} src={"https://m.media-amazon.com/images/I/91AQBSotB2L._AC_SL1500_.jpg"} href={"https://amzn.to/3v2cBaQ"} />
            <Img text={"Levenhuk LabZZ MTB3 Starter Kit for Kids"} src={"https://m.media-amazon.com/images/I/61B4JsSRP8L._AC_SL1000_.jpg"} href={"https://amzn.to/3G5oCCW"} />
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

        In conclusion, finding the perfect gift for kids can be a challenge, but with a little thought and research, it's possible to find something that they will love and that will provide them with educational and developmental benefits. From musical instruments and board games to science kits and Legos, there are many options available that can help to stimulate kids' minds and keep them engaged.

It's important to consider the child's interests and age when selecting a gift, as well as any potential benefits the gift may have. It's also important to keep in mind that gifts don't have to be expensive or extravagant to be meaningful. Sometimes, the simplest gifts can be the most cherished. Whatever gift you choose, make sure to put thought and care into it, and most importantly, have fun shopping for the special child in your life!
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