import assert from 'assert'
import ganache from 'ganache'
import Web3 from 'web3'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { abi, bytecode } from '../src/compile'

const web3 = new Web3(ganache.provider() as provider)

let accounts: string[]
let myToken: Contract

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

  myToken = await new web3.eth.Contract(abi)
    .deploy({
      data: bytecode
    })
    .send({
      from: accounts[0],
      gas: 1000000
    })
})

describe('MyToken', () => {
  it('deploys a contract', () => {
    assert.ok(myToken.options.address)
  })
})
