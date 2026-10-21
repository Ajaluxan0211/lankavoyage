
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";
import { destinations } from "../../data/destinations";

export default function DestinationRail() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % destinations.length);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + destinations.length) % destinations.length,
    );
  };

  const orderedDestinations = destinations.map(
    (_, index) => destinations[(activeIndex + index) % destinations.length],
  );

  return (
    <aside className="flex w-[150px] flex-col items-center gap-3">
      <div className="flex w-full flex-col gap-3">
        {orderedDestinations.map((destination, index) => (
          <button
            key={destination.id}
            type="button"
            onClick={() => setActiveIndex(destinations.indexOf(destination))}
            className={`group relative h-[118px] w-full overflow-hidden rounded-[20px] border-2 bg-black/20 shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
              index === 0
                ? "border-white ring-2 ring-white/30"
                : "border-white/50"
            }`}
            aria-label={`Show ${destination.name}`}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            <span className="absolute inset-x-2 bottom-2 flex items-center gap-1 text-left text-xs font-semibold text-white">
              <MapPin size={13} className="shrink-0" />
              <span className="truncate">{destination.name}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="mt-1 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={goPrevious}
          aria-label="Previous destinations"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next destinations"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </aside>
  );
}
