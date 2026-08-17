import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { COMPANY } from '@/constants/content'

interface LogoProps {
  className?: string
  invert?: boolean
}

export function Logo({ className, invert = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-3', className)}
    >
      <Image
        src="/images/logo.jpg"
        alt="Amazing Abodes"
        width={48}
        height={48}
        priority
        className="size-12 object-contain"
      />

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-lg font-bold tracking-tight',
            invert ? 'text-footer-foreground' : 'text-foreground',
          )}
        >
          {COMPANY.name}
        </span>

        <span
          className={cn(
            'text-[10px] font-semibold uppercase tracking-[0.2em]',
            invert ? 'text-footer-muted' : 'text-primary',
          )}
        >
          {COMPANY.tagline}
        </span>
      </span>
    </Link>
  )
}