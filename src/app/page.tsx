import Hero from '@/components/homepage/hero-section'
import JustASection from '@/components/homepage/just-a-section'
import React from 'react'

function Home() {
  return (
    <section className='py-24'>
      <div className='container bg-neutral-400'>
        <Hero />
      </div>
      <div className='container bg-neutral-300'>
        <JustASection />
      </div>
    </section>
  )
}

export default Home
