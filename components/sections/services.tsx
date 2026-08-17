import { SectionHeading } from '@/components/section-heading'
import { Card } from '@/components/card'
import { Reveal } from '@/components/reveal'
import { SERVICES } from '@/constants/content'

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Building Dreams. Creating Better Spaces."
            description="From new buildings to renovations and property promotion, we transform your ideas into beautiful, durable and modern spaces with quality, precision and dedication."
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <Card className="h-full">
                <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>

                <h3 className="text-lg font-bold text-foreground">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}