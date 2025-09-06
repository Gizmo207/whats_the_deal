import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Success() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-gray-600 mb-8">
            Welcome to StudyCast! Your subscription is now active and you can start using 
            all the features to supercharge your study sessions.
          </p>
          
          <div className="space-y-4">
            <Link to="/dashboard">
              <Button className="w-full group">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/pricing">
              <Button variant="outline" className="w-full">
                View All Plans
              </Button>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help getting started? Check out our{' '}
              <a href="#" className="text-blue-600 hover:text-blue-500">
                quick start guide
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}