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

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All')

  // Get unique categories from projects
  const categories = useMemo(() => {
    const cats = new Set(PROJECTS.map(p => p.category))
    return ['All', ...Array.from(cats)] as CategoryType[]
  }, [])

  // Filter projects based on active category with specific counts
  const filteredProjects = useMemo(() => {
    // Get all projects for the selected category
    let projects = activeCategory === 'All' 
      ? PROJECTS 
      : PROJECTS.filter(project => project.category === activeCategory)
    
    // Get the count for this category
    const count = IMAGE_COUNTS[activeCategory] || 270
    
    // Return the first N projects
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

        {/* Project Grid - Displaying only images */}
        <div className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <Reveal key={`project-${project.name}-${i}`} delay={i * 80}>
                <div className="group overflow-hidden rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* No projects message */}
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