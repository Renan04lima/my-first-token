import path from 'path'
import fs from 'fs'
// @ts-expect-error
import solc from 'solc'
import { AbiItem } from 'web3-utils'

type Token = {
  abi: AbiItem[]
  evm: {
    bytecode: {
      object: string
    }
  }
}

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

const token: Token = output.contracts['MyToken.sol'].MyToken
const { abi } = token
const { object: bytecode } = token.evm.bytecode

export { abi, bytecode }
