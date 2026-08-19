import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
// import { Products } from '@/components/sections/products'
import { Projects } from '@/components/sections/projects'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'

export default function HomePage() {
  return (
    
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      {/* <Projects /> */}
    </main>
  )
}
