import { createServerFn, createServerOnlyFn } from '@tanstack/react-start'
import fs from 'node:fs'
import path from 'node:path'

const dictionaryMaker = createServerOnlyFn(() => {
    const filePath = path.resolve(process.cwd(), './src/data/dictionaryData.json')
    const rawData = fs.readFileSync(filePath, 'utf-8')

    return new Set(JSON.parse(rawData).map((w: string) => w)) as Set<string>
  })

let wordSet: Set<string> =  await dictionaryMaker()

/**
 * Checks a submitted word against a dictionary and returns true only if it is in the dictionary
 * Is a server only function
 * 
 * @param data - an object like { word: 'bacon' }
 * 
 * @example 
 * ```ts
 * isValidWordServer({ word: "blues"})
 * // returns true
 * ```
 */
export const isValidWordServer = createServerFn()
  .validator((word: string) => word)
  .handler(async ({ data: word }) => {
    return wordSet.has(word)
  })
