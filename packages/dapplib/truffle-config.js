require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain umbrella good private blue swap'; 
let testAccounts = [
"0x2b164ca1322fa8468c33bdded38f75e1a3d54993b742af979be35a261f91b335",
"0xf310899dc74001ac4b6fce0c9fcaf9b793088c748ac175b0331540ae07bc8b7e",
"0xcba50ed9d2bc3256c2381d8cd1a33f4ab1db196cddfae1fa8dd280b8c2d3be66",
"0x6f8b84d330045d2bb91c2c96df50db71f7b81527bbe494fd9cfd6e6bfd1dc5dd",
"0xfa208ca9639065b293064329b4179600914d051ee0add86fbeb48f0e53dc3a46",
"0xf91306141ba087bb3c1c24a29144ee9b3121e29d45569529cb0d0814ecab4876",
"0x50d08430c93ca39bb3a821595db32c069af799d2c4b3cadb043c8d631107a22a",
"0x03aefeb1da567b5df42f776e4e4f167b67093fb5e0181936f27e7d81d591b594",
"0xcff1769bdb03ac9647d3ce8e092430ee1170b036e1e8f98287b1799660258f03",
"0xe2903daef55b8b200b93348b3721a635b43da9874a1a61feb5a2e8b087417e91"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

