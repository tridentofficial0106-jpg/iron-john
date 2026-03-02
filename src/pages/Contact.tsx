import { PageTransition } from '../components/PageTransition';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <PageTransition>
      {/* Page Header */}
      <section className="relative py-24 bg-brand-navy-light border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-wider">お問い合わせ</h1>
          <div className="w-12 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-silver tracking-widest">お問い合わせ</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif text-white mb-8">お気軽にご相談ください</h2>
              <p className="text-brand-silver/90 leading-relaxed mb-12 font-light">
                ASP事業へのご参画、不動産や保険に関するご相談など、株式会社Iron Johnへのお問い合わせは、こちらのフォームまたはお電話にて承っております。
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-navy-light border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-white mb-2">所在地</h3>
                    <p className="text-brand-silver/80 text-sm leading-relaxed">
                      〒550-0015<br />
                      大阪府大阪市西区南堀江
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-navy-light border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-white mb-2">お電話</h3>
                    <p className="text-brand-silver/80 text-sm leading-relaxed">
                      06-XXXX-XXXX<br />
                      <span className="text-xs text-brand-silver/60">受付時間：平日 10:00 - 18:00</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-navy-light border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-white mb-2">メール</h3>
                    <p className="text-brand-silver/80 text-sm leading-relaxed">
                      info@ironjohn.co.jp
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-brand-navy-light p-8 md:p-10 rounded-sm border border-white/10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-bold tracking-widest text-brand-silver mb-2">お問い合わせ種別 <span className="text-brand-gold">*</span></label>
                  <select id="type" className="w-full bg-brand-navy border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors">
                    <option value="">選択してください</option>
                    <option value="asp">ASP事業について（広告主様）</option>
                    <option value="affiliate">アフィリエイター登録について</option>
                    <option value="realestate">不動産に関するご相談</option>
                    <option value="insurance">保険に関するご相談</option>
                    <option value="other">その他のお問い合わせ</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold tracking-widest text-brand-silver mb-2">お名前 <span className="text-brand-gold">*</span></label>
                    <input type="text" id="name" className="w-full bg-brand-navy border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="山田 太郎" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold tracking-widest text-brand-silver mb-2">貴社名</label>
                    <input type="text" id="company" className="w-full bg-brand-navy border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="株式会社〇〇" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold tracking-widest text-brand-silver mb-2">メールアドレス <span className="text-brand-gold">*</span></label>
                  <input type="email" id="email" className="w-full bg-brand-navy border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="info@example.com" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold tracking-widest text-brand-silver mb-2">お問い合わせ内容 <span className="text-brand-gold">*</span></label>
                  <textarea id="message" rows={5} className="w-full bg-brand-navy border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="ご相談内容をご記入ください"></textarea>
                </div>
                
                <div className="pt-4">
                  <button type="button" className="w-full bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-bold tracking-widest hover:bg-white transition-colors duration-300">
                    送信する
                  </button>
                  <p className="text-xs text-brand-silver/60 text-center mt-4">
                    送信することで、<a href="/privacy-policy" className="underline hover:text-brand-gold">プライバシーポリシー</a>に同意したものとみなされます。
                  </p>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
