import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Pricing />
      <Blog />
      <Contact />
      <footer className="w-full bg-pink-50/50 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} PastelPay Inc.</p>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#pricing" className="hover:text-slate-900">Pricing</a>
              <a href="#blog" className="hover:text-slate-900">Blog</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
