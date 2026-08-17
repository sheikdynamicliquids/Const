import { TESTIMONIALS } from "@/constants/content"

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="rounded-xl border p-6"
            >
              <p className="text-gray-600">
                “{t.content}”
              </p>

              <div className="mt-6">
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}