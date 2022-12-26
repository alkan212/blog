// a changer !
const titreOnglet = "  how to take care of your bird "
const description = "Welcome to our blog about how to take care of your bird! Owning a bird can be a rewarding and enjoyable experience, but it's important to understand the proper care and attention that your feathered friend needs in order to thrive. In this blog, we'll cover a range of topics related to bird care, from providing a suitable living space and offering a nutritious diet, to keeping your bird healthy and happy through mental stimulation and social interaction. Whether you're a seasoned bird owner or a first-time pet parent, we hope you'll find our tips and advice helpful in caring for your feathered companion."

const sujet = "advice"
const titre = "how to take care of your bird"



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
      
        <IntroductionText>Welcome to our blog about how to take care of your bird! Owning a bird can be a rewarding and enjoyable experience, but it's important to understand the proper care and attention that your feathered friend needs in order to thrive. In this blog, we'll cover a range of topics related to bird care, from providing a suitable living space and offering a nutritious diet, to keeping your bird healthy and happy through mental stimulation and social interaction. Whether you're a seasoned bird owner or a first-time pet parent, we hope you'll find our tips and advice helpful in caring for your feathered companion.
</IntroductionText>
      </div>
    </>
  )
}

function Contenu(){
  return (
    <>
      <Top>
          <TopTitre>1.Provide a suitable living space</TopTitre>
          <p>
          Make sure your bird has a spacious, well-ventilated cage that is appropriate for its size and species. The cage should be large enough for the bird to move around, stretch its wings, and play. It should also be equipped with perches, toys, and other objects for the bird to interact with. Click <a href={"whatisagoodcageforbird"}>here</a> too see our blog about what is a good cage for hamster
          </p>
          <ImagesGrid col={2} row={1} gap={4} >
            <Img text={"Vision"} src={"https://m.media-amazon.com/images/I/81rVasA2qbS._AC_SL1500_.jpg"} href={"https://amzn.to/3G9rM8x"} />
            <Img text={"Allazone"} src={"https://m.media-amazon.com/images/I/71zafuJyrZL._AC_SL1500_.jpg"} href={"https://amzn.to/3HW9Ijp"} />
          </ImagesGrid>
      </Top>
      <Top>
          <TopTitre>2.Offer a varied diet</TopTitre>

          <p>
          Feed your bird a varied diet that includes a variety of seeds, grains, vegetables, and fruits. Some birds may also need to be given a supplement such as a vitamin or mineral mix. Avoid feeding your bird avocados, chocolate, and other foods that are toxic to birds.
          </p>
          <ImagesGrid col={3} row={1} gap={4} >
            <Img text={"Donath"} src={"https://m.media-amazon.com/images/I/61zOaRsjryL._AC_SL1500_.jpg"} href={"https://amzn.to/3FO1jMu"} />
            <Img text={"VERSELE-LAGA"} src={"https://m.media-amazon.com/images/I/81hATnWQLKL._AC_SL1500_.jpg"} href={"https://amzn.to/3PJL5sk"} />
            <Img text={"Aimé Nature"} src={"https://m.media-amazon.com/images/I/71g6f6zCplL._AC_SL1500_.jpg"} href={"https://amzn.to/3I08x2z"} />
          </ImagesGrid>
      </Top>

      <Top>
          <TopTitre>3.Keep the cage clean</TopTitre>
          <p>
          Clean the cage regularly to keep it free of dirt and debris. This includes removing droppings, discarded food, and any other waste. Be sure to also clean and disinfect the water and food dishes regularly to prevent the growth of bacteria.
          </p>
      </Top>
      <Top>
          <TopTitre>4.Provide plenty of water</TopTitre>
          <p>
          Keep your bird hydrated by providing a clean, fresh source of water at all times. Some birds may prefer to drink from a water bottle rather than a dish, so be sure to offer both options.
          </p>
      </Top>
      <Top>
      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
          <TopTitre>5.Provide mental stimulation</TopTitre>
          <p>
          Birds are intelligent and curious creatures, so be sure to offer plenty of opportunities for mental stimulation. This can include toys, puzzles, and other objects to play with, as well as interaction with you and other people.
          </p>
          </div>
          <ImagesGrid col={1} row={1} size={5}>
            <Img text={"NAMIS Toys for Birds"} src={"https://m.media-amazon.com/images/I/71qPZR+9XNL._AC_SL1500_.jpg"} href={"https://amzn.to/3WHm7w1"} />
          </ImagesGrid>
          </div>
      </Top>
          <TopTitre>6.Keep your bird healthy</TopTitre>
          <p>
          Regularly check your bird for signs of illness, such as changes in appetite, behavior, or appearance. If you notice any unusual symptoms, consult a veterinarian for proper treatment.
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

        In conclusion, taking care of a bird requires a commitment to providing a safe, comfortable, and enriching environment for your feathered friend. By following the tips and guidelines outlined in this blog, you can help ensure that your bird stays healthy and happy for years to come. Remember to provide a spacious, well-ventilated cage, offer a varied and nutritious diet, keep the cage clean, provide plenty of water, and offer plenty of opportunities for mental stimulation and social interaction. With proper care and attention, your bird can be a beloved and rewarding companion.
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