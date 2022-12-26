
export function Sujet({className, ...props}) {
  
  const cl = "text-indigo-500 block text-center text-lg font-semibold "+className;

  return (
    <span className={cl} {...props}></span>
  )
}