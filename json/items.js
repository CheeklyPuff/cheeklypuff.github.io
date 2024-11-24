import { armours } from "./armour";
import { weapons } from "./weapons";

export const items = [
  {
    "id": 1,
    "qty": 0,
    "name": "Potion",
    "description": "Restores a small amount of health."
  },
  {
    "id": 117,
    "qty": 0,
    "name": "Machalite Ore",
    "description": "Ore that's more difficult to procure than Iron Ore. Produces fine metal.",
    "flag": [
      armours.alloy,
      armours.anja[2],
      weapons.af_bow1[0],
      weapons.af_gunlance1[0],
      weapons.af_great_sword1[0],
      weapons.af_sword_shield1[0],
      weapons.af_dual_blades1[0],
    ]
  },
  {
    "id": 118,
    "qty": 0,
    "name": "Dragonite Ore",
    "description": "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor.",
    "flag": [
      armours.alloy,
      weapons.af_bow1[0],
      weapons.af_gunlance1[0],
      weapons.af_great_sword1[0],
      weapons.af_sword_shield1[0],
      weapons.af_dual_blades1[0],
      weapons.af_bow1[2],
      weapons.af_gunlance1[2],
      weapons.af_great_sword1[2],
      weapons.af_sword_shield1[2],
      weapons.af_dual_blades1[2],
    ]
  },
  {
    "id": 119,
    "qty": 0,
    "name": "Carbalite Ore",
    "description": "Ore obtained from mining outcrops. Still under research, but known to yield highly pure metal.",
    "flag": [
      armours.alloy,
      weapons.af_bow1[2],
      weapons.af_gunlance1[2],
      weapons.af_great_sword1[2],
      weapons.af_sword_shield1[2],
      weapons.af_dual_blades1[2],
    ]
  },
  {
    "id": 191,
    "qty": 0,
    "name": "Wingdrake Hide",
    "description": "A material carved from wingdrakes. Lightweight and often used when crafting armor.",
    "flag": [
      armours.kadachi[1]
    ]
  },
  {
    "id": 120,
    "qty": 0,
    "name": "Fucium Ore",
    "description": "Ore obtained from the Elder's Recess. A mysterious metal, capable of fusing nearly any two materials together.",
    "flag": [
      weapons.af_bow1[2],
      weapons.af_gunlance1[2],
      weapons.af_great_sword1[2],
      weapons.af_sword_shield1[2],
      weapons.af_dual_blades1[2],
    ]
  },
  {
    "id": 122,
    "qty": 0,
    "name": "Coral Crystal",
    "description": "Crystal prized at the Smithy for use in high-grade abrasives. Mainly found in the Coral Highlands.",
    "flag": [
      weapons.af_bow3[1],
      weapons.af_dual_blades3[1],
    ]
  },
  {
    "id": 123,
    "qty": 0,
    "name": "Dragonvein Crystal",
    "description": "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork.",
    "flag": [
      weapons.af_bow1[2],
      weapons.af_gunlance1[2],
      weapons.af_great_sword1[2],
      weapons.af_sword_shield1[2],
      weapons.af_dual_blades1[2],
      weapons.af_bow3[2],
      weapons.af_dual_blades3[2],
    ]
  },
  {
    "id": 125,
    "qty": 0,
    "name": "Novacrystal",
    "description": "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking.",
    "flag": [

    ]
  },
  {
    "id": 126,
    "qty": 0,
    "name": "Firecell Stone",
    "description": "A magma-like deposit that only trained hands can work with. Armor made from it is first-class.",
    "flag": [
      weapons.af_bow4[2],
    ]
  },
  {
    "id": 137,
    "qty": 0,
    "name": "Quality Bone",
    "description": "A bone used as crafting material. Its ease of use and hardness allow it to be shaped into better gear.",
    "flag": [
      weapons.af_bow2[2],
      weapons.af_gunlance2[2],
      weapons.af_great_sword2[2],
      weapons.af_sword_shield2[2],
      weapons.af_dual_blades2[2],
    ]
  },
  {
    "id": 138,
    "qty": 0,
    "name": "Ancient Bone",
    "description": "A bone used as crafting material. Can be found in bonepiles in the Ancient Forest. Its size evokes a certain primal quality.",
    "flag": [
      armours.bone,
      armours.jagras[0]
    ]
  },
  {
    "id": 139,
    "qty": 0,
    "name": "Boulder Bone",
    "description": "A bone used as crafting material. Can be found in bonepiles in the Wildspire Waste. Its size evokes a certain primal quality.",
    "flag": [
      weapons.af_bow2[1],
      weapons.af_gunlance2[1],
      weapons.af_great_sword2[1],
      weapons.af_sword_shield2[1],
      weapons.af_dual_blades2[1],
    ]
  },
  {
    "id": 147,
    "qty": 0,
    "name": "Monster Bone Small",
    "description": "A material found in bonepiles. Indispensable for both hunting and daily life.",
    "flag": [
      armours.bone,
      armours.jagras[1],
      weapons.af_bow2[0],
      weapons.af_gunlance2[0],
      weapons.af_sword_shield2[0],
      weapons.af_dual_blades2[0],
    ]
  },
  {
    "id": 148,
    "qty": 0,
    "name": "Monster Bone Medium",
    "description": "Bone obtained from large monsters. Strong yet flexible, it's as reliable as steel or wood.",
    "flag": [
      weapons.af_bow1[1],
      weapons.af_gunlance1[1],
      weapons.af_great_sword1[1],
      weapons.af_sword_shield1[1],
      weapons.af_dual_blades1[1],
      weapons.af_bow2[1],
      weapons.af_gunlance2[1],
      weapons.af_great_sword2[1],
      weapons.af_sword_shield2[1],
      weapons.af_dual_blades2[1],
    ]
  },
  {
    "id": 149,
    "qty": 0,
    "name": "Monster Bone Large",
    "description": "Bone obtained from large monsters. Hard to work with due to its size, but vital when crafting larger items.",
    "flag": [
      weapons.af_bow2[1],
      weapons.af_gunlance2[1],
      weapons.af_great_sword2[1],
      weapons.af_sword_shield2[1],
      weapons.af_dual_blades2[1],
    ]
  },
  {
    "id": 151,
    "qty": 0,
    "name": "Monster Keenbone",
    "description": "Bone obtained from high rank large monsters. It has a razor-sharp tip that retains its strength after forging.",
    "flag": [
      weapons.af_bow2[2],
      weapons.af_gunlance2[2],
      weapons.af_great_sword2[2],
      weapons.af_sword_shield2[2],
      weapons.af_dual_blades2[2],
    ]
  },
  {
    "id": 152,
    "qty": 0,
    "name": "Monster Hardbone",
    "description": "Precious bone obtained from high rank large monsters. Their rarity makes them highly sought after.",
    "flag": [
      weapons.af_bow2[2],
      weapons.af_gunlance2[2],
      weapons.af_great_sword2[2],
      weapons.af_sword_shield2[2],
      weapons.af_dual_blades2[2],
    ]
  },
  {
    "id": 154,
    "qty": 0,
    "name": "Sharp Claw",
    "description": "Obtained from small fanged wyverns. Unlike wyvern claws, this is shaped to grip objects.",
    "flag": [
      weapons.af_gunlance3[1],
      weapons.af_great_sword3[1],
      weapons.af_sword_shield3[1],
    ]
  },
  {
    "id": 155,
    "qty": 0,
    "name": "Piercing Claw",
    "description": "Material from high rank small fanged wyverns. Sharp enough that it might serve as a makeshift knife.",
    "flag": [
      weapons.af_gunlance3[2],
      weapons.af_great_sword3[2],
      weapons.af_sword_shield3[2],
    ]
  },
  {
    "id": 158,
    "qty": 0,
    "name": "Poison Sac",
    "description": "A monster organ that contains a lethal toxin. Handle with extreme care.",
    "flag": [

    ]
  },
  {
    "id": 159,
    "qty": 0,
    "name": "Toxin Sac",
    "description": "A monster organ filled with an extremely potent toxin. Just touching it is dangerous.",
    "flag": [

    ]
  },
  {
    "id": 164,
    "qty": 0,
    "name": "Flame Sac",
    "description": "A monster organ filled with flammable powder. Handle with extreme care.",
    "flag": [
      weapons.af_bow4[1],
      weapons.af_dual_blades4[1],
      weapons.af_gunlance4[1],
    ]
  },
  {
    "id": 165,
    "qty": 0,
    "name": "Inferno Sac",
    "description": "A monster organ filled with powder that ignites if it so much as touches air. Danger!",
    "flag": [
      weapons.af_great_sword4[1],
      weapons.af_sword_shield4[1],
    ]
  },
  {
    "id": 166,
    "qty": 0,
    "name": "Aqua Sac",
    "description": "A monster organ designed to hold and preserve water.",
    "flag": [

    ]
  },
  {
    "id": 170,
    "qty": 0,
    "name": "Electro Sac",
    "description": "A monster organ that can store up electricity, which is released on impact.",
    "flag": [
      armours.kadachi[0],
      weapons.af_bow3[1],
      weapons.af_dual_blades3[1],
    ]
  },
  {
    "id": 171,
    "qty": 0,
    "name": "Thunder Sac",
    "description": "A monster organ that can store up large amounts of high voltage electricity.",
    "flag": [
      weapons.af_dual_blades4[2],
    ]
  },
  {
    "id": 173,
    "qty": 0,
    "name": "Wyvern Gem",
    "description": "Throughout a wyvern's life, impurities gather and form this peculiar gem.",
    "flag": [

    ]
  },
  {
    "id": 176,
    "qty": 0,
    "name": "Warm Pelt",
    "description": "A pelt from a small animal. Used for many things, but mostly just regular clothes.",
    "flag": [
      armours.kadachi[2],
    ]
  },
  {
    "id": 189,
    "qty": 0,
    "name": "Gajau Scale",
    "description": "Rare Gajau material. Obtained by carving. Water-resistant, used to craft gear.",
    "flag": [
      
    ]
  },
  {
    "id": 213,
    "qty": 0,
    "name": "Great Jagras Scale",
    "description": "Great Jagras material. Mostly obtained by carving. Broadly used for many purposes.",
    "flag": [
      armours.jagras[1],
      armours.jagras[2],
      weapons.af_gunlance3[1],
      weapons.af_great_sword3[1],
      weapons.af_sword_shield3[1],
      weapons.af_gunlance3[2],
      weapons.af_great_sword3[2],
      weapons.af_sword_shield3[2],
    ]
  },
  {
    "id": 214,
    "qty": 0,
    "name": "Great Jagras Hide",
    "description": "Great Jagras material. Mostly obtained as a reward. Broadly used for many purposes.",
    "flag": [
      armours.jagras,
      weapons.af_gunlance3[1],
      weapons.af_great_sword3[1],
      weapons.af_sword_shield3[1],
    ]
  },
  {
    "id": 215,
    "qty": 0,
    "name": "Great Jagras Mane",
    "description": "Great Jagras material. Obtained by breaking its head. Used for many purposes.",
    "flag": [
      armours.jagras[0],
      armours.jagras[2],
      weapons.af_gunlance3[2],
      weapons.af_great_sword3[2],
      weapons.af_sword_shield3[2],
    ]
  },
  {
    "id": 216,
    "qty": 0,
    "name": "Great Jagras Claw",
    "description": "Great Jagras material. Obtained by breaking its forelegs. Sharp, used in many weapons.",
    "flag": [
      armours.jagras[0],
      armours.jagras[1],
      weapons.af_gunlance3[1],
      weapons.af_great_sword3[1],
      weapons.af_sword_shield3[1],
      weapons.af_gunlance3[2],
      weapons.af_great_sword3[2],
      weapons.af_sword_shield3[2],
    ]
  },
  {
    "id": 228,
    "qty": 0,
    "name": "Pukei-Pukei Scale",
    "description": "Pukei-Pukei material. Mostly obtained by carving. Broadly used for many purposes.",
    "flag": [
  
    ]
  },
  {
    "id": 230,
    "qty": 0,
    "name": "Pukei-Pukei Quill",
    "description": "Pukei-Pukei material. Obtained by breaking its wings. Used for many purposes.",
    "flag": [
  
    ]
  },
  {
    "id": 232,
    "qty": 0,
    "name": "Pukei-Pukei Tail",
    "description": "Pukei-Pukei material. Obtained by carving its severed tail. Unusual, used to craft gear.",
    "flag": [
  
    ]
  },
  {
    "id": 234,
    "qty": 0,
    "name": "Pukei-Pukei Carapace",
    "description": "Rare Pukei-Pukei material. Mostly obtained as a reward. Solid, used to craft gear.",
    "flag": [
  
    ]
  },
  {
    "id": 235,
    "qty": 0,
    "name": "Pukei-Pukei Wing",
    "description": "Rare Pukei-Pukei material. Obtained by breaking its wings. Used for many purposes.",
    "flag": [
  
    ]
  },
  {
    "id": 237,
    "qty": 0,
    "name": "Barroth Shell",
    "description": "Barroth material. Mostly obtained by carving. Broadly used for many purposes.",
    "flag": [
      
    ]
  },
  {
    "id": 238,
    "qty": 0,
    "name": "Barroth Ridge",
    "description": "Barroth material. Mostly obtained as a reward. Solid, used to craft gear.",
    "flag": [
      
    ]
  },
  {
    "id": 239,
    "qty": 0,
    "name": "Barroth Claw",
    "description": "Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons.",
    "flag": [
      
    ]
  },
  {
    "id": 243,
    "qty": 0,
    "name": "Barroth Carapace",
    "description": "Rare Barroth material. Mostly obtained by carving. Broadly used for many purposes.",
    "flag": [
      
    ]
  },
  {
    "id": 246,
    "qty": 0,
    "name": "Jyuratodus Scale",
    "description": "Jyuratodus material. Mostly obtained by carving. Used for many purposes.",
    "flag": [
  
    ]
  },
  {
    "id": 247,
    "qty": 0,
    "name": "Jyuratodus Shell",
    "description": "Jyuratodus material. Mostly obtained as a reward. Hardy, used to craft gear.",
    "flag": [
  
    ]
  },
  {
    "id": 248,
    "qty": 0,
    "name": "Jyuratodus Fang",
    "description": "Jyuratodus material. Obtained by breaking its head. Sharp, used in many weapons.",
    "flag": [
  
    ]
  },
  {
    "id": 249,
    "qty": 0,
    "name": "Jyuratodus Fin",
    "description": "Jyuratodus material. Obtained by breaking its back. Used for many purposes.",
    "flag": [
  
    ]
  },
  {
    "id": 251,
    "qty": 0,
    "name": "Jyuratodus Carapace",
    "description": "Rare Jyuratodus material. Mostly obtained as a reward. Hardy, used to craft gear.",
    "flag": [
  
    ]
  },
  {
    "id": 254,
    "qty": 0,
    "name": "Tobi-Kadachi Scale",
    "description": "Tobi-Kadachi material. Mostly obtained by carving. Broadly used for many purposes.",
    "flag": [
      armours.kadachi[2],
      weapons.af_bow3[2],
      weapons.af_dual_blades3[2],
    ]
  },
  {
    "id": 255,
    "qty": 0,
    "name": "Tobi-Kadachi Pelt",
    "description": "Tobi-Kadachi material. Mostly obtained as a reward. Highly thunder-resistant, used to craft gear.",
    "flag": [
      armours.kadachi,
      weapons.af_bow3[2],
      weapons.af_dual_blades3[2],
    ]
  },
  {
    "id": 256,
    "qty": 0,
    "name": "Tobi-Kadachi Membrane",
    "description": "Tobi-Kadachi material. Mostly obtained by carving. Supple, used to craft gear.",
    "flag": [
      armours.kadachi[1]
    ]
  },
  {
    "id": 257,
    "qty": 0,
    "name": "Tobi-Kadachi Claw",
    "description": "Tobi-Kadachi material. Obtained by breaking its forelimbs. Sharp, used in many weapons.",
    "flag": [
      armours.kadachi[0],
      weapons.af_bow3[1],
      weapons.af_dual_blades3[1],
      weapons.af_bow3[2],
      weapons.af_dual_blades3[2],
      weapons.af_dual_blades4[2],
    ]
  },
  {
    "id": 258,
    "qty": 0,
    "name": "Tobi-Kadachi Electrode",
    "description": "Tobi-Kadachi material. Obtained by breaking its head. Grants thunder element properties.",
    "flag": [
      armours.kadachi[1],
      weapons.af_bow3[1],
      weapons.af_dual_blades3[1],
      weapons.af_dual_blades4[2],
    ]
  },
  {
    "id": 263,
    "qty": 0,
    "name": "Anjanath Scale",
    "description": "Anjanath material. Mostly obtained by carving. Broadly used for many purposes.",
    "flag": [
      armours.anja[0],
      armours.anja[2],
      weapons.af_bow4[1],
      weapons.af_dual_blades4[1],
    ]
  },
  {
    "id": 264,
    "qty": 0,
    "name": "Anjanath Pelt",
    "description": "Anjanath material. Mostly obtained as a reward. Highly heat-resistant, used to craft gear.",
    "flag": [
      armours.anja,
      weapons.af_bow4[2],
    ]
  },
  {
    "id": 265,
    "qty": 0,
    "name": "Anjanath Fang",
    "description": "Anjanath material. Obtained by breaking its head. Sharp, used in many weapons.",
    "flag": [
      armours.anja[1],
      weapons.af_bow4[1],
      weapons.af_dual_blades4[1],
      weapons.af_bow4[2],
    ]
  },
  {
    "id": 266,
    "qty": 0,
    "name": "Anjanath Nosebone",
    "description": "Anjanath material. Obtained by breaking its head. Unusual and difficult to handle.",
    "flag": [
      armours.anja[1],
    ]
  },
  {
    "id": 267,
    "qty": 0,
    "name": "Anjanath Tail",
    "description": "Anjanath material. Obtained by carving its severed tail. Stiff, used to craft gear.",
    "flag": [
      armours.anja[0],
    ]
  },
  {
    "id": 340,
    "qty": 0,
    "name": "Rathalos Scale",
    "description": "Rathalos material. Mostly obtained by carving. Broadly used for many purposes.",
    "flag": [
      armours.rathalos[0],
      armours.rathalos[1],
      weapons.af_gunlance4[1],
      weapons.af_great_sword4[1],
      weapons.af_sword_shield4[1],
      weapons.af_gunlance4[2],
      weapons.af_great_sword4[2],
      weapons.af_sword_shield4[2],
    ]
  },
  {
    "id": 341,
    "qty": 0,
    "name": "Rathalos Shell",
    "description": "Rathalos material. Mostly obtained as a reward. Solid, used to craft gear.",
    "flag": [
      armours.rathalos[1],
      armours.rathalos[2]
    ]
  },
  {
    "id": 342,
    "qty": 0,
    "name": "Rathalos Webbing",
    "description": "Rathalos material. Obtained by breaking its wings. Supple, used to craft gear.",
    "flag": [
      armours.rathalos[1],
      weapons.af_gunlance4[1],
      weapons.af_great_sword4[1],
    ]
  },
  {
    "id": 343,
    "qty": 0,
    "name": "Rathalos Tail",
    "description": "Rathalos material. Obtained by carving its severed tail. Compatible with fire element.",
    "flag": [
      armours.rathalos[2],
      weapons.af_sword_shield4[1],
    ]
  },
  {
    "id": 344,
    "qty": 0,
    "name": "Rathalos Wingtalon",
    "description": "Material from Rathian and Rathalos. Obtained by breaking its wings. Sharp, used in many weapons.",
    "flag": [
      armours.rathalos[2],
    ]
  },
  {
    "id": 345,
    "qty": 0,
    "name": "Rathalos Marrow",
    "description": "Rathalos material. Obtained by carving. Grants fire element properties.",
    "flag": [
      armours.rathalos[0],
      weapons.af_gunlance4[1],
      weapons.af_great_sword4[1],
    ]
  },
  {
    "id": 346,
    "qty": 0,
    "name": "Rathalos Plate",
    "description": "Rathalos material. A valuable find, used to fortify gear. Said to be quite hard to come by.",
    "flag": [
      armours.rathalos[1],
      weapons.af_sword_shield4[1],
    ]
  },
  {
    "id": 348,
    "qty": 0,
    "name": "Rathalos Carapace",
    "description": "Rare Rathalos material. Mostly obtained as a reward. Solid, used to craft gear.",
    "flag": [
      weapons.af_gunlance4[2],
      weapons.af_great_sword4[2],
      weapons.af_sword_shield4[2],
    ]
  },
  {
    "id": 349,
    "qty": 0,
    "name": "Rathalos Wing",
    "description": "Rare Rathalos material. Obtained by breaking its wings. Supple, used to craft gear.",
    "flag": [
      weapons.af_gunlance4[2],
      weapons.af_great_sword4[2],
      weapons.af_sword_shield4[2],
    ]
  },
  {
    "id": 350,
    "qty": 0,
    "name": "Rathalos Medulla",
    "description": "Rare Rathalos material. Obtained by carving. Grants fire element properties.",
    "flag": [
      weapons.af_gunlance4[2],
      weapons.af_great_sword4[2],
    ]
  },
  {
    "id": 356,
  "qty": 0,
    "name": "Diablos Shell",
    "description": "Diablos material. Mostly obtained by carving. Broadly used for many purposes.",
    "flag": [
      
    ]
  },
  {
    "id": 357,
    "qty": 0,
    "name": "Diablos Ridge",
    "description": "Diablos material. Mostly obtained as a reward. Solid, used to craft gear.",
    "flag": [
      
    ]
  },
  {
    "id": 358,
    "qty": 0,
    "name": "Diablos Tailcase",
    "description": "Diablos material. Obtained by carving its severed tail. Sturdy, but difficult to handle.",
    "flag": [
      
    ]
  },
  {
    "id": 359,
    "qty": 0,
    "name": "Diablos Fang",
    "description": "Diablos material. Mostly obtained by carving. Sharp, used in many weapons.",
    "flag": [
      
    ]
  },
  {
    "id": 360,
    "qty": 0,
    "name": "Twisted Horn",
    "description": "Diablos material. Obtained by breaking its horns. Stout, used in many weapons.",
    "flag": [
      
    ]
  },
  {
    "id": 362,
    "qty": 0,
    "name": "Diablos Carapace",
    "description": "Rare Diablos material. Mostly obtained by carving. Broadly used for many purposes.",
    "flag": [
      
    ]
  },
  {
    "id": 364,
    "qty": 0,
    "name": "Majestic Horn",
    "description": "Rare Diablos material. Obtained by breaking its horns. Stout, used in many weapons.",
    "flag": [
      
    ]
  },
  {
    "id": 365,
    "qty": 0,
    "name": "Blos Medulla",
    "description": "Rare Diablos material. A valuable find, used to fortify gear. Said to be quite hard to come by.",
    "flag": [
      
    ]
  },
  {
    "id": 366,
    "qty": 0,
    "name": "Black Diablos Carapace",
    "description": "Rare Black Diablos material. Mostly obtained by carving. Broadly used for many purposes.",
    "flag": []
  },
  {
    "id": 367,
    "qty": 0,
    "name": "Black Diablos Ridge",
    "description": "Rare Black Diablos material. Mostly obtained as a reward. Solid, used to craft gear.",
    "flag": []
  },
  {
    "id": 368,
    "qty": 0,
    "name": "Black Spiral Horn",
    "description": "Rare Black Diablos material. Obtained by breaking its horns. Stout, used in many weapons.",
    "flag": []
  },
  {
    "id": 440,
    "qty": 0,
    "name": "Azure Rathalos Scale",
    "description": "Azure Rathalos material. Mostly obtained by carving. Broadly used for many purposes.",
    "flag": [
      armours.rath_soul[0],
      armours.rath_soul[1],
    ]
  },
  {
    "id": 441,
    "qty": 0,
    "name": "Azure Rathalos Shell",
    "description": "Azure Rathalos material. Mostly obtained as a reward. Solid, used to craft gear."
  },
  {
    "id": 442,
    "qty": 0,
    "name": "Azure Rathalos Webbing",
    "description": "Azure Rathalos material. Obtained by breaking its wings. Supple, used to craft gear."
  },
  {
    "id": 443,
    "qty": 0,
    "name": "Azure Rathalos Tail",
    "description": "Azure Rathalos material. Obtained by carving its severed tail. Compatible with fire element.",
    "flag": [
      armours.rath_soul[2],
    ]
  },
  {
    "id": 444,
    "qty": 0,
    "name": "Azure Rathalos Wingtalon",
    "description": "Azure Material from Rathian and Rathalos. Obtained by breaking its wings. Sharp, used in many weapons.",
    "flag": [
      armours.rath_soul[2],
    ]
  },
  {
    "id": 445,
    "qty": 0,
    "name": "Azure Rathalos Marrow",
    "description": "Azure Rathalos material. Obtained by carving. Grants fire element properties.",
    "flag": [
      armours.rath_soul[0],
    ]
  },
  {
    "id": 446,
    "qty": 0,
    "name": "Azure Rathalos Plate",
    "description": "Azure Rathalos material. A valuable find, used to fortify gear. Said to be quite hard to come by.",
    "flag": [
      armours.rath_soul[1],
    ]
  },
  {
    "id": 448,
    "qty": 0,
    "name": "Azure Rathalos Carapace",
    "description": "Azure Rare Rathalos material. Mostly obtained as a reward. Solid, used to craft gear.",
    "flag": [
      armours.rath_soul[0],
      armours.rath_soul[2],
    ]
  },
  {
    "id": 449,
    "qty": 0,
    "name": "Azure Rathalos Wing",
    "description": "Azure Rare Rathalos material. Obtained by breaking its wings. Supple, used to craft gear.",
    "flag": [
      armours.rath_soul[1],
    ]
  },
  {
    "id": 450,
    "qty": 0,
    "name": "Azure Rathalos Medulla",
    "description": "Azure Rare Rathalos material. Obtained by carving. Grants fire element properties.",
    "flag": [

    ]
  },
]