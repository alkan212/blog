// a changer !
const titreOnglet = "  how to have a happy hamster "
const description = "Hamsters are cute and entertaining pets that can bring joy to their owners. Here are some tips for keeping your hamster happy."

const sujet = "advice"
const titre = "how to have a happy hamsters"



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
      
        <IntroductionText>Welcome to our blog on how to make your hamster happy! Hamsters are popular pets due to their small size and adorable personalities. However, like all pets, they require proper care and attention to thrive. In this blog, we will discuss various ways to keep your hamster happy and healthy. From providing a spacious and clean cage to offering a variety of toys and a healthy diet, there are many things you can do to ensure your hamster is content. We will also discuss the importance of social interaction and exercise for your hamster's overall well-being. Whether you are a new hamster owner or an experienced pet parent, we hope this blog will provide valuable information on how to care for your furry friend.
</IntroductionText>
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
          <TopTitre>1.Provide a spacious cage</TopTitre>
          <p>
          Hamsters need plenty of room to explore and play. Make sure that the cage is at least 24 inches long, 12 inches wide, and 12 inches tall.Click <a href={"whatisagoodcageforhamster"}>here</a> too see our blog about what is a good cage for hamster{' '}      
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={5}>
            <Img text={"Zolux Cage"} src={"https://m.media-amazon.com/images/I/61nM7XMT8gL._AC_.jpg"} href={"https://amzn.to/3WeXdno"} />
          </ImagesGrid>
          </div>
      </Top>
      <Top>
          <TopTitre>2.Keep the cage clean</TopTitre>

          <p>
          Clean the cage regularly to keep your hamster healthy and happy. This includes removing soiled bedding and food debris, as well as disinfecting the cage.
          </p>
      </Top>

      <Top>
          <TopTitre>3.Offer a variety of toys</TopTitre>
          <p>
          Hamsters love to play and chew, so provide plenty of toys for them to interact with. This can include chew toys, tunnels, and balls.
          </p>
          <ImagesGrid col={2} row={1} gap={4} >
            <Img text={"FINEVERNEK"} src={"https://m.media-amazon.com/images/I/71fBgIWzE-L._AC_SL1500_.jpg"} href={"https://amzn.to/3FKtBqZ"} />
            <Img text={"ball"} src={"https://m.media-amazon.com/images/I/71bxtUHxoaL._AC_SL1500_.jpg"} href={"https://amzn.to/3G94lw6"} />
          </ImagesGrid>
      </Top>
      <Top>
          <TopTitre>4.Give your hamster exercise</TopTitre>
          <p>
          Hamsters are active creatures and need time to run and play outside of their cage. Set up a hamster wheel or provide a playpen for your hamster to explore.
          </p>
      </Top>
      <Top>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>5.Provide a healthy diet</TopTitre>
          <p>
          Feed your hamster a balanced diet of fresh fruits and vegetables, as well as a high-quality hamster mix. Avoid giving your hamster too many treats, as this can lead to obesity.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={5}>
            <Img text={"Vitakraft"} src={"https://m.media-amazon.com/images/I/81n+4mvyXUL._AC_SL1500_.jpg"} href={"https://amzn.to/3G99Fjh"} />
          </ImagesGrid>
          </div>
      </Top>
          <TopTitre>6.Give your hamster social interaction</TopTitre>
          <p>
          Hamsters are social animals and thrive on interaction with their owners. Spend time talking to your hamster and handling them daily to keep them happy and well-adjusted.
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

        In conclusion, there are many steps you can take to ensure that your hamster is happy and healthy. From providing a spacious and clean cage to offering a variety of toys and a healthy diet, there are many things you can do to keep your hamster entertained and well-nourished. It is also important to give your hamster plenty of social interaction and exercise to keep them active and engaged. By following these tips and taking good care of your hamster, you can help them live a long and happy life. Remember, every hamster is unique and may have different needs, so it is important to pay attention to your hamster's behavior and adjust your care routine as needed. With a little love and attention, your hamster will be a happy and beloved member of your family.
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