import type { SpellType } from '../types'

const regex = /(\d{1,3}(?:,\d{3})*|\d+)\s*(gp)/g

const getSpells = async (): Promise<SpellType[]> => {
  const response = await fetch('https://www.dnd5eapi.co/api/spells', {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  })
  const { results } = await response.json()

  const spellRepsonse = await Promise.all(
    results.map(({ url }: any) =>
      fetch(`https://www.dnd5eapi.co${url}`, {
        headers: {
          Accept: 'application/json',
        },
        method: 'GET',
      })
    )
  )
  const spells = await Promise.all(spellRepsonse.map((res) => res.json()))

  return spells
    .reduce((acc: any, item: any) => {
      const matches = item?.material ? item.material.match(regex) : null

      if (!matches) {
        return [...acc, item]
      }

      const value = matches.reduce((total: any, string: string) => {
        const amount = parseInt(string.replace(/,/g, ''), 10)

        return total + amount
      }, 0)

      return [
        ...acc,
        {
          ...item,
          materialValue: `${value} gp`,
        },
      ]
    }, [])
    .reduce(
      (acc: any, item: any) => [
        ...acc,
        {
          ...item,
          classes: item.classes.map((cls: any) => ({ name: cls.name })),
          components: item.components.map((comp: any) => ({ name: comp })),
          school: item.school.name,
          subclasses: item.subclasses.map((cls: any) => ({ name: cls.name })),
        },
      ],
      []
    )
}

export default getSpells
