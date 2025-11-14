import React from 'react'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import { Philosophy, FeaturedPrograms, TherapyCTA, JournalPreview } from '../components/SectionBlocks'

export default function Home(){
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Philosophy />
      <FeaturedPrograms />
      <TherapyCTA />
      <JournalPreview />
      <footer className="py-12 border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between text-stone-500 text-sm">
          <div>© {new Date().getFullYear()} AHAM EVA</div>
          <div className="flex gap-6">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
