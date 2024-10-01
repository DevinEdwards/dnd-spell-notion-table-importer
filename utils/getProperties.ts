const spellProperties = [
  {
    name: 'Spell Name',
    type: 'title',
  },
  {
    name: 'Material',
    type: 'rich_text',
  },
  {
    name: 'Material Cost',
    type: 'rich_text',
  },
  {
    name: 'Classes',
    type: 'multi_select',
  },
  {
    name: 'Components',
    type: 'multi_select',
  },
  {
    name: 'Concentration',
    type: 'select',
  },
  {
    name: 'Ritual',
    type: 'select',
  },
  {
    name: 'Duration',
    type: 'rich_text',
  },
  {
    name: 'Level',
    type: 'number',
  },
  {
    name: 'School',
    type: 'select',
  },
  {
    name: 'Casting Time',
    type: 'rich_text',
  },
  {
    name: 'Attack Type',
    type: 'rich_text',
  },
  {
    name: 'Damage',
    type: 'rich_text',
  },
  {
    name: 'DC',
    type: 'rich_text',
  },
  {
    name: 'Area of Effect',
    type: 'rich_text',
  },
  {
    name: 'Description',
    type: 'rich_text',
  },
]

const getProperties = (properties = spellProperties) =>
  properties.reduce(
    (acc: any, item) => ({
      ...acc,
      [item.name]: {
        id: item.name,
        [item.type]: {},
        name: item.name,
        type: item.type,
      },
    }),
    {}
  )

export default getProperties
