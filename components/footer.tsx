import { Phone, Mail, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'
import { NewsletterForm } from '@/components/newsletter-form'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/social-icons'
import { COMPANY, NAV_LINKS } from '@/constants/content'
import Link from 'next/link'

const SOCIAL_ICONS = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
]

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5">
            <Logo invert />
            <p className="max-w-xs text-sm leading-relaxed text-footer-muted">
              Crafting Amazing Abodes. Premium construction materials &amp; full-service
              contracting since 2009.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_ICONS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-footer-foreground transition-colors hover:bg-brand-gradient"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-bold uppercase tracking-widest text-footer-foreground">
              Quick Links
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-muted transition-colors hover:text-footer-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-footer-foreground">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-footer-muted">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-footer-foreground"
                >
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className="flex items-center gap-3 transition-colors hover:text-footer-foreground"
                >
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {COMPANY.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-footer-foreground">
              Newsletter
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-footer-muted">
              Get market rates, new products and project stories to your inbox.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-footer-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>Built with care for builders and homeowners.</p>
        </div>
      </div>
    </footer>
  )
}
