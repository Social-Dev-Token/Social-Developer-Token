// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FreelanceToken is ERC20("FreelanceToken", "FT") {
    address public owner; // The owner of the contract
    uint256 public maxSupply = 1000; // Maximum supply for each freelancer
    uint256 public initialTokenPrice = 10000000000 ; // Initial token price in USD
    uint256 public priceIncreaseThreshold = 100; // Number of tokens sold before price increase
    uint256 public priceIncreasePercentage = 20; // Percentage to increase price
    mapping(address => uint256) public freelancerTokens; // Tokens owned by each freelancer

    event TokensMinted(address indexed freelancer, uint256 amount);
    event TokensBought(address indexed company, address indexed freelancer, uint256 amount, uint256 cost);
    event TokensSold(address indexed company, address indexed freelancer, uint256 amount, uint256 revenue, uint256 senderBalance, uint256 companyBalance);

    constructor() {
        owner = msg.sender;
        maxSupply = maxSupply;
        initialTokenPrice = initialTokenPrice;
        priceIncreaseThreshold = priceIncreaseThreshold;
        priceIncreasePercentage = priceIncreasePercentage;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this operation");
        _;
    }

    function createTokens(uint256 amount) external {
        require(freelancerTokens[msg.sender] == 0, "Freelancer can only create tokens once");
        require(amount <= maxSupply, "Cannot create more than the maximum supply");
        _mint(msg.sender, amount);
        freelancerTokens[msg.sender] = amount;
        emit TokensMinted(msg.sender, amount);
    }

    function buyTokens(address freelancer, uint256 amount) external payable {
        require(freelancerTokens[freelancer] > 0, "Freelancer does not exist or has no tokens");
        require(msg.value == calculateTokenPrice(amount), "Incorrect payment amount");
        require(amount <= freelancerTokens[freelancer], "Not enough tokens available for purchase");

        freelancerTokens[freelancer] -= amount;
        freelancerTokens[msg.sender] += amount;
        _transfer(freelancer, msg.sender, amount);
        emit TokensBought(msg.sender, freelancer, amount, msg.value);
    }

    function sellTokens(address company, uint256 amount) external {
        require(freelancerTokens[msg.sender] >= amount, "Not enough tokens to sell");
        freelancerTokens[msg.sender] -= amount;
        freelancerTokens[company] += amount;
        uint256 revenue = calculateTokenPrice(amount);
        payable(msg.sender).transfer(revenue);
        emit TokensSold(company, msg.sender, amount, revenue, freelancerTokens[msg.sender], freelancerTokens[company]);
    }

    function calculateTokenPrice(uint256 amount) public view returns (uint256) {
        uint256 currentSupply = totalSupply() - maxSupply;
        uint256 price = initialTokenPrice;
        if (currentSupply >= priceIncreaseThreshold) {
            uint256 increaseFactor = currentSupply / priceIncreaseThreshold;
            for (uint256 i = 0; i < increaseFactor; i++) {
                price += (price * priceIncreasePercentage) / 100;
            }
        }
        return price * amount;
    }
}
