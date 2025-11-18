import { HeroSection } from '@/components/hero-section'
import { WhyHeartxSection } from '@/components/why-heartx-section'
import { BenefitsSection } from '@/components/benefits-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { SizesSection } from '@/components/sizes-section'
import { BoxContentsSection } from '@/components/box-contents-section'
import { PriceSection } from '@/components/price-section'
import { DeliverySection } from '@/components/delivery-section'
import { FaqSection } from '@/components/faq-section'
import { CtaSection } from '@/components/cta-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhyHeartxSection />
      <BenefitsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SizesSection />
      <BoxContentsSection />
      <PriceSection />
      <DeliverySection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}
