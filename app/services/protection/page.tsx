'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export default function ProtectionPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] break-words overflow-x-hidden">
      
      <div className="relative w-full h-[50vh] md:h-[70vh] border-b border-zinc-900 overflow-hidden">
        <Image
          src="/images/protection-hero.webp" 
          alt="Порча и защита от нее — Ruslan Infinity"
          fill
          priority
          className="object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
        
        <div className="relative z-10 flex items-end justify-center h-full pb-12 sm:pb-16 md:pb-20">
          <div className="text-center px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif tracking-[0.2em] sm:tracking-[0.3em] text-[#c5a880] uppercase mb-3 sm:mb-4">
              Порча и защита
            </h1>
            <p className="text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.6em] text-zinc-500 uppercase font-light">
              Неприкосновенность вашей судьбы
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-20 py-12 sm:py-24 animate-reveal">
        
        <div className="w-16 h-px bg-zinc-800 mx-auto"></div>

        <article className="space-y-6 sm:space-y-10 text-zinc-400 leading-relaxed sm:leading-[2] tracking-wide text-justify font-light text-sm sm:text-base">
          
          <p className="clear-both">
            <span className="float-left text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-none mr-2 mt-1 sm:mt-0">
              С
            </span>
            нятие порчи является одним из основных направлений моей работы, так как зачастую 
            это становится жизненной необходимостью для людей. Чтобы эффективно снять 
            негативное воздействие, необходимо увидеть истинную причину и устранить следствие. 
            Самая опасная forma — это порча на смерть, снять которую подвластно лишь мастеру 
            высокой ступени духовного развития. Важно вовремя определить, от чего или от кого 
            исходит угроза, и профессионально ей противодействовать. Как гласит народная 
            мудрость: на любой яд всегда есть противоядие.
          </p>

          <p>
            Порчи на отношения, на благополучие, подклады и многое другое — в современном мире 
            это такая же реальность, как полеты в космос, в которые раньше тоже никто не верил. 
            В моменты, когда святая церковь оказывается бессильна помочь страждущему, он 
            направляется к колдуну. Так было, есть и будет всегда. Если вы чувствуете необъяснимое 
            давление или череду неудач, помните: своевременная защита — это единственный способ 
            сохранить свою судьбу и здоровье.
          </p>

          <div className="py-6 sm:py-12 flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className="w-8 h-px bg-zinc-800"></div>
            <blockquote className="text-base sm:text-xl md:text-2xl font-serif italic text-white max-w-lg tracking-wider sm:tracking-widest leading-relaxed px-2">
              "Настоящая защита незаметна, но абсолютна. Она дает вам право идти своим путем, 
              не оглядываясь на тени за спиной и не опасаясь чужого удара."
            </blockquote>
            <div className="w-8 h-px bg-zinc-800"></div>
          </div>

          <p>
            Помимо личной защиты, я провожу глубокую чистку и закрытие жилых и рабочих 
            пространств. После обряда вы заметите, как атмосфера в доме становится легче, 
            уходит беспричинная тревога, а важные дела начинают решаться быстрее и проще. 
            Защищенный человек — это свободный человек, чья энергия принадлежит только ему.
          </p>

          <div className="pt-8 sm:pt-10 grid gap-6 sm:gap-8 border-t border-zinc-900">
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold text-[#c5a880]/90">Личный щит</h3>
              <p className="text-xs sm:text-sm text-zinc-500 italic">Постановка постоянной защиты от сглаза, порчи и магического крадника удачи.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold text-[#c5a880]/90">Очищение пространства</h3>
              <p className="text-xs sm:text-sm text-zinc-500 italic">Изгнание застойных энергий и создание «места силы» внутри вашего дома или офиса.</p>
            </div>
          </div>
        </article>

        <div className="text-center pt-6 sm:pt-10 border-t border-zinc-950">
          <p className="text-[9px] sm:text-[10px] text-zinc-600 uppercase tracking-[0.2em] sm:tracking-[0.3em] px-2 leading-relaxed">
            Ваш покой под надежной охраной
          </p>
        </div>

      </div>
    </div>
  )
}