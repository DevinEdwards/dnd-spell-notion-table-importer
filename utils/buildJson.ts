import fs from 'fs'

const buildJSON = (name: string, data: any, path = './files/') => {
  fs.writeFileSync(`${path}${name}.json`, JSON.stringify(data))
}

export default buildJSON
