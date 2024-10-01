import notion from './utils/getNotionClient'
import getProperties from './utils/getProperties'
import getSpells from './utils/getSpells'
import mapSpellToNotionPage from './utils/mapSpellToNotionPage'

const runFetch = async () => {
  const spells = await getSpells()

  const database = await notion.databases.create({
    parent: {
      database_id: '10efeb06a2f3809b876ec16dc0b3dfda',
      type: 'database_id',
    },
    properties: getProperties(),
    title: [
      {
        text: {
          content: 'D&D 5e - Spells',
        },
        type: 'text',
      },
    ],
  })

  const pages = spells.map((spell: any) => mapSpellToNotionPage(spell))

  // TODO Enable Proper Rate Limiting. Notion returns 409 conflict often if their are too many requests
  const response = await Promise.all(
    pages.map((page: any) =>
      notion.pages.create({
        parent: {
          database_id: database.id,
          type: 'database_id',
        },
        ...page,
      })
    )
  )

  // eslint-disable-next-line no-console
  console.log(response)
}

runFetch().catch((err) => {
  console.error(err)
  process.exit(1)
})
