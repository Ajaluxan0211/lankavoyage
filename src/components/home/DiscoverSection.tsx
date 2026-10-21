
import { ArrowRight, MapPin, Compass, Sparkles } from "lucide-react";
import { destinations } from "../../data/destinations";

export default function DiscoverSection() {
  return (
    <section className="bg-[#F7F7F0] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#168667]">
              <Sparkles size={17} />
              Discover the island
            </div>

            <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-[#153E32] sm:text-5xl lg:text-6xl">
              Find your next
              <span className="block text-[#168667]">
                Sri Lankan escape.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#64736B] sm:text-lg">
              From ancient wonders and misty mountains to golden beaches,
              discover the places that make every journey unforgettable.
            </p>
          </div>

          <a
            href="#/destinations"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#D5E2D9] bg-white px-6 py-3.5 font-semibold text-[#174B35] transition hover:border-[#168667] hover:bg-[#EAF5EE]"
          >
            View all destinations
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Destination cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination, index) => (
            <a
              key={destination.id}
              href={`#/destinations?query=${encodeURIComponent(destination.searchTerm)}`}
              className="group relative isolate min-h-[360px] overflow-hidden rounded-[26px] bg-[#174B35] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl sm:min-h-[420px]"
            >
              {/* Destination photo */}
              <img
                src={destination.image}
                alt={destination.name}
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071D16]/90 via-[#071D16]/15 to-transparent" />

              {/* Top badge */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {index === 0
                    ? "Cultural wonder"
                    : index === 1
                      ? "Mountain escape"
                      : index === 2
                        ? "Coastal getaway"
                        : "Highland retreat"}
                </span>
              </div>

              {/* Card content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-1.5 text-sm text-white/85">
                  <MapPin size={15} />
                  Sri Lanka
                </div>

                <h3 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                  {destination.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/85">
                  {destination.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/25 pt-4">
                  <span className="text-sm font-semibold text-white">
                    Explore destination
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#12664D] transition duration-300 group-hover:bg-[#45D6A4] group-hover:text-[#083D30]">
                    <ArrowRight size={19} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom discovery banner */}
        <div className="mt-12 flex flex-col gap-5 rounded-[28px] bg-[#174B35] p-7 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#72E0B1]">
              <Compass size={25} />
            </div>

            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                Your next adventure starts here
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                Discover hidden gems, explore local favourites, and find
                inspiration for your next trip around Sri Lanka.
              </p>
            </div>
          </div>

          <a
            href="#/destinations"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#38C995] px-6 py-3.5 font-bold text-[#073D30] transition hover:bg-[#72E0B1]"
          >
            Start exploring
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
