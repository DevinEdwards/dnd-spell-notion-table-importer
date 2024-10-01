export interface SpellType {
  area_of_effect: {
    size: number
    type: string
  }
  attack_type: string
  casting_time: string
  classes: { name: string }[]
  components: string[]
  concentration: boolean
  damage: {
    damage_type: {
      name: string
    }
  }
  damage_at_slot_level: {
    [key: string]: {
      damage_dice: string
      damage_type: {
        name: string
      }
    }
  }
  dc: {
    dc_type: {
      name: string
    }
  }
  desc: string[]
  duration: string
  heal_at_slot_level: {
    [key: string]: {
      heal_up: number
    }
  }
  higher_level: string[]
  level: number
  material: string
  materialValue: string
  name: string
  range: string
  ritual: boolean
  saving_throw: {
    ability: {
      name: string
    }
    dc: number
    success: string
  }
  school: string
  subclasses: { name: string }[]
  url: string
}
