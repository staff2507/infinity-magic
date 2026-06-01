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
  const isHomePage = window.location.pathname === '/';
  if (isHomePage) {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', `#${id}`);
    }
  } 
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center relative">
        
        <Link 
          href="/" 
          onClick={scrollToTop}
          className="text-lg sm:text-xl font-serif tracking-[0.2em] sm:tracking-[0.3em] text-white uppercase hover:opacity-70 transition-opacity duration-300 cursor-pointer truncate max-w-[70%]"
        >
          Magikian herald
        </Link>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
          aria-label="Открыть меню"
        >
          <span className={`absolute w-6 h-px bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45' : '-translate-y-2'
          }`}></span>
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
          items-center 
          gap-6 md:gap-0 md:space-x-8 
          p-8 md:p-0 
          bg-black md:bg-transparent 
          border-b md:border-none border-zinc-900
          text-[11px] sm:text-[10px] uppercase tracking-[0.2em]
        `}>
          <Link href="/" onClick={(e) => { scrollToTop(e); setIsOpen(false); }} className="hover:text-white transition py-2 md:py-0 w-full md:w-auto text-center">Главная</Link>
          <Link href="/#services" onClick={(e) => { scrollToSection(e, 'services'); setIsOpen(false); }} className="hover:text-white transition py-2 md:py-0 w-full md:w-auto text-center">Услуги</Link>
          <Link href="#contacts" onClick={(e) => { scrollToSection(e, 'contacts'); setIsOpen(false); }} className="hover:text-white transition py-2 md:py-0 w-full md:w-auto text-center">Контакты</Link>
        </div>
      </div>
    </nav>
  )
}