import { About } from '@/components/sections/about'
import { Reveal } from '@/components/reveal'
import {
  Building2,
  Compass,
  Hammer,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'

const ABOUT_POINTS = [
  {
    icon: Building2,
    title: 'Built Around Your Vision',
    description:
      'Every project begins with understanding your requirements, lifestyle and expectations. We work to turn your ideas into thoughtfully planned and beautifully finished spaces.',
  },
  {
    icon: Hammer,
    title: 'Attention to Every Detail',
    description:
      'From the initial planning and foundation work to the finishing touches, we pay close attention to every stage of construction to maintain quality and consistency.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality That Lasts',
    description:
      'We believe a building should be more than visually appealing. Our focus is on creating strong, durable and practical spaces that continue to deliver value for years.',
  },
  {
    icon: Users,
    title: 'People-Focused Approach',
    description:
      'We believe successful construction is built on communication and trust. Our team works closely with clients throughout the project to keep the process clear and comfortable.',
  },
]

const PROCESS_POINTS = [
  'Understanding your requirements and project vision',
  'Planning the project with practical and thoughtful solutions',
  'Coordinating construction activities with careful attention',
  'Maintaining quality throughout each stage of the work',
  'Completing the project with detailed finishing and inspection',
]

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Existing About Section */}
      <About />

      {/* Our Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                Our Story
              </span>

              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Creating spaces with purpose, character and lasting value.
              </h2>

              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Amazing Abodes was built around a simple idea: construction
                should be approached with care, responsibility and a genuine
                understanding of what people need from their spaces.
              </p>

              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Whether it is a new home, a renovation or a property
                development project, we believe every space has its own
                identity. Our role is to bring that identity to life through
                thoughtful planning, dependable construction and attention to
                detail.
              </p>

              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                We continue to focus on building relationships as carefully as
                we build properties. Clear communication, quality workmanship
                and commitment to every project remain at the heart of our
                approach.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What Defines Us */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                What Defines Us
              </span>

              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                A thoughtful approach to every project.
              </h2>

              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Our work is guided by principles that help us create spaces
                that are practical, beautiful and built to last.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {ABOUT_POINTS.map((point, index) => {
              const Icon = point.icon

              return (
                <Reveal key={point.title} delay={index * 100}>
                  <div className="h-full rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-lg">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-foreground">
                      {point.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                Our Approach
              </span>

              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                From an idea to a space you can be proud of.
              </h2>

              <p className="mt-6 leading-relaxed text-muted-foreground">
                Construction involves many individual decisions and stages.
                Our approach is to keep each stage organized, transparent and
                focused on the final result.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                We take time to understand the project before moving forward,
                helping ensure that planning, execution and finishing work
                remain aligned with the original vision.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                This attention to the complete journey allows us to create
                spaces where functionality, aesthetics and durability work
                together.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl border border-border bg-secondary/40 p-7 sm:p-9">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Compass className="size-6" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    How We Work
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A clear and considered project journey
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {PROCESS_POINTS.map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>

                    <p className="pt-1 text-sm leading-relaxed text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality & Commitment */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                  Our Commitment
                </span>

                <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Quality is not just a final step. It is part of every step.
                </h2>

                <p className="mt-6 leading-relaxed text-muted-foreground">
                  We understand that a construction project represents a
                  significant investment of time, money and trust. That is why
                  we approach every stage with responsibility and attention.
                </p>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Our commitment extends beyond completing the structure. We
                  focus on the details that make a space comfortable,
                  functional and visually complete.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background p-6">
                  <Target className="size-7 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">
                    Clear Vision
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Understanding the purpose and expectations behind every
                    project.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-6">
                  <ShieldCheck className="size-7 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">
                    Dependable Work
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    A consistent focus on quality, reliability and
                    workmanship.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-6">
                  <Users className="size-7 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">
                    Open Communication
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Keeping clients informed and involved throughout the
                    project.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-6">
                  <Building2 className="size-7 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">
                    Lasting Spaces
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Creating properties designed for long-term use and value.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Our Vision
            </span>

            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Building a future through better spaces.
            </h2>

            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Our vision is to continue creating homes and spaces that reflect
              quality, thoughtful design and dependable construction. We want
              every project we complete to become a lasting representation of
              the care and dedication behind it.
            </p>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              As Amazing Abodes grows, our commitment remains the same:
              understand people, respect their investment and build spaces
              with purpose.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}