import assert from 'assert'
import ganache from 'ganache'
import Web3 from 'web3'
import { provider } from 'web3-core'

const web3 = new Web3(ganache.provider() as provider)
// https://www.npmjs.com/package/web3
// https://trufflesuite.com/docs/ganache/quickstart/   <-- https://www.npmjs.com/package/ganache-cli

beforeEach(async () => {
  await web3.eth.getAccounts()
})

it('should', () => {
  assert.equal(1,1)
})
