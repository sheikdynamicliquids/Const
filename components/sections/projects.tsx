// components/sections/projects.tsx

'use client'

import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { PROJECTS } from '@/constants/content'
import { useState, useMemo } from 'react'

// Define category types
type CategoryType = 'All' | 'Residential' | 'Commercial' | 'Renovation' | 'Interior Works'

// Define image count for each category
const IMAGE_COUNTS = {
  All: 10,
  Residential: 10,
  Commercial: 10,
  Renovation: 10,
  'Interior Works': 10,
}

export default function Projects() {  // <-- Changed to default export
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All')

  // Get unique categories from projects
  const categories = useMemo(() => {
    const cats = new Set(PROJECTS.map(p => p.category))
    return ['All', ...Array.from(cats)] as CategoryType[]
  }, [])

  // Filter projects based on active category with specific counts
  const filteredProjects = useMemo(() => {
    let projects = activeCategory === 'All' 
      ? PROJECTS 
      : PROJECTS.filter(project => project.category === activeCategory)
    
    const count = IMAGE_COUNTS[activeCategory] || 270
    return projects.slice(0, count)
  }, [activeCategory])

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Projects"
            title="Spaces Built With Purpose"
            description="Explore our portfolio of residential, commercial, renovation and interior projects."
          />
        </Reveal>

        {/* Category Filter Buttons */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === category 
                  ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }
              `}  
            >
              {category === 'All' ? 'All Photos' : category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <Reveal key={`project-${project.name}-${i}`} delay={i * 80}>
                <div className="group overflow-hidden rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Number Badge */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-bold">
                      {i + 1}
                    </div>

                    {/* Category Badge
                    <div className="absolute bottom-3 left-3 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-medium">
                      {project.category}
                    </div> */}

                    {/* Project Name on hover */}
                    {/* <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.name}
                    </div> */}

                    {/* Hover overlay */}
                    {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl font-bold">#{i + 1}</div>
                        <div className="text-sm mt-1">{project.category}</div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-20 text-center">
            <p className="text-muted-foreground">
              No projects available in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}