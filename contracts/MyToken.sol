// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.16;

interface BEP20 {
    // quantidade total de tokens/moedas
    function totalSupply() external view returns (uint256);

    // quantidade de casas decimais
    function decimals() external view returns (uint8);

    function symbol() external view returns (string memory);

    function name() external view returns (string memory);

    function getOwner() external view returns (address);

    // saldo de uma carteira
    function balanceOf(address account) external view returns (uint256);

    function transfer(address recipient, uint256 amount)
        external
        returns (bool);

    function allowance(address _owner, address spender)
        external
        view
        returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    // usado quando uma corretora vai fazer uma transação por nós
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

contract MyToken is BEP20 {
    // Precisa ser a menor unidade da moeda, faz a potência da quantidade de decimais
    uint256 public totalSupply = 100000000 * 10**10; // 100 milhões
    uint8 public decimals = 10;
    string public symbol = "MT";
    string public name = "MyToken";

    address private _tokenOwner;
    // estrutura de chave e valor
    mapping(address => uint256) private _balance;
    // ex: minha carteira => carteira e valor da transação
    mapping(address => mapping(address => uint256)) private _allowances;

    // só é executado uma vez, depois do deploy e nunca mais
    constructor() {
        // msg: mostrar as informações de quem chamou o contrato
        _tokenOwner = msg.sender;
        _balance[_tokenOwner] = totalSupply;
    }

    function getOwner() external view returns (address) {
        return _tokenOwner;
    }

    function balanceOf(address account) external view returns (uint256) {
        return _balance[account];
    }

    function transfer(address recipient, uint256 amount)
        external
        returns (bool)
    {
        require(amount <= _balance[msg.sender], "Nao tem saldo");

        _balance[msg.sender] -= amount;
        _balance[recipient] += amount;

        emit Transfer(msg.sender, recipient, amount);

        return true;
    }

    function allowance(address _owner, address spender)
        external
        view
        returns (uint256)
    {
        return _allowances[_owner][spender];
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        _allowances[msg.sender][spender] = amount;

        emit Approval(msg.sender, spender, amount);

        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool) {
        _allowances[sender][msg.sender] -= amount; // retirando do total que a corretora tem
        _balance[sender] -= amount; // retirar do meu total
        _balance[recipient] += amount; // add na carteira de quem vai receber

        emit Transfer(sender, recipient, amount);

        return true;
    }
}
