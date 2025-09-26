import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/app/lib/servicesData'
import ServiceDetailClient from './ServiceDetailClient'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}

export async function generateStaticParams() {
  return [
    { slug: 'automated-system' },
    { slug: 'metal-mask' },
    { slug: 'process-jig' }
  ]
}