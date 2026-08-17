import {
  Building2,
  Hammer,
  Home,
  BriefcaseBusiness,
  Paintbrush,
  ClipboardCheck,
  ShieldCheck,
  BadgeCheck,
  Users,
  Clock,
  MessageCircle,
  Mail,
  MapPin,
} from 'lucide-react'

import type {
  ContactChannel,
  Feature,
  NavLink,
  Project,
  Service,
  Stat,
} from '@/types'

export const COMPANY = {
  name: 'Amazing Abodes',
  tagline: 'BUILDERS • RENOVATION • PROMOTERS',

  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',

  email: 'amazingabodes@gmail.com',
  emailHref: 'mailto:amazingabodes@gmail.com',

  whatsapp: 'https://wa.me/919876543210',

  address:
    '204, Industrial Estate, MG Road, Mumbai, Maharashtra 400001, India',

  mapsUrl:
    'https://maps.google.com/?q=MG+Road+Mumbai',

  mapEmbed:
    'https://www.openstreetmap.org/export/embed.html?bbox=72.83%2C19.05%2C72.90%2C19.10&layer=mapnik',
} as const

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Project', href: '/project' },
  { label: 'Process', href: '/process' },
  { label: 'Why Us', href: '/why-choose-us' },
  { label: 'Contact', href: '/contact' },
]

export const HERO_STATS: Stat[] = [
  { value: '6+', label: 'Services' },
  { value: '100%', label: 'Quality Focus' },
  { value: '100%', label: 'Commitment' },
]

export const SERVICES: Service[] = [
  {
    icon: Building2,
    title: 'New Buildings',
    description:
      'Complete construction solutions from a strong foundation to a stunning final finish.',
  },
  {
    icon: Hammer,
    title: 'Renovation',
    description:
      'Transform existing spaces with quality renovation work, modern designs and careful execution.',
  },
  {
    icon: Home,
    title: 'Residential Projects',
    description:
      'Beautiful and functional homes designed around your lifestyle, requirements and vision.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Commercial Projects',
    description:
      'Professional construction solutions for offices, shops and commercial spaces.',
  },
  {
    icon: Paintbrush,
    title: 'Interior & Exterior Works',
    description:
      'Complete finishing works that improve the beauty, functionality and durability of your property.',
  },
  {
    icon: ClipboardCheck,
    title: 'Property Promotion',
    description:
      'Professional property development and promotion focused on quality and lasting value.',
  },
]

export const FEATURES: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Strong & Reliable Construction',
    description:
      'We focus on durable construction and careful execution to create spaces built for the future.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Materials',
    description:
      'We focus on quality materials to achieve durability, performance and excellent finishing.',
  },
  {
    icon: Paintbrush,
    title: 'Modern Designs',
    description:
      'We combine contemporary design with practical functionality to create beautiful spaces.',
  },
  {
    icon: Users,
    title: 'Skilled Workmanship',
    description:
      'Our team brings care, precision and dedication to every stage of the project.',
  },
  {
    icon: ClipboardCheck,
    title: 'Professional Project Management',
    description:
      'Projects are carefully coordinated from planning through execution and completion.',
  },
  {
    icon: Clock,
    title: 'Timely Completion',
    description:
      'We respect your time and work responsibly toward completing projects according to schedule.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent & Trusted Service',
    description:
      'Clear communication, honest discussions and dependable service are central to our approach.',
  },
]

export type Product = {
  name: string
  description: string
  image: string
  category?: string
}

export const PRODUCTS: Product[] = [
  {
    name: "Premium Cement",
    description: "High-quality cement for strong and durable construction.",
    image: "/images/products/cement.jpg",
    category: "Cement",
  },
  {
    name: "Interior Paint",
    description: "Smooth and durable paint for beautiful interior spaces.",
    image: "/images/products/interior-paint.jpg",
    category: "Paint",
  },
  {
    name: "Exterior Paint",
    description: "Weather-resistant paint designed for exterior surfaces.",
    image: "/images/products/exterior-paint.jpg",
    category: "Paint",
  },
  {
    name: "Wall Putty",
    description: "Premium wall putty for a smooth and flawless finish.",
    image: "/images/products/wall-putty.jpg",
    category: "Finishing",
  },
]

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    icon: Mail,
    label: 'Email Us',
    value: COMPANY.email,
    href: COMPANY.emailHref,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Message us on WhatsApp',
    href: COMPANY.whatsapp,
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: COMPANY.address,
    href: COMPANY.mapsUrl,
  },
]


export type Testimonial = {
  name: string
  role: string
  content: string
  image?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Home Owner",
    content:
      "Excellent quality products and very reliable service. The team helped us choose the right materials for our project.",
  },
  {
    name: "Suresh Builders",
    role: "Builder",
    content:
      "We have been purchasing construction materials from them for our projects. Good quality and dependable service.",
  },
  {
    name: "Priya Homes",
    role: "Customer",
    content:
      "Very professional service with a great range of products. Highly recommended.",
  },
]

