import { properties } from '../data/properties';

export const getProperties = async () => {
  // Simulate API call
  return new Promise(resolve => setTimeout(() => resolve(properties), 1000));
};
