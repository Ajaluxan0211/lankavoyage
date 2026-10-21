import HeroSection from "../components/home/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section id="destinations" className="below-hero">
        <p className="section-eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>Find your kind of Sri Lanka.</h2>
        <p>Explore mountains, beaches, waterfalls, wildlife and places worth sharing.</p>
      </section>
    </>
  );
}