import React from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { products } from '../config/stripe';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

export function SubscriptionStatus() {
  const { subscription, loading } = useSubscription();

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!subscription || !subscription.subscription_id) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-yellow-400 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-yellow-800">No Active Subscription</h3>
            <p className="text-sm text-yellow-700 mt-1">You don't have an active subscription yet.</p>
          </div>
        </div>
      </div>
    );
  }

  const product = products.find(p => p.priceId === subscription.price_id);
  const isActive = subscription.subscription_status === 'active';
  const isCanceled = subscription.cancel_at_period_end;

  const getStatusIcon = () => {
    if (isActive && !isCanceled) return <CheckCircle className="h-5 w-5 text-green-400" />;
    if (isCanceled) return <Clock className="h-5 w-5 text-yellow-400" />;
    return <XCircle className="h-5 w-5 text-red-400" />;
  };

  const getStatusColor = () => {
    if (isActive && !isCanceled) return 'bg-green-50 border-green-200';
    if (isCanceled) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  const getStatusText = () => {
    if (isActive && !isCanceled) return 'Active Subscription';
    if (isCanceled) return 'Subscription Ending';
    return 'Subscription Inactive';
  };

  return (
    <div className={`border rounded-lg p-6 ${getStatusColor()}`}>
      <div className="flex items-start">
        {getStatusIcon()}
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-gray-900">{getStatusText()}</h3>
          {product && (
            <p className="text-sm text-gray-600 mt-1">
              {product.name} - ${product.price}/month
            </p>
          )}
          {subscription.current_period_end && (
            <p className="text-xs text-gray-500 mt-2">
              {isCanceled ? 'Ends' : 'Renews'} on{' '}
              {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
            </p>
          )}
          {subscription.payment_method_last4 && (
            <p className="text-xs text-gray-500 mt-1">
              Payment: {subscription.payment_method_brand?.toUpperCase()} ****{subscription.payment_method_last4}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}