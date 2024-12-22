import type { Metadata } from "next";
// import FAQ from "@/components/page-components/ServicePage/FAQ/FAQ";
import DocFooter from "@/components/page-components/DoctorsPage/DocFooter";
import DoctorList from "@/components/page-components/DoctorsPage/doctorCardNew";
import SearchAndFilters from "@/components/page-components/DoctorsPage/SearchAndFilters";
import DoctorHero from "@/components/page-components/DoctorsPage/DoctorHero";
import DoctorFeatured from "@/components/page-components/DoctorsPage/DoctorFeatured";
import ModernFAQ from "@/components/page-components/DoctorsPage/ModernFAQ";

export const metadata: Metadata = {
  title: "Dreach.in | Doctors",
  description:
    "Dreach.in is a platform for doctors and patients to connect and communicate.",
};

export default function Doctors() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto">
        {/* <Banner /> */}
<DoctorHero />
<DoctorFeatured />
        <div className="mb-8 px-4">
			
          <SearchAndFilters />
        </div>
		<div className="py-8 lg:px-32 px-4 ">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Available Doctors
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Find and book appointments with the right doctor
          </p>
        </div>
        <DoctorList />

        <div className="mt-12">
          <ModernFAQ />
        </div>
        
        <div className="mt-8">
          <DocFooter />
        </div>
      </div>
    </main>
  );
}
