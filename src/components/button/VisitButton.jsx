export function VisitButton({href="#", ...props}) {
  return (
    <a 
    target={"_blank"} 
    rel="noreferrer" 
    href={href}
    className='px-7 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md no-underline text-lg'
    {...props}
    ></a>
  )
}
