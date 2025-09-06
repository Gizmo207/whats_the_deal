import React, { useState } from 'react';
import { Product } from '../types';
import { createCheckoutSession } from '../lib/stripe';
import { Button } from './ui/Button';
import { Alert } from './ui/Alert';
import { Check } from 'lucide-react';

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

  const features = [
    'Record study sessions',
    'AI-powered study plans',
    'Progress tracking',
    'Discord integration',
    'Accountability features'
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
      {error && (
        <Alert type="error" onClose={() => setError('')}>
          {error}
        </Alert>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-6">{product.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">${product.price}</span>
          {product.mode === 'subscription' && (
            <span className="text-gray-600 ml-1">/month</span>
          )}
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-3" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
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
  );
}