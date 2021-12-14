//before test =  fail after pragma + contract (empty) passed. TEST DRIVEN DEVELOPMENT

// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Learn3PO is ERC20 {

    constructor(uint256 _supply) ERC20("Learn3PO", "3PO") {
        _mint(msg.sender, _supply * (10 ** decimals()));
    }

}