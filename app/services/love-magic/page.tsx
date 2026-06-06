'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export default function LoveMagicPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] break-words overflow-x-hidden">
      <div className="relative w-full h-[50vh] md:h-[70vh] border-b border-zinc-900 overflow-hidden">
        <Image
          src="/images/love-magic-hero.webp" 
          alt="Любовная магия — Mag Infinite"
          fill
          priority
          className="object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
        
        <div className="relative z-10 flex items-end justify-center h-full pb-12 sm:pb-16">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif tracking-[0.2em] sm:tracking-[0.3em] text-[#c5a880] uppercase text-center px-4">
            Любовная Магия
          </h1>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-20 py-12 sm:py-24 animate-reveal">
      
        <div className="w-16 h-px bg-zinc-800 mx-auto"></div>

        <article className="space-y-6 sm:space-y-10 text-zinc-400 leading-relaxed sm:leading-[2] tracking-wide text-justify font-light text-sm sm:text-base">
          <p className="clear-both">
            <span className="float-left text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-none mr-2 mt-1 sm:mt-0">
              В
            </span>
            ремя трактует древние традиции по своему усмотрению. Тема любовной магии всегда была, есть и будет, и каждое учение объясняет этот раздел по-разному. Однако оставим суеверия для невежд — я называю это магие притяжения и вожделения, стремлением обладать, чувственным влечением и обладанием. Любовная магия работает для людей, которые истинно любят и верят, кому не страшны предрассудки. В моменты, когда все земные методы остаются бессильны перед злым роком, люди стучатся в любые двери, и сильным духом они открываются. В эти мгновения обращаются к мастерам черной магии в надежде на древние знания, дабы воплотить свою цель в реальность и материализовать чувственный аспект.
          </p>

          <p>
            Мастер проводит просмотр ситуации и, советуясь с высшими и низшими силами, дает свое резюме. Для достижения задуманного маг применяет обряды и ритуалы в зависимости от конечного результата. Ниже описаны наиболее действенные методы: «черное венчание», «черное покрывало», «остуда» (при необходимости) и «кладбищенский приворот» (в крайнем случае). Другие, менее известные обряды я оставляю в тайне и открываю их лишь при острой необходимости вопрошающего. Выбор всегда остается за человеком — для суеверных и слабых духом в этом сегменте места нет. Врата судьбы открываются тем, кто любит, верит и знает!
          </p>

          <div className="py-6 sm:py-12 flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className="w-8 h-px bg-zinc-800"></div>
            <blockquote className="text-base sm:text-xl font-serif italic text-white max-w-lg px-2 tracking-wider sm:tracking-widest">
              "Истинное единство двух душ требует защиты. Я создаю условия, в которых ваши чувства становятся неприкосновенными для зависти и раздора."
            </blockquote>
            <div className="w-8 h-px bg-zinc-800"></div>
          </div>

          <p>
            Особое внимание уделяется устранению сторонних факторов. Если на пути вашего счастья встал «третий лишний» или магическое воздействие извне, я провожу полную чистку канала отношений и ставлю защиту, которую невозможно пробить обычными методами. Помните: за счастье нужно бороться, и магия — ваше самое мощное оружие в этой борьбе.
          </p>

          <div className="pt-8 sm:pt-10 grid gap-6 sm:gap-8 border-t border-zinc-900">
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold text-[#c5a880]/90">Гармонизация</h3>
              <p className="text-xs sm:text-sm text-zinc-500 italic">Снятие накопленного стресса, обид и восстановление доверия в паре.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold text-[#c5a880]/90">Воссоединение судеб</h3>
              <p className="text-xs sm:text-sm text-zinc-500 italic">Возвращение партнера и восстановление связи после длительного разрыва.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold text-[#c5a880]/90">Защита отношений</h3>
              <p className="text-xs sm:text-sm text-zinc-500 italic">Блокировка любого внешнего влияния и попыток увести партнера из семьи.</p>
            </div>
          </div>
        </article>

        <div className="text-center pt-6 sm:pt-10">
          <p className="text-[9px] sm:text-[10px] text-zinc-600 uppercase tracking-[0.2em] sm:tracking-[0.3em] px-2 leading-relaxed">
            Ваша история останется в тайне • Результат закрепляется навсегда
          </p>
        </div>

      </div>
    </div>
  )
}