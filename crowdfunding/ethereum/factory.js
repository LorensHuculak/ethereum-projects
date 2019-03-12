import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE848315F0C8A02c8B2A67d8024b1aa7782E3D0a1'
);

export default instance;