export const PROJECTS: Project[] = [
  {
    name: "Green Valley Residences",
    description: "A premium residential complex with modern amenities and sustainable design, featuring 3BHK and 4BHK apartments with private gardens.",
    image: "/images/projects/green-valley.jpg",
    category: "Residential",
    featured: true,
  },
   {
    name: "Interior Design Studio",
    description: "Complete interior renovation and design of a creative studio space with modern aesthetics and functional workspaces.",
    image: "/images/projects/design-studio.jpg",
    category: "Interior Works",
    featured: false,
  },
  {
    name: "Tech Hub Office",
    description: "Contemporary commercial space designed for a leading tech company with open floor plans, collaboration zones, and state-of-the-art facilities.",
    image: "/images/projects/tech-hub.jpg",
    category: "Commercial",
    featured: true,
  },
  {
    name: "Heritage Villa Renovation",
    description: "Careful restoration and modernization of a 100-year-old heritage property while preserving its historical character and architectural details.",
    image: "/images/projects/heritage-villa.jpg",
    category: "Renovation",
    featured: true,
  },
   {
    name: "Interior Design Studio",
    description: "Complete interior renovation and design of a creative studio space with modern aesthetics and functional workspaces.",
    image: "/images/projects/design-studio.jpg",
    category: "Interior Works",
    featured: false,
  },
  {
    name: "Lakeside Apartments",
    description: "Luxury apartments with stunning lake views and premium finishes, offering 2BHK and 3BHK configurations with modern amenities.",
    image: "/images/projects/lakeside.jpg",
    category: "Residential",
    featured: false,
  },
  {
    name: "Retail Showroom",
    description: "Modern retail space designed for optimal customer experience with sleek interiors, proper lighting, and efficient product display areas.",
    image: "/images/projects/retail.jpg",
    category: "Commercial",
    featured: false,
  },
  {
    name: "Modern Kitchen Makeover",
    description: "Complete kitchen renovation with contemporary design, modular cabinets, premium countertops, and smart storage solutions.",
    image: "/images/projects/kitchen.jpg",
    category: "Renovation",
    featured: false,
  },
  {
    name: "Retail Showroom",
    description: "Modern retail space designed for optimal customer experience with sleek interiors, proper lighting, and efficient product display areas.",
    image: "/images/projects/retail.jpg",
    category: "Commercial",
    featured: false,
  },
  {
    name: "Garden Villas",
    description: "Exclusive gated community with 20 luxury villas featuring private gardens, swimming pools, and premium finishes.",
    image: "/images/projects/garden-villas.jpg",
    category: "Residential",
    featured: false,
  },
  {
    name: "Garden Villas",
    description: "Exclusive gated community with 20 luxury villas featuring private gardens, swimming pools, and premium finishes.",
    image: "/images/projects/garden-villas.jpg",
    category: "Residential",
    featured: false,
  },
  {
    name: "Modern Kitchen Makeover",
    description: "Complete kitchen renovation with contemporary design, modular cabinets, premium countertops, and smart storage solutions.",
    image: "/images/projects/kitchen.jpg",
    category: "Renovation",
    featured: false,
  },
  {
    name: "Modern Kitchen Makeover",
    description: "Complete kitchen renovation with contemporary design, modular cabinets, premium countertops, and smart storage solutions.",
    image: "/images/projects/kitchen.jpg",
    category: "Renovation",
    featured: false,
  },
  {
    name: "Corporate Tower",
    description: "15-story commercial tower with modern office spaces, conference facilities, and sustainable building features.",
    image: "/images/projects/corporate-tower.jpg",
    category: "Commercial",
    featured: false,
  },
   {
    name: "Corporate Tower",
    description: "15-story commercial tower with modern office spaces, conference facilities, and sustainable building features.",
    image: "/images/projects/corporate-tower.jpg",
    category: "Commercial",
    featured: false,
  },
  {
    name: "Interior Design Studio",
    description: "Complete interior renovation and design of a creative studio space with modern aesthetics and functional workspaces.",
    image: "/images/projects/design-studio.jpg",
    category: "Interior Works",
    featured: false,
  },
  {
    name: "Modern Kitchen Makeover",
    description: "Complete kitchen renovation with contemporary design, modular cabinets, premium countertops, and smart storage solutions.",
    image: "/images/projects/kitchen.jpg",
    category: "Renovation",
    featured: false,
  },
  {
    name: "Modern Kitchen Makeover",
    description: "Complete kitchen renovation with contemporary design, modular cabinets, premium countertops, and smart storage solutions.",
    image: "/images/projects/kitchen.jpg",
    category: "Renovation",
    featured: false,
  },
]