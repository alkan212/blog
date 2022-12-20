
export function Lien({href, color="text-indigo-600" ,...props}) {
  let cl = 'text-lg font-medium ' + color;
  return (
    <a target={"_blank"} className={cl} href={href}  {...props}></a>
  )
}