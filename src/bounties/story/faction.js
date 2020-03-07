import * as rpg from '../../rpg.js'

const FRIENDLY=['Tolerated','Friendly','Respected','Honored','Revered']
const HOSTILE=['Hostile','Despised','Hated','Nemesis']

export class Faction{
  constructor(name,friendly=true){
    this.name=name
    this.reputation=friendly?FRIENDLY:HOSTILE
    this.points=rpg.roll(1,4)-1
  }
  
  generate(){
    let i=0
    while(i<this.reputation.length-1&&rpg.chancein(2)) i+=1
    //console.log(this.name,this.points,Math.pow(2,i))
    this.points*=i//Math.pow(2,i)
    return `Reach ${this.reputation[i].toUpperCase()} with ${this.name}`
  }
}
