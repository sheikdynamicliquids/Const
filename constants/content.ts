// constants/content.ts

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
  tagline: 'Make your dreams true through our commitment',

  phone: '+91 9942907420',
  phoneHref: 'tel:+919942907420',

  email: 'amazingabodes@gmail.com',
  emailHref: 'mailto:amazingabodes@gmail.com',

  whatsapp: 'https://wa.me/9942907420',

  address:
    '219, Ramachandrapuram Agraharam, Machuvadi, Pudukkottai, Tamil Nadu 622001',

  mapsUrl:
    'https://maps.google.com/?q=Machuvadi+Road+TamilNadu',

  mapEmbed:
    'https://www.google.com/maps?q=10.3900947,78.8239475&z=15&output=embed',
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

// Separate image collections for each category
// Remove /public from all image paths
const RESIDENTIAL_IMAGES = [
  "/images/photos/Residential/1.jpeg",
  "/images/photos/Residential/2.jpeg",
  "/images/photos/Residential/3.jpeg",
  "/images/photos/Residential/4.jpeg",
  "/images/photos/Residential/5.jpeg",
  "/images/photos/Residential/6.jpeg",
  "/images/photos/Residential/7.jpeg",
  "/images/photos/Residential/8.jpeg",
  "/images/photos/Residential/9.jpeg",
  "/images/photos/Residential/10.jpeg",
]

const COMMERCIAL_IMAGES = [
  "/images/photos/Commercial/1.jpeg",
  "/images/photos/Commercial/2.jpeg",
  "/images/photos/Commercial/3.jpeg",
  "/images/photos/Commercial/4.jpeg",
  "/images/photos/Commercial/5.jpeg",
  "/images/photos/Commercial/6.jpeg",
  "/images/photos/Commercial/7.jpeg",
  "/images/photos/Commercial/8.jpeg",
  "/images/photos/Commercial/9.jpeg",
  "/images/photos/Commercial/10.jpeg",
]

const RENOVATION_IMAGES = [
  "/images/photos/Renovation/1.jpeg",
  "/images/photos/Renovation/2.jpeg",
  "/images/photos/Renovation/3.jpeg",
  "/images/photos/Renovation/4.jpeg",
  "/images/photos/Renovation/5.jpeg",
  "/images/photos/Renovation/6.jpeg",
  "/images/photos/Renovation/7.jpeg",
  "/images/photos/Renovation/8.jpeg",
  "/images/photos/Renovation/9.jpeg",
  "/images/photos/Renovation/10.jpeg",
]

const INTERIOR_IMAGES = [
  "/images/photos/Interworks/1.jpeg",
  "/images/photos/Interworks/2.jpeg",
  "/images/photos/Interworks/3.jpeg",
  "/images/photos/Interworks/4.jpeg",
  "/images/photos/Interworks/5.jpeg",
  "/images/photos/Interworks/6.jpeg",
  "/images/photos/Interworks/7.jpeg",
  "/images/photos/Interworks/8.jpeg",
  "/images/photos/Interworks/9.jpeg",
  "/images/photos/Interworks/10.jpeg",
]

