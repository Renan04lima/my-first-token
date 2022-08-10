const path = require("path");
const fs = require("fs");
const solc = require("solc");

const myTokenPath = path.resolve(__dirname, "contracts", "MyToken.sol");
const source = fs.readFileSync(myTokenPath, "utf8");

var input = {
  language: 'Solidity',
  sources: {
    'test.sol': {
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
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output);