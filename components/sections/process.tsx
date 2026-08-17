import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We understand your requirements, ideas, budget and expectations before the project begins.',
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'We define the project scope, requirements and execution plan to create a clear direction.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We develop practical and modern design solutions suited to your property and requirements.',
  },
  {
    number: '04',
    title: 'Construction',
    description:
      'The project is executed with attention to quality, workmanship, coordination and detail.',
  },
  {
    number: '05',
    title: 'Finishing',
    description:
      'Interior, exterior and finishing works are completed carefully to achieve the desired result.',
  },
  {
    number: '06',
    title: 'Handover',
    description:
      'The completed project is reviewed and prepared for final handover.',
  },
]

export function Process() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Process"
            title="A Simple Approach to Better Projects"
            description="We keep the process clear and organised from the first conversation to the final handover."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 70}>
              <div className="h-full bg-card p-8">
                <span className="text-sm font-bold text-primary">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}