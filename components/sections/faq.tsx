import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const FAQS = [
  {
    question: 'What types of projects do you handle?',
    answer:
      'We handle new buildings, renovations, residential projects, commercial projects, interior and exterior works, and property promotion.',
  },
  {
    question: 'Do you handle renovation projects?',
    answer:
      'Yes. We provide renovation solutions for existing residential and commercial properties.',
  },
  {
    question: 'Do you handle residential and commercial projects?',
    answer:
      'Yes. Our services cover both residential and commercial construction requirements.',
  },
  {
    question: 'Can I discuss my project before starting?',
    answer:
      'Yes. Contact us with your requirements and project details so we can understand your vision and discuss the next steps.',
  },
  {
    question: 'Can I request a project estimate?',
    answer:
      'Yes. Share your project requirements with us and we can discuss the scope and next steps.',
  },
]

export function Faq() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Some common questions about our construction, renovation and property services."
          />
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 60}>
              <details className="group py-6">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold">
                  {faq.question}
                </summary>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}