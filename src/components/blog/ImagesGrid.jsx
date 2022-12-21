
String.prototype.format = function() {
  let a = this;
  let k = "";
  for (k in arguments) {
  a = a.replace("{" + k + "}", arguments[k])
  }
  return a
}


export function ImagesGrid({col, row, gap=4, size="100", ...props}) {

  gap = gap*10

  let st = {
    gridTemplateColumns:"repeat({value}, 1fr)".replace("{value}", col),
    gridTemplateRows:"repeat({value}, 1fr)".replace("{value}", row),
    gridGap:gap,
    width:"{0}%".replace("{0}", size.toString()),
  }

  return (
    <div className="grid relative my-10" style={st} {...props}>
 
    </div>
  )
}