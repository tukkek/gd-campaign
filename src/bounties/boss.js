import * as bounties from './bounties.js'
import * as rpg from '../rpg.js'

class Bosses extends bounties.Bounties{
  constructor(){
    super('Bosses',['Avatar of Mogdrogen','Clone of John Bourbon','Rashalga, the Mad Queen','Lokarr','Callagadra, Scion of the Sands','Crate of Entertainment'])
    for(let b of this.bounties)
      this.points[b]=rpg.roll(1,4)+rpg.roll(1,4)
  }
  
  generate(){
    let i=0
    while(i<this.bounties.length-1&&rpg.chancein(2)) i+=1
    this.bounties=rpg.shuffle(this.bounties).slice(0,i)
    return super.generate()
  }
}

export var bosses=new Bosses()
