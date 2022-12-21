
String.prototype.format = function() {
  let a = this;
  let k = "";
  for (k in arguments) {
  a = a.replace("{" + k + "}", arguments[k])
  }
  return a
}


export function ImagesGrid({col, row, gap=4, size=null, ...props}) {

  gap = gap*10

  if(size == null){
    size = "100%";
  }else{
    size = (size*50).toString()+"px";
  }
  


  let st = {
    gridTemplateColumns:"repeat({value}, 1fr)".replace("{value}", col),
    gridTemplateRows:"repeat({value}, 1fr)".replace("{value}", row),
    gridGap:gap,
    width:"100%",
    maxWidth:size,
  }

  return (
    <div className="grid relative my-10" style={st} {...props}>
 
    </div>
  )
}