// a changer !
const titreOnglet = "how to take care of your cat"
const description = "Welcome to our blog about how to take care of your cat! Owning a cat can be a rewarding and enjoyable experience, but it's important to understand the proper care and attention that your feline friend needs in order to thrive. In this blog, we'll cover a range of topics related to cat care, from providing a suitable living space and offering a nutritious diet, to grooming and exercising your cat and keeping them healthy. Whether you're a seasoned cat owner or a first-time pet parent, we hope you'll find our tips and advice helpful in caring for your feline companion."

const sujet = "advice"
const titre = "how to htake care of your cat"



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
      
        <IntroductionText>Welcome to our blog about how to take care of your cat! Owning a cat can be a rewarding and enjoyable experience, but it's important to understand the proper care and attention that your feline friend needs in order to thrive. In this blog, we'll cover a range of topics related to cat care, from providing a suitable living space and offering a nutritious diet, to grooming and exercising your cat and keeping them healthy. Whether you're a seasoned cat owner or a first-time pet parent, we hope you'll find our tips and advice helpful in caring for your feline companion.</IntroductionText>
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
          Make sure your cat has a comfortable place to sleep, such as a bed or crate, and a litter box for bathroom needs. Keep your cat's living space clean and free of any objects that may be harmful or dangerous.
          </p>
          <ImagesGrid col={1} size={8}>
            <Img text={"Bedsure Soft"} src={"https://m.media-amazon.com/images/I/41huhOE2GxL._SX300_SY300_QL70_ML2_.jpg"} href={"https://amzn.to/3hHPm31"} />
          </ImagesGrid>
      </Top>

      <Top className="mt-10">
        <div className='w-full h-full flex justify-between items-center'>
          <div className='pr-10'>
            <TopTitre>2.Offer a nutritious diet</TopTitre>
            <p>
            Feed your cat a nutritious diet that includes high-quality cat food and treats. Consult with your veterinarian to determine the best diet for your cat's age, size, and breed.
            </p>
          </div>

          <ImagesGrid col={1} row={1} size={3}>
            <Img text={"PERFECT FIT"} src={"https://m.media-amazon.com/images/I/51qVE5yGZcL._AC_SL1002_.jpg"} href={"https://amzn.to/3YL4Qnc"} />
          </ImagesGrid>
        </div>
      </Top>

      <Top >
            <TopTitre>3.Regularly groom your cat</TopTitre>
            <p>Regular grooming helps to keep your cat's coat and skin healthy, and also helps to strengthen the bond between you and your pet. Brush your cat's coat regularly and trim their nails as needed.</p>
            <ImagesGrid col={2} >
            <Img text={"long-haired cat"} src={"https://m.media-amazon.com/images/I/71pMj5nohaL._AC_SL1500_.jpg"} href={"https://amzn.to/3G5Vo6D"} />
            <Img text={"short-haired cat"} src={"https://m.media-amazon.com/images/I/81blkXwk3LL._AC_SL1500_.jpg"} href={"https://amzn.to/3jhf0fc"} />
          </ImagesGrid>
      </Top>

      <Top className="mt-10">
            <TopTitre>4.Keep your cat hydrated</TopTitre>
            <p>
            Provide your cat with clean, fresh water at all times. Some cats may prefer to drink from a water fountain rather than a dish, so be sure to offer both options.
            </p>
      </Top>

      <Top className="mt-10">
          <TopTitre>5.Exercise your cat regularly</TopTitre>
          <p>
          Cats need regular exercise to stay healthy and happy. Provide your cat with toys and other objects to play with, and encourage them to engage in physical activity by playing with them or using a laser pointer.
          </p>
          <ImagesGrid col={2} >
            <Img text={"Toy with Luminous Butterfly"} src={"https://m.media-amazon.com/images/I/51pq6+GVFzL._AC_SL1001_.jpg"} href={"https://amzn.to/3Wn9MNQ"} />
            <Img text={"BiuCat"} src={"https://m.media-amazon.com/images/I/71WPsXtqm5L._AC_SL1500_.jpg"} href={"https://amzn.to/3jmm9eg"} />
          </ImagesGrid>
      </Top>
      <Top>
      <TopTitre>6.Keep your cat healthy</TopTitre>
          <p>
          Regularly check your cat for signs of illness, such as changes in appetite, behavior, or appearance. If you notice any unusual symptoms, consult a veterinarian for proper treatment.
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