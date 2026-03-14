import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] animate-reveal">
      <section className="relative h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden">
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-zinc-700 mb-8 animate-bounce-slow"></div>
          
          <h1 className="text-4xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-6">
            Древние знания <br /> 
            <span className="text-zinc-500 italic">в современном мире</span>
          </h1>
          
          <p className="max-w-xl text-zinc-500 text-sm md:text-base leading-relaxed tracking-wide uppercase px-4">
            Практикующая помощь в решении сложных жизненных ситуаций, 
            обретении гармонии и защите вашего будущего.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
              <div className="w-12 h-px bg-zinc-800"></div>
              <span className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase font-light">
                  Одесса • Дистанционно
              </span>
          </div>
        </div>
      </section>

      <section className="bg-[#080808] border-y border-zinc-900/50 py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">

          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-white uppercase tracking-widest leading-tight">
              Принципы моей <br /> работы
            </h2>
            <div className="w-12 h-px bg-zinc-700"></div>
          </div>

          <div className="space-y-8 text-zinc-400 text-sm md:text-base leading-[1.8] tracking-wide text-justify font-light">
            <p>
              В своей практике я придерживаюсь строгой конфиденциальности и индивидуального подхода к каждому пришедшему. Магия — это не только обряды, но и глубокая работа с энергиями, требующая точности и ответственности.
            </p>
            <p>
              Я не даю пустых обещаний, а провожу детальный анализ вашей ситуации, чтобы найти корень проблемы и подобрать наиболее эффективный метод её решения.
            </p>
          </div>

        </div>
      </section>

      <section id="services" className="py-32 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          <div className="text-center">
            <h2 className="text-xs uppercase tracking-[0.6em] text-zinc-600">Направления практики</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-zinc-900/30 border border-zinc-900/30">
            <ServiceCard 
              title="Любовная магия" 
              desc="Гармонизация отношений, возвращение утраченных чувств и защита семейного очага от внешних воздействий."
              link="/services/love-magic" 
            />
            <ServiceCard 
              title="Бизнес и успех" 
              desc="Коррекция финансовых потоков, устранение препятствий в делах и энергетическая поддержка новых начинаний."
              link="/services/business-help" 
            />
            <ServiceCard 
              title="Черная магия" 
              desc="Работа с глубокими энергиями и мощными воздействиями. Проведение серьезных обрядов для решения критических ситуаций."
              link="/services/black-magic" 
            />
            <ServiceCard 
              title="Защитные обряды" 
              desc="Постановка мощной защиты на человека, дом или бизнес. Снятие порчи, сглаза и деструктивных программ."
              link="/services/protection" 
            />
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div className="text-center">
            <h2 className="text-xs uppercase tracking-[0.6em] text-zinc-600 mb-4">Методология</h2>
            <p className="text-2xl font-serif text-white italic">Порядок ведения практики</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="space-y-4">
              <span className="text-zinc-800 font-serif text-4xl">01</span>
              <h3 className="text-white text-sm uppercase tracking-widest border-b border-zinc-900 pb-2">Диагностика</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">
                Детальное изучение проблемы и просмотр ситуации. Выявление магических воздействий, скрытых угроз и определение истинных причин ваших трудностей.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-zinc-800 font-serif text-4xl">02</span>
              <h3 className="text-white text-sm uppercase tracking-widest border-b border-zinc-900 pb-2">Очищение</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">
                Снятие сторонних защит недруга, нейтрализация негативных энергий и деструктивных программ. Подготовка почвы для основной работы.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-zinc-800 font-serif text-4xl">03</span>
              <h3 className="text-white text-sm uppercase tracking-widest border-b border-zinc-900 pb-2">Воздействие</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">
                Проведение основных обрядов: от подавления воли противника до внушения нужных мыслеформ. Работа ведется до получения устойчивого результата.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-zinc-800 font-serif text-4xl">04</span>
              <h3 className="text-white text-sm uppercase tracking-widest border-b border-zinc-900 pb-2">Закрепление</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">
                Постановка мощной защиты на результат и на самого заказчика. Скрытие работы от сторонних глаз и других мастеров.
              </p>
            </div>
          </div>

          <div className="bg-zinc-950/50 p-8 text-center border border-zinc-900">
            <p className="text-zinc-400 text-xs leading-loose font-light italic max-w-2xl mx-auto">
              Я веду и консультирую вас на протяжении всего пути. Оплата производится единожды — без скрытых расходов на атрибутику. Помните: мастер требует уважения не к себе, а к силе, через которую он действует во благо людей.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

function ServiceCard({ title, desc, link }: { title: string, desc: string, link: string }) {
  return (
    <div className="bg-[#050505] p-10 md:p-16 group hover:bg-zinc-950 transition-all duration-700 flex flex-col h-full">

      <h3 className="text-lg text-white font-serif mb-5 group-hover:text-zinc-400 transition tracking-widest uppercase italic">
        {title}
      </h3>
      
      <p className="text-zinc-500 text-xs md:text-sm mb-10 leading-relaxed font-light flex-grow">
        {desc}
      </p>
      
      <div>
        <Link href={link} className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 border-b border-zinc-800 pb-1 hover:text-white hover:border-white transition">
          Подробнее
        </Link>
      </div>

    </div>
  )
}