// components/sections/projects.tsx

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { PROJECTS } from '@/constants/content'
import type { Project } from '@/types'

export function Projects() {
  // Get only first 30 projects
  const displayProjects = PROJECTS.slice(0, 30)

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

        {/* Project Grid */}
        <div className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayProjects.map((project, i) => (
              <Reveal key={`project-${project.name}-${i}`} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* No projects message */}
        {displayProjects.length === 0 && (
          <div className="mt-20 text-center">
            <p className="text-muted-foreground">
              No projects available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

// Project Card Component
interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  // Generate slug for project detail page
  const slug = project.name.toLowerCase().replace(/\s+/g, '-')

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt=""
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {project.category}
          </p>
        </div>
      </div>
    </article>
  )
}