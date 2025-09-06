export interface Product {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: number;
}

export const products: Product[] = [
  {
    id: 'prod_T0RvWscuHHAaxG',
    priceId: 'price_1S4R1ILB0JPPXSZZB4K7SZKp',
    name: 'StudyCast',
    description: 'Recording and study plan app',
    mode: 'subscription',
    price: 30.00
  }
];