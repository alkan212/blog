
export function Image({...props}) {
  return (
    <img decoding="async" loading="lazy"  {...props}/>
  )
}
