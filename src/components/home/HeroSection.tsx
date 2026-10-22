
import { Camera, Compass, Map, Users, Mouse } from "lucide-react";
import { useEffect, useState } from "react";
import { destinations } from "../../data/destinations";
import DestinationSearch from "./DestinationSearch";
import DestinationRail from "./DestinationRail";

const popularDestinations = [
  "Ella",
  "Sigiriya",
  "Mirissa",
  "Nuwara Eliya",
  "Trincomalee",
  "Yala",
];

export default function HeroSection() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  // Change the background image every 6 seconds.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setBackgroundIndex((current) => (current + 1) % destinations.length);
    }, 1500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#082e27] text-white">
      {/* Background slideshow */}
      {destinations.map((destination, index) => (
        <div
          key={destination.id}
          aria-hidden="true"
          className={`absolute inset-0 -z-20 bg-cover bg-center transition-opacity duration-[1500ms] ${
            index === backgroundIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${destination.image}")` }}
        />
      ))}

      {/* Overlay for readable text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031b16]/75 via-[#031b16]/35 to-[#031b16]/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#031b16]/50 via-transparent to-black/5"
      />

      {/* Main content: extra top padding prevents navbar overlap */}
      <div className="relative mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pb-12 pt-32 sm:px-10 sm:pt-36 lg:px-16 lg:pb-10 lg:pt-28">
        {/* Left content */}
        <div className="w-full max-w-[900px]">
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white/95 sm:text-sm">
            <span>Explore · Share · Plan</span>
            <span className="h-px w-14 bg-white/70" />
          </div>

          <h1 className="font-serif text-6xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[100px]">
            <span className="block">Discover</span>
            <span className="block bg-gradient-to-r from-[#a4e9a7] via-[#50d2a3] to-[#159d7c] bg-clip-text text-transparent">
              Sri Lanka
            </span>
          </h1>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            One Journey at a Time
          </h2>

          <p className="mt-4 max-w-[720px] text-base leading-7 text-white/95 sm:text-lg">
            Explore breathtaking destinations, share your travel memories,
            plan your trips and connect with local experiences.
          </p>

          {/* Main search bar */}
          <div className="mt-7 max-w-[900px]">
            <DestinationSearch initialDestination="Sigiriya" />
          </div>

          {/* Popular destinations */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <span className="mr-1 text-sm font-semibold">Popular:</span>

            {popularDestinations.map((place) => (
              <button
                key={place}
                type="button"
                onClick={() => {
                  window.location.hash = `/destinations?query=${encodeURIComponent(place)}`;
                }}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/20 sm:text-sm"
              >
                {place}
              </button>
            ))}
          </div>

          {/* Feature highlights */}
          <div className="mt-6 grid max-w-[950px] grid-cols-2 gap-4 border-t border-white/20 pt-5 sm:grid-cols-4 sm:gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-emerald-300">
                <Camera size={23} />
              </span>
              <span className="text-xs leading-5 sm:text-sm">
                Real
                <br />
                <strong>Travel Memories</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-400 text-amber-300">
                <Map size={23} />
              </span>
              <span className="text-xs leading-5 sm:text-sm">
                Explore
                <br />
                <strong>All 25 Districts</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-emerald-300">
                <Compass size={23} />
              </span>
              <span className="text-xs leading-5 sm:text-sm">
                Plan Your
                <br />
                <strong>Perfect Trip</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-400 text-amber-300">
                <Users size={23} />
              </span>
              <span className="text-xs leading-5 sm:text-sm">
                Discover
                <br />
                <strong>Local Experiences</strong>
              </span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-5 hidden max-w-[950px] flex-col items-center text-xs text-white/85 sm:flex">
            <Mouse size={24} />
            <span className="mt-1">Scroll to explore</span>
            <span className="text-lg">↓</span>
          </div>
        </div>

        {/* Right-side destination cards */}
        <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 lg:block xl:right-10">
          <DestinationRail />
        </div>
      </div>
    </section>
  );
}
