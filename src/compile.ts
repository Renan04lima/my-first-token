import path from 'path'
import fs from 'fs'
import * as solc from 'solc'

const myTokenPath = path.resolve(__dirname, '..', 'contracts', 'MyToken.sol')
const source = fs.readFileSync(myTokenPath, 'utf8')

const input = {
  language: 'Solidity',
  sources: {
    'MyToken.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
}

const output = JSON.parse(solc.compile(JSON.stringify(input)))

console.log(output.contracts['MyToken.sol'].MyToken)