const CONSTRUCTION_IMAGES = [
  "/images/photos/ConstructionSite/1.jpeg",
  "/images/photos/ConstructionSite/2.jpeg",
  "/images/photos/ConstructionSite/3.jpeg",
  "/images/photos/ConstructionSite/4.jpeg",
  "/images/photos/ConstructionSite/5.jpeg",
  "/images/photos/ConstructionSite/6.jpeg",
  "/images/photos/ConstructionSite/7.jpeg",
  "/images/photos/ConstructionSite/8.jpeg",
  "/images/photos/ConstructionSite/9.jpeg",
  "/images/photos/ConstructionSite/10.jpeg",
  "/images/photos/ConstructionSite/11.jpeg",
  "/images/photos/ConstructionSite/12.jpeg",
  "/images/photos/ConstructionSite/13.jpeg",
  "/images/photos/ConstructionSite/14.jpeg",
  "/images/photos/ConstructionSite/15.jpeg",
  "/images/photos/ConstructionSite/16.jpeg",
  "/images/photos/ConstructionSite/17.jpeg",
  "/images/photos/ConstructionSite/18.jpeg",
  "/images/photos/ConstructionSite/19.jpeg",
  "/images/photos/ConstructionSite/20.jpeg",
  "/images/photos/ConstructionSite/21.jpeg",
  "/images/photos/ConstructionSite/22.jpeg",
  "/images/photos/ConstructionSite/23.jpeg",
  "/images/photos/ConstructionSite/24.jpeg",
  "/images/photos/ConstructionSite/25.jpeg",
  "/images/photos/ConstructionSite/26.jpeg",
  "/images/photos/ConstructionSite/27.jpeg",
  "/images/photos/ConstructionSite/28.jpeg",
  "/images/photos/ConstructionSite/29.jpeg",
  "/images/photos/ConstructionSite/30.jpeg",
  "/images/photos/ConstructionSite/31.jpeg",
  "/images/photos/ConstructionSite/32.jpeg",
  "/images/photos/ConstructionSite/33.jpeg",
  "/images/photos/ConstructionSite/34.jpeg",
  "/images/photos/ConstructionSite/35.jpeg",
  "/images/photos/ConstructionSite/36.jpeg",
  "/images/photos/ConstructionSite/37.jpeg",
  "/images/photos/ConstructionSite/38.jpeg",
  "/images/photos/ConstructionSite/39.jpeg",
  "/images/photos/ConstructionSite/40.jpeg",
  "/images/photos/ConstructionSite/41.jpeg",
  "/images/photos/ConstructionSite/42.jpeg",
  "/images/photos/ConstructionSite/43.jpeg",
  "/images/photos/ConstructionSite/44.jpeg",
  "/images/photos/ConstructionSite/45.jpeg",
  "/images/photos/ConstructionSite/46.jpeg",
  "/images/photos/ConstructionSite/47.jpeg",
  "/images/photos/ConstructionSite/48.jpeg",
  "/images/photos/ConstructionSite/49.jpeg",
  "/images/photos/ConstructionSite/50.jpeg",
  "/images/photos/ConstructionSite/51.jpeg",
  "/images/photos/ConstructionSite/52.jpeg",
  "/images/photos/ConstructionSite/53.jpeg",
  "/images/photos/ConstructionSite/54.jpeg",
  "/images/photos/ConstructionSite/55.jpeg",
  "/images/photos/ConstructionSite/56.jpeg",
  "/images/photos/ConstructionSite/57.jpeg",
  "/images/photos/ConstructionSite/58.jpeg",
  "/images/photos/ConstructionSite/59.jpeg",
  "/images/photos/ConstructionSite/60.jpeg",
  "/images/photos/ConstructionSite/61.jpeg",
  "/images/photos/ConstructionSite/62.jpeg",
  "/images/photos/ConstructionSite/63.jpeg",
  "/images/photos/ConstructionSite/64.jpeg",
  "/images/photos/ConstructionSite/65.jpeg",
  "/images/photos/ConstructionSite/66.jpeg",
  "/images/photos/ConstructionSite/67.jpeg",
  "/images/photos/ConstructionSite/68.jpeg",
  "/images/photos/ConstructionSite/69.jpeg",
  "/images/photos/ConstructionSite/70.jpeg",
  "/images/photos/ConstructionSite/71.jpeg",
  "/images/photos/ConstructionSite/72.jpeg",
  "/images/photos/ConstructionSite/73.jpeg",
  "/images/photos/ConstructionSite/74.jpeg",
  "/images/photos/ConstructionSite/75.jpeg",
  "/images/photos/ConstructionSite/76.jpeg",
  "/images/photos/ConstructionSite/77.jpeg",
  "/images/photos/ConstructionSite/78.jpeg",
  "/images/photos/ConstructionSite/79.jpeg",
  "/images/photos/ConstructionSite/80.jpeg",
  "/images/photos/ConstructionSite/81.jpeg",
  "/images/photos/ConstructionSite/82.jpeg",
  "/images/photos/ConstructionSite/83.jpeg",
  "/images/photos/ConstructionSite/84.jpeg",
  "/images/photos/ConstructionSite/85.jpeg",
  "/images/photos/ConstructionSite/86.jpeg",
  "/images/photos/ConstructionSite/87.jpeg",
  "/images/photos/ConstructionSite/88.jpeg",
  "/images/photos/ConstructionSite/89.jpeg",
  "/images/photos/ConstructionSite/90.jpeg",
  "/images/photos/ConstructionSite/91.jpeg",
  "/images/photos/ConstructionSite/92.jpeg",
  "/images/photos/ConstructionSite/93.jpeg",
  "/images/photos/ConstructionSite/94.jpeg",
  "/images/photos/ConstructionSite/95.jpeg",
  "/images/photos/ConstructionSite/96.jpeg",
  "/images/photos/ConstructionSite/97.jpeg",
  "/images/photos/ConstructionSite/98.jpeg",
  "/images/photos/ConstructionSite/99.jpeg",
  "/images/photos/ConstructionSite/100.jpeg",
  "/images/photos/ConstructionSite/101.jpeg",
  "/images/photos/ConstructionSite/102.jpeg",
  "/images/photos/ConstructionSite/103.jpeg",
  "/images/photos/ConstructionSite/104.jpeg",
  "/images/photos/ConstructionSite/105.jpeg",
  "/images/photos/ConstructionSite/106.jpeg",
  "/images/photos/ConstructionSite/107.jpeg",
  "/images/photos/ConstructionSite/108.jpeg",
  "/images/photos/ConstructionSite/109.jpeg",
  "/images/photos/ConstructionSite/110.jpeg",
  "/images/photos/ConstructionSite/111.jpeg",
  "/images/photos/ConstructionSite/112.jpeg",
  "/images/photos/ConstructionSite/113.jpeg",
  "/images/photos/ConstructionSite/114.jpeg",
  "/images/photos/ConstructionSite/115.jpeg",
  "/images/photos/ConstructionSite/116.jpeg",
  "/images/photos/ConstructionSite/117.jpeg",
  "/images/photos/ConstructionSite/118.jpeg",
  "/images/photos/ConstructionSite/119.jpeg",
  "/images/photos/ConstructionSite/120.jpeg",
  "/images/photos/ConstructionSite/121.jpeg",
  "/images/photos/ConstructionSite/122.jpeg",
  "/images/photos/ConstructionSite/123.jpeg",
  "/images/photos/ConstructionSite/124.jpeg",
  "/images/photos/ConstructionSite/125.jpeg",
  "/images/photos/ConstructionSite/126.jpeg",
  "/images/photos/ConstructionSite/127.jpeg",
  "/images/photos/ConstructionSite/128.jpeg",
  "/images/photos/ConstructionSite/129.jpeg",
  "/images/photos/ConstructionSite/130.jpeg",
  "/images/photos/ConstructionSite/131.jpeg",
  "/images/photos/ConstructionSite/132.jpeg",
  "/images/photos/ConstructionSite/133.jpeg",
  "/images/photos/ConstructionSite/134.jpeg",
  "/images/photos/ConstructionSite/135.jpeg",
  "/images/photos/ConstructionSite/136.jpeg",
  "/images/photos/ConstructionSite/137.jpeg",
  "/images/photos/ConstructionSite/138.jpeg",
  "/images/photos/ConstructionSite/139.jpeg",
  "/images/photos/ConstructionSite/140.jpeg",
  "/images/photos/ConstructionSite/141.jpeg",
  "/images/photos/ConstructionSite/142.jpeg",
  "/images/photos/ConstructionSite/143.jpeg",
  "/images/photos/ConstructionSite/144.jpeg",
  "/images/photos/ConstructionSite/145.jpeg",
  "/images/photos/ConstructionSite/146.jpeg",
  "/images/photos/ConstructionSite/147.jpeg",
  "/images/photos/ConstructionSite/148.jpeg",
  "/images/photos/ConstructionSite/149.jpeg",
  "/images/photos/ConstructionSite/150.jpeg",
   "/images/photos/ConstructionSite/151.jpeg",
  "/images/photos/ConstructionSite/152.jpeg",
  "/images/photos/ConstructionSite/153.jpeg",
  "/images/photos/ConstructionSite/154.jpeg",
  "/images/photos/ConstructionSite/155.jpeg",
  "/images/photos/ConstructionSite/156.jpeg",
  "/images/photos/ConstructionSite/157.jpeg",
  "/images/photos/ConstructionSite/158.jpeg",
  "/images/photos/ConstructionSite/159.jpeg",
  "/images/photos/ConstructionSite/160.jpeg",
  "/images/photos/ConstructionSite/161.jpeg",
  "/images/photos/ConstructionSite/162.jpeg",
  "/images/photos/ConstructionSite/163.jpeg",
  "/images/photos/ConstructionSite/164.jpeg",
  "/images/photos/ConstructionSite/165.jpeg",
  "/images/photos/ConstructionSite/166.jpeg",
  "/images/photos/ConstructionSite/167.jpeg",
  "/images/photos/ConstructionSite/168.jpeg",
  "/images/photos/ConstructionSite/169.jpeg",
  "/images/photos/ConstructionSite/170.jpeg",
  "/images/photos/ConstructionSite/171.jpeg",
  "/images/photos/ConstructionSite/172.jpeg",
  "/images/photos/ConstructionSite/173.jpeg",
  "/images/photos/ConstructionSite/174.jpeg",
  "/images/photos/ConstructionSite/175.jpeg",
  "/images/photos/ConstructionSite/176.jpeg",
  "/images/photos/ConstructionSite/177.jpeg",
  "/images/photos/ConstructionSite/178.jpeg",
  "/images/photos/ConstructionSite/179.jpeg",
  "/images/photos/ConstructionSite/180.jpeg",
  "/images/photos/ConstructionSite/181.jpeg",
  "/images/photos/ConstructionSite/182.jpeg",
  "/images/photos/ConstructionSite/183.jpeg",
  "/images/photos/ConstructionSite/184.jpeg",
  "/images/photos/ConstructionSite/185.jpeg",
  "/images/photos/ConstructionSite/186.jpeg",
  "/images/photos/ConstructionSite/187.jpeg",
  "/images/photos/ConstructionSite/188.jpeg",
  "/images/photos/ConstructionSite/189.jpeg",
  "/images/photos/ConstructionSite/190.jpeg",
  "/images/photos/ConstructionSite/191.jpeg",
  "/images/photos/ConstructionSite/192.jpeg",
  "/images/photos/ConstructionSite/193.jpeg",
  "/images/photos/ConstructionSite/194.jpeg",
  "/images/photos/ConstructionSite/195.jpeg",
  "/images/photos/ConstructionSite/196.jpeg",
  "/images/photos/ConstructionSite/197.jpeg",
  "/images/photos/ConstructionSite/198.jpeg",
  "/images/photos/ConstructionSite/199.jpeg",
  "/images/photos/ConstructionSite/200.jpeg",
  "/images/photos/ConstructionSite/201.jpeg",
  "/images/photos/ConstructionSite/202.jpeg",
  "/images/photos/ConstructionSite/203.jpeg",
  "/images/photos/ConstructionSite/204.jpeg",
  "/images/photos/ConstructionSite/205.jpeg",
  "/images/photos/ConstructionSite/206.jpeg",
  "/images/photos/ConstructionSite/207.jpeg",
  "/images/photos/ConstructionSite/208.jpeg",
  "/images/photos/ConstructionSite/209.jpeg",
  "/images/photos/ConstructionSite/210.jpeg",
  "/images/photos/ConstructionSite/211.jpeg",
  "/images/photos/ConstructionSite/212.jpeg",
  "/images/photos/ConstructionSite/213.jpeg",
  "/images/photos/ConstructionSite/214.jpeg",
  "/images/photos/ConstructionSite/215.jpeg",
  "/images/photos/ConstructionSite/216.jpeg",
  "/images/photos/ConstructionSite/217.jpeg",
  "/images/photos/ConstructionSite/218.jpeg",
  "/images/photos/ConstructionSite/219.jpeg",
  "/images/photos/ConstructionSite/220.jpeg",
  "/images/photos/ConstructionSite/221.jpeg",
  "/images/photos/ConstructionSite/222.jpeg",
  "/images/photos/ConstructionSite/223.jpeg",
  "/images/photos/ConstructionSite/224.jpeg",
  "/images/photos/ConstructionSite/225.jpeg",
  "/images/photos/ConstructionSite/226.jpeg",
  "/images/photos/ConstructionSite/227.jpeg",
  "/images/photos/ConstructionSite/228.jpeg",
  "/images/photos/ConstructionSite/229.jpeg",
  "/images/photos/ConstructionSite/230.jpeg",
  "/images/photos/ConstructionSite/231.jpeg",
  "/images/photos/ConstructionSite/232.jpeg",
  "/images/photos/ConstructionSite/233.jpeg",
  "/images/photos/ConstructionSite/234.jpeg",
  "/images/photos/ConstructionSite/235.jpeg",
  "/images/photos/ConstructionSite/236.jpeg",
  "/images/photos/ConstructionSite/237.jpeg",
  "/images/photos/ConstructionSite/238.jpeg",
  "/images/photos/ConstructionSite/239.jpeg",
  "/images/photos/ConstructionSite/240.jpeg",
  "/images/photos/ConstructionSite/241.jpeg",
  "/images/photos/ConstructionSite/242.jpeg",
  "/images/photos/ConstructionSite/243.jpeg",
  "/images/photos/ConstructionSite/244.jpeg",
  "/images/photos/ConstructionSite/245.jpeg",
  "/images/photos/ConstructionSite/246.jpeg",
  "/images/photos/ConstructionSite/247.jpeg",
  "/images/photos/ConstructionSite/248.jpeg",
  "/images/photos/ConstructionSite/249.jpeg",
  "/images/photos/ConstructionSite/250.jpeg",
   "/images/photos/ConstructionSite/251.jpeg",
  "/images/photos/ConstructionSite/252.jpeg",
  "/images/photos/ConstructionSite/253.jpeg",
  "/images/photos/ConstructionSite/254.jpeg",
  "/images/photos/ConstructionSite/255.jpeg",
  "/images/photos/ConstructionSite/256.jpeg",
  "/images/photos/ConstructionSite/257.jpeg",
  "/images/photos/ConstructionSite/258.jpeg",
  "/images/photos/ConstructionSite/259.jpeg",
  "/images/photos/ConstructionSite/260.jpeg",
  "/images/photos/ConstructionSite/261.jpeg",
  "/images/photos/ConstructionSite/262.jpeg",
  "/images/photos/ConstructionSite/263.jpeg",
  "/images/photos/ConstructionSite/264.jpeg",
  "/images/photos/ConstructionSite/265.jpeg",
  "/images/photos/ConstructionSite/266.jpeg",
  "/images/photos/ConstructionSite/267.jpeg",
  "/images/photos/ConstructionSite/268.jpeg",
  "/images/photos/ConstructionSite/269.jpeg",
  "/images/photos/ConstructionSite/270.jpeg",
  "/images/photos/ConstructionSite/271.jpeg",
  "/images/photos/ConstructionSite/272.jpeg",
]

