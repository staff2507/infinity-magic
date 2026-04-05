import Image from 'next/image'

export default function ProtectionPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* 1. ГЕРОЙ-СЕКЦИЯ С КАРТИНКОЙ (Высота 70% экрана) */}
      <div className="centre w-full h-[60vh] md:h-[70vh] border-b border-zinc-900 overflow-hidden">
        <Image
          src="/images/protection-hero.webp" // Картинка с красными зеркалами
          alt="Порча и защита от нее — Ruslan Infinity"
          fill
          priority
          className="object-cover object-center opacity-80" 
        />
        {/* Затемняющий градиент вниз для текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
        
        {/* Заголовок на фоне картинки */}
        <div className="relative z-10 flex items-end justify-center h-full pb-16 md:pb-20">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-5xl font-serif tracking-[0.3em] text-white uppercase mb-4">
              Порча и защита
            </h1>
            <p className="text-[10px] tracking-[0.6em] text-zinc-500 uppercase font-light">
              Неприкосновенность вашей судьбы
            </p>
          </div>
        </div>
      </div>

      {/* 2. КОНТЕНТНАЯ СЕКЦИЯ (Твой текст) */}
      <div className="max-w-3xl mx-auto px-6 space-y-20 py-24 animate-reveal">
        
        <div className="w-16 h-px bg-zinc-800 mx-auto"></div>

        <article className="space-y-10 text-zinc-400 leading-[2] tracking-wide text-justify font-light">
          
          <p>
            {/* Буквица "С" */}
            <span className="inline-block text-5xl md:text-7xl font-serif text-white leading-[0] mr-1 translate-y-[6px]">
              С
            </span>
            нятие порчи является одним из основных направлений моей работы, так как зачастую 
            это становится жизненной необходимостью для людей. Чтобы эффективно снять 
            негативное воздействие, необходимо увидеть истинную причину и устранить следствие. 
            Самая опасная форма — это порча на смерть, снять которую подвластно лишь мастеру 
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

          <div className="py-12 flex flex-col items-center text-center space-y-6">
            <div className="w-8 h-px bg-zinc-800"></div>
            <blockquote className="text-xl md:text-2xl font-serif italic text-white max-w-lg tracking-widest leading-relaxed">
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

          <div className="pt-10 grid gap-8 border-t border-zinc-900">
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold text-accent-red/80">Личный щит</h3>
              <p className="text-sm text-zinc-500 italic">Постановка постоянной защиты от сглаза, порчи и магического крадника удачи.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-xs uppercase tracking-widest font-semibold text-accent-red/80">Очищение пространства</h3>
              <p className="text-sm text-zinc-500 italic">Изгнание застойных энергий и создание «места силы» внутри вашего дома или офиса.</p>
            </div>
          </div>
        </article>

        {/* Футер */}
        <div className="text-center pt-10 border-t border-zinc-950">
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
            Ваш покой под надежной охраной
          </p>
        </div>

      </div>
    </div>
  )
}