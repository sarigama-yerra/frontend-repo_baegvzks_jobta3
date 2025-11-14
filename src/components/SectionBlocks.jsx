import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function Philosophy(){
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{opacity:0, y: 10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <h2 className="text-stone-900 text-3xl md:text-4xl font-medium tracking-tight">Simple. Grounded. Whole.</h2>
          <p className="text-stone-600 mt-4 max-w-3xl">Aham Eva means “I am That.” The realization of inner wholeness—beyond striving. We blend evidence-based psychology, nervous system science, and contemplative practice into clear, humane programs and therapy.</p>
        </motion.div>
      </div>
    </section>
  )
}

export function FeaturedPrograms(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch(`${API}/programs`).then(r=>r.json()).then(setItems).catch(()=>{})
  },[])
  return (
    <section id="programs" className="py-20 bg-[color:var(--sand,#f6f3ee)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h3 className="text-stone-900 text-2xl md:text-3xl font-medium">Featured Programs</h3>
          <a href="/programs" className="text-stone-600 text-sm hover:text-stone-900">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map((p)=> (
            <motion.a key={p.slug} href={`/programs/${p.slug}`} initial={{opacity:0, y: 10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="group rounded-2xl bg-white p-6 border border-stone-200 hover:shadow-lg transition">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">{p.duration_days} days</div>
              <div className="mt-2 text-xl text-stone-900 font-medium">{p.title}</div>
              <div className="mt-2 text-stone-600 text-sm line-clamp-3">{p.tagline || p.description}</div>
              <div className="mt-6 text-stone-900 text-sm">${'{'}p.price_usd{'}'} USD</div>
            </motion.a>
          ))}
          {items.length === 0 && (
            <div className="col-span-full text-stone-500">Programs will appear here once added.</div>
          )}
        </div>
      </div>
    </section>
  )
}

export function TherapyCTA(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch(`${API}/therapy`).then(r=>r.json()).then(setItems).catch(()=>{})
  },[])
  const primary = items[0]
  return (
    <section id="therapy" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-stone-900 text-white p-10 md:p-12">
          <div className="md:flex items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h3 className="text-2xl md:text-3xl font-medium">Therapy, held with presence</h3>
              <p className="text-white/80 mt-3">Evidence-based, integrative therapy for grounded healing. 1:1 and group formats. Clear scheduling and simple pricing.</p>
            </div>
            <a href="/therapy" className="mt-6 inline-flex rounded-full bg-white text-stone-900 px-6 py-3 text-sm hover:bg-white/90">Book a session</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function JournalPreview(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch(`${API}/journal`).then(r=>r.json()).then(setItems).catch(()=>{})
  },[])
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h3 className="text-stone-900 text-2xl md:text-3xl font-medium">Journal</h3>
          <a href="/journal" className="text-stone-600 text-sm hover:text-stone-900">Explore</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map((p)=> (
            <a key={p.slug} href={`/journal/${p.slug}`} className="group rounded-2xl bg-[color:var(--sand,#f6f3ee)] p-6 border border-stone-200">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Article</div>
              <div className="mt-2 text-lg text-stone-900 font-medium">{p.title}</div>
              <div className="mt-2 text-stone-600 text-sm line-clamp-3">{p.excerpt}</div>
            </a>
          ))}
          {items.length === 0 && (
            <div className="col-span-full text-stone-500">Journal entries will appear here once added.</div>
          )}
        </div>
      </div>
    </section>
  )
}
