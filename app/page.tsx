'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase';

export default function HomePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const supabase = createClient();
        const { data } = await supabase.auth.getSession();
        setUser(data?.session?.user ?? null);
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="bg-red-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">L</span>
              </div>
              <span className="hidden sm:inline text-xl font-bold">LADLAKA</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-6 items-center">
              <a href="#" className="hover:text-red-100 transition">
                How it works
              </a>
              <a href="#" className="hover:text-red-100 transition">
                For Sellers
              </a>
              <a href="#" className="hover:text-red-100 transition">
                For Delivery
              </a>
              <a href="#" className="hover:text-red-100 transition">
                Contact
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-2 sm:gap-4 items-center">
              {loading ? (
                <div className="w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
              ) : user ? (
                <>
                  <span className="text-sm hidden sm:inline">Welcome!</span>
                  <button className="bg-white text-red-600 px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition text-sm sm:text-base">
                    Dashboard
                  </button>
                </>
              ) : (
                <>
                  <button className="text-white hover:text-red-100 transition text-sm sm:text-base">
                    Sign In
                  </button>
                  <button className="bg-white text-red-600 px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition text-sm sm:text-base">
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Your Favorite Shop,
                <br />
                <span className="text-red-200">Delivered Fast</span>
              </h1>
              <p className="text-base sm:text-lg text-red-100 mb-6 leading-relaxed">
                LADLAKA connects you with local sellers and ensures quick delivery. Shop from verified vendors and enjoy seamless checkout.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-red-600 px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition">
                  Order Now
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - Feature Box */}
            <div className="bg-red-500 rounded-lg p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-3xl">🚚</div>
                  <div>
                    <h3 className="font-bold text-lg">Fast Delivery</h3>
                    <p className="text-red-100 text-sm">Get your order in 30-45 minutes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">🛍️</div>
                  <div>
                    <h3 className="font-bold text-lg">Wide Selection</h3>
                    <p className="text-red-100 text-sm">Thousands of products from local sellers</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">💳</div>
                  <div>
                    <h3 className="font-bold text-lg">Secure Payment</h3>
                    <p className="text-red-100 text-sm">Safe and encrypted transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">How LADLAKA Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📱', title: 'Browse', desc: 'Find products from local sellers' },
              { icon: '🛒', title: 'Add to Cart', desc: 'Select items and quantities' },
              { icon: '💳', title: 'Checkout', desc: 'Secure payment options' },
              { icon: '🏃', title: 'Delivered', desc: 'Track your order in real-time' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">For Everyone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: 'Customers',
                emoji: '👥',
                desc: 'Shop from your favorite sellers and get fast delivery to your doorstep.',
                features: ['Easy ordering', 'Fast delivery', 'Order tracking', 'Secure payment'],
                cta: 'Start Shopping',
              },
              {
                role: 'Sellers',
                emoji: '🏪',
                desc: 'Set up your shop and reach thousands of customers in your area.',
                features: ['Free shop setup', 'Inventory management', 'Order management', 'Analytics dashboard'],
                cta: 'Become a Seller',
              },
              {
                role: 'Delivery Partners',
                emoji: '🚴',
                desc: 'Earn money by delivering orders in your spare time.',
                features: ['Flexible hours', 'Real earnings', 'Easy signup', 'Live tracking'],
                cta: 'Join as Driver',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{item.role}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.desc}</p>
                <ul className="mb-6 space-y-2">
                  {item.features.map((feature, fidx) => (
                    <li key={fidx} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-red-600">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                  {item.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-red-100 mb-6">Join thousands of users on LADLAKA today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition">
              Download App
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition">
              Visit Web
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">LADLAKA</h4>
              <p className="text-sm">Fast delivery, great quality, trusted by millions.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">For You</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Browse</a></li>
                <li><a href="#" className="hover:text-white transition">Orders</a></li>
                <li><a href="#" className="hover:text-white transition">Account</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">For Business</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Sell on LADLAKA</a></li>
                <li><a href="#" className="hover:text-white transition">Deliver with Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2024 LADLAKA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
