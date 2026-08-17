import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { FEATURES } from '@/constants/content'

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us?"
            title="Built on Quality, Trust & Dedication"
            description="We focus on quality materials, skilled workmanship and professional project management to turn your vision into a beautiful and lasting space."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <div className="group flex h-full gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-brand-foreground shadow-md shadow-primary/20">
                  <feature.icon className="size-6" aria-hidden="true" />
                </span>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 text-center">
            <p className="mx-auto max-w-3xl text-xl font-bold leading-relaxed text-foreground sm:text-2xl">
              “WE BUILD MORE THAN STRUCTURES —
              <br />
              WE BUILD DREAMS, TRUST AND LASTING MEMORIES.”
            </p>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Amazing Abodes
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Where Quality Meets Your Dreams
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}