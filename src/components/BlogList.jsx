import { Image } from "@/components/Image"
import { useEffect } from "react"

function getRandomElements(array, number) {
  // Create a new array to store the selected elements
  const selected = [];

  if(number > array.length){number = array.length}

  // Loop 20 times
  while (selected.length < number) {
    // Get a random index from the array
    const index = Math.floor(Math.random() * array.length);

    // Get the element at the random index
    const element = array[index];

    // If the element is not already in the selected array, add it
    if (!selected.includes(element)) {
      selected.push(element);
    }
  }

  // Return the selected elements
  return selected;
}

function getRandomAuthor(authors) {
  // Get a random index from the array
  const index = Math.floor(Math.random() * authors.length);

  // Return the author at the random index
  return authors[index];
}






export function BlogList({data, sujet="", ne=false}) {


  function getRandomDate() {
    // Create an array of months
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    // Get a random month from the array
    const month = months[Math.floor(Math.random() * months.length)];
  
    // Get a random day of the month (1-31)
    const day = Math.floor(Math.random() * 31) + 1;
  
    // Return the date in the format "Mar 16, 2020"
    return `${month} ${day}, 2022`;
  }


  if(data.length == 0){
    return (<></>)
  }

  

  return (
    <div className="relative pr-0 pl-10 border-t border-slate-100  py-16">
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="">
 
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl flex items-center">
          <p>{sujet}</p>
          {ne && 
            <span class="relative ml-3 inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
              <p className="z-[1]">New</p>
              <span className="absolute rounded-full bg-indigo-100 w-full h-full animate-ping left-0"></span>
            </span>
          }
        </h2>
        

        </div>
        <div id={sujet} style={{offsetAnchor:"-200% -200%"}} className="scrollbar mt-5 flex justify-flex flex-nowrap w-full max-w-full pb-4 space-x-6 overflow-x-auto">
          {data.slice(0,20).map((post) => (
            <a href={`/blog/${post.href}`} key={post.title} className="w-full min-w-[350px] max-w-[350px] flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl east-out duration-100">
              <div className="flex-shrink-0">
                {/* <Image className="h-48 w-full object-cover" src={post.imageUrl} alt="" /> */}
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                      {sujet}
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title.slice(0,30)}{post.title.length > 30 && "..."}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description.slice(0,100)+"..."}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div>
                      <span suppressHydrationWarning className="sr-only">{post.author.name}</span>
                      <Image suppressHydrationWarning class="h-10 max-w-10 rounded-full" src={post.author.img} alt="" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p suppressHydrationWarning className="text-sm font-medium text-gray-900">
                        {post.author.name}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time suppressHydrationWarning >{ getRandomDate() }</time>
                      <span aria-hidden="true">&middot;</span>
                      <span suppressHydrationWarning>{ Math.round(Math.random()*10) } read</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
