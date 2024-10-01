import type { SpellType } from '../types'
import startCase from 'lodash/startCase'

const mapSpellToNotionPage = (spell: SpellType) => ({
  children: [...spell.desc, ...(spell?.higher_level || [])].map(
    (desc: any) => ({
      object: 'block',
      paragraph: {
        rich_text: [
          {
            text: {
              content: desc,
            },
            type: 'text',
          },
        ],
      },
    })
  ),
  properties: {
    'Area of Effect': {
      rich_text: [
        {
          text: {
            content: spell?.area_of_effect?.type
              ? `${startCase(spell?.area_of_effect?.type)} - ${
                  spell?.area_of_effect?.size
                } ft`
              : '',
          },
        },
      ],
    },
    'Attack Type': {
      rich_text: [
        {
          text: {
            content: startCase(spell?.attack_type) || '',
          },
        },
      ],
    },
    'Casting Time': {
      rich_text: [
        {
          text: {
            content: spell.casting_time,
          },
        },
      ],
    },
    Classes: {
      multi_select: spell.classes,
    },
    Components: {
      multi_select: spell.components,
    },

    Concentration: {
      select: {
        name: spell.concentration ? 'Yes' : 'No',
      },
    },
    DC: {
      rich_text: [
        {
          text: {
            content: spell?.dc?.dc_type?.name || '',
          },
        },
      ],
    },
    Damage: {
      rich_text: [
        {
          text: {
            content: spell?.damage?.damage_type?.name || '',
          },
        },
      ],
    },
    Description: {
      rich_text: [...spell.desc, ...(spell?.higher_level || [])].map(
        (desc: any) => ({
          text: {
            content: desc,
          },
          type: 'text',
        })
      ),
    },

    Duration: {
      rich_text: [
        {
          text: {
            content: spell.duration,
          },
        },
      ],
    },

    Level: {
      number: spell.level,
    },
    Material: {
      rich_text: [
        {
          text: {
            content: spell?.material || '',
          },
        },
      ],
    },
    'Material Cost': {
      rich_text: [
        {
          text: {
            content: spell?.materialValue || '',
          },
        },
      ],
    },
    Ritual: {
      select: {
        name: spell.ritual ? 'Yes' : 'No',
      },
    },
    School: {
      select: {
        name: spell.school,
      },
    },

    'Spell Name': {
      title: [
        {
          text: {
            content: spell.name,
          },
        },
      ],
    },
  },
})

export default mapSpellToNotionPage
