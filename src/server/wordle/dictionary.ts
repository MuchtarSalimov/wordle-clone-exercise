import { createServerFn } from '@tanstack/react-start'
import fs from 'node:fs'
import path from 'node:path'

// Cache the dictionary in server memory so we don't re-read the file on every request
let wordSet: Set<string> | null = null

function getDictionary() {
  if (!wordSet) {
    // Locate and read your JSON word list from the server's file system
    const filePath = path.resolve(process.cwd(), './src/data/dictionaryData.json')
    const rawData = fs.readFileSync(filePath, 'utf-8')
    const wordsArray = JSON.parse(rawData)
    
    wordSet = new Set(wordsArray.map((w: string) => w))
  }
  return wordSet
}

// Define the RPC (Remote Procedure Call) that the client can call securely
export const isValidWordServer = createServerFn()
  .validator((word: string) => word.toLowerCase())
  .handler(async ({ data: word }) => {
    const start = Date.now()
    const dictionary = getDictionary()
    // Return a simple boolean back to the client

    const result = dictionary.has(word)
    return result
  })
