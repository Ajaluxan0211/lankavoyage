
import { ArrowRight, Heart, MapPin, Sparkles } from "lucide-react";
import "../../styles/CommunityStories.css";

import mirissaImage from "../../assets/story-mirissa.png";
import ellaImage from "../../assets/story-ella.png";
import nuwaraImage from "../../assets/story-nuwara-eliya.png";
import whaleImage from "../../assets/story-whale.png";

const stories = [
  {
    category: "BEACH LIFE",
    location: "Mirissa",
    title: "A Sunset I’ll Never Forget",
    description:
      "Golden skies, salty air and the kind of peace you can only find in Mirissa.",
    author: "Emma Collins",
    country: "United Kingdom",
    initials: "EC",
    likes: 342,
    image: mirissaImage,
    avatar: "#d99472",
  },
  {
    category: "SCENIC JOURNEYS",
    location: "Ella",
    title: "The Most Beautiful Train Ride",
    description:
      "Lush hills, charming villages and a journey full of unforgettable views.",
    author: "Daniel Kim",
    country: "South Korea",
    initials: "DK",
    likes: 527,
    image: ellaImage,
    avatar: "#6c9fc0",
  },
  {
    category: "HIGHLAND ESCAPE",
    location: "Nuwara Eliya",
    title: "Tea, Mist and Mountain Views",
    description:
      "Crisp air, endless tea fields and a slower pace of life in the highlands.",
    author: "Sophie Martin",
    country: "Australia",
    initials: "SM",
    likes: 489,
    image: nuwaraImage,
    avatar: "#c77e96",
  },
  {
    category: "WILDLIFE ADVENTURE",
    location: "South Coast",
    title: "A Magical Encounter in the Indian Ocean",
    description:
      "An unforgettable whale-watching experience off Sri Lanka’s south coast.",
    author: "Lucas Moreau",
    country: "France",
    initials: "LM",
    likes: 612,
    image: whaleImage,
    avatar: "#c79a60",
  },
];

export default function CommunityStories() {
  return (
    <section className="community-stories" id="stories">
      <div className="stories-container">
        <header className="stories-header">
          <div className="stories-heading">
            <div className="stories-eyebrow">
              <Sparkles size={15} />
              <span>REAL PEOPLE · REAL EXPERIENCES</span>
            </div>

            <h2>
              Stories that make
              <span>you want to go.</span>
            </h2>

            <p>
              Inspiring journeys, hidden gems and unforgettable moments
              shared by our community of travellers from around the world.
            </p>
          </div>

          <div className="stories-header-art">
            <div className="stories-route">
              <svg viewBox="0 0 460 110" aria-hidden="true">
                <path
                  d="M4 72 C65 8 105 8 165 55 S255 100 310 43 S390 20 456 55"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 7"
                />
                <circle cx="105" cy="28" r="5" fill="#159875" />
                <circle cx="365" cy="35" r="5" fill="#159875" />
              </svg>
              <span>Different journeys,<br />same island</span>
            </div>

            <a href="#all-stories" className="stories-view-all">
              View all stories
              <ArrowRight size={17} />
            </a>
          </div>
        </header>

        <div className="stories-grid">
          {stories.map((story, index) => (
            <article
              className="story-card"
              key={story.title}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <img
                className="story-image"
                src={story.image}
                alt={`${story.location}, Sri Lanka`}
                loading="lazy"
              />

              <div className="story-overlay" />

              <span className="story-category">{story.category}</span>

              <div className="story-content">
                <div className="story-location">
                  <MapPin size={14} />
                  <span>{story.location}</span>
                </div>

                <h3>{story.title}</h3>
                <p className="story-description">{story.description}</p>

                <div className="story-footer">
                  <div className="story-author">
                    <span
                      className="story-avatar"
                      style={{ backgroundColor: story.avatar }}
                    >
                      {story.initials}
                    </span>

                    <span className="story-author-info">
                      <strong>{story.author}</strong>
                      <small>{story.country}</small>
                    </span>
                  </div>

                  <div className="story-actions">
                    <span className="story-likes">
                      <Heart size={16} />
                      {story.likes}
                    </span>

                    <a
                      href={`#/stories/${encodeURIComponent(story.title)}`}
                      className="story-arrow"
                      aria-label={`Read ${story.title}`}
                    >
                      <ArrowRight size={19} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="stories-community-banner">
          <div className="community-members">
            <div className="member-avatars" aria-label="Travel community">
              <span>A</span>
              <span>J</span>
              <span>M</span>
              <span>R</span>
              <span className="member-plus">+</span>
            </div>
            <p>Join our community<br />of travellers</p>
          </div>

          <div className="community-message">
            <h3>Your story belongs here.</h3>
            <p>
              Share your Sri Lankan journey and inspire fellow travellers
              around the world.
            </p>
            <p>Every story helps others discover something unforgettable.</p>
          </div>

          <a href="#share-story" className="community-cta">
            Share your story
            <ArrowRight size={18} />
          </a>
        </aside>
      </div>
    </section>
  );
}
