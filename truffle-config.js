
 require('dotenv').config();

 const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {

  networks: {
    
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    
    // develop: {   // Localhost (default: none)
    //   port: 7545,            // Standard Ethereum port (default: none)
    //   network_id: "*",       // Any network (default: none)
    // },

    rinkeby: {
      provider: () => new HDWalletProvider( process.env.MNEMONIC_PHRASE,
         `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`),
        // numberOfAddresses: 1,
        from:'0x87906b0E252B370251E58730D7B88FdEEC9d9d8e',
        network_id:4,
        shareNonce: true,
        derivationPath: "m/44'/1'/0'/0/",
        networkCheckTimeoutnetworkCheckTimeout: 10000,
        timeoutBlocks: 200
      ,
    },

  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.9",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
