import Image from "next/image";
import type { Metadata } from "next";
import ServiceMain from "@/components/page-components/ServicePage/HeroSection/ServiceMain";
import Serve from "@/components/page-components/ServicePage/Serve/Serve";
import ServiceContext from "@/components/page-components/ServicePage/ServiceContex/ServiceContext";
import LearnMore from "@/components/page-components/ServicePage/ServiceContex/LearnMore";
import OnlineConsultation from "@/components/page-components/ServicePage/OnlineConsultation/OnlineConsultation";
import TestimonialCarousel from "@/components/page-components/ServicePage/Testimonial/TestimonialCarousel";
import FAQ from "@/components/page-components/ServicePage/FAQ/FAQ";

export const metadata: Metadata = {
  title: "Dreach.in | Services",
  description:
    "Find the best medical services for your health needs. Book an appointment with experienced doctors and get quality care at home or in-clinic.",
};

export default function Service() {
  return (
    <main className="">
      <ServiceMain />
      <Serve />
      <ServiceContext />
      <LearnMore />
      <OnlineConsultation />
      {/* <TestimonialCarousel /> */}
      <FAQ />
    </main>
  );
}
