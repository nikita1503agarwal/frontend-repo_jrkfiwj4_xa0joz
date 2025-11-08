import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // This would call the backend in a full app. For now we simulate success.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Contact us</h2>
          <p className="mt-3 text-slate-600">We usually reply within one business day.</p>
        </div>
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-pink-50 p-6 shadow-sm md:p-8">
          <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="mb-1 block text-sm text-slate-600">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 outline-none ring-indigo-200 focus:ring"
                placeholder="Jamie Lee"
              />
            </div>
            <div className="md:col-span-1">
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
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm text-slate-600">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800 outline-none ring-indigo-200 focus:ring"
                placeholder="How can we help?"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-500 disabled:opacity-60 md:w-auto"
              >
                <Send size={18} /> {status === 'loading' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'success' && (
                <p className="mt-3 text-sm text-emerald-600">Thanks! We received your message.</p>
              )}
              {status === 'error' && (
                <p className="mt-3 text-sm text-rose-600">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
