import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const HIGHLIGHTS = [
  'Strong and reliable construction built for lasting value',
  'Quality materials, modern designs and skilled workmanship',
  'Professional project management from foundation to final finish',
  'Transparent and trusted service with complete dedication',
]

export function About() {
  return (
    <section id="about" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
            <Image
              src="/images/about-craft.png"
              alt="Amazing Abodes construction and building work"
              width={800}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              About Amazing Abodes
            </span>

            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Building dreams with quality, precision &amp; dedication.
            </h2>

            <p className="text-pretty leading-relaxed text-muted-foreground">
              Amazing Abodes is a trusted name in building, renovation and
              property development. We transform your ideas into beautiful,
              durable and modern spaces that are designed to meet your needs
              and expectations.
            </p>

            {/* <p className="text-pretty leading-relaxed text-muted-foreground">
              From a strong foundation to a stunning finish, we take care of
              every detail with quality, precision and dedication. Our
              commitment is to deliver reliable construction and create spaces
              that you can be proud of for years to come.
            </p> */}

            <ul className="flex flex-col gap-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />

                  <span className="text-sm leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* <dl className="mt-2 grid grid-cols-3 gap-6 border-t border-border pt-6">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dd className="text-2xl font-bold text-brand-gradient sm:text-3xl">
                    {stat.value}
                  </dd>

                  <dt className="text-xs leading-snug text-muted-foreground sm:text-sm">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl> */}
          </div>
        </Reveal>
      </div>
    </section>
  )
}