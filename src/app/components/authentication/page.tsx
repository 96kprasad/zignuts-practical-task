'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SVGIcons } from '../../../../utils/svgConstants';
import { useAuthStore } from '../../store/authStore';
import { showSuccess, showError } from '../../../../utils/notification';
interface AuthPageProps {
  type: 'login' | 'register';
}

export default function AuthPage({ type }: AuthPageProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { login, register, loading } = useAuthStore();

  const isLogin = type === 'login';

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isLogin) {
      const result = await login(formData.email, formData.password);
      if (result.success) {
        showSuccess('Login successful! Welcome back.');
        router.replace('/dashboard');
      } else {
        showError(result.error || 'Login failed');
      }
    } else {
      const result = await register(formData.email, formData.password, formData.name);
      if (result.success) {
        showSuccess('Registration successful! Please login to continue.');
        router.replace('/');
      } else {
        showError(result.error || 'Registration failed');
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="relative w-full max-w-md z-10">
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-8">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <SVGIcons.Lock className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {isLogin ? 'Welcome Back!' : 'Join Us Today'}
              </h1>
              <p className="text-white/80 text-sm">
                {isLogin
                  ? 'Sign in to continue to your account'
                  : 'Create your account to get started'}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>

              {!isLogin && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <SVGIcons.User className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    suppressHydrationWarning
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400 pr-12"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    suppressHydrationWarning
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    suppressHydrationWarning
                  >
                    {showPassword ? (
                      <SVGIcons.EyeClosed className="w-5 h-5" />
                    ) : (
                      <SVGIcons.EyeOpen className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me (Login only) */}
              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-gray-600">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                suppressHydrationWarning
              >
                {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              suppressHydrationWarning
            >
              <SVGIcons.Google className="w-5 h-5 mr-3" />
              <span className="text-gray-700 font-medium">
                Continue with Google
              </span>
            </button>

            {/* Switch link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <a
                  href={isLogin ? '/register' : '/login'}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-200"
                >
                  {isLogin ? 'Sign up here' : 'Sign in here'}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Task Manager. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
