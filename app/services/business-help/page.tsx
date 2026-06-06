'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export default function BusinessHelpPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] break-words overflow-x-hidden">
      
      <div className="relative w-full h-[50vh] md:h-[75vh] border-b border-zinc-900 overflow-hidden">
        <Image
          src="/images/business-hero.webp" 
          alt="Бизнес и успех — Ruslan Infinity"
          fill
          priority
          className="object-cover opacity-70" 
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]"></div>
        
        <div className="relative z-10 flex items-end justify-center h-full pb-12 sm:pb-16 md:pb-24">
          <div className="text-center px-4">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-serif tracking-[0.2em] sm:tracking-[0.3em] text-[#c5a880] uppercase mb-3 sm:mb-4">
              Бизнес и успех
            </h1>
            <p className="text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.6em] text-zinc-500 uppercase font-light">
              Энергия процветания и власти
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-20 py-12 sm:py-24 animate-reveal">
        
        <div className="w-16 h-px bg-zinc-800 mx-auto"></div>

        <article className="space-y-6 sm:space-y-10 text-zinc-400 leading-relaxed sm:leading-[2] tracking-wide text-justify font-light text-sm sm:text-base">
          
          <p className="clear-both">
            <span className="float-left text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-none mr-2 mt-1 sm:mt-0">
              П
            </span>
            омощь в бизнесе, торговле и коммерции — это особый аспект работы с клиентом, о котором стоит поговорить отдельно. Издавна колдовские обряды на благополучие и успех в делах были проверены временем. Короли, кардиналы и великие торговцы прошлого всегда пользовались услугами магов, астрологов и предсказателей различных степеней. По сей день крупные игроки рынка обращаются к тайным знаниям, и in этом нет ничего необычного или странного. Существует множество ритуалов, которые могут как помочь, так и навредить — всё зависит от конкретной ситуации и обоюдных интересов сторон.
          </p>

          <p>
            В наше время услуги мастеров черной магии, тарологов и астрологов становятся крайне популярным явлением среди мощных корпораций и предпринимателей. В мои задачи входит полный просмотр ведения дел в предпринимательстве на наличие энергетических и магических угроз. Я помогаю выявить недоброжелателей как внутри компании, так и за её пределами, определить скрытые риски и повлиять на ситуацию, указав ей верное направление для достижения процветания и стабильности.
          </p>

          <div className="py-6 sm:py-12 flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className="w-8 h-px bg-zinc-800"></div>
            <blockquote className="text-base sm:text-xl md:text-2xl font-serif italic text-white max-w-lg tracking-wider sm:tracking-widest leading-relaxed px-2">
              "Деньги любят тишину и чистую энергию. Я убираю всё, что мешает вашему капиталу расти, создавая вокруг вашего дела непроницаемый щит."
            </blockquote>
            <div className="w-8 h-px bg-zinc-800"></div>
          </div>

          <p>
            Мы работаем с конкретными задачами: от привлечения крупных контрактов до устранения административных барьеров через коррекцию событийного ряда. Каждое действие строго конфиденциально. Ваш успех станет вашей новой реальностью, а те, кто строил препятствия, так и не поймут, почему удача навсегда покинула их сторону.
          </p>

          <div className="pt-8 sm:pt-10 grid sm:grid-cols-2 gap-8 sm:gap-12 border-t border-zinc-900">
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-white text-xs uppercase tracking-[0.2em] font-semibold text-[#c5a880]/90">Финансовый прорыв</h3>
              <p className="text-xs sm:text-sm text-zinc-500 italic leading-relaxed">Снятие блоков на приход денежных средств и открытие новых источников дохода.</p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-white text-xs uppercase tracking-[0.2em] font-semibold text-[#c5a880]/90">Защита активов</h3>
              <p className="text-xs sm:text-sm text-zinc-500 italic leading-relaxed">Ограждение от проверок, зависти конкурентов и попыток энергетического воровства удачи.</p>
            </div>
          </div>
        </article>

        <div className="text-center pt-6 sm:pt-10 border-t border-zinc-950">
          <p className="text-[9px] sm:text-[10px] text-zinc-600 uppercase tracking-[0.2em] sm:tracking-[0.3em] px-2 leading-relaxed">
            Конфиденциальность гарантирована • Работа на результат
          </p>
        </div>

      </div>
    </div>
  )
}