import { armours } from "./armour";
import { weapons } from "./weapons";
import { colors } from "../theme/colors";
import { icons } from "../theme/icons";

const nergigante = {
    items: [
      {
        "id": 153,
        "qty": 0,
        "name": "Elder Dragon Bone",
        "description": "A bone from an elder dragon. It exudes the great majesty of the beast that bore it.",
        "flag": [
          armours.nergigante[1],
        ]
      },
      
      {
        "id": 969,
        "qty": 0,
        "name": "Elder Dragon Blood",
        "description": "Elder dragon blood that contains a more potent mix of its mysterious ingredient.",
        "flag": [
          armours.nergigante[2],
        ]
      },
      {
        "id": 405,
        "qty": 0,
        "name": "Immortal Dragonscale",
        "description": "Rare Nergigante material. Mostly obtained by carving. Broadly used for many purposes.",
        "flag": [
          armours.nergigante,
        ]
      },
      {
        "id": 406,
        "qty": 0,
        "name": "Nergigante Carapace",
        "description": "Rare Nergigante material. Mostly obtained as a reward. Solid, used to craft gear.",
        "flag": [
          armours.nergigante[0],
          armours.nergigante[2],
        ]
      },
      {
        "id": 407,
        "qty": 0,
        "name": "Nergigante Tail",
        "description": "Rare Nergigante material. Obtained by carving its severed tail. Stiff, used to craft gear.",
        "flag": [
          
        ]
      },
      {
        "id": 408,
        "qty": 0,
        "name": "Nergigante Horn",
        "description": "Rare Nergigante material. Obtained by breaking its horns. Stout, used in many weapons.",
        "flag": [
          armours.nergigante[0],
        ]
      },
      {
        "id": 409,
        "qty": 0,
        "name": "Nergigante Talon",
        "description": "Rare Nergigante material. Mostly obtained by carving. Sharp, used in many weapons.",
        "flag": [
          armours.nergigante[1],
        ]
      },
      {
        "id": 410,
        "qty": 0,
        "name": "Nergigante Regrowth Plate",
        "description": "Rare Nergigante material. Obtained by collecting rare drops. Unusual, used to craft gear.",
        "flag": [
          armours.nergigante[2],
        ]
      },
      {
        "id": 411,
        "qty": 0,
        "name": "Nergigante Gem",
        "description": "A rare gem said to have formed within Nergigante tissue. Holds untold potential.",
        "flag": [
          armours.nergigante[0],
        ]
      },
    ]
};

const kuluyaku = {};

export const expansionItems = {
  nergigante,
  kuluyaku
}