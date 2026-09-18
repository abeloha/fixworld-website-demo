import { Preloader } from "@/components/home/preloader";
import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { BuiltByFixworld } from "@/components/home/built-by-fixworld";
import { ProductsPreview } from "@/components/home/products-preview";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { EngineersPreview } from "@/components/home/engineers-preview";
import { SocialProof } from "@/components/home/social-proof";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <Intro />
      <ServicesShowcase />
      <FeaturedProjects />
      <BuiltByFixworld />
      <ProductsPreview />
      <GalleryPreview />
      <EngineersPreview />
      <SocialProof />
      <FinalCta />
    </>
  );
}
