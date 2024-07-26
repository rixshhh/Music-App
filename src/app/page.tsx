import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MeetOurInstructor from "@/components/MeetOurInstructor";
import Navbar from "@/components/Navbar";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import TracingBeamDemo from "@/components/TracingBeam";


import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <TracingBeamDemo/>
      <MusicSchoolTestimonialCards/>
      <MeetOurInstructor/>
      <Footer/>
    </main>
  );
}
