import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface Project {
  name: string
  category: string
  image: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

export interface ContactChannel {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

// types/index.ts

export interface Project {
  name: string
  description: string
  image: string
  category: string
  featured?: boolean
}

export interface ContactChannel {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface Product {
  name: string
  description: string
  image: string
  category?: string
}

export interface Testimonial {
  name: string
  role: string
  content: string
  image?: string
}