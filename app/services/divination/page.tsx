'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export default function DivinationPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] break-words overflow-x-hidden">
      
      <div className="relative w-full h-[50vh] md:h-[70vh] border-b border-zinc-900 overflow-hidden">
        <Image
          src="/images/divination-hero.webp" 
          alt="Магия предсказаний и прорицаний — Ruslan Infinity"
          fill
          priority
          className="object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-[0.2em] sm:tracking-[0.3em] text-[#c5a880] uppercase text-center px-4 leading-tight">
            Магия предсказаний и прорицаний
          </h1>
          <div className="w-12 h-px bg-accent-red/40 mt-4 md:hidden"></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-20 py-12 sm:py-24 animate-reveal">
        
        <div className="w-16 h-px bg-zinc-800 mx-auto"></div>

        <article className="space-y-6 sm:space-y-10 text-zinc-400 leading-relaxed sm:leading-[2] tracking-wide text-justify font-light text-sm sm:text-base">
          <p className="clear-both">
            <span className="float-left text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-none mr-2 mt-1 sm:mt-0">
              П
            </span>
            рорицание на картах таро представляет собой одну из самых сильных форм ясновидения, 
            подвластную лишь мастеру высших ступеней развития. Это магический ритуал, 
            позволяющий провести и донести информацию через темную сторону подсознания к 
            сверхсознанию человека. Моя задача — подсказать путь, основываясь на прошлом 
            опыте, упредить об опасностях и увидеть самые сокровенные моменты.
          </p>

          <div className="py-6 sm:py-12 flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className="w-8 h-px bg-zinc-800"></div>
            <blockquote className="text-lg sm:text-2xl font-serif italic text-white max-w-lg tracking-wider sm:tracking-widest px-2">
              "Маги не гадают! Маги творят, видят сквозь время, прорицают!"
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

        <div className="text-center pt-6 sm:pt-10 border-t border-zinc-900">
          <p className="text-[9px] sm:text-[10px] text-zinc-600 uppercase tracking-[0.2em] sm:tracking-[0.3em] px-2 leading-relaxed">
            Расклад Таро • Анализ судьбы • Изменение грядущего
          </p>
        </div>

      </div>
    </div>
  )
}