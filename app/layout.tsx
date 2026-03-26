import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Mag Infinite',
  description: 'Профессиональные магические услуги: любовная магия, помощь в бизнесе, защитные обряды. Консультации в Одессе и онлайн.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="bg-[#050505] text-zinc-300 antialiased selection:bg-zinc-800 selection:text-white">

        <Header />

        <main className="pt-32 min-h-screen">
          {children}
        </main>

        <div className="max-w-4xl mx-auto px-6 py-10">
          <p className="text-[10px] md:text-[11px] text-zinc-600 uppercase tracking-[0.2em] text-center leading-relaxed opacity-70">
            * Все результаты индивидуальны и зависят от специфики каждого человека
          </p>
        </div>

        <footer id="contacts" className="relative mt-20 py-24 border-t border-zinc-900 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: 'url("/branches.jpg")' }} 
          ></div>

          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">
            <div className="w-16 h-px bg-zinc-700 mx-auto"></div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-serif tracking-[0.4em] text-white uppercase">Контакты</h2>
              <p className="text-xs text-zinc-500 uppercase tracking-widest italic">
                Для записи на консультацию используйте мессенджеры
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto px-4">
              <ContactButton label="Telegram" href="https://t.me/+380663617631" />
              <ContactButton label="WhatsApp" href="https://wa.me/380663617631" />
              <ContactButton label="Viber" href="viber://chat?number=%2B380663617631" />
              <ContactButton label="Email" href="mailto:maginfinity222@gmail.com?subject=Запись на консультацию" />
            </div>

            <div className="pt-10 text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} • Все права защищены
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}

function ContactButton({ label, href }: { label: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="border border-zinc-800 p-4 text-[10px] uppercase tracking-widest text-zinc-400 hover:border-white hover:text-white transition-all duration-500 text-center flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      {label}
    </a>
  )
}