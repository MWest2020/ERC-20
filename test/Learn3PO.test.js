// made the test, let it fail. Wrote the boilerplate pragma for it, passed
const Learn3PO = artifacts.require("Learn3PO");

//after pass
contract("learn3PO", (accounts) => {
    console.log(accounts);
    before(async() => {
        learn3PO = await Learn3PO.deployed();
    });

    it("Gives the newbie dev 1M tokens", async () => {
        let balance =  await learn3PO.balanceOf(accounts[0]);
        balance = web3.utils.fromWei(balance, 'ether');
        assert.equal(balance, 1000000, "Balance should be 1M tokens for web3 noobie")
    } )

    it("can transfer tokens between accounts", async () => {
        let amount  =  web3.utils.toWei('1000', 'ether')
        await learn3PO.transfer(accounts[1], amount, { from: accounts[0]} )

        let balance = await learn3PO.balanceOf(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        assert(balance, '1000', "Balance should be 1k tokens")
    })


})