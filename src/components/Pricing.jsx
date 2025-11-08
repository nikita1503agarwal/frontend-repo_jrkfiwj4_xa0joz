import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    features: ['1,000 API calls', 'Basic analytics', 'Community support'],
    cta: 'Start for free',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/mo',
    features: ['50,000 API calls', 'Advanced analytics', 'Priority support'],
    cta: 'Upgrade',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: '$99',
    period: '/mo',
    features: ['Unlimited API calls', 'Insights & alerts', 'Dedicated manager'],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Transparent plans that grow with you. Cancel anytime.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 ${tier.highlighted ? 'border-indigo-300 bg-indigo-50' : 'border-slate-200 bg-white'} shadow-sm`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">Popular</span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                <span className="text-slate-500">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check size={16} className="text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-xl px-4 py-2 font-medium shadow ${tier.highlighted ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
