const { Client } = require('@notionhq/client')
const path = require('path')
require('dotenv').config({
  path: [
    path.resolve(process.cwd(), '../.env.local'),
    path.resolve(process.cwd(), '../.env'),
  ],
})

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export default notion
