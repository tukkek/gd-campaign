import * as rpg from './rpg.js'

const MASTERIES=
  ['Soldier','Demolitionist','Occultist','Nightblade','Arcanist','Shaman','Inquisitor','Necromancer','Oathkeeper']

class Parameter{
  constructor(name,options=false){
    this.name=name
    this.options=options //from most likely to least likely
  }
  
  get value(){
    let a=rpg.roll(0,this.options.length-1)
    let b=rpg.roll(0,this.options.length-1)
    return this.options[Math.min(a,b)]
  }
  
  generate(){
    let d=document.createElement('li')
    d.innerHTML=`<strong>${this.name}</strong> is <strong>${this.value}</strong> for this campaign. `
    return d
  }
}

export var crafting=new class extends Parameter{
  constructor(){super('Crafting',['allowed'])} //TODO
}

export var stash=new class extends Parameter{
  constructor(){super('Use of the shared stash',['allowed'])} //TODO
}

export var masteries=new class extends Parameter{
  constructor(){super('Allowed masteries',MASTERIES)}
  
  generate(){
    let d=super.generate()
    let a=rpg.roll(2,this.options.length-1)
    let b=rpg.roll(2,this.options.length-1)
    let nmasteries=Math.min(a,b)
    let allowed=rpg.shuffle(this.options).slice(0,nmasteries)
    //let allowed=rpg.shuffle(this.options).slice(0,rpg.roll(2,this.options.length-1))
    allowed.sort()
    allowed=allowed.join(', ')
    d.innerHTML=`<strong>${this.name}</strong> for this campaign are: <strong>${allowed}</strong>.`
    return d
  }
}

export var all=[masteries]//,crafting,stash]
