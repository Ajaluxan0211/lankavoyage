import { CalendarDays, ChevronDown, MapPin, Search } from "lucide-react";
import { useState } from "react";

const seasons = ["Any time", "Dec – Apr (South & West)", "May – Sep (East Coast)", "Sep – Nov (Green Season)"];

type Props = { initialDestination?: string };

export default function DestinationSearch({ initialDestination = "" }: Props) {
  const [query, setQuery] = useState(initialDestination);
  const [season, setSeason] = useState(seasons[0]);
  const [seasonOpen, setSeasonOpen] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.hash = `/destinations?query=${encodeURIComponent(query.trim() || "All")}&when=${encodeURIComponent(season)}`;
  }

  return (
    <form onSubmit={submit} className="destination-search">
      <label className="search-field where-field">
        <span className="search-icon"><MapPin size={21} /></span>
        <span className="search-field-copy">
          <span className="search-label">Where do you want to go?</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Destinations, districts or experiences" aria-label="Destination or district" />
        </span>
      </label>

      <div className="search-divider" />
      <div className="season-wrap">
        <button type="button" className="search-field season-button" onClick={() => setSeasonOpen((v) => !v)} aria-expanded={seasonOpen}>
          <span className="search-icon teal"><CalendarDays size={21} /></span>
          <span className="search-field-copy">
            <span className="search-label">When?</span>
            <span className="season-value">{season}</span>
          </span>
          <ChevronDown size={16} className={seasonOpen ? "rotate-180" : ""} />
        </button>
        {seasonOpen && (
          <div className="season-menu">
            {seasons.map((item) => <button key={item} type="button" onClick={() => { setSeason(item); setSeasonOpen(false); }}>{item}</button>)}
          </div>
        )}
      </div>
      <button className="search-submit" type="submit"><Search size={19} /><span>Search</span></button>
    </form>
  );
}
