require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remember honey grace glimpse force skin'; 
let testAccounts = [
"0xeec232971c34e2137be6ba764f42838d055cbca22ede5d6c81e62df3c77e2f7d",
"0x91ee57dd56a42400fe774487dd04d7b9f1e95420cd3750a79b87b550a31f0a89",
"0xffaa8f9f83296671a76f550f9ade8dcd491fa7f10c0fdaa3ba777ccbfb9b80d0",
"0x5c82c2a05e38e589be984ea7a2915857127a5fabc4ebff459b335dad988d9294",
"0x36ddd2c8f2f601ef6d15cecefcb23b4adee717c634ad3de70ef70d6b3e87a389",
"0x49bd4033e8c417a56d15380b874873d5a042bb4edc3092330403c9b61ea0ee2a",
"0x0af9b01c965226e1deadf1c818b59fe5c7140df5b84b1c87533129c8690f2a89",
"0x6b6262426101769850b3f47f8fcc921529587402d5a0b96d18f814b715f4454c",
"0x819f401e4c530ea69386ff7819c8143a8e323892f951c1ff43772ac6e025bf06",
"0x1bbc66dfe0378397bc3f099093c0335cf9b23b5550dfe5633724f87c0baeb40a"
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

