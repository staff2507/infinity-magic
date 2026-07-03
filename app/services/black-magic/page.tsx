'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export default function BlackMagicPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] break-words overflow-x-hidden"> 
      
      <div className="relative w-full h-[50vh] md:h-[70vh] border-b border-zinc-900 overflow-hidden">
        <Image
          src="/images/black-magic-hero.webp"
          alt="Черная магия — Mag Infinite"
          fill
          priority
          className="object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>

        <div className="relative z-10 flex items-end justify-center h-full pb-12 sm:pb-16">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif tracking-[0.2em] sm:tracking-[0.3em] text-[#c5a880] uppercase text-center px-4">
            Черная Магия и колдовство
          </h1>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-20 py-12 sm:py-24 animate-reveal">

        <div className="w-16 h-px bg-zinc-800 mx-auto"></div>

        <article className="space-y-6 sm:space-y-10 text-zinc-400 leading-relaxed sm:leading-[2] tracking-wide text-justify font-light text-sm sm:text-base">
          <p className="clear-both">
            <span className="float-left text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-none mr-2 mt-1 sm:mt-0">
              Ч
            </span>
            еловечество всегда было и будет в ложном страхе перед этим величественным даром, данным нам, мастерам, прошедшим тысячелетия реинкарнаций, обошедшим инквизицию и дошедшим до наших времен. Это путь «левой руки» в оккультизме.
          </p>

          <p>
            Черная магия применяется в тех радикальных случаях, когда человеку угрожает опасность: в разрыве с любимыми, в болезнях, а также когда человеку есть прямая угроза от недоброжелателей. Она же применяется и в тех случаях на усмотрение мастера, когда иные земные методы уже не в силах повлиять на ситуацию. И тогда просыпаются сила и знания мастера, способные нанести сокрушительный, порою смертоносный последний удар.
          </p>

          <p className="text-red-700 font-medium">
            В мире и за пределами его существует множество угроз относительно человека, мастер черной магии знает как найти баланс между черным и белым, как сохранить равновесие между злом и добром! Порчи на дом, на семью, на отношения часто являются серьезной помехой для реализации жизненных ситуаций. Знающий мастер, обладающий высокой степенью посвященности, поможет человеку выставить грамотную защиту как на отдельного индивидуума, так и на его окружение в целом. Для адаптированных действий используется контр-магия, так называемая красная магия, в тех случаях когда «земля горит под ногами» и требуются креативные решения для достижения заветной цели, так как время идёт на мгновения! Наиболее опасная это порча на смерть, сделать которую подвластно лишь мастерам левого пути. Когда люди находятся в отчаянии, когда над ними нависает угроза, силы тьмы просыпаются и дают свое добро. Наведение порчи является мощным инструментом в арсенале магии и колдовства! Профессионал поможет принять верное решение в сложившейся ситуации для человека. Мастер знает, верит, творит!
          </p>

          <div className="py-6 sm:py-12 flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className="w-8 h-px bg-zinc-800"></div>
            <blockquote className="text-base sm:text-xl font-serif italic text-white max-w-lg px-2 tracking-wider sm:tracking-widest leading-relaxed">
              «Там, где закрыты все двери, я нахожу путь через тени. Результат, полученный этим путем, невозможно оспорить или отменить.»
            </blockquote>
            <div className="w-8 h-px bg-zinc-800"></div>
          </div>

          <p>
            Каждое воздействие сопровождается постановкой многоуровневой зеркальной защиты. Это гарантирует абсолютную безопасность для заказчика и исключает любые «откаты». Работа ведется до полного выполнения поставленной задачи, при этом соблюдается строжайшая тайна обращения.
          </p>

          <div className="pt-8 sm:pt-10 grid gap-6 sm:gap-8 border-t border-zinc-900">
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold text-[#c5a880]/90">Радикальное решение</h3>
              <p className="text-xs sm:text-sm text-zinc-500 italic">Устранение самых тяжелых блокировок и подавление воли противников.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold text-[#c5a880]/90">Абсолютный щит</h3>
              <p className="text-xs sm:text-sm text-zinc-500 italic">Постановка непробиваемой защиты на результат работы и на самого заказчика.</p>
            </div>
          </div>
        </article>

        <div className="text-center pt-6 sm:pt-10">
          <p className="text-[9px] sm:text-[10px] text-zinc-600 uppercase tracking-[0.2em] sm:tracking-[0.3em] px-2 leading-relaxed">
            Обряды проводятся только после диагностики • Вход в личное пространство силы
          </p>
        </div>

      </div>
    </div>
  )
}