// Combined projects with separate image paths
export const PROJECTS: Project[] = [
  // Residential Projects (10 images)
  ...RESIDENTIAL_IMAGES.map((image, index) => ({
    name: ``,
    description: `Beautiful residential project with modern amenities and premium finishes.`,
    image: image,
    category: "Residential",
    featured: index < 2,
  })),
  
  // Commercial Projects (10 images)
  ...COMMERCIAL_IMAGES.map((image, index) => ({
    name: ``,
    description: `Modern commercial space designed for business excellence and functionality.`,
    image: image,
    category: "Commercial",
    featured: index < 2,
  })),
  
  // Renovation Projects (10 images)
  ...RENOVATION_IMAGES.map((image, index) => ({
    name: ``,
    description: `Expert renovation transforming spaces with modern design and quality craftsmanship.`,
    image: image,
    category: "Renovation",
    featured: index < 2,
  })),
  
  // Interior Works Projects (10 images)
  ...INTERIOR_IMAGES.map((image, index) => ({
    name: ``,
    description: `Stunning interior design creating beautiful and functional living spaces.`,
    image: image,
    category: "Interior Works",
    featured: index < 2,
  })),

  // Construction Site Projects (10 images)
  ...CONSTRUCTION_IMAGES.map((image, index) => ({
    name: ``,
    description: `Expert renovation transforming spaces with modern design and quality craftsmanship.`,
    image: image,
    category: "Others",
    featured: index < 2,
  })),
]