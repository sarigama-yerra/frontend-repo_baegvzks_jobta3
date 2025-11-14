import React, { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function About(){
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl md:text-4xl text-stone-900 font-medium">About Aham Eva</h1>
        <p className="text-stone-600 mt-4">We build humane pathways for transformation—simple, grounded, and deeply human. Our approach braids science, psychology, and contemplative wisdom with clear design and practicality.</p>
      </div>
    </div>
  )
}

export function Programs(){
  const [items, setItems] = useState([])
  useEffect(()=>{ fetch(`${API}/programs`).then(r=>r.json()).then(setItems).catch(()=>{}) },[])
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl md:text-4xl text-stone-900 font-medium">Programs</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map(p => (
            <a key={p.slug} href={`/programs/${p.slug}`} className="rounded-2xl bg-white p-6 border border-stone-200 hover:shadow-lg transition">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">{p.duration_days} days</div>
              <div className="mt-2 text-xl text-stone-900 font-medium">{p.title}</div>
              <div className="mt-2 text-stone-600 text-sm line-clamp-3">{p.tagline || p.description}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Therapy(){
  const [items, setItems] = useState([])
  useEffect(()=>{ fetch(`${API}/therapy`).then(r=>r.json()).then(setItems).catch(()=>{}) },[])
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl md:text-4xl text-stone-900 font-medium">Therapy</h1>
        <p className="text-stone-600 mt-3">1:1 and group therapy with clear booking. Choose a format that fits, then schedule instantly.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map(t => (
            <div key={t.slug} className="rounded-2xl bg-white p-6 border border-stone-200">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">{t.format}</div>
              <div className="mt-2 text-xl text-stone-900 font-medium">{t.title}</div>
              <div className="mt-2 text-stone-600 text-sm line-clamp-3">{t.description}</div>
              <div className="mt-6 text-stone-900 text-sm">${'{'}t.price_usd{'}'} USD • {t.duration_minutes} mins</div>
              <a href="/contact" className="mt-4 inline-flex rounded-full bg-stone-900 text-white px-4 py-2 text-sm">Book</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Shop(){
  const [items, setItems] = useState([])
  useEffect(()=>{ fetch(`${API}/shop`).then(r=>r.json()).then(setItems).catch(()=>{}) },[])
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl md:text-4xl text-stone-900 font-medium">Shop</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map(pr => (
            <div key={pr.slug} className="rounded-2xl bg-white p-6 border border-stone-200">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">{pr.kind}</div>
              <div className="mt-2 text-xl text-stone-900 font-medium">{pr.title}</div>
              <div className="mt-2 text-stone-600 text-sm line-clamp-3">{pr.description}</div>
              <div className="mt-6 text-stone-900 text-sm">${'{'}pr.price_usd{'}'} USD</div>
              <button className="mt-4 inline-flex rounded-full bg-stone-900 text-white px-4 py-2 text-sm">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Journal(){
  const [items, setItems] = useState([])
  useEffect(()=>{ fetch(`${API}/journal`).then(r=>r.json()).then(setItems).catch(()=>{}) },[])
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl md:text-4xl text-stone-900 font-medium">Journal</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map(p => (
            <a key={p.slug} href={`/journal/${p.slug}`} className="rounded-2xl bg-white p-6 border border-stone-200">
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Article</div>
              <div className="mt-2 text-xl text-stone-900 font-medium">{p.title}</div>
              <div className="mt-2 text-stone-600 text-sm line-clamp-3">{p.excerpt}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Contact(){
  const [status, setStatus] = useState('')
  function submit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    fetch(`${API}/contact`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)})
      .then(r=>r.json()).then(()=> setStatus('Message sent. We will reply shortly.')).catch(()=> setStatus('Something went wrong.'))
  }
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-xl px-6">
        <h1 className="text-3xl md:text-4xl text-stone-900 font-medium">Contact</h1>
        <p className="text-stone-600 mt-3">Questions, support, or booking assistance—write to us.</p>
        <form onSubmit={submit} className="mt-8 grid gap-4">
          <input name="full_name" placeholder="Full name" className="border border-stone-300 rounded-lg px-4 py-3" required />
          <input name="email" type="email" placeholder="Email" className="border border-stone-300 rounded-lg px-4 py-3" required />
          <input name="subject" placeholder="Subject" className="border border-stone-300 rounded-lg px-4 py-3" />
          <textarea name="message" placeholder="Message" rows="5" className="border border-stone-300 rounded-lg px-4 py-3" required />
          <button className="rounded-full bg-stone-900 text-white px-6 py-3 text-sm">Send</button>
          {status && <div className="text-stone-600 text-sm">{status}</div>}
        </form>
      </div>
    </div>
  )
}
