
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import DiscoverSection from "../components/home/DiscoverSection";
import CommunityStories from "../components/home/CommunityStories";
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DiscoverSection/>
      <CommunityStories/>
      
    </main>
  );
}
