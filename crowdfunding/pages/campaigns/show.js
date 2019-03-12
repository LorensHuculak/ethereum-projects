import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Manager Address',
        description:
          'The Manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description:
          'You must contribute at least this amount of wei to become a contributor',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: requestsCount,
        meta: 'Requests Amount',
        description:
          'A request for money withdrawal from the contract. It must be approved by contributors.',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: approversCount,
        meta: 'Approvers Amount',
        description:
          'Number of people who have already contributed to this campaign.',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (Ether)',
        description:
          'The amount of money that has been funded by contributors to the campaign.',
        style: { overflowWrap: 'break-word' }
      }
    ];
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        <Grid>
          <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
