'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export default function CounterMagicPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] break-words overflow-x-hidden">

      <div className="relative w-full h-[50vh] md:h-[70vh] border-b border-zinc-900 overflow-hidden">
        <Image
          src="/images/counter-magic-hero.webp" 
          alt="Магия и контрмагия — Mag Infinite"
          fill
          priority
          className="object-cover opacity-80" 
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>

        <div className="relative z-10 flex items-end justify-center h-full pb-12 sm:pb-16 md:pb-20">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-[0.2em] sm:tracking-[0.3em] text-[#c5a880] uppercase text-center px-4">
            Магия и контрмагия
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-20 py-12 sm:py-24 animate-reveal">
        
        <div className="w-16 h-px bg-zinc-800 mx-auto"></div>

        <article className="space-y-6 sm:space-y-10 text-zinc-400 leading-relaxed sm:leading-[2] tracking-wide text-justify font-light text-sm sm:text-base">
          
          <p className="clear-both">
            <span className="float-left text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-none mr-2 mt-1 sm:mt-0">
              М
            </span>
            агия и контрмагия — в этих терминах нет различий по сути, есть лишь разница в форме 
            проявления. Контрмагия является одним из мощнейших инструментов и применяется в 
            крайних случаях: когда человеку угрожает прямая опасность со стороны 
            недоброжелателей, отдельных колдунов или ведьм всех степеней и конфессий. Мастер 
            прибегает к контрмагии, когда клиенту систематически наносят вред или существует 
            реальная угроза для жизни. 
          </p>

          <div className="py-6 sm:py-12 flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className="text-base sm:text-xl md:text-2xl font-serif italic text-zinc-200 max-w-lg tracking-wider sm:tracking-widest leading-relaxed px-2">
              "Око за око, зуб за зуб. Профессионалы называют это красной магией — 
              высшей справедливостью в ответ на магическую aggression."
            </div>
          </div>

          <p>
            Как профессионал и мастер черной магии, я детально изучу вашу ситуацию посредством 
            предсказания на картах таро, чтобы увидеть скрытые угрозы и найти выход из тупика. 
            Проведу глубокую диагностику на предмет проклятий, заклятий и порчи. Моя задача — 
            выявить врага, снять колдовское воздействие и поставить мощную защиту на вас, ваш 
            бизнес или семью. В ситуациях, когда для достижения цели все методы хороши, 
            контрмагия становится вашим решающим преимуществом.
          </p>

          <div className="pt-8 sm:pt-10 grid gap-6 sm:gap-8 border-t border-zinc-900">
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold text-[#c5a880]/90">Диагностика агрессии</h3>
              <p className="text-xs sm:text-sm text-zinc-500 italic">Выявление источника магической атаки и её реальной силы.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold text-[#c5a880]/90">Магическое сопровождение</h3>
              <p className="text-xs sm:text-sm text-zinc-500 italic">Защита проектов и решение закулисных аспектов в бизнесе и личной сфере.</p>
            </div>
          </div>
        </article>

        <div className="text-center pt-6 sm:pt-10 border-t border-zinc-950">
          <p className="text-[9px] sm:text-[10px] text-zinc-600 uppercase tracking-[0.2em] sm:tracking-[0.3em] px-2 leading-relaxed">
            Справедливость • Сила • Ответный удар
          </p>
        </div>

      </div>
    </div>
  )
}