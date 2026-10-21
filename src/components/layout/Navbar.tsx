import { useState } from "react";
import { Heart, Menu, Search, UserRound, X, ChevronDown } from "lucide-react";

const links = ["Home", "Explore", "Destinations", "Experiences", "Plan a Trip", "Local Services"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 pt-3 md:px-8">
      <nav className="nav-glass mx-auto flex max-w-[1440px] items-center justify-between gap-4 rounded-full border border-white/60 px-4 py-3 md:px-6">
        <a href="#home" className="brand-lockup shrink-0" aria-label="LankaVoyage home">
          <span className="brand-mark"><span>LV</span></span>
          <span className="brand-copy">
            <strong>Lanka<span>Voyage</span></strong>
            <small>EXPLORE · SHARE · PLAN</small>
          </span>
        </a>

        <div className="hidden items-center gap-5 xl:flex">
          {links.map((link, index) => (
            <a className={`nav-link ${index === 0 ? "active" : ""}`} href={index === 0 ? "#home" : `#${link.toLowerCase().replaceAll(" ", "-")}`} key={link}>
              {link}
              {[1, 2, 3, 5].includes(index) && <ChevronDown size={13} strokeWidth={2.3} />}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button className="icon-button" aria-label="Toggle search" onClick={() => setSearchOpen((v) => !v)}><Search size={20} /></button>
          <a className="icon-button hidden sm:flex" aria-label="Saved favourites" href="#favourites"><Heart size={20} /></a>
          <a className="signin-button hidden sm:inline-flex" href="#signin"><UserRound size={17} /> <span>Sign In</span></a>
          <button className="icon-button xl:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {searchOpen && (
        <form className="nav-search mx-auto mt-2 flex max-w-xl gap-2 rounded-2xl p-3" onSubmit={(e) => { e.preventDefault(); const data = new FormData(e.currentTarget); window.location.hash = `/destinations?query=${encodeURIComponent(String(data.get("q") || ""))}`; }}>
          <Search size={19} className="mt-2 shrink-0 text-emerald-700" />
          <input autoFocus name="q" placeholder="Search destinations, districts or experiences..." aria-label="Search destinations" />
          <button className="search-mini-button" type="submit">Search</button>
        </form>
      )}

      {mobileOpen && (
        <div className="mobile-menu mt-3 rounded-3xl p-5 shadow-2xl xl:hidden">
          {links.map((link) => <a key={link} href={link === "Home" ? "#home" : `#${link.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setMobileOpen(false)}>{link}</a>)}
          <a className="mobile-signin" href="#signin" onClick={() => setMobileOpen(false)}><UserRound size={17} /> Sign In</a>
        </div>
      )}
    </header>
  );
}
