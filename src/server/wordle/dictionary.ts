import { createServerFn, createServerOnlyFn } from '@tanstack/react-start'
import fs from 'node:fs'
import path from 'node:path'


const dictionaryMaker = createServerOnlyFn(() => {
    const filePath = path.resolve(process.cwd(), './src/data/dictionaryData.json')
    const rawData = fs.readFileSync(filePath, 'utf-8')

    return new Set(JSON.parse(rawData).map((w: string) => w)) as Set<string>
  })

let wordSet: Set<string> =  await dictionaryMaker()

// Define the RPC (Remote Procedure Call) that the client can call securely
export const isValidWordServer = createServerFn()
  .validator((word: string) => word)
  .handler(async ({ data: word }) => {
    return wordSet.has(word)
  })
