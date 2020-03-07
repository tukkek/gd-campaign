import * as rpg from '../rpg.js'

export class Bounties{
  constructor(name,bounties=[],cumulative=false){
    this.name=name
    this.bounties=bounties
    this.cumulative=cumulative
    this.points={} //point amount by bounty (override)
  }
  
  generate(){
    let d=document.createElement('div')
    let title=document.createElement('div')
    title.innerHTML=`<strong>${this.name}</strong>`
    if(this.cumulative) title.innerHTML+=' (only highest bounty applies)'
    if(this.cumulative) title.innerHTML+=':'
    d.appendChild(title)
    let bounties=document.createElement('ul')
    let sum=0
    for(let b of this.bounties){
      let points=this.points[b]||rpg.roll(1,4)-1
      if(this.points[b]===0||points==0) continue
      sum+=points
      let li=document.createElement('li')
      li.innerHTML=`${b} (<strong>${this.cumulative?sum:points} points</strong>)`
      bounties.appendChild(li)
    }
    if(bounties.childNodes.length==0){
      let li=document.createElement('li')
      li.innerHTML='No bounties.'
      bounties.appendChild(li)
    }
    d.appendChild(bounties)
    return d
  }
}
