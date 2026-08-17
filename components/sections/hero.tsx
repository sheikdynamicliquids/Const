import Image from 'next/image'
import { ArrowRight, Building2, BadgeCheck } from 'lucide-react'
import { Button } from '@/components/button'
import { Reveal } from '@/components/reveal'
import { HERO_STATS } from '@/constants/content'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      {/* Soft brand background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_0%,var(--brand-soft),transparent_70%)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
              <BadgeCheck
                className="size-4 text-primary"
                aria-hidden="true"
              />
              Builders • Renovation • Promoters
            </span>

            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Make Your Dreams{' '}
              <span className="text-brand-gradient">True.</span>
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              We transform your ideas into beautiful, durable and modern
              spaces. From a strong foundation to a stunning finish, we take
              care of every detail with quality, precision and dedication.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get in Touch
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </Link>

              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-border pt-6">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="order-2 text-sm text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-2xl font-bold text-foreground sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
              <Image
                src="/images/hero-site.png"
                alt="Amazing Abodes construction and renovation project"
                width={960}
                height={720}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur sm:left-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-gradient text-brand-foreground">
                <Building2 className="size-5" aria-hidden="true" />
              </span>

              <span className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-foreground">
                  Quality Construction
                </span>
                <span className="text-xs text-muted-foreground">
                  Built with care &amp; precision
                </span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}