## SkillLink

create a Gnosis Safe
    - then you set requirements like who can vote, amount of votes for a transaction to process(wallet, u can assign as many as want)
    - u can assign as many as want, min 3 wallets
                - assined 3 wallet
                      - lose access to one wallet



    assign

     put wallet










ower/user1 comes & creates 1000 tokens =>
user2 comes & buys 1000 tokens


1 dev can create a maxSupply = 1000  => $1 e/token



write a solidity contract for a social developer  token. Developers should be able to create
it's token with max supply of 1000 tokens. Users should be able to buy and sale tokens
reuses this code:
    function getPrice(uint256 supply, uint256 amount) public pure returns (uint256) {
        uint256 sum1 = supply == 0 ? 0 : (supply - 1 )* (supply) * (2 * (supply - 1) + 1) / 6;
        uint256 sum2 = supply == 0 && amount == 1 ? 0 : (supply - 1 + amount) * (supply + amount) * (2 * (supply - 1 + amount) + 1) / 6;
        uint256 summation = sum2 - sum1;
        return summation * 1 ether / 16000;
    }

    function getBuyPrice(address sharesSubject, uint256 amount) public view returns (uint256) {
        return getPrice(sharesSupply[sharesSubject], amount);
    }

    function getSellPrice(address sharesSubject, uint256 amount) public view returns (uint256) {
        return getPrice(sharesSupply[sharesSubject] - amount, amount);
    }

    function getBuyPriceAfterFee(address sharesSubject, uint256 amount) public view returns (uint256) {
        uint256 price = getBuyPrice(sharesSubject, amount);
        uint256 protocolFee = price * protocolFeePercent / 1 ether;
        uint256 subjectFee = price * subjectFeePercent / 1 ether;
        return price + protocolFee + subjectFee;
    }

    function getSellPriceAfterFee(address sharesSubject, uint256 amount) public view returns (uint256) {
        uint256 price = getSellPrice(sharesSubject, amount);
        uint256 protocolFee = price * protocolFeePercent / 1 ether;
        uint256 subjectFee = price * subjectFeePercent / 1 ether;
        return price - protocolFee - subjectFee;
    }

    function buyShares(address sharesSubject, uint256 amount) public payable {
        uint256 supply = sharesSupply[sharesSubject];
        require(supply > 0 || sharesSubject == msg.sender, "Only the shares' subject can buy the first share");
        uint256 price = getPrice(supply, amount);
        uint256 protocolFee = price * protocolFeePercent / 1 ether;
        uint256 subjectFee = price * subjectFeePercent / 1 ether;
        require(msg.value >= price + protocolFee + subjectFee, "Insufficient payment");
        sharesBalance[sharesSubject][msg.sender] = sharesBalance[sharesSubject][msg.sender] + amount;
        sharesSupply[sharesSubject] = supply + amount;
        emit Trade(msg.sender, sharesSubject, true, amount, price, protocolFee, subjectFee, supply + amount);
        (bool success1, ) = protocolFeeDestination.call{value: protocolFee}("");
        (bool success2, ) = sharesSubject.call{value: subjectFee}("");
        require(success1 && success2, "Unable to send funds");
    }

    function sellShares(address sharesSubject, uint256 amount) public payable {
        uint256 supply = sharesSupply[sharesSubject];
        require(supply > amount, "Cannot sell the last share");
        uint256 price = getPrice(supply - amount, amount);
        uint256 protocolFee = price * protocolFeePercent / 1 ether;
        uint256 subjectFee = price * subjectFeePercent / 1 ether;
        require(sharesBalance[sharesSubject][msg.sender] >= amount, "Insufficient shares");
        sharesBalance[sharesSubject][msg.sender] = sharesBalance[sharesSubject][msg.sender] - amount;
        sharesSupply[sharesSubject] = supply - amount;
        emit Trade(msg.sender, sharesSubject, false, amount, price, protocolFee, subjectFee, supply - amount);
        (bool success1, ) = msg.sender.call{value: price - protocolFee - subjectFee}("");
        (bool success2, ) = protocolFeeDestination.call{value: protocolFee}("");
        (bool success3, ) = sharesSubject.call{value: subjectFee}("");
        require(success1 && success2 && success3, "Unable to send funds");
    }


# Thing to do:
# INSPIRATIONS =>>>>>  FriendTech: https://twitter.com/friendtech


- allow frelancers to createToken maxSupply 1000
- allow companies to buy tokens
    function buyTokens(amount) {

    }
- allow companies to sale tokens


User Story Frelancer:
 - Frelancer Joe comes & creates a maxSupply of 1000 (only for Joe)
 - The contract holds & makes them public for companies to buy/sell them
      JoesContractSupply = 1000 -10
      JoesContractSupply = 990

User Story Companiies:
 - Company A  comes & buys 100 Joes' tokens
    CompanyA holds 10 joes tokens


- 2 Users
    - Developer user
          - should be able to:
                - able to login
                - create a profile w protfolio, skills,


    - Hiring manager user
        - message(xmtp) requires token x amount to contact user(buy tokens)






Github: https://github.com/marcialarturo/devToken

#  Social  Token

