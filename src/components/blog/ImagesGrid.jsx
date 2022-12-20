
String.prototype.format = function() {
  let a = this;
  let k = "";
  for (k in arguments) {
  a = a.replace("{" + k + "}", arguments[k])
  }
  return a
}


export function ImagesGrid({col, row, ...props}) {

  let st = {
    gridTemplateColumns:"repeat({value}, 1fr)".replace("{value}", col),
    gridTemplateRows:"repeat({value}, 1fr)".replace("{value}", row),
  }
  console.log(st)
  return (
    <div className="grid" style={st} {...props}>
 
    </div>
  )
}