const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  plugins: [
    'truffle-plugin-verify'
  ],
  networks: {
   development: {
    provider: new HDWalletProvider(mnemonic, "http://127.0.0.1:7545"),
    network_id: '*',
   },
   bsctest: {
    provider: new HDWalletProvider(mnemonic, `https://data-seed-prebsc-2-s2.binance.org:8545`),
    network_id: 97,
    confirmations: 2,
    timeoutBlocks: 200,
    skipDryRun: true,
   },
   bsc: {
    provider: new HDWalletProvider(mnemonic, `https://bsc-dataseed.binance.org`),
    network_id: 56,
    confirmations: 3,
    timeoutBlocks: 200,
    skipDryRun: true
   }
  },
  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
};
