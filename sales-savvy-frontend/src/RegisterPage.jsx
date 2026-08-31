import { useState } from 'react';
import { ShoppingCart, ShoppingBag } from 'lucide-react';

export default function RegisterPage() {
  const [mode, setMode] = useState('register'); // 'register' | 'login'
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'Customer',
  });
  const [submitted, setSubmitted] = useState(false);

  const isRegister = mode === 'register';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const switchMode = () => {
    setMode(isRegister ? 'login' : 'register');
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100">
      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-3xl flex items-center justify-center gap-10">

          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-xl px-8 py-9 w-full max-w-sm">
            <h1 className="text-3xl font-serif font-bold text-center text-slate-900 mb-7">
              {isRegister ? 'Register' : 'Login'}
            </h1>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-sky-700 mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your username"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              {isRegister && (
                <div>
                  <label className="block text-sm font-semibold text-sky-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-900 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-sky-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              {isRegister && (
                <div>
                  <label className="block text-sm font-semibold text-sky-700 mb-1.5">
                    Role
                  </label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    <option>Customer</option>
                    <option>Seller</option>
                    <option>Admin</option>
                  </select>
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-2.5 rounded-lg bg-slate-500 hover:bg-slate-600 text-white font-semibold transition-colors mt-2"
              >
                {isRegister ? 'Sign Up' : 'Sign In'}
              </button>
            </div>

            <p className="text-center text-sm text-slate-600 mt-4">
              {isRegister ? 'Already a user? ' : 'New User? '}
              <button
                type="button"
                onClick={switchMode}
                className="text-blue-600 hover:underline font-medium"
              >
                {isRegister ? 'Log in here' : 'Sign up here'}
              </button>
            </p>

            {submitted && (
              <p className="text-center text-sm text-green-600 mt-3 font-medium">
                {isRegister ? 'Registered' : 'Logged in'} successfully (demo only)
              </p>
            )}
          </div>

          {/* Decorative cart + bag illustration */}
          <div className="hidden md:flex items-center justify-center w-64 h-64 relative flex-shrink-0">
            <div className="absolute w-56 h-56 bg-white rounded-full opacity-40" />
            <ShoppingCart
              className="absolute bottom-0 right-0 w-40 h-40 text-slate-50"
              strokeWidth={1.5}
            />
            <ShoppingBag
              className="absolute top-4 left-6 w-24 h-24 text-orange-500"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>

      {/* Floor strip, like the studio-backdrop look in the reference */}
      <div className="h-20 w-full bg-amber-100" />
    </div>
  );
}
