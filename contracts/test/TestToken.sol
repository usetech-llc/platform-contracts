pragma solidity 0.4.23;

import "../Zeppelin/StandardToken.sol";


contract TestToken is StandardToken {

    ////////////////////////
    // Constructor
    ////////////////////////

    constructor(uint256 initialBalance)
        StandardToken()
        public
    {
        _balances[msg.sender] = initialBalance;
    }
}
