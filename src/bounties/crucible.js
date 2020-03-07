import * as bounties from './bounties.js'

const WAVES=[]
for(let i=30;i<170;i+=30)
  WAVES.push('Reach wave '+i)
WAVES.push('Reach wave 170')

export var crucible=new class extends bounties.Bounties{
  constructor(){
    super('Crucible',WAVES,true)
  }
}
