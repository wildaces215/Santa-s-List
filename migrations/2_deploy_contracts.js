const SimpleStorage = artifacts.require("SimpleStorage");

const Santa = artifacts.require('Santa');

module.exports = function (deployer) {

  deployer.deploy(Santa);
  deployer.deploy(SimpleStorage)

};
