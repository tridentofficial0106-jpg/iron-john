import { PageTransition } from '../components/PageTransition';
import { Target, Users, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Service() {
  return (
    <PageTransition>
      {/* Page Header */}
      <section className="relative py-24 bg-brand-navy-light border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-wider">事業内容</h1>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-silver tracking-widest">事業内容</p>
        </div>
      </section>

      {/* Main Business: ASP */}
      <section id="asp" className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[500px] rounded-sm overflow-hidden group">
                <img 
                  src="https://picsum.photos/seed/asp-service/800/1000?blur=1" 
                  alt="ASP Business" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/20 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-brand-navy to-transparent w-full">
                  {/* ロゴ画像挿入箇所: <img src="/logo.png" alt="ASP Business" className="w-12 h-12 mb-4" /> */}
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <span className="text-brand-gold font-bold tracking-widest text-sm mb-4 block">メイン事業</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">ASP（広告仲介）事業</h2>
              
              <p className="text-brand-silver/90 leading-relaxed mb-10 font-light">
                広告主様とアフィリエイター様を誠実に結びつけ、双方の利益を最大化するプラットフォームを提供します。私たちは単なる仲介者ではなく、両者のビジネスを裏から支える「盾」として機能します。
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-navy-light border border-brand-gold/30 flex items-center justify-center">
                      <Target className="w-6 h-6 text-brand-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">広告主様へ</h3>
                    <p className="text-brand-silver/80 text-sm leading-relaxed">
                      質の高いアフィリエイターとのマッチングにより、費用対効果の高いプロモーションを実現。ブランド価値を守りながら、確実な成果へと導きます。
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-navy-light border border-brand-gold/30 flex items-center justify-center">
                      <Users className="w-6 h-6 text-brand-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">アフィリエイター様へ</h3>
                    <p className="text-brand-silver/80 text-sm leading-relaxed">
                      透明性の高い報酬体系と、充実したサポート体制。初心者から上級者まで、安心して収益化に取り組める環境を提供します。
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link to="/about-asp" className="inline-flex items-center space-x-2 text-brand-gold hover:text-white transition-colors group">
                  <span className="tracking-widest text-sm font-bold">アフィリエイトの仕組みについて詳しく見る</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Business: Life Support */}
      <section id="life-support" className="py-24 bg-brand-navy-light border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[500px] rounded-sm overflow-hidden group">
                <img 
                  src="https://picsum.photos/seed/life-support/800/1000?blur=1" 
                  alt="Life Support Business" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/20 transition-colors duration-700" />
                <div className="absolute bottom-0 right-0 p-8 bg-gradient-to-t from-brand-navy to-transparent w-full flex justify-end">
                  {/* ロゴ画像挿入箇所: <img src="/logo.png" alt="Life Support Business" className="w-12 h-12 mb-4" /> */}
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <span className="text-brand-blue font-bold tracking-widest text-sm mb-4 block">サブ事業</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">ライフサポート事業</h2>
              
              <p className="text-brand-silver/90 leading-relaxed mb-10 font-light">
                ビジネスの成功だけでなく、人生という長い道のりにおいても、私たちはあなたの「盾」となります。不動産と保険の専門知識を活かし、大切な資産と未来を守るサポートを提供します。
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-navy border border-brand-blue/30 flex items-center justify-center">
                      <Building className="w-6 h-6 text-brand-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">不動産仲介業</h3>
                    <p className="text-brand-silver/80 text-sm leading-relaxed">
                      住まい探しから投資用物件まで、お客様のライフステージや目的に合わせた最適な不動産をご提案。複雑な手続きも裏からしっかりサポートします。
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-navy border border-brand-blue/30 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-brand-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">保険仲介業</h3>
                    <p className="text-brand-silver/80 text-sm leading-relaxed">
                      予期せぬリスクからご自身とご家族を守るため、数ある保険商品の中から最適なプランを設計。万が一の際にも、揺るがない防具として機能します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
