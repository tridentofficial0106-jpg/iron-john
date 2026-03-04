import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-navy-light border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Iron John" className="w-12 h-12 object-contain brightness-0 invert" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-white">Iron John</span>
                <span className="text-[10px] tracking-widest text-brand-silver/70">株式会社アイアンジョン</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-brand-silver/80 mb-6 max-w-md">
              「価値ある繋がりを育み、ビジネスと人生の揺るがない盾となる」<br />
              私たちは、表舞台には立たず、裏から強大な力であなたの成功を支援し、盾となって守り抜く存在です。
            </p>
            <div className="text-sm text-brand-silver/70">
              <p>〒550-0015</p>
              <p>大阪府大阪市西区南堀江</p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-white mb-6 border-b border-brand-gold/30 pb-2 inline-block">SITEMAP</h3>
            <ul className="space-y-4 text-sm tracking-wide">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">HOME</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">ABOUT US</Link></li>
              <li><Link to="/service" className="hover:text-brand-gold transition-colors">SERVICE</Link></li>
              <li><Link to="/about-asp" className="hover:text-brand-gold transition-colors">ABOUT ASP</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">CONTACT</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-white mb-6 border-b border-brand-gold/30 pb-2 inline-block">LEGAL</h3>
            <ul className="space-y-4 text-sm tracking-wide">
              <li><Link to="/privacy-policy" className="hover:text-brand-gold transition-colors">PRIVACY POLICY</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-brand-silver/50 tracking-widest">
          &copy; {new Date().getFullYear()} Iron John Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
