import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Designing fintech with softness',
    excerpt: 'How pastel palettes and calm motion reduce cognitive load in money apps.',
    tag: 'Design',
  },
  {
    id: 2,
    title: 'Why predictable pricing wins',
    excerpt: 'A look at transparent fees and trust signals for digital banking startups.',
    tag: 'Product',
  },
  {
    id: 3,
    title: 'Scaling payments securely',
    excerpt: 'Best practices to keep uptime high while shipping features fast.',
    tag: 'Engineering',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="w-full bg-gradient-to-b from-white to-pink-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">From the blog</h2>
          <p className="mt-3 text-slate-600">Ideas at the intersection of design and finance.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow">
              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">{post.tag}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-700">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-700">
                Read more <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
