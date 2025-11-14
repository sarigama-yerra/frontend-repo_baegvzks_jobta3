import React from 'react'
import Spline from '@splinetool/react-spline'
import { MeshBackground } from '../DesignSystem'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-7xl w-full px-6 pb-16">
          <motion.div initial={{opacity:0, y: 20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="max-w-2xl">
            <p className="uppercase tracking-[0.3em] text-xs text-white/70">I AM THAT</p>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-medium mt-3">A premium ecosystem for conscious transformation</h1>
            <p className="text-white/80 mt-6">Modern psychology, contemplative wisdom, and embodied practice—refined into simple tools that help you reset, rewire, and remember who you are.</p>
            <div className="mt-8 flex gap-3">
              <a href="#programs" className="rounded-full bg-white/10 text-white px-6 py-3 text-sm backdrop-blur hover:bg-white/20 transition">Explore Programs</a>
              <a href="#therapy" className="rounded-full bg-[#c4a962] text-stone-900 px-6 py-3 text-sm hover:bg-[#d7c07b] transition">Book Therapy</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
