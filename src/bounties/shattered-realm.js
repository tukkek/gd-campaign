import * as bounties from './bounties.js'

const SHARDS=[]
for(let i=15;i<=75;i+=15)
  SHARDS.push('Reach shard '+i)

export var sr=new class extends bounties.Bounties{
  constructor(){super('Shattered realm',SHARDS,true)}
}