This innovative platform aims to provide an invaluable ecosystem where new developers can gain hands-on experience, expand their portfolios, acquire new technical skills, and earn tokens for their contributions.

 Aspiring developers will have the opportunity to work on real-world projects, collaborating with mentors and experienced professionals to accelerate their growth in the tech world. Simultaneously, companies and startups looking to hire promising talent can tap into this rich pool of emerging developers, fostering a vibrant and dynamic marketplace for talent acquisition. With SDT, we envision a future where both newcomers and established organizations thrive in a mutually beneficial ecosystem that fuels the tech industry's growth.

Unlocking Opportunities with SDT:

SDT stands as a symbol of empowerment for budding developers, offering them a platform to kickstart their careers, learn, and earn. Through hands-on projects and mentorship, they can hone their skills, gain practical experience, and build an impressive portfolio, all while earning tokens for their dedication. Employers, on the other hand, can discover and engage with emerging talents who are passionate about contributing to their projects. This platform will be a win-win solution, bridging the gap between fresh talent and tech industry demands, ultimately fostering a collaborative and prosperous community where learning and innovation are the driving forces behind the tech landscape's evolution.

## Technologies
For this project, our technology stack encompasses several key components:

We utilize IPFS-NFTStorage to securely store all user profiles, ratings, portfolios, job information, and reviews as NFTs. This ensures data integrity and reliability.

Our smart contract development relies on Solidity and Hardhat, providing a robust and well-tested foundation for our blockchain operations.

To handle the minting and completion of jobs, we employ the OpenZeppelin ERC721 standard, streamlining our contract functionality. We also utilize the ERC721 template for accelerated smart contract development.

For local blockchain development and testing, we turn to Hardhat, which facilitates efficient and reliable development workflows.

On the frontend, we harness the power of Tailwind, Next.js, and React.js to create an engaging and user-friendly interface. Ethers.js serves as the bridge to connect with the blockchain.

In addition, we incorporate WorldCoin to enhance the functionality of our platform.

To ensure scalability and accessibility across various networks, we leverage The Mantle, Celo, Arbitrum, and Scroll Network for our deployment strategies.

Furthermore, we optimize user interactions by implementing The Graph for efficient querying of our smart contract, delivering an enhanced overall experience for our valued users.




## Tech & code

- Our application is now operational on the Celo network, offering expedited transactions, heightened security, enhanced throughput, and cost-effective operations. The contract functions as a public database, enabling users to conveniently track their public rating points, portfolios, experience, and activity.
Deployed Contract Address: 0x244f2D25fAC3d6F0146FA6b863BfF2517A8a0973


- Our application is now operational on the Polygon network, offering expedited transactions, heightened security, enhanced throughput, and cost-effective operations. The contract functions as a public database, enabling users to conveniently track their public rating points, portfolios, experience, and activity.
Deployed Contract Address: 0x1093488cB9c6B67118822787db3Ed487d3B5a5f7
https://github.com/marcialarturo/devToken/blob/bb817f5150b36ef4df41776dd5d57bf2a8f10266/devToken.sol#L7
https://mumbai.polygonscan.com/tx/0x744f884c5b26ff09779357b62cbdc58755d2c3fdf8f2e2e4d7a7d79285938036


-  Our application is now operational on the Arbitrum network,   offering expedited transactions, heightened security, enhanced throughput, and cost-effective operations. The contract functions as a public database, enabling users to conveniently track their public rating points, portfolios, experience, and activity.
Deployed Contract Address:0xcAB0d540A42D7D212AdE27462721Ea86E50fA2aC
https://github.com/marcialarturo/devToken/blob/bb817f5150b36ef4df41776dd5d57bf2a8f10266/devToken.sol#L7
https://stylus-testnet-explorer.arbitrum.io/tx/0x8020ff68f8d3ea329e6023506efcc01131f93cccf50bf95ae1760a7dbe9cb48f

- Our application is now operational on the Scroll network, offering expedited transactions, heightened security, enhanced throughput, and cost-effective operations. The contract functions as a public database, enabling users to conveniently track their public rating points, portfolios, experience, and activity.
Deployed Contract Address: 0xcAB0d540A42D7D212AdE27462721Ea86E50fA2aC
  https://github.com/marcialarturo/devToken/blob/bb817f5150b36ef4df41776dd5d57bf2a8f10266/devToken.sol#L7
  https://sepolia.explorer.mode.network/tx/0xa3e8c6381293428ce5b5d28afc875fd750a16c1e82cc8954462d1c453245c6e7

- Our application is now operational on the Mantle network, offering expedited transactions, heightened security, enhanced throughput, and cost-effective operations. The contract functions as a public database, enabling users to conveniently track their public rating points, portfolios, experience, and activity.
Deployed Contract Address: 0xcAB0d540A42D7D212AdE27462721Ea86E50fA2aC
  https://github.com/marcialarturo/devToken/blob/bb817f5150b36ef4df41776dd5d57bf2a8f10266/devToken.sol#L7
  https://twitter.com/_keep1/status/1705931895266013590
  https://explorer.testnet.mantle.xyz/address/0xcAB0d540A42D7D212AdE27462721Ea86E50fA2aC/transactions#address-tabs


- Our application is using WorldCoin to verify and allow the freelancer to get pay and received their earned tokens
https://github.com/marcialarturo/devToken/commit/4807077d22a4fbe173599e93610297a1a1717961

- Our application is using using The Graph for a faster data retrival of users data information, rating points, portfolios, experience, and activity.








