import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { CONTACT_CHANNELS, COMPANY } from '@/constants/content'

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
  eyebrow="Get In Touch"
  title="Let's Build Something Amazing"
  description="Have a new building, renovation or property project in mind? Tell us about your requirements and let us help turn your vision into reality."
/>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-4">
              {CONTACT_CHANNELS.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-brand-foreground shadow-md shadow-primary/20">
                    <channel.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {channel.label}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {channel.value}
                    </span>
                  </span>
                </a>
              ))}

              <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title={`Map showing ${COMPANY.name} location`}
                  src={COMPANY.mapEmbed}
                  loading="lazy"
                  className="h-64 w-full border-0 grayscale-[0.2]"
                />
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-card/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur"
                >
                  Open in Maps
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
