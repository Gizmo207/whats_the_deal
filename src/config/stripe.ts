import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'studycast',
    priceId: 'price_1234567890', // This will be replaced with your actual Stripe price ID
    name: 'StudyCast',
    description: 'Recording and study plan app',
    mode: 'subscription',
    price: 30.00
  }
];

export const STRIPE_CONFIG = {
  publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
  successUrl: `${window.location.origin}/success`,
  cancelUrl: `${window.location.origin}/pricing`,
} as const;

export { products }