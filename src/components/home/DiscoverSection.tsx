
import { ArrowRight, MapPin } from "lucide-react";
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
};

const allDestinations: Destination[] = [
  {
    id: "sigiriya",
    name: "Sigiriya",
    image: sigiriyaImage,
    description: "Ancient rock fortress and golden-hour views",
    category: "Cultural wonder",
  },
  {
    id: "ella",
    name: "Ella",
    image: ellaImage,
    description: "Scenic mountain views and the Nine Arch Bridge",
    category: "Mountain escape",
  },
  {
    id: "mirissa",
    name: "Mirissa",
    image: mirissaImage,
    description: "Palm-lined beaches and coastal sunsets",
    category: "Coastal getaway",
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    image: nuwaraEliyaImage,
    description: "Cool highlands, gardens and tea plantations",
    category: "Highland retreat",
  },
  {
    id: "jaffna",
    name: "Jaffna",
    image: jaffnaImage,
    description: "Northern culture, temples and authentic local food",
    category: "Cultural escape",
  },
  {
    id: "kandy",
    name: "Kandy",
    image: kandyImage,
    description: "Sacred sites, lake views and rich traditions",
    category: "Cultural escape",
  },
  {
    id: "galle",
    name: "Galle",
    image: galleImage,
    description: "Historic fort walls and beautiful coastal streets",
    category: "Coastal getaway",
  },
  {
    id: "trincomalee",
    name: "Trincomalee",
    image: trincomaleeImage,
    description: "Turquoise water, sandy beaches and ocean adventures",
    category: "Coastal getaway",
  },
  {
    id: "yala",
    name: "Yala",
    image: yalaImage,
    description: "Wildlife safaris and unforgettable nature",
    category: "Wildlife adventure",
  },
  {
    id: "arugam-bay",
    name: "Arugam Bay",
    image: arugamBayImage,
    description: "Surfing waves and laid-back beach life",
    category: "Surfing escape",
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    image: anuradhapuraImage,
    description: "Ancient kingdoms, stupas and sacred heritage",
    category: "Ancient wonders",
  },
  {
    id: "bentota",
    name: "Bentota",
    image: bentotaImage,
    description: "Relaxing beaches and river adventures",
    category: "Coastal getaway",
  },
];

export default function DiscoverSection() {
  // Two identical sets create a continuous marquee.
  const marqueeItems = [...allDestinations, ...allDestinations];

  return (
    <section className="discover-section" id="destinations">
      <div className="discover-heading">
        <div className="discover-eyebrow">
          <span>✧</span>
          DISCOVER THE ISLAND
        </div>

        <div className="discover-heading-row">
          <div>
            <h2>
              Find your next
              <br />
              <span>Sri Lankan escape.</span>
            </h2>

            <p>
              From ancient wonders and misty mountains to golden beaches,
              <br className="desktop-break" />
              discover the places that make every journey unforgettable.
            </p>
          </div>

          <a className="view-all-button" href="#/destinations">
            View all destinations
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

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
                <img
                  className="destination-card-image"
                  src={destination.image}
                  alt={isDuplicate ? "" : destination.name}
                  loading="eager"
                  draggable={false}
                />

                <div className="destination-card-shade" />

                <span className="destination-category">
                  {destination.category}
                </span>

                <div className="destination-card-content">
                  <div className="destination-location">
                    <MapPin size={15} />
                    Sri Lanka
                  </div>

                  <h3>{destination.name}</h3>

                  <p>{destination.description}</p>

                  <a
                    href={`#/destinations?query=${encodeURIComponent(
                      destination.name
                    )}`}
                    className="destination-card-link"
                    tabIndex={isDuplicate ? -1 : 0}
                  >
                    <span>Explore destination</span>

                    <span className="destination-arrow">
                      <ArrowRight size={20} />
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="marquee-caption">
        <span className="marquee-dot" />
        <span>Explore at your own pace</span>
        <span className="marquee-divider">·</span>
        <span>Discover more of Sri Lanka</span>
      </div>
    </section>
  );
}
