
import { ArrowRight, MapPin, Star } from "lucide-react";
import "../../styles/destination-marquee.css";

import sigiriyaImage from "../../assets/sigiriya.png";
import ellaImage from "../../assets/ella.png";
import mirissaImage from "../../assets/mirissa.png";
import nuwaraEliyaImage from "../../assets/nuwara-eliya.png";
import jaffnaImage from "../../assets/jaffna.png";
import kandyImage from "../../assets/kandy.png";
import galleImage from "../../assets/galle.png";
import trincomaleeImage from "../../assets/trincomalee.png";
import yalaImage from "../../assets/yala.png";
import arugamBayImage from "../../assets/arugam-bay.png";
import anuradhapuraImage from "../../assets/anuradhapura.png";
import bentotaImage from "../../assets/bentota.png";

type Destination = {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  rating: string;
};

const allDestinations: Destination[] = [
  {
    id: "sigiriya",
    name: "Sigiriya",
    image: sigiriyaImage,
    description: "Discover the ancient rock fortress",
    category: "Ancient wonder",
    rating: "4.9",
  },
  {
    id: "ella",
    name: "Ella",
    image: ellaImage,
    description: "Mountains, trains and scenic views",
    category: "Mountain escape",
    rating: "4.8",
  },
  {
    id: "mirissa",
    name: "Mirissa",
    image: mirissaImage,
    description: "Golden beaches and ocean sunsets",
    category: "Coastal getaway",
    rating: "4.8",
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    image: nuwaraEliyaImage,
    description: "Tea gardens and misty highlands",
    category: "Highland retreat",
    rating: "4.7",
  },
  {
    id: "jaffna",
    name: "Jaffna",
    image: jaffnaImage,
    description: "Northern culture and authentic cuisine",
    category: "Cultural escape",
    rating: "4.7",
  },
  {
    id: "kandy",
    name: "Kandy",
    image: kandyImage,
    description: "Sacred temples and peaceful lake views",
    category: "Cultural escape",
    rating: "4.8",
  },
  {
    id: "galle",
    name: "Galle",
    image: galleImage,
    description: "Historic fort and coastal streets",
    category: "Coastal getaway",
    rating: "4.7",
  },
  {
    id: "trincomalee",
    name: "Trincomalee",
    image: trincomaleeImage,
    description: "Clear blue water and beautiful beaches",
    category: "Beach escape",
    rating: "4.8",
  },
  {
    id: "yala",
    name: "Yala",
    image: yalaImage,
    description: "Wildlife safaris and natural wonders",
    category: "Wildlife adventure",
    rating: "4.8",
  },
  {
    id: "arugam-bay",
    name: "Arugam Bay",
    image: arugamBayImage,
    description: "Surfing waves and laid-back beach life",
    category: "Surfing escape",
    rating: "4.7",
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    image: anuradhapuraImage,
    description: "Ancient kingdoms and sacred heritage",
    category: "Ancient wonder",
    rating: "4.8",
  },
  {
    id: "bentota",
    name: "Bentota",
    image: bentotaImage,
    description: "Relaxing beaches and river adventures",
    category: "Coastal getaway",
    rating: "4.6",
  },
];

export default function DiscoverSection() {
  // Two identical groups create a seamless marquee loop.
  const marqueeItems = [...allDestinations, ...allDestinations];

  return (
    <section className="discover-section" id="destinations">
      <div className="discover-layout">
        {/* Compact text area on the left */}
        <div className="discover-intro">
          <div className="discover-eyebrow">
            <span>✧</span>
            DISCOVER THE ISLAND
          </div>

          <h2>
            Find your next
            <br />
            <span>Sri Lankan escape.</span>
          </h2>

          <p>
            From ancient wonders and misty mountains to golden beaches,
            discover the places that make every journey unforgettable.
          </p>

          <a className="discover-view-all" href="#/destinations">
            View all destinations
            <ArrowRight size={16} />
          </a>

          <div className="discover-note">
            <span className="discover-note-dot" />
            Explore at your own pace
          </div>
        </div>

        {/* Destination marquee on the right */}
        <div
          className="destination-marquee"
          aria-label="Explore Sri Lankan destinations"
        >
          <div className="destination-marquee-track">
            {marqueeItems.map((destination, index) => {
              const isDuplicate = index >= allDestinations.length;

              return (
                <article
                  className="destination-card"
                  key={`${destination.id}-${index}`}
                  aria-hidden={isDuplicate}
                >
                  <a
                    className="destination-card-main"
                    href={`#/destinations?query=${encodeURIComponent(
                      destination.name
                    )}`}
                    tabIndex={isDuplicate ? -1 : 0}
                    aria-label={`Explore ${destination.name}`}
                  >
                    <img
                      className="destination-card-image"
                      src={destination.image}
                      alt={isDuplicate ? "" : destination.name}
                      loading={index < 6 ? "eager" : "lazy"}
                      draggable={false}
                    />

                    <div className="destination-card-shade" />

                    <span className="destination-category">
                      {destination.category}
                    </span>

                    <div className="destination-card-content">
                      <span className="destination-location">
                        <MapPin size={12} />
                        Sri Lanka
                      </span>

                      <h3>{destination.name}</h3>

                      <p>{destination.description}</p>

                      <div className="destination-card-bottom">
                        <span className="destination-rating">
                          <Star size={12} fill="currentColor" />
                          {destination.rating}
                        </span>

                        <span className="destination-arrow">
                          <ArrowRight size={17} />
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="discover-bottom-line">
        <span />
        Discover more of Sri Lanka
        <span />
      </div>
    </section>
  );
}
