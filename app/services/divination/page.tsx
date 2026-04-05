import Image from 'next/image'

export default function DivinationPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      
      <div className="centre w-full h-[10vh] md:h-[70vh] border-b border-zinc-900 overflow-hidden">
        <Image
          src="/images/divination-hero.webp" 
          alt="Ясновидение и прорицание — Mag Infinite"
          fill
          priority
          className="object-cover object-center opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
        
        <div className="relative z-10 flex items-end justify-center h-full pb-16">
          <h1 className="text-4xl md:text-5xl font-serif tracking-[0.3em] text-white uppercase text-center px-6">
            Ясновидение
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-20 py-24 animate-reveal">
        
        <div className="w-16 h-px bg-zinc-800 mx-auto"></div>

        <article className="space-y-10 text-zinc-400 leading-[2] tracking-wide text-justify font-light">
          <p>
            <span className="inline-block text-5xl md:text-7xl font-serif text-white leading-[0] mr-1 translate-y-[6px]">
              П
            </span>
            рорицание на картах Таро представляет собой одну из самых сильных форм ясновидения, 
            подвластную лишь мастеру высших ступеней развития. Это магический ритуал, 
            позволяющий провести и донести информацию через темную сторону подсознания к 
            сверхсознанию человека. Моя задача — подсказать путь, основываясь на прошлом 
            опыте, упредить об опасностях и увидеть самые сокровенные моменты.
          </p>

          <div className="py-12 flex flex-col items-center text-center space-y-6">
            <div className="w-8 h-px bg-zinc-800"></div>
            <blockquote className="text-2xl font-serif italic text-white max-w-lg tracking-widest">
              "Маги не гадают! Маги Творят... Видят сквозь время... Прорицают!"
            </blockquote>
            <div className="w-8 h-px bg-zinc-800"></div>
          </div>

          <p>
            Увидеть, упредить и предотвратить опасность — это наивысшая точка проявления 
            ясновидения. Возможность изменить будущее, зная о нем заранее, является одной из 
            сложнейших задач в магической практике. Мы помогаем проверить ваше окружение, 
            отделить ложь от правды и «отсеять плевна от зерен», указывая верный путь в 
            тумане неопределенности.
          </p>
        </article>

        <div className="text-center pt-10 border-t border-zinc-900">
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
            Расклад Таро • Анализ судьбы • Изменение грядущего
          </p>
        </div>

      </div>
    </div>
  )
}