import * as bounties from '../bounties.js'
import * as faction from './faction.js'

export class Act extends bounties.Bounties{
  constructor(name,bounties,factions=[]){
    super(name,bounties)
    this.factions=factions
  }
  
  generate(){
    for(let f of this.factions.reverse()){
      let bounty=f.generate()
      this.points[bounty]=f.points
      if(bounty) this.bounties.unshift(bounty)
    }
    return super.generate()
  }
}

export var act1=new class extends Act{
  constructor(){super('Act 1',['Defeat Warden Krieg'],[new faction.Faction("Devil's Crossing")])}
}

export var act2=new class extends Act{
  constructor(){super('Act 2',
    ['Clear Steps of Torment','Defeat Darius Cronley'],
    [new faction.Faction("Rovers"),
      new faction.Faction("Cronley's Gang",false),new faction.Faction("Arkovian Undead",false),])}
}

export var act3=new class extends Act{
  constructor(){
    super('Act 3',['Clear Port Valbury','Defeat Zaria, the Carver'],
      [new faction.Faction("Homestead",true),
      new faction.Faction("Kymon's Chosen",true),
      new faction.Faction("Kymon's Chosen",false),
      new faction.Faction("Order of Death's Vigil",true),
      new faction.Faction("Order of Death's Vigil",false),
      new faction.Faction("Aetherials",false),
      new faction.Faction("Cthonians",false),
      new faction.Faction("Beasts",false),])
  }
}

export var act4=new class extends Act{
  constructor(){
    super('Act 4',['Clear Bastion of Chaos',"Defeat Loghorrean, the Voice of Ch'thon"],
      [new faction.Faction("The Black Legion"),
      new faction.Faction("The Outcast",true),
      new faction.Faction("The Outcast",false),
      new faction.Faction("Aetherial Vanguard",false),])
  }
}

export var act5=new class extends Act{
  constructor(){
    super('Act 5',['Clear Ancient Grove',"Rescue Ulgrim"],
      [new faction.Faction("Coven of Ugdenbog"),
      new faction.Faction("Barrowholm",true),new faction.Faction("Barrowholm",false)])
  }
}

export var act6=new class extends Act{
  constructor(){
    super('Act 6',["Defeat Theodin Marcell, The Master of Flesh"],
      [new faction.Faction("Malmouth Resistance")])
  }
}

export var act7=new class extends Act{
  constructor(){
    super('Act 7',["Defeat Korvaak, the Eldritch Sun",'Clear Tomb of the Heretic'],
      [new faction.Faction("Cult of Bysmiel"),
      new faction.Faction("Cult of Dreeg"),
      new faction.Faction("Cult of Solael"),
      new faction.Faction("Eldritch Horrors",false),])
  }
}

export var all=[act1,act2,act3,act4,act5,act6,act7]
