const Learn3PO = artifacts.require("Learn3PO");

module.exports = function (deployer) {
  deployer.deploy(Learn3PO, 1000000);
};
