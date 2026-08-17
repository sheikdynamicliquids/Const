import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { Reveal } from '@/components/reveal'
import {
  BadgeCheck,
  ClipboardCheck,
  Handshake,
  HardHat,
  MessageSquare,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react'

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Quality You Can Depend On',
    description:
      'We believe quality should be visible in every part of a project, from the materials and workmanship to the final finishing details.',
  },
  {
    icon: HardHat,
    title: 'Skilled Workmanship',
    description:
      'Careful execution and attention to detail help us create spaces that are not only attractive but also strong, practical and built for everyday use.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'We value open communication throughout the project so that requirements, progress and important decisions remain clear.',
  },
  {
    icon: Handshake,
    title: 'Trust & Transparency',
    description:
      'We aim to build long-term relationships through honest communication, responsible work and a straightforward approach.',
  },
  {
    icon: ClipboardCheck,
    title: 'Organized Project Management',
    description:
      'Every construction project has multiple stages. We approach each stage carefully to keep the work coordinated and moving toward completion.',
  },
  {
    icon: Users,
    title: 'Client-Focused Approach',
    description:
      'Your requirements are an important part of the process. We listen, understand and work toward creating a result that reflects your expectations.',
  },
]

const VALUES = [
  {
    number: '01',
    title: 'Quality',
    description:
      'We never lose sight of the importance of durable construction and careful finishing.',
  },
  {
    number: '02',
    title: 'Integrity',
    description:
      'We believe trust is earned through responsible actions and transparent communication.',
  },
  {
    number: '03',
    title: 'Commitment',
    description:
      'We remain dedicated to the project from the initial planning stage through completion.',
  },
  {
    number: '04',
    title: 'Attention to Detail',
    description:
      'Small details can make a significant difference to the final quality and experience of a space.',
  },
]

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      {/* Existing Why Choose Us Section */}
      <WhyChooseUs />

      {/* Why Our Approach Matters */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                Why It Matters
              </span>

              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                The difference is in how we approach every project.
              </h2>

              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Choosing a construction partner is about more than selecting
                someone to complete the work. It is about finding a team you
                can communicate with, trust and rely on throughout the journey.
              </p>

              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                At Amazing Abodes, we focus on creating a dependable experience
                alongside a quality finished space.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((reason, index) => {
              const Icon = reason.icon

              return (
                <Reveal key={reason.title} delay={index * 80}>
                  <div className="h-full rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-foreground">
                      {reason.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                  The Experience
                </span>

                <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  A construction experience built around confidence and trust.
                </h2>

                <p className="mt-6 leading-relaxed text-muted-foreground">
                  A construction project can involve many decisions, stages
                  and moving parts. Our approach is designed to make the
                  journey easier to understand while keeping attention on the
                  quality of the final result.
                </p>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We believe clients should feel informed about their project
                  and confident that their requirements are being treated with
                  care.
                </p>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  From the first conversation to the final finishing work, our
                  focus remains on professionalism, communication and
                  dependable execution.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-border bg-background p-7 shadow-sm sm:p-9">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-brand-foreground">
                    <Star className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      What You Can Expect
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Our commitment throughout your project
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-5">
                  {[
                    'Professional and respectful communication',
                    'Careful attention to project requirements',
                    'Quality-focused construction work',
                    'Consistent attention to finishing details',
                    'A responsible approach from start to completion',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BadgeCheck
                        className="mt-0.5 size-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />

                      <span className="text-sm leading-relaxed text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                Our Values
              </span>

              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                The principles behind our work.
              </h2>

              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Our values influence how we communicate, plan, execute and
                complete every project.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <span className="text-4xl font-bold text-primary/20">
                    {value.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-foreground">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand-gradient text-brand-foreground shadow-lg shadow-primary/20">
              <Handshake className="size-8" aria-hidden="true" />
            </div>

            <h2 className="mt-7 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Because a great project starts with a relationship you can trust.
            </h2>

            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              We want every client to feel that their project is being handled
              with care, responsibility and genuine commitment. For us,
              completing a building is only part of the journey — earning your
              trust through the process matters just as much.
            </p>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              That is the standard we aim to bring to every project we take on.
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Amazing Abodes
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Where Quality Meets Your Dreams
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}