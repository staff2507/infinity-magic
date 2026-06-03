import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] animate-reveal selection:bg-red-900/30 selection:text-white break-words overflow-x-hidden">
      
      <section className="relative min-h-[85vh] py-12 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-red-950/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center w-full px-4">
          <div className="w-[1px] h-12 sm:h-20 bg-gradient-to-b from-transparent via-red-900/50 to-zinc-700 mb-6 sm:mb-8 animate-bounce-slow"></div>
          
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-6 hyphens-auto">
            Древние знания <br /> 
            <span className="text-zinc-500 italic">в современном мире</span>
          </h1>
          
          <p className="max-w-xl text-zinc-500 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide uppercase px-2">
            Практикующая помощь в решении сложных жизненных ситуаций, <br className="hidden sm:inline" />
            обретении гармонии и защите вашего будущего.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col items-center gap-4">
              <div className="w-12 h-px bg-red-950/40"></div>
              <span className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase font-light">
                • Дистанционно
              </span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <div className="space-y-6 sm:space-y-8">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-red-950/60 mx-auto"></div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-light italic px-2">
              «Магия и религия довольно своеобразны и имеют свои правила. Каждый человек имеет право верить во что-то свое. Кто-то христианин, мусульманин, другие же верят в магию. Это работает по одному принципу, магия — более универсальный продукт для каждой культуры и народа».
            </p>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div className="h-px w-8 bg-zinc-900"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-red-900/40 shadow-[0_0_8px_rgba(127,17,17,0.4)]"></div>
            <div className="h-px w-8 bg-zinc-900"></div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12 sm:space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white">
            Обо мне
          </h2>
          <div className="w-12 h-px bg-red-950/50 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 text-zinc-400 leading-relaxed tracking-wide font-light text-sm sm:text-base">
          <div className="space-y-4 sm:space-y-6">
            <p>
              Тайные учения и доступ к знаниям переданы мне по роду. Я потомственный колдун, 
              владею сокровенными знаниями, переданными мне предками. Моей миссией, исходя 
              из опыта более двадцати лет, является совершенствование и practical 
              колдовское применение этих знаний в работе.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <p>
              Мне, как опытному мастеру, дано изучить ситуацию человека и при необходимости 
              повлиять на нее. В процессе общения мне дано выявить следствие и установить 
              причину в сложившейся ситуации. Работа ведется строго онлайн по видеосвязи, 
              что гарантирует порядочность и соблюдение кодекса чести мастера.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12 sm:space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white">
            Принципы моей работы
          </h2>
          <div className="w-12 h-px bg-red-950/50 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 text-zinc-400 leading-relaxed tracking-wide font-light text-sm sm:text-base">
          <div className="space-y-4 sm:space-y-6">
            <p>
              В своей практике я придерживаюсь строгой конфиденциальности и индивидуального 
              подхода к каждому пришедшему. Магия — это не только обряды, но и глубокая 
              работа с энергиями, требующая точности и ответственности.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <p>
              Я не даю пустых обещаний, а провожу детальный анализ вашей ситуации, чтобы 
              найти корень проблемы и подобрать наиболее эффективный путь её решения.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-32 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          <div className="text-center">
            <h2 className="text-xs uppercase tracking-[0.4em] sm:tracking-[0.6em] text-zinc-600">Направления практики</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900/30 border border-zinc-900/30 shadow-[0_0_50px_rgba(127,17,17,0.05)]">
            <ServiceCard 
              title="Любовная магия" 
              desc="Гармонизация отношений, возвращение утраченных чувств и защита семейного очага."
              link="/services/love-magic" 
            />
            <ServiceCard 
              title="Бизнес и успех" 
              desc="Коррекция финансовых потоков, устранение препятствий в делах и поддержка начинаний."
              link="/services/business-help" 
            />
            <ServiceCard 
              title="Черная магия" 
              desc="Работа с глубокими энергиями. Проведение серьезных обрядов для решения критических ситуаций."
              link="/services/black-magic" 
            />
            <ServiceCard 
              title="Порча и защита" 
              desc="Постановка мощной защиты на дом или бизнес. Снятие сглаза и деструктивных программ."
              link="/services/protection" 
            />
            <ServiceCard 
              title="Ясновидение" 
              desc="Глубокий анализ судьбы через таро для упреждения опасностей и выбора верного пути."
              link="/services/divination" 
            />
            <ServiceCard 
              title="Контрмагия" 
              desc="Радикальные методы защиты и ответного удара по принципу «око за око»."
              link="/services/counter-magic" 
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-t border-zinc-900 bg-gradient-to-b from-[#050505] to-[#080303]">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-xs uppercase tracking-[0.4em] sm:tracking-[0.6em] text-zinc-600 mb-2 sm:mb-4">Методология</h2>
            <p className="text-xl sm:text-2xl font-serif text-white italic">Порядок ведения практики</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-10 sm:gap-y-12">
            {[
              { num: "01", title: "Диагностика", text: "Детальное изучение проблемы и просмотр ситуации. Выявление магических воздействий и скрытых угроз." },
              { num: "02", title: "Очищение", text: "Снятие сторонних защит недруга, нейтрализация негативных энергий. Подготовка почвы для работы." },
              { num: "03", title: "Воздействие", text: "Проведение основных обрядов. Работа ведется до получения устойчивого и видимого результата." },
              { num: "04", title: "Закрепление", text: "Постановка мощной защиты на result. Скрытие работы от сторонних глаз и других мастеров." },
            ].map((step, i) => (
              <div key={i} className="group space-y-3 sm:space-y-4">
                <span className="text-zinc-900 group-hover:text-red-950/40 transition-colors duration-500 font-serif text-4xl sm:text-5xl block">{step.num}</span>
                <h3 className="text-white text-xs sm:text-sm uppercase tracking-widest border-b border-zinc-900 group-hover:border-red-900/30 transition-colors duration-500 pb-2">{step.title}</h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-950/5 p-6 sm:p-8 text-center border border-red-950/10 space-y-4">
            <p className="text-white text-xs sm:text-sm tracking-wide font-serif italic max-w-2xl mx-auto">
              «В процессе всей работы я подбираю "ключики" по вашему запросу и по завершению надежно запечатываю на "замок" достигнутый результат!»
            </p>
            <p className="text-zinc-500 text-[10px] sm:text-xs leading-loose font-light max-w-2xl mx-auto pt-2 border-t border-zinc-900/50">
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
    <div className="bg-[#050505] p-8 sm:p-10 md:p-14 group hover:bg-[#0a0505] transition-all duration-700 flex flex-col h-full border-zinc-900/50 hover:border-red-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-red-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <h3 className="text-base sm:text-lg text-white font-serif mb-4 sm:mb-5 group-hover:text-red-100/90 transition-colors tracking-widest uppercase italic relative z-10">
        {title}
      </h3>
      
      <p className="text-zinc-500 text-xs sm:text-sm mb-8 sm:mb-10 leading-relaxed font-light flex-grow relative z-10">
        {desc}
      </p>
      
      <div className="relative z-10">
        <Link href={link} className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 border-b border-zinc-800 pb-1 group-hover:text-red-200/70 group-hover:border-red-900/50 transition-all duration-500">
          Подробнее
        </Link>
      </div>
    </div>
  )
}