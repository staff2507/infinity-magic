'use client'
import { useState } from 'react'
import Link from 'next/link'

const scrollToTop = (e: React.MouseEvent) => {
  if (window.location.pathname === '/') {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: 'smooth' });

    window.history.pushState({}, '', '/');
  }
};

const scrollToSection = (e: React.MouseEvent, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState({}, '', `#${id}`);
  }
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        
        <Link 
          href="/" 
          onClick={scrollToTop}
          className="text-xl font-serif tracking-[0.3em] text-white uppercase hover:opacity-70 transition-opacity duration-300 cursor-pointer"
        >
          Ruslan Infinity
        </Link>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
                aria-label="Открыть меню"
            >
            <span className={`absolute w-6 h-px bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45' : '-translate-y-2'
            }` }></span>

            <span className={`absolute w-6 h-px bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute w-6 h-px bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45' : 'translate-y-2'
            }`}></span>
            </button>
            
        <div className={`
          ${isOpen ? 'flex' : 'hidden md:flex'} 
          absolute md:static top-full left-0 w-full md:w-auto 
          flex-col md:flex-row 
          items-center md:items-start 
          gap-8 md:gap-0 md:space-x-8 
          p-10 md:p-0 
          bg-black/95 md:bg-transparent 
          border-b md:border-none border-zinc-900
          text-[10px] uppercase tracking-[0.2em]
        `}>
          <Link href="/" onClick={scrollToTop} className="hover:text-white transition">Главная</Link>
          <Link href="/#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition">Услуги</Link>
          <Link href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')} className="hover:text-white transition">Контакты</Link>
        </div>
      </div>
    </nav>
  )
}