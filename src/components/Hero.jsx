import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, LogIn, UserPlus, X } from 'lucide-react';

export default function Hero() {
  const [authOpen, setAuthOpen] = useState(false);
  const [mode, setMode] = useState('signin');

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-pink-50 via-indigo-50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      <div className="relative z-10">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <Rocket size={20} />
            </div>
            <div>
              <p className="text-xl font-semibold text-slate-800">PastelPay</p>
              <p className="text-xs text-slate-500">Smooth fintech experiences</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#pricing" className="text-slate-700 hover:text-slate-900">Pricing</a>
            <a href="#blog" className="text-slate-700 hover:text-slate-900">Blog</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
            <button
              onClick={() => {
                setMode('signin');
                setAuthOpen(true);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur hover:bg-white"
            >
              <LogIn size={18} />
              Sign in
            </button>
            <button
              onClick={() => {
                setMode('signup');
                setAuthOpen(true);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-500"
            >
              <UserPlus size={18} />
              Create account
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => {
                setMode('signin');
                setAuthOpen(true);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-500"
            >
              Get started
            </button>
          </div>
        </nav>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-6 md:pt-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Banking made beautifully simple
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-700">
              The softest way to manage payments, cards, and cash flow. Designed with a pastel aesthetic for calm, clear decision-making.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setMode('signup');
                  setAuthOpen(true);
                }}
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-white shadow-sm hover:bg-indigo-500"
              >
                Start free
              </button>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-white/80 px-6 py-3 text-slate-700 ring-1 ring-slate-200 backdrop-blur hover:bg-white"
              >
                See pricing
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                { label: 'Uptime', value: '99.99%' },
                { label: 'Monthly signups', value: '12k+' },
                { label: 'Global cards', value: '48k+' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/70 p-4 text-center shadow-sm ring-1 ring-slate-200 backdrop-blur">
                  <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {authOpen && (
        <AuthModal mode={mode} onClose={() => setAuthOpen(false)} onSwitch={(m) => setMode(m)} />)
      }
    </section>
  );
}

function AuthModal({ mode, onClose, onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setTimeout(() => {
      setLoading(false);
      setMessage(mode === 'signup' ? 'Account created. You can sign in now.' : 'Signed in successfully.');
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            {mode === 'signup' ? 'Create your account' : 'Welcome back'}
          </h3>
          <button onClick={onClose} className="rounded-full p-1 text-slate-500 hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>
        <div className="mb-4 flex gap-2 rounded-xl bg-slate-100 p-1">
          <button
            onClick={() => onSwitch('signin')}
            className={`flex-1 rounded-lg px-3 py-2 text-sm ${mode === 'signin' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}
          >
            Sign in
          </button>
          <button
            onClick={() => onSwitch('signup')}
            className={`flex-1 rounded-lg px-3 py-2 text-sm ${mode === 'signup' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}
          >
            Create account
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="mb-1 block text-sm text-slate-600">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 outline-none ring-indigo-200 focus:ring"
                placeholder="Alex Morgan"
              />
            </div>
          )}
          <div>
            <label className="mb-1 block text-sm text-slate-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 outline-none ring-indigo-200 focus:ring"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 outline-none ring-indigo-200 focus:ring"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-500 disabled:opacity-60"
          >
            {loading ? 'Please wait…' : mode === 'signup' ? 'Create account' : 'Sign in'}
          </button>
          {message && <p className="text-center text-sm text-emerald-600">{message}</p>}
        </form>
        <p className="mt-4 text-center text-xs text-slate-500">
          By continuing you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
