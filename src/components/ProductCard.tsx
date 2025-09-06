import React, { useState } from 'react';
import { Product } from '../stripe-config';
import { createCheckoutSession } from '../lib/stripe';
import { Button } from './ui/Button';
import { Alert } from './ui/Alert';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePurchase = async () => {
    setLoading(true);
    setError('');

    try {
      const { url } = await createCheckoutSession({
        price_id: product.priceId,
        success_url: `${window.location.origin}/success`,
        cancel_url: `${window.location.origin}/pricing`,
        mode: product.mode,
      });

      window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start checkout');
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      {error && (
        <Alert type="error" onClose={() => setError('')} className="mb-4">
          {error}
        </Alert>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">${product.price}</span>
          {product.mode === 'subscription' && (
            <span className="text-gray-600 ml-1">/month</span>
          )}
        </div>
        
        <Button
          onClick={handlePurchase}
          loading={loading}
          className="w-full"
          size="lg"
        >
          {product.mode === 'subscription' ? 'Subscribe Now' : 'Buy Now'}
        </Button>
      </div>
    </div>
  );
}