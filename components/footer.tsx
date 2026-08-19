import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/logo'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/social-icons'
import { COMPANY, NAV_LINKS } from '@/constants/content'
import Link from 'next/link'

const SOCIAL_ICONS = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedinIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Logo invert />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Crafting Amazing Abodes. Premium construction materials &amp; full-service
              contracting since 2009.
            </p>
            {/* <div className="mt-6 flex items-center gap-3">
              {SOCIAL_ICONS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:bg-emerald-600 hover:text-white hover:scale-110"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <ArrowRight className="size-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <span className="flex size-9 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-400 flex-shrink-0 mt-0.5">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link> */}
            <span className="text-slate-700">|</span>
            <p className="text-slate-500">Built with care for builders and homeowners.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}