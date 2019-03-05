const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'dutch tell year visual gas kingdom employ demand movie earth myself blanket',
  'https://rinkeby.infura.io/v3/608b1e03bd4842da9d022f2fdb940a6b'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
