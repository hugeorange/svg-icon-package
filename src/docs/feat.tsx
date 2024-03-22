import React from 'react';
import {
  FeatAirplane,
  FeatChat,
  FeatDelivery,
  FeatGift,
  FeatJob,
  FeatRewards,
  FeatWebsite,
  FeatZero,
} from '../index';
import '../index.css';

export default () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <FeatWebsite />
      <FeatZero />
      <FeatDelivery />
      <FeatRewards />
      <FeatGift />
      <FeatAirplane />
      <FeatJob />
      <FeatChat />
    </div>
  );
};
