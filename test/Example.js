/* eslint no-unused-expressions: "off" */
/* globals describe, it, before */

"use strict";

const contracts = require('../modules/contracts')
const chaithereum = require('chaithereum')
const params = require('./testparams.js')

before(() => {
  return chaithereum.promise
})

function createExample (args) {
  it('successfully instantiates with non-blank params', () => {
    return chaithereum.web3.eth.contract(contracts.Example.abi).new.q(
      [true, params.teraprice1, params.units1, params.fileHash1, false, params.teraprice2, params.units2, params.fileHash2].map(toBytes32),
      [true, params.teraprice3, params.fileHash3, false, params.teraprice4, params.fileHash4].map(toBytes32),
      [params.alias1, params.alias2],
      {data: contracts.Example.bytecode}
    ).should.eventually.be.contract.then((_example) => {
      args.address = _example.address
      args.contract = _example
    }).should.eventually.be.fulfilled
  })
}

function runExampleTests (args) {
  let example

  it('gets the example from the arguments', () => {
    example = args.contract
  })

  it('should have correct products length', () => {
    return example.getProductCount.q().should.eventually.be.bignumber.equal(2)
  })
}

describe('example', () => {
  let exampleArgs = {}

  createExample(exampleArgs)
  runExampleTests(exampleArgs);
})

function toBytes32 (thing) {
  const hex = chaithereum.web3.toHex(thing)
  const hexWithout0x = hex.replace('0x', '')
  const missingZeros = '0'.repeat(66 - hex.length)
  return `0x${missingZeros}${hexWithout0x}`
}

module.exports = {runExampleTests: runExampleTests, createExample: createExample}
