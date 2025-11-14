import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '../DesignSystem'

export default function Nav(){
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/programs', label: 'Programs' },
    { to: '/therapy', label: 'Therapy' },
    { to: '/shop', label: 'Shop' },
    { to: '/journal', label: 'Journal' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-stone-900 tracking-[0.2em] text-sm font-medium">AHAM EVA</Link>
        <nav className="hidden md:flex gap-8 items-center">
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} className={({isActive}) => `text-sm ${isActive? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'}`}>
              {n.label}
            </NavLink>
          ))}
          <Button variant="gold" className="ml-4">Start</Button>
        </nav>
        <button className="md:hidden p-2" aria-label="Menu"><Menu size={20}/></button>
      </div>
    </header>
  )
}
