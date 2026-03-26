import Image from 'next/image'

export default function BlackMagicPage() {
  return (
    <div className="min-h-screen bg-[#050505]"> 
      
      <div className="relative w-full h-[60vh] md:h-[70vh] border-b border-zinc-900 overflow-hidden">
        <Image
          src="/images/black-magic-hero.webp"
          alt="Черная магия — Mag Infinite"
          fill
          priority
          className="object-cover object-centre opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>

        <div className="relative z-10 flex items-end justify-center h-full pb-16">
          <h1 className="text-4xl md:text-5xl font-serif tracking-[0.3em] text-white uppercase text-center px-6">
            Черная Магия
          </h1>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-6 space-y-20 py-24 animate-reveal">

        <div className="w-16 h-px bg-zinc-800 mx-auto"></div>

        <article className="space-y-10 text-zinc-400 leading-[2] tracking-wide text-justify font-light">
          <p>
            <span className="inline-block text-5xl md:text-7xl font-serif text-white leading-[0] mr-1 translate-y-[6px] md:translate-y-[0px]">
              Ч
            </span>
            еловечество всегда было и будет в ложном страхе перед этим величественным даром, данным нам, мастерам, прошедшим тысячелетия реинкарнаций, обошедшим инквизицию и дошедшим до наших времен. Это путь «левой руки» в оккультизме.
          </p>

          <p>
            Черная магия применяется в тех радикальных случаях, когда человеку угрожает опасность: в разрыве с любимыми, в болезнях, а также когда человеку есть прямая угроза от недоброжелателей. Она же применяется и в тех случаях на усмотрение мастера, когда иные земные методы уже не в силах повлиять на ситуацию. И тогда просыпаются сила и знания мастера, способные нанести сокрушительный, порою смертоносный последний удар.
          </p>

          <div className="py-12 flex flex-col items-center text-center space-y-6">
            <div className="w-8 h-px bg-zinc-800"></div>
            <blockquote className="text-xl font-serif italic text-zinc-300 max-w-lg">
              "Там, где закрыты все двери, я нахожу путь через тени. Результат, полученный этим путем, невозможно оспорить или отменить."
            </blockquote>
            <div className="w-8 h-px bg-zinc-800"></div>
          </div>

          <p>
            Каждое воздействие сопровождается постановкой многоуровневой зеркальной защиты. Это гарантирует абсолютную безопасность для заказчика и исключает любые «откаты». Работа ведется до полного выполнения поставленной задачи, при этом соблюдается строжайшая тайна обращения.
          </p>

          <div className="pt-10 grid gap-8 border-t border-zinc-900">
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold">Радикальное решение</h3>
              <p className="text-sm text-zinc-500 italic">Устранение самых тяжелых блокировок и подавление воли противников.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold">Абсолютный щит</h3>
              <p className="text-sm text-zinc-500 italic">Постановка непробиваемой защиты на результат работы и на самого заказчика.</p>
            </div>
          </div>
        </article>

        <div className="text-center pt-10">
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
            Обряды проводятся только после диагностики • Вход в личное пространство силы
          </p>
        </div>

      </div>
    </div>
  )
}