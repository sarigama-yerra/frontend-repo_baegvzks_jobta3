import React from 'react'

export const DS = {
  colors: {
    sand: '#f6f3ee',
    stone: '#0f172a',
    ink: '#0b1220',
    gold: '#c4a962',
    sage: '#9bb3a8',
    clay: '#c6a58a',
    mist: '#eef2f6',
  },
  gradients: {
    auric:
      'radial-gradient(1200px 500px at 10% 10%, rgba(196,169,98,0.22), transparent), radial-gradient(800px 400px at 90% 0%, rgba(155,179,168,0.16), transparent), radial-gradient(900px 500px at 50% 120%, rgba(198,165,138,0.14), transparent)',
  },
  fonts: {
    heading: 'Poppins, Inter, ui-sans-serif, system-ui',
    body: 'Inter, ui-sans-serif, system-ui',
  },
}

export function Section({ children, className = '' }) {
  return (
    <section className={`relative w-full px-6 sm:px-10 md:px-16 lg:px-24 ${className}`}>
      {children}
    </section>
  )
}

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-stone-900 text-white hover:bg-stone-800',
    ghost: 'bg-transparent text-stone-900 hover:bg-white/60',
    gold: 'bg-[#c4a962] text-stone-900 hover:bg-[#d7c07b]'
  }
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm tracking-wide transition-colors duration-200 shadow-sm ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function MeshBackground({children}){
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 opacity-[0.9]" style={{background: DS.gradients.auric}} />
      {children}
    </div>
  )
}
