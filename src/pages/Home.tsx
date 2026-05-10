import { PageTransition } from '../components/PageTransition';
import { ArrowRight, CheckCircle2, Building2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy z-0">
          <img 
            src="https://picsum.photos/seed/ironjohn/1920/1080?blur=2" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 flex justify-center"
          >
            <div className="relative flex items-center justify-center group">
              <div className="absolute inset-0 bg-brand-gold/20 blur-2xl rounded-full transition-all duration-500 group-hover:bg-brand-gold/30"></div>
              <img src="/logo.png" alt="Iron John" className="relative z-10 w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl invert mix-blend-screen" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-wider leading-tight"
          >
            確かな「繋がり」が、<br className="md:hidden" />
            ビジネスと人生の<span className="text-brand-gold">盾</span>となる。
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-brand-silver/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            価値ある繋がりを育み、表舞台には立たずとも<br />
            裏から強大な力であなたの成功を支援し、守り抜きます。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              to="/about" 
              className="inline-flex items-center space-x-2 bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold tracking-widest hover:bg-white transition-colors duration-300"
            >
              <span>会社概要を見る</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Value Section */}
      <section className="py-24 bg-brand-navy-light relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-wider">私たちの価値観</h2>
            <div className="w-12 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-serif text-brand-silver">誠実に、力強く、揺るぎない盾として。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: '誠実な結びつき',
                desc: 'ASP事業を通じ、広告主とアフィリエイターの双方に利益をもたらす、透明性の高い関係を構築します。',
                icon: <CheckCircle2 className="w-10 h-10 text-brand-gold mb-6" />
              },
              {
                title: '人生の基盤を守る',
                desc: '不動産仲介により、お客様のライフスタイルに最適な住環境を提案し、確かな資産形成をサポートします。',
                icon: <Building2 className="w-10 h-10 text-brand-gold mb-6" />
              },
              {
                title: '未来への備え',
                desc: '保険仲介を通じ、予期せぬリスクからお客様とご家族を守る、強固な防具を提供します。',
                icon: <ShieldCheck className="w-10 h-10 text-brand-gold mb-6" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-brand-navy p-8 rounded-sm border border-white/5 hover:border-brand-gold/30 transition-colors duration-300 group">
                {item.icon}
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                <p className="text-brand-silver/80 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-navy relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-wider">事業内容</h2>
              <div className="w-12 h-1 bg-brand-gold mb-6"></div>
              <p className="text-brand-silver/80 max-w-xl">
                ビジネスの成長を加速させるASP事業と、人生の基盤を強固にするライフサポート事業を展開しています。
              </p>
            </div>
            <Link to="/service" className="hidden md:flex items-center space-x-2 text-brand-gold hover:text-white transition-colors group mt-8 md:mt-0">
              <span className="tracking-widest text-sm font-bold">すべての事業を見る</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ASP Service */}
            <div className="relative h-[400px] group overflow-hidden rounded-sm">
              <img 
                src="https://picsum.photos/seed/asp/800/600?blur=1" 
                alt="ASP Business" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <span className="text-brand-gold text-sm font-bold tracking-widest mb-2">メイン事業</span>
                <h3 className="text-3xl font-serif text-white mb-4">ASP事業</h3>
                <p className="text-brand-silver/90 mb-8 max-w-md line-clamp-2">
                  広告主とアフィリエイターを誠実に結びつけ、双方の利益を最大化する広告プラットフォームを提供します。
                </p>
                <Link to="/service#asp" className="inline-flex items-center space-x-2 text-white hover:text-brand-gold transition-colors w-max">
                  <span className="text-sm tracking-widest">詳細を見る</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Life Support Service */}
            <div className="relative h-[400px] group overflow-hidden rounded-sm">
              <img 
                src="https://picsum.photos/seed/realestate/800/600?blur=1" 
                alt="Life Support Business" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <span className="text-brand-blue text-sm font-bold tracking-widest mb-2">サブ事業</span>
                <h3 className="text-3xl font-serif text-white mb-4">ライフサポート事業</h3>
                <p className="text-brand-silver/90 mb-8 max-w-md line-clamp-2">
                  不動産仲介と保険仲介を通じて、人生の重要な選択をサポートし、お客様の大切な資産を守ります。
                </p>
                <Link to="/service#life-support" className="inline-flex items-center space-x-2 text-white hover:text-brand-blue transition-colors w-max">
                  <span className="text-sm tracking-widest">詳細を見る</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/service" className="inline-flex items-center space-x-2 text-brand-gold hover:text-white transition-colors group">
              <span className="tracking-widest text-sm font-bold">VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
