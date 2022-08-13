# Meu primeiro token

Token baseado na rede Ethereum com padrão [ERC20/BEP20](https://github.com/bnb-chain/BEPs/blob/master/BEP20.md#bep20-tokens-on-binance-smart-chain) que pode rodar tanto na rede Ethereum principal, quanto na rede da Binance Smart Chain, e ainda ser transacionado em corretoras descentralizadas.

## Features

- [x] Transfere dinheiro entre contas;
- [x] Consultar o tanto de dinheiro disponivel na conta;
- [x] Permitir corretoras enviarem dinheiro para outras contas;
- [x] Consultar o tanto de dinheiro que autorizou as corretoras enviarem;
- [ ] Validações dos valores de tranferências e contas;
- [ ] 100% de cobertura de testes;

## Como rodar

### Compilação dos contratos
- Os contratos podem ser compilados e executados pelo site do [Remix](https://remix.ethereum.org/)
- Ou rodando os compandos `npm run build && npm run compile`
### Testes
- Podem ser executados rodando o comando `npm t`


## Libs

- [Solc](https://www.npmjs.com/package/solc)
- [Ganache](https://github.com/trufflesuite/ganache/tree/v7.1.0)
- [Web3](https://www.npmjs.com/package/web3)
- [Mocha](https://mochajs.org/)