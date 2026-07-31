import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechStack } from "@/components/home/TechStack";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Testimonials } from "@/components/home/Testimonials";
import {
  getHomeProductsMerged,
  getTechnologyMasterMerged,
  getTestimonialsMerged,
  getTrustedBySectionMerged,
} from "@/lib/sanity/content";
import { getPublicPartnersLogos } from "@/lib/partners-public-logos";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [tech, homeProducts, trusted, testimonials] = await Promise.all([
    getTechnologyMasterMerged(),
    getHomeProductsMerged(),
    getTrustedBySectionMerged(),
    getTestimonialsMerged(),
  ]);
  const incubatorLogos = getPublicPartnersLogos();

  return (
    <>
      <HeroSection />
      <StatsSection incubatorLogos={incubatorLogos} />
      <ServicesSection />
      <TechStack data={tech} />
      <ProductsShowcase data={homeProducts} />
      <TrustedBy
        title={trusted.title}
        subtitle={trusted.subtitle}
        partners={trusted.partners}
      />
      <Testimonials data={testimonials} />
    </>
  );
}
