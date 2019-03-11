import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xe9b79BE3744EF879aA34C004A18b97D469757fB5'
);

export default instance;
