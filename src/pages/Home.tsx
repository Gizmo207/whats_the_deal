import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';
import { 
  Users, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Play, 
  CheckCircle 
} from 'lucide-react';

export function Home() {
  const { user } = useAuth();

  const features = [
    {
      icon: Play,
      title: 'Record Study Sessions',
      description: 'Track your study time and stay focused with built-in recording features.'
    },
    {
      icon: Target,
      title: 'AI Study Plans',
      description: 'Get personalized study plans powered by AI to maximize your learning.'
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor your progress with detailed analytics and insights.'
    },
    {
      icon: MessageSquare,
      title: 'Discord Integration',
      description: 'Connect with your study group through seamless Discord integration.'
    },
    {
      icon: Users,
      title: 'Accountability Partners',
      description: 'Stay motivated with accountability features and peer support.'
    },
    {
      icon: CheckCircle,
      title: 'Goal Achievement',
      description: 'Set and achieve your study goals with our comprehensive tracking system.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What's The Deal?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The ultimate Discord accountability app for students. Record your study sessions, 
              get AI-powered study plans, and stay accountable with your peers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link to="/dashboard">
                  <Button size="lg" className="px-8 py-4 text-lg">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/signup">
                    <Button size="lg" className="px-8 py-4 text-lg">
                      Get Started Free
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                      View Pricing
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              StudyCast combines the power of AI, social accountability, and smart tracking 
              to help you achieve your academic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Study Habits?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using StudyCast to achieve their academic goals.
          </p>
          {!user && (
            <Link to="/signup">
              <Button variant="secondary" size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100">
                Start Your Journey Today
              </Button>
            </Link>
          )}
        </div>
      </section>
    </Layout>
  );
}