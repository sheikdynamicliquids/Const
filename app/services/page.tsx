import { Services } from '@/components/sections/services'
import { Reveal } from '@/components/reveal'
import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Hammer,
  Home,
  Paintbrush,
  Ruler,
  Wrench,
} from 'lucide-react'

const SERVICE_DETAILS = [
  {
    icon: Building2,
    title: 'Building Construction',
    description:
      'Complete construction solutions for residential and building projects, from early planning and structural work through finishing and final completion.',
    points: [
      'Project planning and coordination',
      'Foundation and structural construction',
      'Masonry and civil works',
      'Interior and exterior finishing',
    ],
  },
  {
    icon: Home,
    title: 'Residential Construction',
    description:
      'Thoughtfully planned homes designed around your requirements, lifestyle and vision, with attention to functionality, comfort and lasting quality.',
    points: [
      'House construction',
      'Space planning',
      'Structural and finishing works',
      'Custom requirements',
    ],
  },
  {
    icon: Paintbrush,
    title: 'Renovation & Remodeling',
    description:
      'Transform existing spaces through carefully planned renovation and remodeling work while improving appearance, functionality and usability.',
    points: [
      'Home renovations',
      'Interior modifications',
      'Structural improvements',
      'Modernization and finishing',
    ],
  },
  {
    icon: Ruler,
    title: 'Property Development',
    description:
      'Property development focused on creating practical and attractive spaces with thoughtful planning, modern design and long-term value in mind.',
    points: [
      'Project planning',
      'Property development',
      'Design coordination',
      'Construction execution',
    ],
  },
  {
    icon: Wrench,
    title: 'Repair & Improvement',
    description:
      'Practical construction improvements and repair work to restore, upgrade and improve existing properties.',
    points: [
      'Building repairs',
      'Maintenance improvements',
      'Finishing corrections',
      'Property upgrades',
    ],
  },
  {
    icon: Hammer,
    title: 'Finishing Works',
    description:
      'Detailed finishing work that brings together the appearance, comfort and functionality of a completed property.',
    points: [
      'Interior finishing',
      'Exterior finishing',
      'Painting and surface work',
      'Final detailing',
    ],
  },
]

const SERVICE_PROCESS = [
  {
    icon: ClipboardCheck,
    title: 'Understand',
    description:
      'We first understand your requirements, property, expectations and overall project objectives.',
  },
  {
    icon: Ruler,
    title: 'Plan',
    description:
      'The project is organized with practical planning so that the work can move forward in a clear and structured manner.',
  },
  {
    icon: Hammer,
    title: 'Build',
    description:
      'Construction and related work are carried out with attention to workmanship, quality and project requirements.',
  },
  {
    icon: BadgeCheck,
    title: 'Complete',
    description:
      'The completed work is reviewed carefully, with attention to finishing details and the final result.',
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Existing Services Section */}
      <Services />

      {/* Service Details */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                What We Do
              </span>

              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Construction solutions for every stage of your project.
              </h2>

              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                From constructing a new property to improving an existing
                space, our services are designed to support your project from
                its initial idea through to completion.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_DETAILS.map((service, index) => {
              const Icon = service.icon

              return (
                <Reveal key={service.title} delay={index * 80}>
                  <div className="h-full rounded-2xl border border-border bg-background p-7">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-foreground">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <ul className="mt-5 flex flex-col gap-2.5">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-foreground"
                        >
                          <BadgeCheck
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Approach */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                Our Service Approach
              </span>

              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                A clear process from the first conversation to completion.
              </h2>

              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Good construction starts with good communication. We keep the
                project journey organized so that requirements, planning and
                execution remain connected throughout the work.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PROCESS.map((step, index) => {
              const Icon = step.icon

              return (
                <Reveal key={step.title} delay={index * 100}>
                  <div className="relative h-full rounded-2xl border border-border bg-background p-7">
                    <div className="flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>

                      <span className="text-3xl font-bold text-muted-foreground/30">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Construction Services Focus */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                Project Support
              </span>

              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                More than individual services — complete project support.
              </h2>

              <p className="mt-6 leading-relaxed text-muted-foreground">
                Construction projects involve many connected activities.
                Rather than treating each task separately, we focus on how the
                different stages work together to achieve the intended result.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our service approach helps maintain consistency between
                planning, construction, finishing and final delivery, allowing
                the project to progress with greater clarity.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Whether the requirement is a complete construction project or
                a focused improvement to an existing property, we approach the
                work with the same commitment to quality and detail.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-background p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="size-6" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    From Concept to Completion
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Connected construction support
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                {[
                  'Project requirements and initial discussions',
                  'Planning and preparation',
                  'Construction and execution',
                  'Finishing and detailed work',
                  'Final review and completion',
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </div>

                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service Commitment */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Our Commitment
            </span>

            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Every service begins with the same commitment to quality.
            </h2>

            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Whatever the size or type of project, we believe quality should
              remain consistent from beginning to end. Our goal is to provide
              construction work that combines practical solutions, careful
              execution and attention to detail.
            </p>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We work to make the construction experience clear and
              dependable, while delivering spaces that meet the purpose they
              were created for.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}