import React from 'react';
import IndividualScore from './IndividualScore';
import EnterpriseScore from './EnterpriseScore';
import InvestorScore from './InvestorScore';

const GreenScoreCalculator = () => {
  return (
    <div>
      <h1>EcoIncentive Green Score Calculator</h1>
      <IndividualScore />
      <EnterpriseScore />
      <InvestorScore />
    </div>
  );
};

export default GreenScoreCalculator;