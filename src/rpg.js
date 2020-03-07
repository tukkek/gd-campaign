export function shuffle(array,clone=false){//adapted from https://stackoverflow.com/a/6274381
  if(clone) array=Array.from(array)
  for(let i=array.length-1;i>0;i--) {
    let j=Math.floor(Math.random()*(i+1))
    let x=array[i]
    array[i]=array[j]
    array[j]=x
  }
  return array
}

export function choose(array){return array[Math.floor(Math.random()*array.length)]}

export function roll(min,max){
  min=Math.ceil(min)
  max=Math.floor(max)
  return Math.floor(Math.random()*(max-min+1))+min
}
  
export function chancein(n){return roll(1,n)==1}
 
