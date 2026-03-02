import { PageTransition } from '../components/PageTransition';
import { MonitorSmartphone, ArrowRightLeft, Coins, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutAsp() {
  return (
    <PageTransition>
      {/* Page Header */}
      <section className="relative py-24 bg-brand-navy-light border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-wider">ASPについて</h1>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-silver tracking-widest">アフィリエイトとは</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 text-brand-gold mx-auto mb-8 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-8 leading-relaxed">
            初心者にもわかりやすい、<br />
            成果報酬型広告の仕組み
          </h2>
          <p className="text-brand-silver/90 leading-loose font-light text-left md:text-center">
            アフィリエイト（成果報酬型広告）とは、あなたのブログやSNSで企業の商品やサービスを紹介し、そこから購入や申し込みが発生した際に、報酬を受け取ることができる仕組みです。Iron Johnは、この仕組みを裏から支え、安全かつスムーズに取引が行われるようサポートする「ASP（アフィリエイト・サービス・プロバイダ）」です。
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-brand-navy-light border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-white mb-16 text-center tracking-wider">仕組みの解説</h2>
          
          <div className="relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="bg-brand-navy p-8 rounded-sm border border-white/10 text-center relative">
                <div className="w-16 h-16 bg-brand-navy-light rounded-full border-2 border-brand-gold flex items-center justify-center mx-auto mb-6 absolute -top-8 left-1/2 -translate-x-1/2">
                  <MonitorSmartphone className="w-8 h-8 text-brand-gold" />
                </div>
                <div className="pt-8">
                  <span className="text-brand-gold font-bold tracking-widest text-sm mb-2 block">ステップ 01</span>
                  <h3 className="text-xl font-serif text-white mb-4">紹介する</h3>
                  <p className="text-brand-silver/80 text-sm leading-relaxed">
                    あなたのメディア（ブログ、SNSなど）で、Iron Johnが提供する広告リンクを掲載し、商品やサービスを紹介します。
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-brand-navy p-8 rounded-sm border border-white/10 text-center relative">
                <div className="w-16 h-16 bg-brand-navy-light rounded-full border-2 border-brand-gold flex items-center justify-center mx-auto mb-6 absolute -top-8 left-1/2 -translate-x-1/2">
                  <ArrowRightLeft className="w-8 h-8 text-brand-gold" />
                </div>
                <div className="pt-8">
                  <span className="text-brand-gold font-bold tracking-widest text-sm mb-2 block">ステップ 02</span>
                  <h3 className="text-xl font-serif text-white mb-4">ユーザーが行動する</h3>
                  <p className="text-brand-silver/80 text-sm leading-relaxed">
                    あなたの紹介を見たユーザーが、そのリンクをクリックして商品を購入したり、サービスに申し込んだりします。
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-brand-navy p-8 rounded-sm border border-white/10 text-center relative">
                <div className="w-16 h-16 bg-brand-navy-light rounded-full border-2 border-brand-gold flex items-center justify-center mx-auto mb-6 absolute -top-8 left-1/2 -translate-x-1/2">
                  <Coins className="w-8 h-8 text-brand-gold" />
                </div>
                <div className="pt-8">
                  <span className="text-brand-gold font-bold tracking-widest text-sm mb-2 block">ステップ 03</span>
                  <h3 className="text-xl font-serif text-white mb-4">報酬を受け取る</h3>
                  <p className="text-brand-silver/80 text-sm leading-relaxed">
                    成果が承認されると、Iron Johnを通じてあなたに報酬が支払われます。私たちは確実な支払いを保証する盾となります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Iron John */}
      <section className="py-24 bg-brand-navy border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-white mb-12 text-center tracking-wider">Iron Johnが選ばれる理由</h2>
          
          <div className="space-y-6">
            {[
              {
                title: '誠実で透明性の高いシステム',
                desc: '成果の発生から承認まで、クリアな基準を設けています。アフィリエイター様が安心して活動できるよう、不透明な取引は一切排除します。'
              },
              {
                title: '厳選された優良な広告案件',
                desc: '私たちが自信を持っておすすめできる、信頼性の高い広告主様の案件のみを取り扱っています。紹介する側もされる側も安心できる環境です。'
              }
            ].map((item, index) => (
              <div key={index} className="bg-brand-navy-light p-6 md:p-8 rounded-sm border border-white/5 flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  {/* ロゴ画像挿入箇所: <img src="/logo.png" alt="Icon" className="w-6 h-6" /> */}
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white mb-3">{item.title}</h3>
                  <p className="text-brand-silver/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-2 bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold tracking-widest hover:bg-white transition-colors duration-300"
            >
              <span>アフィリエイター登録について問い合わせる</span>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
