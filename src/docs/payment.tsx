import React from 'react';
import {
  PaymentAmex,
  PaymentApplePay,
  PaymentBank,
  PaymentDiscover,
  PaymentGooglePay,
  PaymentMaster,
  PaymentOtherCard,
  PaymentVisa,
} from '../index';
import '../index.css';

export default () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <PaymentVisa />
      <PaymentMaster />
      <PaymentAmex />
      <PaymentDiscover />
      <PaymentGooglePay />
      <PaymentApplePay />
      <PaymentOtherCard />
      <PaymentBank />
    </div>
  );
};
