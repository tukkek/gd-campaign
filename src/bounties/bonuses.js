import * as bounties from './bounties.js'
import * as rpg from '../rpg.js'

const BONUS=2
const TIMEBONUS1='Character with less than 8 hours played'
const TIMEBONUS2='Character with less than 4 hours played'

export var bonuses=new class extends bounties.Bounties{
  constructor(){
    super('Extra',[TIMEBONUS1,TIMEBONUS2,'Hardcore character','No use of shared stash'])
    this.bounties.push(`Character level lower than ${rpg.choose([30,40,50])}`)
    this.bounties.push(`Character with less than ${rpg.choose([20,30,40])} devotion points`)
    for(let b of this.bounties)
      this.points[b]=rpg.roll(1,3)
    this.points[TIMEBONUS1]=BONUS
    this.points[TIMEBONUS2]=BONUS*2
  }
}
