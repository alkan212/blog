// a changer !
const titreOnglet = "how to take care of your dog"
const description = "Welcome to our blog about how to take care of your dog! Owning a dog can be a rewarding and enjoyable experience, but it's important to understand the proper care and attention that your furry friend needs in order to thrive. In this blog, we'll cover a range of topics related to dog care, from providing a suitable living space and offering a nutritious diet, to exercising and grooming your dog and keeping them healthy. Whether you're a seasoned dog owner or a first-time pet parent, we hope you'll find our tips and advice helpful in caring for your canine companion."

const sujet = "advice"
const titre = "how to htake care of your dog"



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
      
        <IntroductionText>Welcome to our blog about how to take care of your dog! Owning a dog can be a rewarding and enjoyable experience, but it's important to understand the proper care and attention that your furry friend needs in order to thrive. In this blog, we'll cover a range of topics related to dog care, from providing a suitable living space and offering a nutritious diet, to exercising and grooming your dog and keeping them healthy. Whether you're a seasoned dog owner or a first-time pet parent, we hope you'll find our tips and advice helpful in caring for your canine companion.</IntroductionText>
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
          Make sure your dog has a comfortable place to sleep, such as a crate or dog bed, and a secure and safe outdoor area for exercise and play.
          </p>
          <ImagesGrid col={1} row={1} size={6.5}>
            <Img text={"Bjird Dog Basket"} src={"https://m.media-amazon.com/images/I/71i41JO57oL._AC_SL1500_.jpg"} href={"https://amzn.to/3Vk15m7"} />
          </ImagesGrid>
      </Top>

      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
            <TopTitre>2.Offer a nutritious diet</TopTitre>
            <p>
            Feed your dog a nutritious diet that includes high-quality dog food and treats. Avoid feeding your dog table scraps or other human food, as some foods can be harmful to dogs. Consult with your veterinarian to determine the best diet for your dog's age, size, and breed.
            </p>
          </div>

          <ImagesGrid col={1} row={1} size={3}>
            <Img text={"NUTRIVET"} src={"https://m.media-amazon.com/images/I/71BqrIvEphL._AC_SL1500_.jpg"} href={"https://amzn.to/3YKv3m8"} />
          </ImagesGrid>
        </div>
      </Top>

      <Top >
            <TopTitre>3.Regularly groom your dog</TopTitre>
            <p>Regular grooming helps to keep your dog's coat and skin healthy, and also helps to strengthen the bond between you and your pet. Brush your dog's coat regularly and give your dog regular baths using a shampoo specifically designed for dogs.</p>
            <ImagesGrid col={2}  >
            <Img text={"CIICII"} src={"https://m.media-amazon.com/images/I/712dAofmPGL._AC_SL1500_.jpg"} href={"https://amzn.to/3PL5ywI"} />
            <Img width={1} text={"Pet Head Dog Shampoo"} src={"https://m.media-amazon.com/images/I/818Skgm2JRL._AC_SL1500_.jpg"} href={"https://amzn.to/3hF2PIU"} />
          </ImagesGrid>
      </Top>

      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
            <TopTitre>4.Keep your dog hydrated</TopTitre>
            <p>
            Provide your dog with clean, fresh water at all times. Some dogs may prefer to drink from a water bottle rather than a dish, so be sure to offer both options.
            </p>
          </div>

        

          <ImagesGrid col={1} size={6}>
            <Img text={"Ferplast"} src={"https://m.media-amazon.com/images/I/71H0rc2XHiL._AC_SL1000_.jpg"} href={"https://amzn.to/3YA08J9"} />
          </ImagesGrid>
        </div>
      </Top>

      <Top className="mt-10">
          <TopTitre>5.Exercise your dog regularly</TopTitre>
          <p>
          Dogs need regular exercise to stay healthy and happy. Take your dog for walks or runs, play fetch, or participate in other activities that will provide your dog with the physical and mental stimulation they need.
          </p>
      </Top>
      <Top>
      <TopTitre>6.Keep your dog healthy</TopTitre>
          <p>
          Regularly check your dog for signs of illness, such as changes in appetite, behavior, or appearance. If you notice any unusual symptoms, consult a veterinarian for proper treatment.
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

        In conclusion, taking care of a dog requires a commitment to providing a safe, comfortable, and enriching environment for your furry friend. By following the tips and guidelines outlined in this blog, you can help ensure that your dog stays healthy and happy for years to come. Remember to provide a suitable living space, offer a nutritious diet, keep your dog hydrated, groom your dog regularly, exercise your dog regularly, and keep your dog healthy by regularly checking for signs of illness. With proper care and attention, your dog can be a beloved and rewarding companion.




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