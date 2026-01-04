import { Text } from 'react-native';
import React from 'react';

const Currency = ({ quantity, currency = 'INR' }) => {
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
  }).format(quantity);

  return <>{formatted}</>;
};

export default Currency;
