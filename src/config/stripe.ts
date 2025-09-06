import { StripeProduct } from '../types';

export const STRIPE_PRODUCTS: StripeProduct[] = [
  {
    priceId: 'price_studycast_monthly', // Replace with your actual Stripe price ID
    name: 'StudyCast',
    description: 'Recording and study plan app',
    price: 30.00,
    mode: 'subscription'
  }
];

export const STRIPE_CONFIG = {
  publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
  successUrl: `${window.location.origin}/success`,
  cancelUrl: `${window.location.origin}/pricing`
};

export { STRIPE_PRODUCTS }