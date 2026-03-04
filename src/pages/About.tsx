import { PageTransition } from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      {/* Page Header */}
      <section className="relative py-24 bg-brand-navy-light border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-wider">会社概要</h1>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-silver tracking-widest">会社概要・設立の想い</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <img src="/logo.png" alt="Iron John" className="w-20 h-20 object-contain opacity-50 brightness-0 invert" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-10 text-center leading-relaxed">
            裏から強大な力で、<br />
            あなたのビジネスを支援する。
          </h2>
          
          <div className="space-y-8 text-brand-silver/90 leading-loose font-light">
            <p>
              株式会社Iron John（アイアンジョン）は、決して自らが表舞台に立って栄光を浴びることはありません。しかし、お客様が困難に直面した時、裏から強大な力を与え、成功へと導く決定的な役割を果たす存在でありたいと考えています。
            </p>
            <p>
              私たちは、この姿勢こそが、真のビジネスパートナーのあり方だと信じています。
            </p>
            <p>
              現代のビジネス環境は複雑で、変化の激しい時代です。その中で、お客様自身が主人公として輝くために、私たちは強固な「盾」となり、見えないところから全力でサポートします。ASP事業においては、広告主様とアフィリエイター様を誠実に結びつけ、双方のビジネスを加速させる裏方として。ライフサポート事業においては、不動産や保険という人生の基盤を守る防具として。
            </p>
            <p>
              大阪・南堀江というトレンドとカルチャーが交差する洗練された地から、私たちは「価値ある繋がり」を育み、お客様のビジネスと人生の揺るがない盾となることをお約束します。
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-24 bg-brand-navy-light border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-white mb-12 text-center tracking-wider">COMPANY PROFILE</h2>
          
          <div className="bg-brand-navy border border-white/10 rounded-sm p-8 md:p-12">
            <dl className="divide-y divide-white/10">
              {[
                { term: '会社名', desc: '株式会社Iron John（アイアンジョン）' },
                { term: '所在地', desc: '〒550-0015 大阪府大阪市西区南堀江' },
                { term: '事業内容', desc: (
                  <ul className="list-disc list-inside space-y-2">
                    <li>ASP（アフィリエイト・サービス・プロバイダ）事業</li>
                    <li>不動産仲介業</li>
                    <li>保険仲介業</li>
                  </ul>
                )},
                { term: 'コアバリュー', desc: '価値ある繋がりを育み、ビジネスと人生の揺るがない盾となる' },
              ].map((item, index) => (
                <div key={index} className="py-6 flex flex-col md:flex-row md:gap-8">
                  <dt className="w-full md:w-48 text-brand-gold font-bold tracking-widest mb-2 md:mb-0 flex-shrink-0">
                    {item.term}
                  </dt>
                  <dd className="text-brand-silver/90 leading-relaxed">
                    {item.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
