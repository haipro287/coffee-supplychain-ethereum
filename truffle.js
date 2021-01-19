var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = 
{
    networks: 
    {
	    development: 
		{
	   		host: "localhost",
	   		port: 8545,
	   		network_id: "*" // Match any network id
		},
    	rinkeby: {
    	    provider: function() {
		      var mnemonic = "steel neither fatigue ...";//put ETH wallet 12 mnemonic code	
		      return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/8U0AE4DUGSh8lVO3zmma");
		    },
		    network_id: '4',
		    from: '0xab0874cb61d.....',/*ETH wallet 12 mnemonic code wallet address*/
		}  
	},
	compilers: {
		solc: {
		   version: "0.4.23",    // Fetch exact version from solc-bin (default: truffle's version)
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
};