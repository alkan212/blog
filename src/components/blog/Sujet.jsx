
export function Sujet({className, ...props}) {
  
  const cl = "block text-center text-lg font-semibold "+className;

  return (
    <span className={cl} {...props}></span>
  )
}